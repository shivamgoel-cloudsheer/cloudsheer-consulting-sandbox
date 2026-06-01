import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Base path is env-aware so the same source builds for both:
// - Vercel (serves at root)            → default '/'
// - GitHub Pages sandbox sub-directory → set VITE_BASE='/cloudsheer-consulting-sandbox/'
//   (the `deploy:gh` script in package.json sets this automatically).
export default defineConfig({
  plugins: [react()],
  base: process.env.VITE_BASE || '/',
})
