# Darshan Patel — Portfolio 2026

A ground-up rebuild of Darshan Patel's engineering and quality assurance portfolio using **Next.js 16 (App Router)**, **TypeScript**, **Tailwind CSS v4**, **OKLCH Direction A (Swiss Precision)** dark/light themes via `next-themes`, **Framer Motion**, and **Lenis**.

## Key Architecture Highlights

- **Swiss Precision OKLCH Design System**: Dark & light OKLCH scales (`:root` and `:root[data-theme="light"]`) with Electric Cobalt accent, strict typography scale (`Inter` + `JetBrains Mono`), 3-tier hue-matched shadows, and WCAG AA contrast.
- **Scroll-Stacking Sticky Project Deck**: Seven coordinated per-project dark/light themes with responsive static mobile flow (`sm:sticky` on `>= 640px`), hover image zoom, and a focus-trapped full-screen/side Case Study Drawer.
- **Asymmetric Swiss Bento Grid**: Career timeline, QA capabilities, tooling stack, and academic background.
- **Accessible & 60 FPS Tuned**: Skip-to-content link, `>= 44x44px` touch targets, `lerp: 0.09` Lenis `autoRaf`, cached magnetic pointer rects, and `prefers-reduced-motion` fallbacks.
- **SEO & Route Resilience**: Dynamic QR-embedded `opengraph-image.tsx`, `ProfilePage` + `Person` JSON-LD, `sitemap.ts`, `robots.ts`, `not-found.tsx`, `error.tsx`, and `loading.tsx`.

## Getting Started

1. Install dependencies:
   ```bash
   npm install
   ```
2. Configure environment variables:
   ```bash
   cp .env.example .env.local
   ```
   Set `NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY` and `NEXT_PUBLIC_SITE_URL`.
3. Start development server:
   ```bash
   npm run dev
   ```

## Scripts

| Script | Description |
| :--- | :--- |
| `npm run dev` | Runs Next.js development server with Turbopack |
| `npm run build` | Builds the production application |
| `npm run start` | Serves the production build |
| `npm run typecheck` | Runs `tsc --noEmit` strict type check |
| `npm run lint` | Runs ESLint across the repository |
| `npm run analyze` | Runs production build with `@next/bundle-analyzer` |
