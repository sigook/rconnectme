# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project

Static marketing site for Rural ConnectMe (www.rconnectme.com). Built with Astro 6, deployed to GitHub Pages. `public/CNAME` sets the custom domain.

## Working on the site

- Install deps: `pnpm install` (Node 20+, pnpm 11+).
- Local dev: `pnpm dev` — Astro dev server with HMR.
- Production build: `pnpm build` → outputs to `dist/`.
- Preview the built site: `pnpm preview`.
- Deploy = push to `main`. The workflow at `.github/workflows/deploy.yml` runs `pnpm build` and publishes `dist/` to GitHub Pages.

## Architecture

- `src/pages/index.astro` — single page. Composes `<Navbar>`, `<Hero>`, `<Footer>` and inlines the other sections (`#mission-vision`, `#challenge`, `#coordination-gap`, `#approach`, `#ecosystem`, `#ecosystem-coordinate`, `#impact`, `#experience`, `#focus`, `#contact`). Section ids are referenced by the navbar and footer links; renaming an id requires updating both.
- `src/layouts/Base.astro` — `<html>`/`<head>`, Google Fonts preconnect+import, global CSS import, skip link, and a `<script>` that loads `src/scripts/site.ts`.
- `src/components/` — `Navbar.astro`, `Hero.astro`, `Footer.astro`. New sections that are reused or contain media belong here; one-off content stays inline in `index.astro`.
- `src/styles/global.css` — design system driven by CSS custom properties declared in `:root`. Tokens cover colors (7:1+ contrast targets), Lexend/Source Sans 3 typography, an 8dp spacing scale, and section variants (`.section--light`, `.section--white`, `.section--dark`). Prefer composing existing tokens and BEM-style class names (`block__element--modifier`) already used throughout.
- `src/scripts/site.ts` — single module wiring four behaviors: navbar scroll shadow, mobile menu toggle (with Escape-to-close and link-click close), IntersectionObserver-based fade-in animations with parent-grouped stagger delays, and a smooth-scroll fallback for `a[href^="#"]`. Animated elements are selected by class list at the top of the file (`.mission__card, .pillar, .stakeholder-card, .stat, .process__step, .challenge__item, .experience__card`) — new animatable components must be added to that selector or they will not fade in. The script honors `prefers-reduced-motion` by skipping the observer and revealing everything immediately. Astro inlines it as a `<script type="module">` in the built HTML.
- `public/` — assets served as-is: `favicon.svg`, `CNAME`.

## Accessibility constraints

The CSS header documents the intent: WCAG AAA contrast, 4px focus rings, keyboard-first, screen-reader-friendly. Keep skip link, `aria-expanded` toggling on the nav button, and reduced-motion fallback intact when modifying interactive code.
