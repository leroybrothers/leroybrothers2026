#!/usr/bin/env node
/**
 * Audit image references in the codebase against files in public/images.
 * Run: node scripts/audit-images.mjs
 * 
 * Reports:
 * - Local paths (/images/...) that don't exist in public/
 * - Summary of external URLs (cannot verify without network)
 */

import { readFileSync, existsSync } from "fs";
import { join, dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = join(__dirname, "..");
const publicDir = join(root, "public");

// Extract all /images/... paths (alphanumeric, slash, underscore, hyphen, dot only)
function extractLocalPaths(content) {
  const matches = content.match(/\/images\/[a-zA-Z0-9/_.-]+/g) || [];
  return [...new Set(matches)];
}

function extractExternalPaths(content) {
  const matches = content.match(
    /https?:\/\/[^\s"'<>)\]]+\.(jpg|jpeg|png|gif|webp|svg)(?:\?[^"\s]*)?/gi
  ) || [];
  return [...new Set(matches)];
}

// Scan source files for image references
const srcFiles = [
  "src/data/projects.ts",
  "src/data/artworks.ts",
  "src/data/exhibitions.ts",
  "src/views/IndexArchive.astro",
  "src/views/Index.tsx",
  "src/views/LandingPage.astro",
  "src/views/About.tsx",
  "src/components/JsonLd.astro",
  "src/layouts/Layout.astro",
  "src/layouts/LandingLayout.astro",
];

const allLocal = new Set();
const allExternal = new Set();
const byFile = {};

for (const file of srcFiles) {
  const fullPath = join(root, file);
  if (!existsSync(fullPath)) continue;
  const content = readFileSync(fullPath, "utf-8");
  const local = extractLocalPaths(content);
  const external = extractExternalPaths(content);
  local.forEach((p) => allLocal.add(p));
  external.forEach((p) => allExternal.add(p));
  if (local.length || external.length) {
    byFile[file] = { local, external };
  }
}

// Check local paths
const missing = [];
const found = [];

for (const path of allLocal) {
  const norm = path.startsWith("/") ? path : "/" + path;
  // /images/foo -> public/images/foo
  const fullPath = join(publicDir, norm.slice(1));
  if (existsSync(fullPath)) {
    found.push(path);
  } else {
    missing.push(path);
  }
}

// Report
console.log("=== Image Audit ===\n");

if (missing.length > 0) {
  console.log("❌ BROKEN (referenced but file missing):");
  missing.sort().forEach((p) => console.log("   ", p));
  console.log("");
}

console.log(`✅ Found: ${found.length} local images`);
console.log(`❌ Missing: ${missing.length} local images`);

if (allExternal.size > 0) {
  console.log("\n📡 External URLs (may break if host changes or is down):");
  [...allExternal].sort().forEach((u) => console.log("   ", u));
  console.log("\n   To fix: download these to public/images/ and update refs in projects.ts");
}

if (missing.length > 0) {
  console.log("\n--- Fix options ---");
  console.log("1. Add missing images to public/images/ (download or create)");
  console.log("2. Update references in data files to match existing paths");
  console.log("3. Add onError fallback in ImageLightbox / img components");
  process.exit(1);
}

console.log("\n✅ All local image references resolve.");
