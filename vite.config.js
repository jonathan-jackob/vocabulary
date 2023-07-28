import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { VitePWA } from "vite-plugin-pwa";
import WPAConfig from "./src/wpa.confing";


// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    VitePWA(WPAConfig()),
  ],
  base: "/vocabulary/",
});
