import path from "path";
import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

// https://vite.dev/config/
export default defineConfig({
  build: {
    target: "es2022", // Or 'esnext'
    assetsInlineLimit: 4096, // Increase asset caching
  },
  plugins: [react(), tailwindcss()],
  server: {
    hmr: true, // Enable fast refresh
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
