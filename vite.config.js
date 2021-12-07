import { defineConfig } from 'vite'
import * as path from 'path';
import { createVitePlugins } from './vite-plugin'

function resolve(dir) {
  return path.resolve(__dirname, dir);
}

export default defineConfig({
  server: {
    // 代理
    host: '0.0.0.0',
    port: '8878',
    proxy: {
      '^/api': {
        target: 'https://XXX.com.cn',
        changeOrigin: true,
      },
    },
  },
  plugins: [
    createVitePlugins()
  ],
  resolve: {
    alias: {
      '@': resolve('src'),
      'vue': resolve('./node_modules/vue/dist/vue.esm.js')
    }
  },
  css: {
    preprocessorOptions: {
      less: {
        modifyVars: {
          hack: `true; @import (reference) "${resolve('src/assets/css/variable.less')}";`,
        },
        javascriptEnabled: true,
      }
    }
  },
  optimizeDeps: {
    include: [
      'fastclick',
      'vue',
      'vant'
    ]
  }
})