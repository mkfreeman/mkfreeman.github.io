mkfreeman.github.io
===================

Personal site, built with [Astro](https://astro.build) + [Tailwind CSS](https://tailwindcss.com).

## Development

```
npm install
npm run dev
```

## Content

Section content lives in `src/data/*.json`. Images live in `public/imgs/`.

## Deploy

Pushing to `master` builds and deploys automatically via `.github/workflows/deploy.yml`
(GitHub Actions → GitHub Pages). In the repo's Settings → Pages, the source should be
set to "GitHub Actions" (one-time setup). No manual build/copy step needed.
