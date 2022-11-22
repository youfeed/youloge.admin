
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  // UI 打包配置
  build:{
    target: "modules",
    polyfillModulePreload: false,
    outDir: "dist",
    sourcemap: false,
    lib:{
      entry: './index.js', 
      name: 'youloge',
      fileName: (format) => `youloge.${format}.js`,
      // formats: "es",
    },
    rollupOptions:{
      external: ['vue'],
      output:{
        globals:{
          vue: 'Vue',
        }
      },
    },
    external: ['vue']
  },
  // 开发配置
  plugins: [vue()],
  css:{
    preprocessorOptions:{
      scss:{
        additionalData: `@import "./style/index.scss";`
      },
    }
  }
})
