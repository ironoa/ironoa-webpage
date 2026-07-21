# ironoa-webpage

[ironoa.com](https://ironoa.com) — public webpage of the ironoa validator operation
(independent Kusama validator, Polkadot ecosystem, since 2020). Built with
[Astro](https://astro.build), deployed on GitHub Pages.

```mermaid
flowchart LR
    push["push to main"] --> gha["GitHub Actions<br>(.github/workflows/deploy.yml)"]
    gha -->|astro build| pages["GitHub Pages"] --> dom["ironoa.com<br>(public/CNAME)"]
```

## Develop

```bash
npm install
npm run dev       # local dev server
npm run build     # production build into dist/
npm run preview   # serve the built site locally
```

## Layout

```
src/pages/          one .astro file per route (index, kusama, polkadot, about, terms, news/)
src/content/news/   news posts, one markdown file per post (YYYY-MM-DD-slug.md)
src/layouts/        Base.astro: head/nav/footer shared by every page
public/             static assets + CNAME (custom domain)
```

## Publish a news post

Add `src/content/news/YYYY-MM-DD-slug.md` with frontmatter `title` and `date`
(ISO string), push to `main` — the deploy is automatic.
