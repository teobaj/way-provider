import { defineConfig } from 'vite'

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    lib: {
      entry: 'src/index.ts',
      formats: ['umd'],
      name: 'way-provider',
      fileName: () => "way-provider.js"
    }
  }
})
