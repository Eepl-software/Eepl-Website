// vite.config.js
import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
  base: '/',
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        about: resolve(__dirname, 'about.html'),
        services: resolve(__dirname, 'services.html'),
        projects: resolve(__dirname, 'projects.html'),
        clients: resolve(__dirname, 'clients.html'),
        contact: resolve(__dirname, 'contact.html'),
        careers: resolve(__dirname, 'careers.html'),
        endurance: resolve(__dirname, 'endurance.html'),
      },
    },
  },
});
