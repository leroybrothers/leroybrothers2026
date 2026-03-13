# Dependency Audit

Run `npm run audit` to check for known vulnerabilities.

## Potentially removable (unused or replaceable)

| Package | Used By | Notes |
|---------|---------|-------|
| `@radix-ui/*` (many) | shadcn components | Only components actually imported are needed. Consider auditing which Radix primitives are used. |
| `recharts` | Unknown | Search codebase – remove if unused. |
| `react-day-picker` | Date picker | Only if ContactDialog or forms use it. |
| `react-resizable-panels` | Sidebar? | Check usage. |
| `cmdk` | Command palette | Only if used. |
| `vaul` | Drawer component | Only if used. |
| `input-otp` | OTP input | Only if used. |
| `embla-carousel-react` | Carousel | Only if used. |

## Heavy dependencies (consider alternatives)

| Package | Size | Alternative |
|---------|------|-------------|
| `framer-motion` | ~40KB gzip | CSS animations, View Transitions API |
| `recharts` | Large | Lightweight charts or static SVG |
| `@supabase/supabase-js` | ~30KB | Only loaded where PageTracking runs (vanilla fetch now) |

## Recommended actions

1. Run `npm run audit` and address high/critical vulnerabilities.
2. Run `npx depcheck` to find unused dependencies.
3. Remove Radix components not imported by any page.
