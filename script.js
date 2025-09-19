// External JS for EEPL site - script.js
(function(){
  'use strict';

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

  // IntersectionObserver fade-in
  const faders = document.querySelectorAll('.fade-in');
  if ('IntersectionObserver' in window && faders.length) {
    const appearOptions = { threshold: 0.2, rootMargin: "0px 0px -50px 0px" };
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
        header.classList.add('bg-primary/95', 'shadow-2xl');
      } else {
        header.classList.remove('bg-primary/95', 'shadow-2xl');
      }
    };
    window.addEventListener('scroll', onScroll);
    onScroll();
  }

})();