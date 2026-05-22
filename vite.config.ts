import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    chunkSizeWarningLimit: 1000,
    rolldownOptions: {
      output: {
        manualChunks(id: string) {
          if (id.includes('node_modules')) {
            if (id.includes('react-dom') || id.includes('/react/')) return 'react';
            if (id.includes('framer-motion')) return 'motion';
            if (id.includes('gsap')) return 'gsap';
            if (id.includes('hls.js')) return 'hls';
          }
          return undefined;
        },
      },
    },
  },
})
