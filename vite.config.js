import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from "vite-plugin-pwa";
import manifestForPlugIn from './public/manifest.js';

export default defineConfig({
  plugins: [
    react(),
    VitePWA(manifestForPlugIn) // Pass your manifest configuration to VitePWA
  ],
  // Your other Vite configuration options
})
