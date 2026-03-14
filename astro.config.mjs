import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwind from '@astrojs/tailwind';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

// Sitemap: Temporarily disabled - @astrojs/sitemap has a bug with _routes in build.
// A manual sitemap is generated at build time via the postbuild script.
export default defineConfig({
  site: "https://www.leroybrothers.com",
  build: {
    inlineStylesheets: "always",
  },
  integrations: [
    react(),
    tailwind({
      applyBaseStyles: false,
    }),
  ],
  output: 'static',
  vite: {
    resolve: {
      alias: {
        '@': path.resolve(__dirname, './src'),
      },
    },
    ssr: {
      noExternal: ['@radix-ui/*'],
    },
    build: {
      rollupOptions: {
        output: {
          manualChunks: {
            'react-vendor': ['react', 'react-dom'],
            'framer-motion': ['framer-motion'],
          },
        },
      },
    },
  },
});
