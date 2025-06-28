import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import webfontDownload from "vite-plugin-webfont-dl";
import path from "node:path";

// Get the main.js where all JavaScript files are imported
const JS_FILE = path.resolve("src/main.tsx");



// Define where the compiled and minified JavaScript files will be saved
const BUILD_DIR = path.resolve(__dirname, "dist");

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    webfontDownload([
      "https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&family=Space+Grotesk:wght@300..700&display=swap",
    ]),
  ],
  publicDir: path.resolve(__dirname, "public"), // Directory for static assets
  build: {
    assetsDir: "./", // Will save the compiled JavaScript files in the root of the dist folder
    manifest: true, // Generate manifest.json file (for caching)
    emptyOutDir: true, // Empty the dist folder before building
    outDir: BUILD_DIR,
    chunkSizeWarningLimit: 528,
    rollupOptions: {
      input: JS_FILE,
      output: {
        entryFileNames: `[name].js`,
        chunkFileNames: `[name].js`,
        assetFileNames: `[name].[ext]`,
      },
    },
  },  
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
      "@/assets": path.resolve(__dirname, "./src/assets"),
      "@/components": path.resolve(__dirname, "./src/components"),
      "@/layouts": path.resolve(__dirname, "./src/layouts"),
      "@/pages": path.resolve(__dirname, "./src/pages"),
      "@/queries": path.resolve(__dirname, "./src/queries"),
      "@/utils": path.resolve(__dirname, "./src/utils"),
      "@/graphql": path.resolve(__dirname, "./src/graphql")
    },
  },  
});
