import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/season-fruits-landing-page/',
  server: {
    proxy: {
      '/api': 'https://www.fruityvice.com',
    }
  }
})
