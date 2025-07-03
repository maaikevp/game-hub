import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
// export default defineConfig({
//   plugins: [react()],
// })

// export default defineConfig({
//   server: {
//     proxy: {
//       '/games': {
//         target: 'https://api.rawg.io/api',
//         changeOrigin: true,
//         rewrite: path => path.replace(/^\/games/, '/games'),
//       },
//     },
//   },
// })

export default defineConfig({
  server: {
    proxy: {
      '/games': {
        target: 'https://api.rawg.io/api',
        changeOrigin: true,
        rewrite: path => path.replace(/^\/games/, '/games'),
      },
      '/genres': {
        target: 'https://api.rawg.io/api',
        changeOrigin: true,
        rewrite: path => path.replace(/^\/genres/, '/genres'),
      },
      '/platforms': {
        target: 'https://api.rawg.io/api',
        changeOrigin: true,
        rewrite: path => path.replace(/^\/platforms/, '/platforms'),
      },
      // Add more endpoints as needed
    },
  },
})

