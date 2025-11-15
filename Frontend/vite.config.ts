import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from "@tailwindcss/vite"
import { tanstackRouter } from '@tanstack/router-vite-plugin'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    tailwindcss(),
    react(),
    tanstackRouter({
      target: 'react',
      routesDirectory: 'src/routes',      
      generatedRouteTree: 'src/routeTree.gen.ts',
    }),
  ],
})

