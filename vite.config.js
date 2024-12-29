import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  server: {
    port: 3000, // Or any available port number you prefer
    host: '0.0.0.0' // Ensures it listens on all network interfaces
  },
  plugins: [react()],
});

