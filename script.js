// External JS for EEPL site - script.js
(function(){
  'use strict';

  const buildHeaderHtml = (active) => {
    const isActive = (name) => active === name ? 'text-emerald-500 font-semibold' : 'text-gray-700 hover:text-emerald-600';
    const isActiveMobile = (name) => active === name ? 'bg-emerald-100 text-emerald-900 font-medium' : 'hover:bg-gray-50 dark:hover:bg-gray-800';
    return (
      '<header class="fixed top-0 left-0 w-full z-50 transition-all duration-300 header-style">' +
        '<div class="container mx-auto px-6 py-4 flex justify-between items-center">' +
          '<a href="index.html" class="flex items-center">' +
            '<img src="public/assets/eepl_logo.png" alt="Ecologic Engineering Logo" class="h-12">' +
          '</a>' +
          '<nav class="hidden md:flex items-center space-x-8">' +
            `<a href="index.html" class="nav-link font-medium ${isActive('index')}">Home</a>` +
            `<a href="about_us.html" class="nav-link font-medium ${isActive('about_us')}">About Us</a>` +
            `<a href="services.html" class="nav-link font-medium ${isActive('services')}">Services</a>` +
            `<a href="projects.html" class="nav-link font-medium ${isActive('projects')}">Projects</a>` +
            `<a href="clients.html" class="nav-link font-medium ${isActive('clients')}">Clients</a>` +
            `<a href="tasks.html" class="nav-link font-medium ${isActive('tasks')}">Tasks</a>` +
            `<a href="contact_us.html" class="nav-link font-medium ${isActive('contact_us')}">Contact</a>` +
            `<a href="carrers.html" class="nav-link font-medium ${isActive('carrers')}">Careers</a>` +
            '<button id="theme-toggle" type="button" class="ml-4 text-gray-500 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none rounded-lg text-sm p-2.5">' +
              '<svg id="theme-toggle-dark-icon" class="hidden w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"></path></svg>' +
              '<svg id="theme-toggle-light-icon" class="hidden w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm-.707 12.02a1 1 0 010-1.414l.707-.707a1 1 0 111.414 1.414l-.707.707a1 1 0 01-1.414 0zM1 11a1 1 0 100-2H0a1 1 0 100 2h1z"></path></svg>' +
            '</button>' +
          '</nav>' +
          '<button id="mobile-menu-button" class="md:hidden focus:outline-none" aria-expanded="false" aria-controls="mobile-menu">' +
            '<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7"></path></svg>' +
          '</button>' +
        '</div>' +
        '<div id="mobile-menu" class="hidden md:hidden bg-white dark:bg-gray-900 border-t">' +
          `<a href="index.html" class="block py-3 px-6 ${isActiveMobile('index')}">Home</a>` +
          `<a href="about_us.html" class="block py-3 px-6 ${isActiveMobile('about_us')}">About Us</a>` +
          `<a href="services.html" class="block py-3 px-6 ${isActiveMobile('services')}">Services</a>` +
          `<a href="projects.html" class="block py-3 px-6 ${isActiveMobile('projects')}">Projects</a>` +
          `<a href="clients.html" class="block py-3 px-6 ${isActiveMobile('clients')}">Clients</a>` +
          `<a href="tasks.html" class="block py-3 px-6 ${isActiveMobile('tasks')}">Tasks</a>` +
          `<a href="contact_us.html" class="block py-3 px-6 ${isActiveMobile('contact_us')}">Contact</a>` +
          `<a href="carrers.html" class="block py-3 px-6 ${isActiveMobile('carrers')}">Careers</a>` +
        '</div>' +
      '</header>'
    );
  };

  const buildFooterHtml = () => {
    return (
      '<footer class="bg-slate-900 text-white py-12">' +
        '<div class="container mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">' +
          '<div>' +
            '<h3 class="text-xl font-semibold mb-4">Ecologic Engineering Pvt. Ltd.</h3>' +
            '<p class="text-gray-300">Engineering sustainable water and wastewater solutions.</p>' +
          '</div>' +
          '<div>' +
            '<h4 class="font-semibold mb-2">Quick Links</h4>' +
            '<ul class="space-y-2 text-gray-300">' +
              '<li><a class="hover:text-white" href="about_us.html">About Us</a></li>' +
              '<li><a class="hover:text-white" href="services.html">Services</a></li>' +
              '<li><a class="hover:text-white" href="projects.html">Projects</a></li>' +
              '<li><a class="hover:text-white" href="clients.html">Clients</a></li>' +
              '<li><a class="hover:text-white" href="contact_us.html">Contact</a></li>' +
              '<li><a class="hover:text-white" href="carrers.html">Careers</a></li>' +
            '</ul>' +
          '</div>' +
          '<div>' +
            '<h4 class="font-semibold mb-2">Contact</h4>' +
            '<p class="text-gray-300">Email: info@eepl.example</p>' +
            '<p class="text-gray-300">Phone: +91-00000-00000</p>' +
          '</div>' +
        '</div>' +
        '<div class="mt-8 text-center text-gray-400 text-sm">© ' + new Date().getFullYear() + ' EEPL. All rights reserved.</div>' +
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
      anchor.addEventListener('click', function(e){
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
      const appearOnScroll = new IntersectionObserver(function(entries, observer) {
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