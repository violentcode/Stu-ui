import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'node:path'
import dts from 'vite-plugin-dts'
import VueJSX from '@vitejs/plugin-vue-jsx'

// https://vitejs.dev/config/s
export default defineConfig({
  plugins: [vue(), dts(), VueJSX()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  build: {
    lib: {
      entry: resolve(__dirname, 'src/main.ts'),
      fileName: 'bundle',
      name: 'stu-ui'
    },
    outDir: 'dist',
    sourcemap: true,
    rollupOptions: {
      external: ['vue']
    }
  }
})
