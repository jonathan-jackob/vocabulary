import { grey, teal } from "@mui/material/colors";

const WPAConfig = () => {
  return {
    manifest: {
      theme_color: teal[600],
      background_color: grey[100],
      display: "standalone",
      scope: "/vocabulary/",
      start_url: "/vocabulary/",
      short_name: "Vocabulary",
      description:
        "Aplicación donde puedes ver la gramática y guardar palabras nuevas.",
      name: "Vocabulary App",
      icons: [
        {
          src: "/vocabulary/128x128.webp",
          sizes: "128x128",
          type: "image/webp",
        },
        {
          src: "/vocabulary/144x144.webp",
          sizes: "144x144",
          type: "image/webp",
        },
        {
          src: "/vocabulary/192x192.webp",
          sizes: "192x192",
          type: "image/webp",
        },
        {
          src: "/vocabulary/256x256.webp",
          sizes: "256x256",
          type: "image/webp",
        },
        {
          src: "/vocabulary/512x512.webp",
          sizes: "512x512",
          type: "image/webp",
        },
        {
          src: "/vocabulary/1024x1024.webp",
          sizes: "1024x1024",
          type: "image/webp",
        },
      ],
    },
    workbox: {
      cleanupOutdatedCaches: true,
      skipWaiting: true,
    },
  };
};

export default WPAConfig;
