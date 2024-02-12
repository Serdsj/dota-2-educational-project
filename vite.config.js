import { defineConfig, loadEnv } from "vite";
import { ViteImageOptimizer } from "vite-plugin-image-optimizer";
import react from "@vitejs/plugin-react";

// Функция для создания конфигурации Vite
export default ({ mode }) => {
  const env = loadEnv(mode, process.cwd());
  const API_URL = `${
    env.VITE_API_URL ?? "https://dota2-proxy-hero-list.onrender.com/"
  }`;

  return defineConfig({
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
        "/api": {
          target: API_URL,
          changeOrigin: true,
        },
      },
    },
  });
};
