import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    port: 5173, // Your Vite dev server port
    proxy: {
      '/api': {
        target: 'http://localhost:5100', // The URL of your backend server
        changeOrigin: true,
        secure: false, // If you're running the backend locally with HTTP
      },
    },
  },
});
