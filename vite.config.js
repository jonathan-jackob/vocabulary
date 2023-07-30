import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { VitePWA } from "vite-plugin-pwa";
import WPAConfig from "./wpa.confing";
import namespaces from "./namespaces.config";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), VitePWA(WPAConfig())],
  base: "/vocabulary/",
  resolve: namespaces()
});
