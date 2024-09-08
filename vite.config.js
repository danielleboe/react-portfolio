import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    port: 5173, // Your Vite dev server port
    proxy: {
      '/api': {
        target: 'http://localhost:5100', // Local backend URL for development
        changeOrigin: true,
        secure: false, // Adjust based on your backend's protocol
      },
    },
  },
});
