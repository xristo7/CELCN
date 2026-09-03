import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  base: process.env.GITHUB_PAGES === "true" ? "/CELCN/" : "/",
  build: {
    outDir: "dist/client",
  },
  optimizeDeps: {
    include: ["react", "react-dom/client"],
  },
  server: {
    host: "0.0.0.0",
    allowedHosts: ["terminal.local"],
    warmup: {
      clientFiles: ["./src/main.jsx"],
    },
  },
  plugins: [
    {
      name: "github-pages-paths",
      enforce: "pre",
      transform(code, id) {
        if (process.env.GITHUB_PAGES !== "true" || !id.endsWith(".jsx")) return;
        return code.replace(/(["'])\/(?!\/)([a-zA-Z0-9/#?=&._-]*)\1/g, (_, quote, path) => `${quote}/CELCN/${path}${quote}`);
      },
    },
    react(),
  ],
});
