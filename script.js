// External JS for EEPL site - script.js
(function () {
  'use strict';

  const buildHeaderHtml = (active) => {
    const isActive = (name) => active === name ? 'bg-yellow-400 text-slate-900 shadow-[0_0_20px_rgba(250,204,21,0.4)]' : 'text-slate-700 hover:text-slate-900 hover:bg-yellow-400 hover:shadow-[0_0_20px_rgba(250,204,21,0.4)]';
    const isActiveMobile = (name) => active === name ? 'bg-yellow-400 text-slate-900 font-medium' : 'text-slate-700 hover:bg-gray-100 hover:text-yellow-600';
    return (
      '<header class="fixed top-0 left-0 right-0 z-50 flex justify-center px-4 py-3 transition-all duration-500" id="header">' +
      '<div id="nav-container" class="relative w-full max-w-7xl bg-white/95 backdrop-blur-xl rounded-2xl border-0 transition-all duration-500 shadow-[0_8px_30px_rgb(0,0,0,0.12)]">' +
      '<div class="px-6 py-3 flex justify-between items-center">' +
      '<a href="index.html" class="flex items-center group relative z-20">' +
      '<img src="public/assets/logo.svg" alt="Ecologic Engineering Logo" class="h-10 md:h-12 w-auto transition-transform duration-300 group-hover:scale-105">' +
      '</a>' +
      '<nav class="hidden md:flex items-center space-x-1 bg-gray-100/80 p-1.5 rounded-full border border-gray-200/50 backdrop-blur-sm">' +
      `<a href="index.html" class="px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${isActive('index')}">Home</a>` +
      `<a href="about_us.html" class="px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${isActive('about_us')}">About Us</a>` +
      `<a href="services.html" class="px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${isActive('services')}">Services</a>` +
      `<a href="projects.html" class="px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${isActive('projects')}">Projects</a>` +
      `<a href="clients.html" class="px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${isActive('clients')}">Clients</a>` +
      `<a href="contact_us.html" class="px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${isActive('contact_us')}">Contact</a>` +
      `<a href="carrers.html" class="px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${isActive('carrers')}">Careers</a>` +
      '</nav>' +
      '<button id="mobile-menu-button" class="md:hidden relative z-20 p-2 text-slate-700 hover:text-yellow-500 transition-colors focus:outline-none" aria-expanded="false" aria-controls="mobile-menu">' +
      '<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7"></path></svg>' +
      '</button>' +
      '</div>' +
      '<div id="mobile-menu" class="hidden absolute top-full left-0 w-full mt-2 bg-white/95 backdrop-blur-xl rounded-2xl shadow-xl border border-gray-200 overflow-hidden transition-all duration-300 origin-top">' +
      `<a href="index.html" class="block py-3 px-6 transition-colors ${isActiveMobile('index')}">Home</a>` +
      `<a href="about_us.html" class="block py-3 px-6 transition-colors ${isActiveMobile('about_us')}">About Us</a>` +
      `<a href="services.html" class="block py-3 px-6 transition-colors ${isActiveMobile('services')}">Services</a>` +
      `<a href="projects.html" class="block py-3 px-6 transition-colors ${isActiveMobile('projects')}">Projects</a>` +
      `<a href="clients.html" class="block py-3 px-6 transition-colors ${isActiveMobile('clients')}">Clients</a>` +
      `<a href="contact_us.html" class="block py-3 px-6 transition-colors ${isActiveMobile('contact_us')}">Contact</a>` +
      `<a href="carrers.html" class="block py-3 px-6 transition-colors ${isActiveMobile('carrers')}">Careers</a>` +
      '</div>' +
      '</div>' +
      '</header>'
    );
  };

  const buildFooterHtml = () => {
    return (
      '<!-- Premium Antigravity Footer -->' +
      '<footer class="relative bg-gradient-to-b from-slate-900 via-slate-900 to-black overflow-hidden">' +
      '<!-- Decorative Background Elements -->' +
      '<div class="absolute inset-0 pointer-events-none overflow-hidden">' +
      '<div class="absolute -top-40 -left-40 w-96 h-96 bg-green-500/5 rounded-full blur-3xl"></div>' +
      '<div class="absolute -bottom-40 -right-40 w-96 h-96 bg-teal-500/5 rounded-full blur-3xl"></div>' +
      '<div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] border border-white/5 rounded-full"></div>' +
      '<div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border border-white/3 rounded-full"></div>' +
      '</div>' +

      '<!-- Newsletter CTA Strip -->' +
      '<div class="relative border-b border-white/10">' +
      '<div class="container mx-auto px-6 py-10">' +
      '<div class="flex flex-col md:flex-row items-center justify-between gap-6">' +
      '<div class="text-center md:text-left">' +
      '<h3 class="text-2xl font-bold text-white mb-2">Stay Updated on Environmental Solutions</h3>' +
      '<p class="text-white/60">Get the latest insights, project updates, and industry news delivered to your inbox.</p>' +
      '</div>' +
      '<div class="flex flex-col sm:flex-row gap-3 w-full md:w-auto">' +
      '<input type="email" placeholder="Enter your email" class="px-6 py-3 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white placeholder-white/50 focus:outline-none focus:border-green-400 focus:ring-2 focus:ring-green-400/20 transition-all w-full sm:w-72">' +
      '<button class="px-8 py-3 bg-gradient-to-r from-green-500 to-teal-500 text-white font-bold rounded-full shadow-lg shadow-green-500/25 hover:shadow-xl hover:shadow-green-500/30 hover:-translate-y-0.5 transition-all duration-300">Subscribe</button>' +
      '</div>' +
      '</div>' +
      '</div>' +
      '</div>' +

      '<!-- Main Footer Content -->' +
      '<div class="relative container mx-auto px-6 py-16">' +
      '<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">' +

      '<!-- Company Overview - Floating Glass Panel -->' +
      '<div class="lg:col-span-2">' +
      '<div class="bg-white rounded-3xl p-8 border border-gray-200 hover:border-gray-300 transition-all duration-500 hover:-translate-y-1 hover:shadow-2xl">' +
      '<img src="public/assets/logo.svg" alt="EEPL Logo" class="h-14 mb-6 drop-shadow-lg">' +
      '<p class="text-gray-700 mb-6 leading-relaxed">Pioneering sustainable environmental engineering solutions since 2008. We transform industrial wastewater challenges into opportunities for a cleaner future.</p>' +

      '<!-- Social Links with Hover Lift -->' +
      '<div class="flex gap-3">' +
      '<a href="#" class="w-10 h-10 bg-gray-100 rounded-xl flex items-center justify-center text-gray-600 hover:text-white hover:bg-gradient-to-r hover:from-green-500 hover:to-teal-500 hover:-translate-y-1 hover:shadow-lg transition-all duration-300">' +
      '<svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/></svg>' +
      '</a>' +
      '<a href="#" class="w-10 h-10 bg-gray-100 rounded-xl flex items-center justify-center text-gray-600 hover:text-white hover:bg-gradient-to-r hover:from-blue-500 hover:to-blue-600 hover:-translate-y-1 hover:shadow-lg transition-all duration-300">' +
      '<svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>' +
      '</a>' +
      '<a href="#" class="w-10 h-10 bg-gray-100 rounded-xl flex items-center justify-center text-gray-600 hover:text-white hover:bg-gradient-to-r hover:from-red-500 hover:to-pink-500 hover:-translate-y-1 hover:shadow-lg transition-all duration-300">' +
      '<svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>' +
      '</a>' +
      '<a href="#" class="w-10 h-10 bg-gray-100 rounded-xl flex items-center justify-center text-gray-600 hover:text-white hover:bg-gradient-to-r hover:from-red-600 hover:to-red-700 hover:-translate-y-1 hover:shadow-lg transition-all duration-300">' +
      '<svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>' +
      '</a>' +
      '</div>' +
      '</div>' +
      '</div>' +

      '<!-- Services Column -->' +
      '<div>' +
      '<h4 class="text-lg font-bold text-white mb-6 flex items-center gap-2">' +
      '<span class="w-8 h-0.5 bg-gradient-to-r from-green-500 to-teal-500 rounded-full"></span>' +
      'Services' +
      '</h4>' +
      '<ul class="space-y-3">' +
      '<li><a href="services.html" class="text-white/60 hover:text-white hover:pl-2 transition-all duration-300 flex items-center gap-2 group"><span class="w-1.5 h-1.5 bg-green-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span>ETP Design & Installation</a></li>' +
      '<li><a href="services.html" class="text-white/60 hover:text-white hover:pl-2 transition-all duration-300 flex items-center gap-2 group"><span class="w-1.5 h-1.5 bg-green-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span>CETP Solutions</a></li>' +
      '<li><a href="services.html" class="text-white/60 hover:text-white hover:pl-2 transition-all duration-300 flex items-center gap-2 group"><span class="w-1.5 h-1.5 bg-green-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span>Zero Liquid Discharge</a></li>' +
      '<li><a href="services.html" class="text-white/60 hover:text-white hover:pl-2 transition-all duration-300 flex items-center gap-2 group"><span class="w-1.5 h-1.5 bg-green-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span>MVRE Systems</a></li>' +
      '<li><a href="services.html" class="text-white/60 hover:text-white hover:pl-2 transition-all duration-300 flex items-center gap-2 group"><span class="w-1.5 h-1.5 bg-green-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span>Environmental Consulting</a></li>' +
      '</ul>' +
      '</div>' +

      '<!-- Quick Links Column -->' +
      '<div>' +
      '<h4 class="text-lg font-bold text-white mb-6 flex items-center gap-2">' +
      '<span class="w-8 h-0.5 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full"></span>' +
      'Quick Links' +
      '</h4>' +
      '<ul class="space-y-3">' +
      '<li><a href="index.html" class="text-white/60 hover:text-white hover:pl-2 transition-all duration-300 flex items-center gap-2 group"><span class="w-1.5 h-1.5 bg-blue-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span>Home</a></li>' +
      '<li><a href="about_us.html" class="text-white/60 hover:text-white hover:pl-2 transition-all duration-300 flex items-center gap-2 group"><span class="w-1.5 h-1.5 bg-blue-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span>About Us</a></li>' +
      '<li><a href="projects.html" class="text-white/60 hover:text-white hover:pl-2 transition-all duration-300 flex items-center gap-2 group"><span class="w-1.5 h-1.5 bg-blue-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span>Projects</a></li>' +
      '<li><a href="clients.html" class="text-white/60 hover:text-white hover:pl-2 transition-all duration-300 flex items-center gap-2 group"><span class="w-1.5 h-1.5 bg-blue-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span>Clients</a></li>' +
      '<li><a href="contact_us.html" class="text-white/60 hover:text-white hover:pl-2 transition-all duration-300 flex items-center gap-2 group"><span class="w-1.5 h-1.5 bg-blue-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span>Contact Us</a></li>' +
      '</ul>' +
      '</div>' +

      '<!-- Contact Column -->' +
      '<div>' +
      '<h4 class="text-lg font-bold text-white mb-6 flex items-center gap-2">' +
      '<span class="w-8 h-0.5 bg-gradient-to-r from-amber-500 to-orange-500 rounded-full"></span>' +
      'Contact' +
      '</h4>' +
      '<div class="space-y-4">' +
      '<a href="mailto:info@eepl.co.in" class="flex items-center gap-3 text-white/60 hover:text-white transition-all duration-300 group">' +
      '<div class="w-10 h-10 bg-white/10 rounded-xl flex items-center justify-center group-hover:bg-gradient-to-r group-hover:from-green-500 group-hover:to-teal-500 group-hover:-translate-y-0.5 transition-all duration-300">' +
      '<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>' +
      '</div>' +
      '<span class="text-sm">projects@ecologicengineering.co.in</span>' +
      '</a>' +
      '<a href="tel:+919876543210" class="flex items-center gap-3 text-white/60 hover:text-white transition-all duration-300 group">' +
      '<div class="w-10 h-10 bg-white/10 rounded-xl flex items-center justify-center group-hover:bg-gradient-to-r group-hover:from-green-500 group-hover:to-teal-500 group-hover:-translate-y-0.5 transition-all duration-300">' +
      '<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg>' +
      '</div>' +
      '<span class="text-sm">+91-9876543210</span>' +
      '</a>' +
      '<div class="flex items-start gap-3 text-white/60">' +
      '<div class="w-10 h-10 bg-white/10 rounded-xl flex items-center justify-center flex-shrink-0">' +
      '<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>' +
      '</div>' +
      '<span class="text-sm">Bangalore, Karnataka<br>India</span>' +
      '</div>' +
      '</div>' +
      '</div>' +
      '</div>' +
      '</div>' +

      '<!-- Bottom Bar with Glow Divider -->' +
      '<div class="relative">' +
      '<div class="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-green-500/50 to-transparent"></div>' +
      '<div class="container mx-auto px-6 py-8">' +
      '<div class="flex flex-col md:flex-row items-center justify-between gap-4">' +
      '<p class="text-white/40 text-sm text-center md:text-left">&copy; ' + new Date().getFullYear() + ' Ecologic Engineering Pvt. Ltd. All rights reserved.</p>' +
      '<div class="flex items-center gap-6 text-sm text-white/40">' +
      '<a href="#" class="hover:text-white transition-colors">Privacy Policy</a>' +
      '<span class="text-white/20">|</span>' +
      '<a href="#" class="hover:text-white transition-colors">Terms of Service</a>' +
      '<span class="text-white/20">|</span>' +
      '<a href="#" class="hover:text-white transition-colors">Sitemap</a>' +
      '</div>' +
      '</div>' +
      '</div>' +
      '</div>' +
      '</footer>'
    );
  };


  const getActiveKey = () => {
    const path = (window.location.pathname || '').split('/').pop() || 'index.html';
    const name = path.replace('.html', '');
    return name || 'index';
  };

  const injectLayout = () => {
    const active = getActiveKey();
    const headerExisting = document.querySelector('body > header');
    const footerExisting = document.querySelector('body > footer');

    const headerHtml = buildHeaderHtml(active);
    const footerHtml = buildFooterHtml();

    if (headerExisting) {
      headerExisting.outerHTML = headerHtml;
    } else {
      const wrapper = document.createElement('div');
      wrapper.innerHTML = headerHtml;
      const headerNode = wrapper.firstChild;
      document.body.insertBefore(headerNode, document.body.firstChild);
    }

    if (footerExisting) {
      footerExisting.outerHTML = footerHtml;
    } else {
      const wrapperF = document.createElement('div');
      wrapperF.innerHTML = footerHtml;
      const footerNode = wrapperF.firstChild;
      document.body.appendChild(footerNode);
    }
  };

  const setupBehavior = () => {
    // Mobile Menu Toggle (safe null-checks)
    const mobileMenuButton = document.getElementById('mobile-menu-button');
    const mobileMenu = document.getElementById('mobile-menu');
    if (mobileMenuButton && mobileMenu) {
      mobileMenuButton.addEventListener('click', () => {
        const expanded = mobileMenuButton.getAttribute('aria-expanded') === 'true';
        mobileMenuButton.setAttribute('aria-expanded', String(!expanded));
        mobileMenu.classList.toggle('hidden');
      });
    }

    // Smooth scrolling for internal links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        const targetSelector = this.getAttribute('href');
        if (!targetSelector || targetSelector === '#') return;
        const target = document.querySelector(targetSelector);
        if (target) {
          e.preventDefault();
          target.scrollIntoView({ behavior: 'smooth' });
          if (mobileMenu && !mobileMenu.classList.contains('hidden')) {
            mobileMenu.classList.add('hidden');
            if (mobileMenuButton) mobileMenuButton.setAttribute('aria-expanded', 'false');
          }
        }
      });
    });

    // Header background on scroll
    const header = document.querySelector('header');
    if (header) {
      const onScroll = () => {
        if (window.scrollY > 50) {
          header.classList.add('bg-white/80', 'backdrop-blur', 'shadow');
        } else {
          header.classList.remove('bg-white/80', 'backdrop-blur', 'shadow');
        }
      };
      window.addEventListener('scroll', onScroll);
      onScroll();
    }
  };

  const setupAnimations = () => {
    // IntersectionObserver fade-in
    const faders = document.querySelectorAll('.fade-in');
    if ('IntersectionObserver' in window && faders.length) {
      const appearOptions = { threshold: 0.2, rootMargin: '0px 0px -50px 0px' };
      const appearOnScroll = new IntersectionObserver(function (entries, observer) {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
          }
        });
      }, appearOptions);
      faders.forEach(f => appearOnScroll.observe(f));
    } else {
      faders.forEach(f => f.classList.add('visible'));
    }
  };

  const onReady = () => {
    injectLayout();
    setupBehavior();
    setupAnimations();
  };

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', onReady);
  } else {
    onReady();
  }

})();