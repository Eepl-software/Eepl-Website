// vite.config.js
import { defineConfig } from 'vite';
import { resolve } from 'path';

// Use '/' on Vercel, '/Eepl-Website/' on GitHub Pages
const isVercel = process.env.VERCEL === '1';

export default defineConfig({
  base: isVercel ? '/' : '/Eepl-Website/',
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        about: resolve(__dirname, 'about_us.html'),
        services: resolve(__dirname, 'services.html'),
        projects: resolve(__dirname, 'projects.html'),
        clients: resolve(__dirname, 'clients.html'),
        contact: resolve(__dirname, 'contact_us.html'),
        careers: resolve(__dirname, 'carrers.html'),
      },
    },
  },
});