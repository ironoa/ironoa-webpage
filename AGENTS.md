# ironoa-webpage — agent context

Astro static site for ironoa.com, deployed to GitHub Pages.

## Guardrails

- **Pushing to `main` deploys the live site** (GitHub Actions → Pages → ironoa.com).
  Always run a production build before pushing; never push a broken build.
- The site is public marketing/reputation surface for a real validator operation:
  factual claims (networks validated, programs, uptime/slashing record) must be
  accurate and current — when operations change, this site must follow.
- Keep `public/CNAME` intact — removing it breaks the custom domain.

## Facts (as of 2026-07)

- Validation is **Kusama only**: the Polkadot validator was retired in July 2026
  after the Web3 Foundation sunset the Decentralized Nodes program. `/polkadot` is
  intentionally kept as a retired-notice stub (external links point to it) but is
  not in the nav.

## Conventions

- News: one markdown file per post in `src/content/news/`, named
  `YYYY-MM-DD-slug.md`, frontmatter `title` + `date` (schema in `src/content/config.ts`).
- Shared head/nav/footer live in `src/layouts/Base.astro` — network claims appear
  there too (title, description, keywords, footer), not only in pages.
