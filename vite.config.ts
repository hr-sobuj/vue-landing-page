import vue from '@vitejs/plugin-vue'
import path from 'path'
import { defineConfig } from 'vite'


// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      '@components': path.resolve(__dirname, './src/components'),
      '@interfaces': path.resolve(__dirname, './src/interfaces'),
    },
  }
})
