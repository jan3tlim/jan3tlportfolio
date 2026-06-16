# Janet Lim — Personal Portfolio

A single-page portfolio showcasing work across **software, design, and data**.
Built with React + Vite. Projects can be filtered live by discipline.

## Run it locally

```bash
npm install      # first time only
npm run dev      # starts dev server at http://localhost:5173
npm run build    # production build into /dist
npm run preview  # preview the production build
```

## How to make it yours

Almost everything is driven by one file: **`src/data/content.js`**.
Edit your name, intro, projects, experience, and skills there — no need to touch
the components. Each section is commented to show what goes where.

- **Add a project:** append an object to the `projects` array. Set `category`
  to `'software'`, `'design'`, or `'data'` so it shows under the right filter.
- **Add an image:** drop a file in `/public` (e.g. `public/my-project.png`) and
  set the project's `image` to `'/my-project.png'`.
- **Add a résumé:** drop the PDF in `/public` and set `profile.links.resume`.
- **Recolor the site:** edit the CSS variables at the top of `src/index.css`.
  The whole palette flows from `--accent`, the discipline colors, and the
  signature `--grad` gradient.

## Deploy to GitHub Pages

This repo is set up to deploy to **GitHub Pages** in two ways. Both assume the
repo is named `portfolio` (matching `base: '/portfolio/'` in `vite.config.js`).
If your repo has a different name, change `base` to `'/<your-repo>/'`.

### Option A — GitHub Actions (recommended, no local setup)

1. Push this folder to a GitHub repo on the `main` branch.
2. In the repo: **Settings → Pages → Build and deployment → Source: GitHub Actions**.
3. That's it. Every push to `main` builds and publishes automatically via
   `.github/workflows/deploy.yml`. The live URL shows under Settings → Pages
   (e.g. `https://<user>.github.io/portfolio/`).

### Option B — one command from your machine

```bash
npm install
npm run deploy     # builds, then pushes /dist to a gh-pages branch
```

Then set **Settings → Pages → Source: Deploy from a branch → `gh-pages`**.

> Deploying at the **root** instead (a `<user>.github.io` repo, a custom domain,
> or Netlify/Vercel)? Build with `BASE_PATH=/ npm run build` and set the host's
> publish directory to `dist`.

## Structure

```
src/
  data/content.js      ← edit this: all your content
  components/
    Nav.jsx            sticky responsive navbar
    Hero.jsx           landing section
    Projects.jsx       filterable project grid
    Sections.jsx       About, Experience, Skills, Contact, Footer
    useReveal.js       scroll-into-view animation hook
  App.jsx              page composition
  index.css            theme + all styles
.github/workflows/
  deploy.yml           GitHub Pages auto-deploy
```
