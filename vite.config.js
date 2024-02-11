import { defineConfig } from "vite";
import { ViteImageOptimizer } from "vite-plugin-image-optimizer";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [
    react(),
    ViteImageOptimizer({
      png: {
        quality: 90,
      },
    }),
  ],
  server: {
    cors: true,
    proxy: {
      "/api": "http://localhost:8080/",
    },
  },
});
