import type { Config } from "tailwindcss";

// Minimal config for landing page only - excludes Header, Footer, shadcn, etc.
export default {
  darkMode: ["class"],
  content: [
    "./src/layouts/LandingLayout.astro",
    "./src/views/LandingPage.tsx",
    "./src/pages/index.astro",
  ],
  prefix: "",
  theme: {
    extend: {
      fontFamily: {
        display: ['Inter', 'Helvetica Neue', 'Helvetica', 'Arial', 'sans-serif'],
        body: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['Space Mono', 'Courier New', 'monospace'],
      },
      colors: {
        border: "hsl(var(--border))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        "muted-foreground": "hsl(var(--muted-foreground))",
      },
      maxWidth: {
        'content': '1400px',
      },
    },
  },
  plugins: [],
} satisfies Config;
