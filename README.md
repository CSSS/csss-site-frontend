# CSSS website

The SFU Computing Science Student Society website is a statically generated Astro site.

## Requirements

- Node 26
- npm

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
banner: /path/to/banners
---

# Page title

Page content goes here.
```

Adjust the relative layout path for nested pages. Ordinary `.astro` pages can import and render
the same `SiteLayout.astro` component with `title` and optional `description` props.

