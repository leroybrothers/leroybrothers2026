# Leroy Brothers

Art, hospitality, and contemporary experience. The official website for Leroy Brothers—showcasing art projects, international exhibitions, and the Toile Blanche destination in Saint-Paul-de-Vence, France.

**Live site:** [www.leroybrothers.com](https://www.leroybrothers.com)

## Overview

This site serves as the hub for:

- **Leroy Brothers** — Art projects, exhibitions, and digital works from the collective
- **Toile Blanche** — The boutique hotel and restaurant in Saint-Paul-de-Vence
- **TB Contemporary** — The on-site art space, curated exhibitions, and sculpture park

## Tech Stack

- **[Astro](https://astro.build)** — Static site generation with island architecture
- **React** — Interactive components (project galleries, lightboxes, forms)
- **TypeScript** — Type safety
- **Tailwind CSS** — Styling
- **shadcn/ui** — UI components (Radix primitives)
- **Supabase** — Backend (if applicable)
- **Framer Motion** — Animations

## Getting Started

### Prerequisites

- **Node.js** 18+ (recommended: [nvm](https://github.com/nvm-sh/nvm))
- **npm**

### Setup

```sh
# Clone the repository
git clone https://github.com/YOUR_ORG/leroybrothers2026.git
cd leroybrothers2026

# Install dependencies
npm install

# Start the development server
npm run dev
```

Open [http://localhost:4321](http://localhost:4321) in your browser.

### Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start dev server with hot reload |
| `npm run build` | Build for production (includes sitemap) |
| `npm run preview` | Preview production build locally |
| `npm run lint` | Run ESLint |
| `npm run audit` | Run npm security audit |

## Project Structure

```
src/
├── components/     # Astro & React components (UI, Header, Footer, etc.)
├── data/           # Content data (projects, artworks, exhibitions)
├── integrations/   # Supabase client & types
├── layouts/        # Astro layouts (Layout, LandingLayout)
├── pages/          # Astro pages & routes
├── styles/         # CSS and Tailwind
└── views/          # Page-level React views
```

## Deployment

The site is built as a static output (`output: 'static'`). Deploy the contents of `dist/` to any static host (Vercel, Netlify, GitHub Pages, etc.).

```sh
npm run build
# Deploy the `dist/` directory
```

## License

Private — All rights reserved.
