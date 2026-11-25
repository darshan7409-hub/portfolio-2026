# Krunal Chaudhari — Portfolio 2026

A ground-up rebuild of Krunal Chaudhari's engineering and quality assurance portfolio built with **Next.js 16 (App Router)**, **TypeScript**, **Tailwind CSS v4**, **OKLCH design tokens**, **Framer Motion**, and **Lenis**.

## Key Architecture Highlights

- **OKLCH Design System**: Dark canvas surface scale (`#0a0a0a`–`#1a1a1a` range in OKLCH) with Electric Chartreuse-Lime primary accent and Cobalt Iris secondary accent, plus derived interactive/hover/border/focus tokens in `src/app/globals.css`.
- **Scroll-Stacking Sticky Project Deck**: Seven coordinated per-project OKLCH themes with sticky scroll-stacking depth, hover image zoom, and an accessible focus-trapped Case Study Drawer.
- **Asymmetric Bento Grid**: Glassmorphism elevation showcasing bio, career timeline, QA capabilities, tooling stack, and academic background.
- **Accessible & Reduced-Motion Safe**: Skip-to-content link, visible `:focus-visible` rings, keyboard-trapped modal/drawer, and full `prefers-reduced-motion` fallbacks for Lenis, CSS scroll-driven animations, film-grain overlay, and Framer Motion springs.
- **SEO & Route Resilience**: Dynamic `opengraph-image.tsx`, `sitemap.ts`, `robots.ts`, JSON-LD `Person` schema, custom `not-found.tsx`, `error.tsx`, and `loading.tsx`.

## Getting Started

### Prerequisites
- Node.js `>= 20.x` (tested on `v22.x`)
- npm `>= 10.x`

### Local Setup

1. Install dependencies:
   ```bash
   npm install
   ```

2. Configure environment variables:
   ```bash
   cp .env.example .env.local
   ```
   Set `NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY` (optional; if omitted, the contact form gracefully renders a direct-email fallback) and `NEXT_PUBLIC_SITE_URL`.

3. Start the development server:
   ```bash
   npm run dev
   ```
   Open [http://localhost:3000](http://localhost:3000).

## Available Scripts

| Script | Description |
| :--- | :--- |
| `npm run dev` | Runs Next.js development server with Turbopack |
| `npm run build` | Builds the production application |
| `npm run start` | Serves the production build |
| `npm run typecheck` | Runs `tsc --noEmit` strict type check |
| `npm run lint` | Runs ESLint across the repository |
| `npm run analyze` | Runs production build with `@next/bundle-analyzer` reports |

## Deployment

Deploy directly to **Vercel** or any Node.js hosting provider:

1. Push the `main` branch to GitHub.
2. Import the repository in Vercel.
3. Add `NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY` and `NEXT_PUBLIC_SITE_URL` in Project Settings → Environment Variables.
4. Build command: `npm run build`, Output directory: `.next`.

