# La Maison Regina

Static website for [La Maison Regina](https://www.lamaisonregina.com), built with [Next.js](https://nextjs.org) (App Router) and [MUI](https://mui.com), exported as a fully static site (SSG) and deployed to Cloudflare Pages.

## Getting started

```bash
pnpm install
pnpm dev
```

Open [http://localhost:3000/pt](http://localhost:3000/pt).

## Scripts

| Script            | Description                                          |
| ----------------- | ---------------------------------------------------- |
| `pnpm dev`        | Start the development server                         |
| `pnpm build`      | Build the static export into `out/`                  |
| `pnpm serve`      | Serve the `out/` folder locally                      |
| `pnpm local`      | Build and serve                                      |
| `pnpm lint`       | Lint and format with auto-fix (oxlint + oxfmt)       |
| `pnpm lint:check` | Check lint and formatting without changing files     |
| `pnpm typecheck`  | Generate Next.js route types and run the TS compiler |

## Project structure

```
src/
├── app/                   # App Router
│   ├── [lang]/            # Root layout + one folder per page, prerendered for each locale
│   ├── globals.css
│   └── sitemap.ts         # Generates /sitemap.xml at build time
├── components/
│   ├── layout/            # Header, footer, bottom buttons, page transition
│   ├── providers/         # MUI theme + Emotion cache
│   ├── sections/          # Page-specific sections (home, services, gallery, ...)
│   └── ui/                # Reusable UI building blocks
├── config/                # Site config and contact links
├── data/images/           # Image sources and alt texts
├── hooks/
├── i18n/                  # Locales and translation dictionaries
├── lib/                   # Page helpers (metadata, locale params)
└── theme/                 # MUI theme, colors and fonts
```

## Deployment (Cloudflare Pages)

- Build command: `pnpm build`
- Build output directory: `out`
