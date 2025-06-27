import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    host:'0.0.0.0',
    port:5173,
    proxy: {
      '/api': {
        target: 'http://localhost:1000',
        changeOrigin: true,
        // rewrite: (path) => path.replace(/^\/api/, ''),
      },
    }, // <-- Missing closing bracket
  },
  plugins: [react()],
});
  