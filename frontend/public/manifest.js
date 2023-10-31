import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from "vite-plugin-pwa";

const manifestForPlugIn = {
  registerType: 'prompt',
  includeAssets: ['favicon.ico', "apple-touch-icon.png", "maskable_icon.png"], // Fixed typos
  manifest: {
    name: "E-commerce app",
    short_name: "EC App",
    description: "Simple ec app",
    icons: [
      {
        src: '/android-chrome-192x192.png',
        sizes: '192x192',
        type: 'image/png',
        purpose: 'maskable',
      },
      {
        src: '/android-chrome-512x512.png',
        sizes: '512x512',
        type: 'image/png',
        purpose: 'maskable',
      },
      {
        src: '/apple-touch-icon.png',
        sizes: '180x180',
        type: 'image/png',
      },
      {
        src: '/maskable_icon.png',
        sizes: '512x512',
        type: 'image/png',
        purpose: 'maskable',
      }
    ],
    theme_color: '#171717',
    background_color: '#f0e7db',
    display: "standalone",
    scope: '/',
    start_url: '/',
    orientation: 'portrait',
  }
}

// Vite configuration
export default defineConfig({
  plugins: [react(), VitePWA(manifestForPlugIn)],
})
