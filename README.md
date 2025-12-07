# FOSS Ladakh Hub (Astro)

Modern, content-focused site for the FOSS LA community built with [Astro 4](https://astro.build/). The layout and styling mirror the previous React experience, but all pages now render statically from Markdown-driven collections.

## Tech Stack

- [Astro](https://astro.build/) with content collections
- Tailwind CSS (custom terminal-inspired theme)
- [astro-icon](https://github.com/withastro/astro-icon) + Lucide icon set
- Markdown/MDX content for the blog, events, projects, resources, and team data

## Getting Started

```bash
npm install
npm run dev
```

The dev server runs at `http://localhost:4321`. Content edits inside `src/content/**` hot-reload instantly.

## Project Structure

```
src/
	assets/             # Shared images (hero background, etc.)
	components/         # Navigation + Footer partials
	content/            # Markdown/data collections (blog, events, projects...)
	layouts/            # Base HTML layout wrapper
	pages/              # Astro pages + dynamic blog route
	styles/             # Global Tailwind layer
```

Collections are defined in `src/content/config.ts`. Update schemas there when adding new content types.

## Commands

| Command        | Description                              |
| -------------- | ---------------------------------------- |
| `npm run dev`  | Start the Astro dev server               |
| `npm run build`| Generate the static site into `dist/`    |
| `npm run preview` | Preview the production build locally |
| `npm run check`| Type-check and lint Astro components     |

## Deployment

Astro outputs a static `dist/` folder, so you can deploy via Netlify, Vercel, Cloudflare Pages, GitHub Pages, or any static host. Remember to run `npm run build` in CI/CD and publish the generated directory.

## Contributing to the Blog

We encourage community members to contribute blog posts! To add your own article:

1. See the `src/content/blog/README.md` file for detailed instructions and a post template.
2. Add your Markdown or text file to `src/content/blog/`.
3. Open a pull request with your changes.

Blog posts can cover open source, technology, community events, tutorials, or anything relevant to FOSS and Ladakh. Please review our [Code of Conduct](/about#conduct) before submitting.
