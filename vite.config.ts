// vite.config.js
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  base: "/fast-food-menu/", // Замініть 'my-react-app' на назву вашого репозиторію, якщо потрібно
  plugins: [react()],
  build: {
    outDir: "dist",
  },
  resolve: {
  },
});