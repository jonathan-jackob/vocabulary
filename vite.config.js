import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { VitePWA } from "vite-plugin-pwa";
import { teal } from "@mui/material/colors";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      manifest: {
        theme_color: teal[600],
        background_color: teal[600],
        display: "standalone",
        scope: "/",
        start_url: "/",
        short_name: "Vocabulary",
        description:
          "Aplicación donde puedes ver la gramática y guardar palabras nuevas.",
        name: "Vocabulary App",
        icons: [
          {
            src: "/vocabulary/logo128.webp",
            sizes: "128x128",
            type: "image/webp",
          },
          {
            src: "/vocabulary/logo144.webp",
            sizes: "144x144",
            type: "image/webp",
          },
          {
            src: "/vocabulary/logo192.webp",
            sizes: "192x192",
            type: "image/webp",
          },
          {
            src: "/vocabulary/logo256.webp",
            sizes: "256x256",
            type: "image/webp",
          },
          {
            src: "/vocabulary/logo512.webp",
            sizes: "512x512",
            type: "image/webp",
          },
          {
            src: "/vocabulary/logo1024.webp",
            sizes: "1024x1024",
            type: "image/webp",
          },
        ],
      },
    }),
  ],
  base: "/vocabulary/",
});
