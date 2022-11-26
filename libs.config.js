import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    outDir: 'ui',
    lib: {
      entry: './packages/index.js',
      name: 'youloge',
      fileName: (format) => `youloge.${format}.js`,
    },
    rollupOptions: {
      external: ['vue'],
      output: {
        globals: {
          vue: 'Vue'
        }
      }
    }
  },
  plugins: [vue()],
  css:{
    preprocessorOptions:{
      scss:{
        additionalData: `@import "./packages/style/index.scss";`
      },
    }
  }
})
