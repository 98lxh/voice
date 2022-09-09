import { defineConfig } from 'vite';
import Unocss from 'unocss/vite'
import { resolve } from 'pathe';
import vue from '@vitejs/plugin-vue';
import VueI18n from '@intlify/vite-plugin-vue-i18n';
import Components from 'unplugin-vue-components/vite'
import { createSvgIconsPlugin } from "vite-plugin-svg-icons";
import path from 'path';

const svg = createSvgIconsPlugin({
  iconDirs: [path.resolve(process.cwd(), "src/assets/icons")],
  symbolId: "icon-[dir]-[name]"
});

export default defineConfig({
  server: {
    port: 4000,
  },
  resolve: {
    alias: {
      '@': resolve(__dirname, './src'),
    },
  },
  plugins: [
    vue(),
    svg,
    Components({
      extensions: ['vue'],
      dts: 'src/components.d.ts',
    }),

    Unocss({ /* options */ }),

    VueI18n({
      include: [resolve(__dirname, './locales/**')],
    }),
  ],

  optimizeDeps: {
    include: [
      'vue',
      'vue-router',
      '@vueuse/core',
    ],
    exclude: [
      'vue-demi',
    ],
  },
});
