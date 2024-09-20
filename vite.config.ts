
//@ts-ignore

import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import vueDevTools from 'vite-plugin-vue-devtools'



import Components from 'unplugin-vue-components/vite';
import {PrimeVueResolver} from '@primevue/auto-import-resolver';

//@ts-ignore

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue({
      features: {
        propsDestructure: true,
      }
    }),
    Components({
      resolvers: [
        PrimeVueResolver()
      ]
    }),
    vueJsx(),
    vueDevTools(),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})
