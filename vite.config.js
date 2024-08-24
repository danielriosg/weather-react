import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  base: "/weather-react/", // Update this to match your repository
  build: {
    outDir: "dist",
  },
  plugins: [react()],
});

