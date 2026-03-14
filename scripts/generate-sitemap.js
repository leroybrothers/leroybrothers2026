#!/usr/bin/env node
/**
 * Generates sitemap.xml from dist folder when @astrojs/sitemap has issues.
 * Run after build: node scripts/generate-sitemap.js
 */
import { readdirSync, writeFileSync } from 'fs';
import { join } from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __dirname = dirname(fileURLToPath(import.meta.url));
const distDir = join(__dirname, '..', 'dist');
const site = 'https://www.leroybrothers.com';

function findUrls(dir, base = '') {
  const urls = [];
  const entries = readdirSync(dir, { withFileTypes: true });
  for (const e of entries) {
    const path = join(dir, e.name);
    const rel = base ? `${base}/${e.name}` : e.name;
    if (e.isDirectory()) {
      urls.push(...findUrls(path, rel));
    } else if (e.name === 'index.html') {
      const url = rel === 'index.html' ? '' : rel.replace(/\/index\.html$/, '');
      urls.push(`${site}/${url}`);
    }
  }
  return urls;
}

const urls = findUrls(distDir);
const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.map((u) => `  <url><loc>${u}</loc></url>`).join('\n')}
</urlset>`;

writeFileSync(join(distDir, 'sitemap.xml'), xml);
console.log(`Wrote sitemap.xml with ${urls.length} URLs`);
