# Rotative — Software empresarial a medida

Corporate single-page website for Rotative, a custom software development agency serving industrial companies. Presents services, process, success stories, and captures leads via Web3Forms.

![Deploy](https://github.com/gonza1212/portfolio/actions/workflows/deploy.yml/badge.svg)

## Quick start

```bash
pnpm install
pnpm dev
```

Dev server runs at `http://localhost:4321`.

## Build

```bash
pnpm build
```

Static output goes to `dist/`. No SSR, no adapters.

## Configuration

The contact form uses a public Web3Forms access key, hardcoded in `src/components/sections/Contact.astro` as `WEB3FORMS_KEY`. To switch keys, replace the value.

Brand identity (name, domain, contact email) lives in `astro.config.mjs`, `src/components/layout/Topbar.astro`, `src/components/layout/Footer.astro`, and the Organization JSON-LD in `src/layouts/Base.astro`. Search the repo for `rotative.com.ar` and `contacto@rotative.com.ar` to update all references.

## Project structure

```
src/
├── components/
│   ├── layout/     # Topbar, Footer
│   ├── sections/   # Hero, Services, Process, SuccessStories, About, FAQ, Contact
│   └── ui/         # Button, SectionTitle
├── data/           # Static datasets (services, process, cases, faq)
├── layouts/        # Base.astro
├── pages/          # index.astro
└── styles/         # global.css
public/
├── _headers        # Cache-Control and security headers
├── logo.webp
└── robots.txt
```

## Stack

- **Astro 5** — static site generation
- **Tailwind CSS 3** — utility-first CSS with `darkMode: 'class'`
- **TypeScript** — strict mode
- **DM Sans** — variable font via `@fontsource-variable/dm-sans`
- **Web3Forms** — contact form backend (no server required)

## Deploy

Pushing to `main` triggers `.github/workflows/deploy.yml`, which builds the site and uploads `dist/` to the Hostinger account via FTP. Required secrets: `FTP_HOST`, `FTP_USER`, `FTP_PASS`. Target directory: `/public_html/`.

Production URL: <https://rotative.com.ar>.

## Limitations

- No backend, database, or CMS. All content is in static `.ts` data files under `src/data/`.
- No automated tests. Verification is manual via browser.
- Form submissions depend on the third-party Web3Forms service.

## Contributing

This repository is not open to external contributions. See `CONTRIBUTING.md` for details.

## License

Proprietary. All rights reserved.
