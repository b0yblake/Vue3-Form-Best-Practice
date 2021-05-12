import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import ViteComponents from 'vite-plugin-components'
import vueI18n from '@intlify/vite-plugin-vue-i18n'

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
    ViteComponents(),
    vueI18n({
      // if you want to use Vue I18n Legacy API, you need to set `compositionOnly: false`
      // compositionOnly: false,

      // you need to set i18n resource including paths !
      include: path.resolve(__dirname, './src/i18n/**'),
      // compositionOnly: false
    })
  ]
})
