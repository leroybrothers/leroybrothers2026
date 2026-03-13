#!/usr/bin/env node
/**
 * Migrates exhibition images from Flickr to local public/images/exhibitions/
 *
 * 1. Downloads all Flickr images referenced in src/data/exhibitions.ts
 * 2. Saves to public/images/exhibitions/{slug}/01.jpg, 02.jpg, etc.
 * 3. Writes exhibitions.migrated.ts with updated paths
 *
 * Run: node scripts/migrate-exhibition-images.mjs
 * Requires network access (--network or full permissions for fetch)
 */

import { readFileSync, writeFileSync, mkdirSync, existsSync } from "fs";
import { join, dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = join(__dirname, "..");
const EXHIBITIONS_PATH = join(ROOT, "src/data/exhibitions.ts");
const OUTPUT_DIR = join(ROOT, "public/images/exhibitions");
const FLICKR_REGEX = /https:\/\/live\.staticflickr\.com\/[^\s"']+\.(jpg|jpeg|png|gif)/gi;

function extractExhibitions(content) {
  const exhibitions = [];
  const blockRegex =
    /slug:\s*"([^"]+)"[\s\S]*?coverImage:\s*"([^"]+)"[\s\S]*?images:\s*\[([\s\S]*?)\]/g;
  const flickrUrlRegex = /"?(https:\/\/live\.staticflickr\.com[^"'\s]+)"?/g;

  let m;
  while ((m = blockRegex.exec(content)) !== null) {
    const slug = m[1];
    const coverImage = m[2];
    const imagesBlock = m[3];

    const imageUrls = [...(imagesBlock.matchAll(flickrUrlRegex))].map((x) => x[1]);
    const coverIsFlickr = coverImage.startsWith("https://live.staticflickr.com");

    const allUrls = coverIsFlickr
      ? [coverImage, ...imageUrls.filter((u) => u !== coverImage)]
      : [...new Set(imageUrls)];

    if (allUrls.length > 0) {
      exhibitions.push({ slug, imageUrls: allUrls });
    }
  }

  return exhibitions;
}

async function download(url) {
  const res = await fetch(url, {
    headers: { "User-Agent": "LeroyBrothers-Migration/1.0" },
  });
  if (!res.ok) throw new Error(`HTTP ${res.status}: ${url}`);
  return Buffer.from(await res.arrayBuffer());
}

function getExtension(url) {
  const m = url.match(/\.(jpg|jpeg|png|gif)(?:\?|$)/i);
  return m ? m[1].toLowerCase().replace("jpeg", "jpg") : "jpg";
}

async function main() {
  console.log("Reading exhibitions.ts...");
  const content = readFileSync(EXHIBITIONS_PATH, "utf-8");
  const exhibitions = extractExhibitions(content);

  console.log(`Found ${exhibitions.length} exhibitions with Flickr images.\n`);

  const urlToLocal = new Map();
  const failedUrls = [];

  for (const { slug, imageUrls } of exhibitions) {
    const dir = join(OUTPUT_DIR, slug);
    mkdirSync(dir, { recursive: true });
    console.log(`[${slug}] ${imageUrls.length} images`);

    for (let i = 0; i < imageUrls.length; i++) {
      const url = imageUrls[i];
      const ext = getExtension(url);
      const filename = `${String(i + 1).padStart(2, "0")}.${ext}`;
      const localPath = `/images/exhibitions/${slug}/${filename}`;

      if (urlToLocal.has(url)) {
        continue;
      }

      const filepath = join(dir, filename);
      if (existsSync(filepath)) {
        urlToLocal.set(url, localPath);
        continue;
      }

      try {
        const buffer = await download(url);
        writeFileSync(filepath, buffer);
        urlToLocal.set(url, localPath);
        process.stdout.write(".");
      } catch (err) {
        console.error(`\nFailed: ${url}`, err.message);
        failedUrls.push(url);
      }

      await new Promise((r) => setTimeout(r, 200));
    }
    console.log("");
  }

  // Build updated exhibitions.ts by replacing Flickr URLs
  let newContent = content;
  for (const [url, local] of urlToLocal) {
    const escaped = url.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
    newContent = newContent.replace(new RegExp(escaped, "g"), local);
  }

  // Remove failed URLs (e.g. HTTP 410) from output
  for (const url of failedUrls) {
    const escaped = url.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
    // Remove from images array
    newContent = newContent.replace(new RegExp(`^\\s*"${escaped}"\\s*,?\\s*\\n`, "gm"), "");
    // If it was coverImage, replace with first successful image from same exhibition
    for (const { slug, imageUrls } of exhibitions) {
      if (imageUrls[0] === url) {
        const fallback = imageUrls.find((u) => urlToLocal.has(u));
        if (fallback) {
          newContent = newContent.replace(
            new RegExp(`(coverImage:\\s*)"${escaped}"`, "g"),
            `$1"${urlToLocal.get(fallback)}"`
          );
        }
        break;
      }
    }
  }

  const outPath = join(ROOT, "src/data/exhibitions.migrated.ts");
  writeFileSync(outPath, newContent);
  console.log(`\nWrote ${outPath}`);
  if (failedUrls.length > 0) {
    console.log(`\nRemoved ${failedUrls.length} failed URLs (HTTP 410):`);
    failedUrls.forEach((u) => console.log(`  - ${u}`));
  }
  console.log("\nReview the file, then: mv src/data/exhibitions.migrated.ts src/data/exhibitions.ts");
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
