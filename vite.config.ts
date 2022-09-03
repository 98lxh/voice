import { defineConfig } from "vite";
import { createSvgIconsPlugin } from "vite-plugin-svg-icons";
import vue from "@vitejs/plugin-vue";
import Unocss from "unocss/vite";
import path from "path";

const svg = createSvgIconsPlugin({
  iconDirs: [path.resolve(process.cwd(), "src/assets/icons")],
  symbolId: "icon-[dir]-[name]"
});

export default defineConfig({
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src")
    }
  },
  server: {
    host: true
  },
  plugins: [svg, vue(), Unocss()]
});
