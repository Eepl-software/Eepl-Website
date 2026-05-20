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
        epcProjects: resolve(__dirname, 'epc-projects.html'),
        zldMvre: resolve(__dirname, 'zld-mvre.html'),
        etpStpCetp: resolve(__dirname, 'etp-stp-cetp.html'),
        omAmc: resolve(__dirname, 'om-amc.html'),
        wasteToEnergy: resolve(__dirname, 'waste-to-energy.html'),
        labAnalytics: resolve(__dirname, 'lab-analytics.html'),
        industriesServed: resolve(__dirname, 'industries-served.html'),
        seoResources: resolve(__dirname, 'seo-resources.html'),
        etpVsStpVsCetp: resolve(__dirname, 'etp-vs-stp-vs-cetp.html'),
        whatIsZld: resolve(__dirname, 'what-is-zld.html'),
        chooseEtpContractor: resolve(__dirname, 'choose-etp-contractor.html'),
        omChecklist: resolve(__dirname, 'om-checklist.html'),
        smartWaterManagement: resolve(__dirname, 'smart-water-management.html'),
        complianceSupport: resolve(__dirname, 'compliance-support.html'),
      },
    },
  },
});
