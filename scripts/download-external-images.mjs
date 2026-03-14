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

// Use origin URLs (leroybrothers.com) when Photon CDN returns 400
const MAPPINGS = [
  // Axel King (use www - site redirects there)
  {
    url: "https://www.leroybrothers.com/wp-content/uploads/2015/01/Screen-shot-2010-04-13-at-17.33.19.png",
    oldUrl: "https://i0.wp.com/leroybrothers.com/wp-content/uploads/2015/01/Screen-shot-2010-04-13-at-17.33.19.png?fit=559%2C446&ssl=1",
    local: "/images/axel-king/ak-screenshot-1.png",
  },
  {
    url: "https://www.leroybrothers.com/wp-content/uploads/2023/08/Screen-shot-2010-04-13-at-17.45.28.png",
    oldUrl: "https://i0.wp.com/leroybrothers.com/wp-content/uploads/2023/08/Screen-shot-2010-04-13-at-17.45.28.png?fit=669%2C444&ssl=1",
    local: "/images/axel-king/ak-screenshot-2.png",
  },
  {
    url: "https://www.leroybrothers.com/wp-content/uploads/2015/01/Screen-shot-2010-04-13-at-17.45.39.png",
    oldUrl: "https://i0.wp.com/leroybrothers.com/wp-content/uploads/2015/01/Screen-shot-2010-04-13-at-17.45.39.png?fit=603%2C360&ssl=1",
    local: "/images/axel-king/ak-screenshot-3.png",
  },
  {
    url: "https://www.leroybrothers.com/wp-content/uploads/2015/01/IMG_3402.jpg",
    oldUrl: "https://i0.wp.com/leroybrothers.com/wp-content/uploads/2015/01/IMG_3402.jpg?fit=300%2C296&ssl=1",
    local: "/images/axel-king/ak-img-1.jpg",
  },
  {
    url: "https://www.leroybrothers.com/wp-content/uploads/2015/01/IMG_3406.jpg",
    oldUrl: "https://i0.wp.com/leroybrothers.com/wp-content/uploads/2015/01/IMG_3406.jpg?fit=709%2C707&ssl=1",
    local: "/images/axel-king/ak-img-2.jpg",
  },
  {
    url: "https://www.leroybrothers.com/wp-content/uploads/2015/01/IMG_3401.jpg",
    oldUrl: "https://i0.wp.com/leroybrothers.com/wp-content/uploads/2015/01/IMG_3401.jpg?fit=709%2C703&ssl=1",
    local: "/images/axel-king/ak-img-3.jpg",
  },
  {
    url: "https://www.leroybrothers.com/wp-content/uploads/2015/01/Screen-shot-2010-04-13-at-17.45.11.png",
    oldUrl: "https://i0.wp.com/leroybrothers.com/wp-content/uploads/2015/01/Screen-shot-2010-04-13-at-17.45.11.png?fit=599%2C409&ssl=1",
    local: "/images/axel-king/ak-screenshot-4.png",
  },
  // BDR-tst
  {
    url: "https://www.leroybrothers.com/wp-content/uploads/2023/08/cloud.jpg.jpg",
    oldUrl: "https://i0.wp.com/leroybrothers.com/wp-content/uploads/2023/08/cloud.jpg.jpg?fit=640%2C960&ssl=1",
    local: "/images/projects/bd-rtst/bd-rtst-cloud.jpg",
  },
  // Witness Your World
  {
    url: "https://www.leroybrothers.com/wp-content/uploads/2017/03/17217589228_2cc2a697be_o-scaled.jpg",
    oldUrl: "https://i0.wp.com/leroybrothers.com/wp-content/uploads/2017/03/17217589228_2cc2a697be_o-scaled.jpg?fit=1946%2C2560&ssl=1",
    local: "/images/projects/witness-your-world/wyw-wp-1.jpg",
  },
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
