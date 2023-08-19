import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import eslint from "eslint-config-react-app";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), eslint],
});
