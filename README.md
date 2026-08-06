# Scheiber.dev<!-- omit from toc -->

## Table of Contents <!-- omit from toc -->

- [Overview](#overview)
- [Features](#features)
- [Architecture](#architecture)
- [AI Disclaimer](#ai-disclaimer)

## Overview

This is the repo for Jonathan Scheiber's portfolio website, a personal site built with React and Vite. It's a single-page app that showcases Jonathan's background, projects, and interests, and hosts a couple of small standalone side projects.

---

## Features

- **Core pages** — Home, About, Portfolio, Gallery, Now, Uses, and Contact.
- **Portfolio** — case studies for shipped projects, each linking out to a live demo and source on GitHub.
- **Gallery** — a lazy-loaded, keyboard-navigable lightbox for browsing graphics and illustrations.
- **Side projects** — standalone tools (Affirmations, Motivator) served as routes on the same site.
- **Shortlinks & redirects** — memorable paths like `/gh`, `/li`, and `/r` that 302 to external profiles and the resume, plus single-letter shortcuts (`/a`, `/p`, `/n`, etc.) to internal pages.
- **SEO & discoverability** — per-page titles via `react-helmet-async`, a `Person` JSON-LD schema, `sitemap.xml`, `robots.txt`, `humans.txt`, and `llms.txt`.
- **Security** — a locked-down `Content-Security-Policy` and related headers via `_headers`, plus a `security.txt` at `/.well-known/`.
- **Accessibility** — a skip-to-content link, semantic heading hierarchy, and animations that respect `prefers-reduced-motion`.

---

## Architecture

- **Framework** — [React](https://react.dev/) 19 with [React Router](https://reactrouter.com/) for client-side routing, bundled with [Vite](https://vite.dev/).
- **Structure**
  - `src/pages/` — one component per route (`Home`, `About`, `Portfolio`, `Gallery`, `Now`, `Uses`, `Contact`, `Affirmations`, `Motivator`, `Error`), each paired with its own CSS file.
  - `src/components/` — shared UI: `Header`, `Footer`, `NavDrawer`, `Lightbox`, and `ScrollToTop`.
  - `src/App.jsx` — route table, including the internal shortcut/redirect routes and the catch-all 404.
  - `public/` — static assets and crawler-facing files (`robots.txt`, `sitemap.xml`, `humans.txt`, `llms.txt`, `.well-known/security.txt`) that are copied as-is into the build output.
- **Styling** — plain CSS per component/page, no CSS framework.
- **Animation** — [AOS](https://michalsnik.github.io/aos/) for scroll-triggered effects, disabled when the user prefers reduced motion.
- **Testing** — [Vitest](https://vitest.dev/) with React Testing Library (`npm test`).
- **Deployment** — static build (`npm run build` → `build/`) served from an edge platform, with `_headers` (security headers) and `_redirects` (shortlinks + SPA fallback) picked up automatically at deploy time.

---

## AI Disclaimer

This project was created and developed by a human, but an AI assistant ([Claude Code](https://claude.ai)) was used for brainstorming, code generation, design, and debugging purposes. The final implementation and design decisions were made solely by the author, and all generated code, content, and logic were reviewed, tested, and validated by the author prior to inclusion. Any errors, bugs, or issues in the final product are the responsibility of the author. The AI was a tool to assist in the creative and development process, but the vision, implementation, and final product are entirely the work of the author.