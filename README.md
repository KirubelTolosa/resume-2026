# Kirubel Tolosa — Portfolio

Lightweight portfolio/resume site built with React + Tailwind CSS and powered by JSON content files.

## Setup

```bash
npm install
npm run dev
```

## Scripts

- `npm run dev` — start local dev server
- `npm run build` — production build
- `npm run preview` — preview the production build

## Content Editing

All copy is driven from the JSON files:

- `src/content/en.json` — primary content
- `src/content/am.json` — secondary language (structure must match)

Update basics (name, email, resume file), sections, and skills in these files. The UI renders exclusively from the JSON, so language switching is just swapping files.

## Resume PDF

Place the resume PDF in `public/` and ensure `basics.resumeFile` matches the filename. The default is `KirubelTolosa_Resume_Jan2026.pdf`.

## Deploy Summary (GitHub Pages)

1. Set base path in `vite.config.js`:

```js
// example for repo name "kirubel-portfolio"
export default defineConfig({
  base: '/kirubel-portfolio/',
})
```

2. Build and deploy:

```bash
npm run build
```

3. Push to GitHub and deploy via GitHub Pages (see deployment guide in the final response).
