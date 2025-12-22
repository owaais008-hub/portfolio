import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: process.env.NODE_ENV === 'production' ? '/portfolio/' : '/',
  server: {
    port: 5173,
    host: true,
    strictPort: false,
    historyApiFallback: true
  },
  build: {
    outDir: 'dist',
    sourcemap: true
  }
})