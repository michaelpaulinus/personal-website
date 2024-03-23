import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import { resolve } from 'path'

export default defineConfig({
  base: '/michaelpaulinus.github.io/',
  plugins: [vue(), vueJsx()],
  resolve: {
    alias: [{ find: '@', replacement: resolve(__dirname, './src') }]
  }
})
