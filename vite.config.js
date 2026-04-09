import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  base: "/React-Lab3/",
  plugins: [
    react(),
    tailwindcss(),
  ],
})