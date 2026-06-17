import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// GitHub Pages serves a project site at https://<user>.github.io/<repo>/, so
// asset URLs must be prefixed with '/<repo>/'. The repo is 'jan3tlportfolio',
// so the live site is https://jan3tlim.github.io/jan3tlportfolio/ — if you rename
// the repo, change this to match (keep the leading + trailing slash).
//
// Exceptions:
//   • A USER/ORG site (repo named <user>.github.io) is served at the root → use '/'.
//   • A custom domain or Netlify/Vercel → use '/'.
//
// You can override without editing this file by setting BASE_PATH at build time:
//   BASE_PATH=/ npm run build
export default defineConfig({
  plugins: [react()],
  base: process.env.BASE_PATH ?? '/jan3tlportfolio/',
})
