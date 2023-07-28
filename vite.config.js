import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { VitePWA } from "vite-plugin-pwa";
import WPAConfig from "./src/wpa.confing";
import path from "path";


// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    VitePWA(WPAConfig()),
  ],
  base: "/vocabulary/",
  resolve:{
    alias:[
      {
        find: "@Assets",
        replacement: path.resolve(path.join(__dirname, "/src/Assets"))
      },
      {
        find: "@Components",
        replacement: path.resolve(path.join(__dirname, "/src/Components"))
      },
      {
        find: "@Data",
        replacement: path.resolve(path.join(__dirname, "/src/DataStructure"))
      },
      {
        find: "@Functions",
        replacement: path.resolve(path.join(__dirname, "/src/Functions"))
      },
      {
        find: "@Theme",
        replacement: path.resolve(path.join(__dirname, "/src/Theme"))
      }
    ]
  }
});
