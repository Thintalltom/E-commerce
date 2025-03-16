import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: './', //this helps in hosting to s3 bucket
  test: {
    // 👋 add the line below to add jsdom to vite
    environment: 'jsdom',
    globals: true,
    setupFiles: ['./src/test/Setup.js'],
    // 👋 add the line below to add jsdom to vite
  }
});