import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'
import path from 'path'
import { fileURLToPath } from 'url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))

// https://vite.dev/config/
// Decoupled from Base44 — plain Vite/React SPA for static hosting (GitHub Pages).
// Netlify serves from the root; GitHub Pages serves from /panacea-hash-garden/.
// Netlify sets NETLIFY=true during its build, so the same repo works on both.
export default defineConfig(({ mode }) => ({
  base: process.env.NETLIFY ? '/' : (mode === 'production' ? '/panacea-hash-garden/' : '/'),
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
}));
