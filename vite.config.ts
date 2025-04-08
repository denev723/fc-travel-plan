import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tsconfigPath from "vite-tsconfig-paths";
import svgr from "vite-plugin-svgr";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), tsconfigPath(), svgr()],
  root: "client",
  resolve: {
    alias: {
      "@": "/src",
      "@icons": "/src/assets/icons",
    },
  },
  server: {
    proxy: {
      "/api": "http://localhost:3000",
    },
  },
});
