// import { resolve } from 'path';
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  // 开发配置
  plugins: [vue()],
  resolve:{
    alias:[
      {
        find:'@',
        replacement:'/src'
      },
      {
        find:'@UI',
        replacement:'/packages/dist'
      },
      {
        find:'assets',
        replacement:'/src/assets'
      }
    ]
  },
  css:{
    preprocessorOptions:{
      // scss:{
      //   additionalData: `@import "./packages/style/index.scss";`
      // },
      less:{
        javascriptEnabled: true,
      }
    }
  }
})
