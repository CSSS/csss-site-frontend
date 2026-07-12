# CSSS website

The SFU Computing Science Student Society website is a statically generated Astro site. Page
content is written in MDX, and shared site chrome is implemented with Astro components.

## Requirements

- Node.js 22.12 or newer; Node.js 24 is recommended
- npm 9.6.5 or newer

## Development

```sh
npm ci
npm run dev
```

The development server prints its local URL. A production build is generated in `dist/`:

```sh
npm run build
npm run preview
```

Run the project checks before opening a pull request:

```sh
npm run format:check
npm run lint
npm run check
```

Use `npm run format` to apply Prettier formatting.

## Adding or replacing pages

Files in `src/pages/` define the URL structure. An MDX page can use the shared site shell with
frontmatter:

```mdx
---
layout: ../layouts/SiteLayout.astro
title: Page title
description: A short page description.
---

# Page title

Page content goes here.
```

Adjust the relative layout path for nested pages. Ordinary `.astro` pages can import and render
the same `SiteLayout.astro` component with `title` and optional `description` props.

## Deployment

When a pull request is merged into `main`, GitHub Actions builds the static site and replaces the
contents of the remote `build` branch with `dist/`.
