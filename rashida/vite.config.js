import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
<<<<<<< HEAD

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
=======
import { VitePWA } from "vite-plugin-pwa";
import manifestForPlugIn from './public/manifest.json';

export default defineConfig({
  plugins: [
    react(),
    VitePWA(manifestForPlugIn) // Pass your manifest configuration to VitePWA
  ],
  // Your other Vite configuration options
>>>>>>> 24c7308a12e2e3541a515c11aa5021d757275ed5
})
