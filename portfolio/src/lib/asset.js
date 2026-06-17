// Resolve a local /public asset path against Vite's configured base URL.
// In this project the site is served under '/portfolio/' (see vite.config.js),
// so a path like '/me.png' must become '/portfolio/me.png' to load in dev AND
// on GitHub Pages. External URLs and mailto: links are returned untouched.
export function asset(path) {
  if (!path) return path
  if (/^(https?:)?\/\//.test(path) || path.startsWith('mailto:')) return path
  return import.meta.env.BASE_URL + path.replace(/^\//, '')
}
