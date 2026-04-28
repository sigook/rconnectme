# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project

Static marketing site for Rural ConnectMe (www.rconnectme.com). Single-page site deployed via GitHub Pages — `CNAME` sets the custom domain. No build system, no package manager, no tests.

## Working on the site

- Preview locally by opening `index.html` directly, or run any static server from the repo root (e.g. `python -m http.server 8000`).
- Deploy = push to `main`. GitHub Pages serves the repo root as-is.
- All assets are vendored or loaded from CDNs (Google Fonts). There is no bundler step; edits to `index.html`, `styles.css`, `main.js` ship directly.

## Architecture

Three files do everything:

- `index.html` — entire page content. Sections are anchored by id (`#challenge`, `#approach`, `#ecosystem`, `#experience`, `#contact`, plus `#mission-vision`, `#coordination-gap`, `#ecosystem-coordinate`, `#impact`). Navbar links and smooth-scroll target these ids, so renaming an id requires updating the nav and any in-page anchors.
- `styles.css` — design system driven by CSS custom properties declared in `:root`. Tokens cover colors (7:1+ contrast targets), Lexend/Source Sans 3 typography, an 8dp spacing scale, and section variants (`.section--light`, `.section--white`, `.section--dark`). Prefer adding new styles by composing existing tokens and BEM-style class names (`block__element--modifier`) already used throughout.
- `main.js` — single IIFE wiring four behaviors: navbar scroll shadow, mobile menu toggle (with Escape-to-close and link-click close), IntersectionObserver-based fade-in animations with parent-grouped stagger delays, and a smooth-scroll fallback for `a[href^="#"]`. Animated elements are selected by class list at the top of the file (`.mission__card, .pillar, .stakeholder-card, .stat, .process__step, .challenge__item, .experience__card`) — new animatable components must be added to that selector or they will not fade in. The script honors `prefers-reduced-motion` by skipping the observer and revealing everything immediately.

## Accessibility constraints

The CSS header documents the intent: WCAG AAA contrast, 4px focus rings, keyboard-first, screen-reader-friendly. Keep skip link, `aria-expanded` toggling on the nav button, and reduced-motion fallback intact when modifying interactive code.
