import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'
import path from 'path'
import { fileURLToPath } from 'url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))

// https://vite.dev/config/
// Decoupled from Base44 — plain Vite/React SPA for static hosting (GitHub Pages).
export default defineConfig(({ mode }) => ({
  base: mode === 'production' ? '/panacea-hash-garden/' : '/',
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
}));
