import { defineConfig, presetUno, presetAttributify } from "unocss";

export default defineConfig({
  exclude: [
    "node_modules",
    "dist",
    ".git",
    ".github",
    ".husky",
    ".vscode",
    "build",
    "locales"
  ],
  presets: [presetUno({ dark: "class" }), presetAttributify()],
  shortcuts: {
    "bg-dark": "bg-bg_color",
    "wh-full": "w-full h-full",
    "flex-wrap": "flex flex-wrap",
    "flex-c": "flex justify-center items-center",
    "flex-ac": "flex justify-around items-center",
    "flex-bc": "flex justify-between items-center",
    "navbar-bg-hover": "dark:color-white !dark:hover:bg-[#242424]"
  },
  theme: {
    colors: {
      bg_color: "var(--el-bg-color)",
      primary: "var(--el-color-primary)",
      primary_light_9: "var(--el-color-primary-light-9)",
      text_color_primary: "var(--el-text-color-primary)",
      text_color_regular: "var(--el-text-color-regular)",
      text_color_disabled: "var(--el-text-color-disabled)"
    }
  }
});
