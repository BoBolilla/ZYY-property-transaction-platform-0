import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'

// https://vitejs.dev/config/

export default defineConfig({
  // devServer:{
  //   proxy:{
  //       ["/dev-api"]:{
  //       target:'http://www.521lxy.top:8093',
  //         changeOrigin:true,
  //           pathRewrite: {
  //               ['^' + "/dev-ap"]: ''
  //           }
  //       }
  //   }

  // },
  plugins: [
    vue(),
    AutoImport({
      resolvers: [ElementPlusResolver()]
    }),
    Components({
      resolvers: [ElementPlusResolver({ importStyle: 'sass' })]
    })
  ],

  base: '/', // 路径基址 router index中history: createWebHistory(import.meta.env.BASE_URL),
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  css: {
    preprocessorOptions: {
      scss: {
        // 自动导入定制化样式文件进行样式覆盖
        additionalData: `
          @use "@/styles/element/index.scss" as *;
        `
      }
    }
  }
})
