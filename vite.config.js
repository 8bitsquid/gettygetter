import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
import IconResolver from 'unplugin-icons/resolver'
import Icons from 'unplugin-icons/vite'

// https://vite.dev/config/
export default defineConfig({
  base: './',
  plugins: [
    vue(),
    Icons({
      compiler: 'vue3',
      autoInstall: true
    }),
    AutoImport({
      resolvers: [
        ElementPlusResolver(),
        IconResolver({
          prefix: 'Icon'
        })
      ]
    }),
    Components({
      resolvers: [
        ElementPlusResolver(),
        IconResolver({
          enabledCollections: ['ep']
        })
      ]
    })
  ],
  test: {
    setupFiles: ['./vitest.setup.js'],
    environment: 'happy-dom',
    server: {
      deps: {
        inline: ['element-plus']
      }
    },
    reporters: ['verbose']
  }
})
