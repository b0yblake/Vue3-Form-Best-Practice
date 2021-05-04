import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import ViteComponents from 'vite-plugin-components'

const path = require('path');

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: [
      {
        find: "@",
        replacement: path.resolve(__dirname, '/src')
      },
      // {find: 'views', replacement: path.resolve(__dirname, 'src/views')},
      // {find: 'components', replacement: path.resolve(__dirname, 'src/components')},
    ],
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@import "./src/assets/stylesheets/_variables";` 
      } 
    } 
  },
  plugins: [
    vue(),
    ViteComponents()
  ]
})
