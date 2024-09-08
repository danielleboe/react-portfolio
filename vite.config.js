import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/api': {
        target: import.meta.env.VITE_API_URL || 'http://localhost:5000', // Backend API URL
        changeOrigin: true,
        secure: false, // Adjust based on your backend configuration
      },
    },
  },
});
