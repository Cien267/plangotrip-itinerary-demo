import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [vue(), vueDevTools(), tailwindcss()],
  base: './',
  build: {
    outDir: '../plangotrip-itinerary-demo-build',
    emptyOutDir: true,
  },
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
  server: {
    proxy: {
      '/api/oxford': {
        target: 'https://od-api-sandbox.oxforddictionaries.com',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api\/oxford/, ''),
        secure: false, // Set to true if the API requires HTTPS with valid certificates
      },
    },
  },
})
