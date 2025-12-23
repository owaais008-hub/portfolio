import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    chunkSizeWarningLimit: 1000, // Increase the limit to 1000kb
    rollupOptions: {
      output: {
        manualChunks: {
          // Split large libraries into separate chunks
          'react-vendor': ['react', 'react-dom'],
          'three-vendor': ['three', '@react-three/fiber', '@react-three/drei'],
          'animation-vendor': ['framer-motion', 'maath'],
          'ui-vendor': ['lucide-react', 'clsx', 'tailwind-merge'],
          'utils-vendor': ['axios'],
        }
      }
    }
  }
})