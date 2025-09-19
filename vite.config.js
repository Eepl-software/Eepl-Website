// vite.config.js
import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
  // For GitHub Pages project site deployment
  // Repo: Eepl-software/Eepl-Website => base should be '/Eepl-Website/'
  base: '/Eepl-Website/',
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        about: resolve(__dirname, 'about_us.html'), // Assuming you have this file
        services: resolve(__dirname, 'services.html'),
        projects: resolve(__dirname, 'projects.html'),
        clients: resolve(__dirname, 'clients.html'),
        contact: resolve(__dirname, 'contact_us.html'),
      },
    },
  },
});