import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import {resolve} from 'path'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    AutoImport({
      // ['default as tinymce','init']
      imports:[
        'vue','pinia','vue-router'
        // {
        //   'vue-router': ['createRouter', 'createWebHistory'] // 明确指定需要自动导入的函数
        // }
        // {
        //   ['default as tdesign-vue-next']
        // }
      ],
      dirs:['src/composables','src/directives'],
      dts:'types/auto-imports.d.ts',
      vueTemplate:true,
      eslintrc:{
        enabled:true,
        // files:'src/**/*.vue',
        injectAutoImports:true,
        globalsPropValue:true,
        filepath: 'types/.eslintrc-auto-import.json',
      }
    }),
    Components({
      dts:'types/auto-components.d.ts',
      dirs:['src/components'],
      directives: true,
      // extensions:['vue'],
    }),
  ],
  build:{
    sourcemap: false,
    cssCodeSplit:false,
    modulePreload:{ polyfill:false },
    rollupOptions: {
      output:{
        manualChunks: {
          vue:['vue','vue-router'],
          pinia:['pinia'],
          tdesign:['tdesign-vue-next'],
          // tinymce:['tinymce']
        }
      }
    }
  },
  resolve:{
    alias:{
      '@':resolve(__dirname, './src'),
      '@plugins':resolve(__dirname, './src/plugins'),
      '@components':resolve(__dirname, './src/components'),
      '@directives':resolve(__dirname, './src/directives'),
      '@composables':resolve(__dirname, './src/composables'),
    }
  }
})
