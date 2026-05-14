# Rural ConnectMe

Institutional website for **Rural ConnectMe** — [www.rconnectme.com](https://www.rconnectme.com).

Rural ConnectMe is an initiative that explores how broadband expansion in rural areas of the United States can be integrated with local workforce development and community digital participation, so that connectivity investment translates into real economic growth.

The site presents the initiative's mission and vision, the rural connectivity challenge, the three-pillar approach (infrastructure, workforce, digital participation), the ecosystem of actors it coordinates, the expected impact, and the team's prior experience.

## Stack

Static site built with [Astro 5](https://astro.build):

- `src/pages/index.astro` — single page composing the Navbar, Hero, Footer components and the inline section content.
- `src/components/` — `Navbar.astro`, `Hero.astro`, `Footer.astro`.
- `src/layouts/Base.astro` — `<html>`, fonts, global CSS, client script.
- `src/styles/global.css` — design system based on CSS custom properties (navy/green/orange palette, Lexend + Source Sans 3 typography, 8dp spacing scale, WCAG AAA contrast target).
- `src/scripts/site.ts` — navbar scroll shadow, mobile menu, fade-in animations via `IntersectionObserver` (honors `prefers-reduced-motion`), and smooth scroll for anchors.
- `public/favicon.svg`, `public/CNAME` — favicon and custom domain for GitHub Pages.

Fonts are loaded from Google Fonts and the hero video from Azure Blob Storage.

## Local development

Requires Node 20+ and pnpm 11+.

```bash
pnpm install
pnpm dev
```

Open <http://localhost:4321>.

To preview a production build locally:

```bash
pnpm build
pnpm preview
```

## Deployment

Pushing to `main` triggers the workflow at `.github/workflows/deploy.yml`, which runs `pnpm build` and publishes `dist/` to GitHub Pages. The `public/CNAME` file keeps the `www.rconnectme.com` domain.

GitHub repo setting required: **Settings → Pages → Source** must be set to **GitHub Actions**.

## Section structure

Navigation and smooth scroll depend on the section `id`s in `src/pages/index.astro`:

`#mission-vision`, `#challenge`, `#coordination-gap`, `#approach`, `#ecosystem`, `#ecosystem-coordinate`, `#impact`, `#experience`, `#focus`, `#contact`.

Renaming an `id` requires updating the navbar links and any internal anchors.

## Accessibility

The design targets WCAG AAA contrast (7:1+), 4px focus rings, keyboard navigation, and screen reader compatibility. When modifying interactivity, preserve the skip link, the menu button's `aria-expanded`, and the `prefers-reduced-motion` fallback in `src/scripts/site.ts`.
