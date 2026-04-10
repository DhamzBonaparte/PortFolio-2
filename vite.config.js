import { defineConfig } from "vite";
import react, { reactCompilerPreset } from "@vitejs/plugin-react";
import babel from "@rolldown/plugin-babel";

// https://vite.dev/config/

export default defineConfig({
  base: "/", 
  plugins: [
    react(),
    babel({ presets: [] }), // you can keep or remove babel depending on your setup
  ],
});
