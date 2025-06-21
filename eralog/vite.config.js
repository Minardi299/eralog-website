import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { fileURLToPath, URL } from 'node:url';
import tailwindcss from "@tailwindcss/vite"
//scp -r dist/* montcalm@192.168.1.112:/var/www/eralog

// https://vite.dev/config/
export default defineConfig({
plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    },
  },})
