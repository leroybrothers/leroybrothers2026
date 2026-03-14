#!/usr/bin/env node
/**
 * Download external images referenced in projects.ts and save to public/images/.
 * Updates projects.ts to use local paths.
 *
 * Run: node scripts/download-external-images.mjs
 * Requires: network access
 */

import { readFileSync, writeFileSync, mkdirSync, existsSync } from "fs";
import { join, dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = join(__dirname, "..");
const publicImages = join(root, "public", "images");

// WordPress uploads return 404; only Arora Vale (external) works
const MAPPINGS = [
  // Arora Vale
  {
    url: "https://aroravale.art/_assets/media/8f81c984e28a9897d5e2796bf4cc402e.jpg",
    oldUrl: "https://aroravale.art/_assets/media/8f81c984e28a9897d5e2796bf4cc402e.jpg",
    local: "/images/exhibitions/arora-vale/arora-vale-hero.jpg",
  },
];

async function download(url) {
  const res = await fetch(url, {
    redirect: "follow",
    headers: {
      "User-Agent": "Mozilla/5.0 (compatible; LeroyBrothers/1.0; +https://leroybrothers.com)",
      Accept: "image/*",
    },
  });
  if (!res.ok) throw new Error(`HTTP ${res.status}: ${url}`);
  return Buffer.from(await res.arrayBuffer());
}

async function main() {
  console.log("Downloading external images...\n");

  let projectsContent = readFileSync(join(root, "src", "data", "projects.ts"), "utf-8");

  for (const { url, oldUrl, local } of MAPPINGS) {
    const fullPath = join(publicImages, local.replace(/^\/images\//, ""));
    const dir = dirname(fullPath);

    if (existsSync(fullPath)) {
      console.log(`⏭  Skip (exists): ${local}`);
    } else {
      try {
        mkdirSync(dir, { recursive: true });
        const buffer = await download(url);
        writeFileSync(fullPath, buffer);
        console.log(`✅ Downloaded: ${local}`);
      } catch (err) {
        console.error(`❌ Failed: ${url}`);
        console.error(`   ${err.message}`);
        process.exit(1);
      }
    }

    const replaceUrl = oldUrl ?? url;
    projectsContent = projectsContent.split(replaceUrl).join(local);
  }

  writeFileSync(join(root, "src", "data", "projects.ts"), projectsContent);
  console.log("\n✅ Updated src/data/projects.ts with local paths.");
}

main();
