import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(),
  tailwindcss(), ] ,
  base: "/keeper-app/",  // <--- ADD THIS LINE (use your exact repo name)
  
})
