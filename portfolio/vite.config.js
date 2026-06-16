import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// GitHub Pages serves a project site at https://<user>.github.io/<repo>/, so
// asset URLs must be prefixed with '/<repo>/'. This is set to '/portfolio/'
// because that's the repo name assumed below — if your repo has a different
// name, change it here (keep the leading + trailing slash).
//
// Exceptions:
//   • A USER/ORG site (repo named <user>.github.io) is served at the root → use '/'.
//   • A custom domain or Netlify/Vercel → use '/'.
//
// You can override without editing this file by setting BASE_PATH at build time:
//   BASE_PATH=/ npm run build
export default defineConfig({
  plugins: [react()],
  base: process.env.BASE_PATH ?? '/portfolio/',
})
