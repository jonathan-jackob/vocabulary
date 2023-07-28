import { teal } from "@mui/material/colors";

const WPAConfig = ()=>{
    return {
        manifest: {
          theme_color: teal[600],
          background_color: teal[600],
          display: "standalone",
          scope: "/vocabulary/",
          start_url: "/vocabulary/",
          short_name: "Vocabulary",
          description:
            "Aplicación donde puedes ver la gramática y guardar palabras nuevas.",
          name: "Vocabulary App",
          icons: [
            {
              src: "/vocabulary/vaap128.webp",
              sizes: "128x128",
              type: "image/webp",
            },
            {
              src: "/vocabulary/vaap144.webp",
              sizes: "144x144",
              type: "image/webp",
            },
            {
              src: "/vocabulary/vaap192.webp",
              sizes: "192x192",
              type: "image/webp",
            },
            {
              src: "/vocabulary/vaap256.webp",
              sizes: "256x256",
              type: "image/webp",
            },
            {
              src: "/vocabulary/vaap512.webp",
              sizes: "512x512",
              type: "image/webp",
            },
            {
              src: "/vocabulary/vaap1024.webp",
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
}

export default WPAConfig
