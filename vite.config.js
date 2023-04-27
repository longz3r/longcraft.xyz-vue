import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': '/vercel/path0/src',
    },
  },
  build: {
    target: 'es2015',
    assetsDir: '',
    outDir: 'dist',
    emptyOutDir: true,
    minify: 'esbuild',
    sourcemap: false,
    rollupOptions: {
      input: 'src/main.js',
    },
  },
  server: {
    port: 3000,
    open: true,
    cors: true,
    proxy: {},
  },
})