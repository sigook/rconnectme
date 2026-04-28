# Rural ConnectMe

Institutional website for **Rural ConnectMe** — [www.rconnectme.com](https://www.rconnectme.com).

Rural ConnectMe is an initiative that explores how broadband expansion in rural areas of the United States can be integrated with local workforce development and community digital participation, so that connectivity investment translates into real economic growth.

The site presents the initiative's mission and vision, the rural connectivity challenge, the three-pillar approach (infrastructure, workforce, digital participation), the ecosystem of actors it coordinates, the expected impact, and the team's prior experience.

## Stack

Static site with no build process:

- `index.html` — full page content.
- `styles.css` — design system based on CSS custom properties (navy/green/orange palette, Lexend + Source Sans 3 typography, 8dp spacing scale, WCAG AAA contrast target).
- `main.js` — IIFE with navbar scroll shadow, mobile menu, fade-in animations via `IntersectionObserver` (honors `prefers-reduced-motion`), and smooth scroll for anchors.
- `favicon.svg`, `CNAME` — favicon and custom domain for GitHub Pages.

Fonts are loaded from Google Fonts and the hero video from Azure Blob Storage. No npm dependencies, no compilation step.

## Local development

Open `index.html` directly in the browser, or serve the folder with any static server:

```bash
python -m http.server 8000
# then open http://localhost:8000
```

## Deployment

GitHub Pages serves the repository root. Pushing to `main` publishes the changes. The `CNAME` file keeps the `www.rconnectme.com` domain.

## Section structure

Navigation and smooth scroll depend on the section `id`s in `index.html`:

`#mission-vision`, `#challenge`, `#coordination-gap`, `#approach`, `#ecosystem`, `#ecosystem-coordinate`, `#impact`, `#experience`, `#contact`.

Renaming an `id` requires updating the navbar links and any internal anchors.

## Accessibility

The design targets WCAG AAA contrast (7:1+), 4px focus rings, keyboard navigation, and screen reader compatibility. When modifying interactivity, preserve the skip link, the menu button's `aria-expanded`, and the `prefers-reduced-motion` fallback in `main.js`.
