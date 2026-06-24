# TuMarca — Software a medida para la industria

Corporate landing page for a custom software development agency serving industrial companies.

## Stack

- **Astro 5** — static site generation
- **Tailwind CSS 3** — utility-first CSS with `darkMode: 'class'`
- **TypeScript** — strict mode
- **DM Sans** — variable font
- **Web3Forms** — contact form backend
- **Cloudflare Pages** — deployment

## Setup

```bash
pnpm install
pnpm dev
```

## Build

```bash
pnpm build
```

Output goes to `dist/`.

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
├── robots.txt
└── _headers
```

## Documentation

- `ARCHITECTURE.md` — system model, constraints, frozen decisions
- `CONTEXT.md` — living project state
- `CONTRIBUTING.md` — git workflow and conventions
