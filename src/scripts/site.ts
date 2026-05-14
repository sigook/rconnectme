(function () {
  'use strict';

  const navbar = document.getElementById('navbar');
  if (navbar) {
    const handleNavbarScroll = () => {
      if (window.scrollY > 10) navbar.classList.add('navbar--scrolled');
      else navbar.classList.remove('navbar--scrolled');
    };
    window.addEventListener('scroll', handleNavbarScroll, { passive: true });
    handleNavbarScroll();
  }

  const navToggle = document.getElementById('navToggle');
  const navMenu = document.getElementById('navMenu');

  if (navToggle && navMenu) {
    navToggle.addEventListener('click', () => {
      const isOpen = navMenu.classList.toggle('is-open');
      navToggle.setAttribute('aria-expanded', String(isOpen));
    });

    navMenu.querySelectorAll('.navbar__link').forEach((link) => {
      link.addEventListener('click', () => {
        navMenu.classList.remove('is-open');
        navToggle.setAttribute('aria-expanded', 'false');
      });
    });

    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && navMenu.classList.contains('is-open')) {
        navMenu.classList.remove('is-open');
        navToggle.setAttribute('aria-expanded', 'false');
        navToggle.focus();
      }
    });
  }

  const animatedElements = document.querySelectorAll(
    '.mission__card, .pillar, .stakeholder-card, .stat, .process__step, .challenge__item, .experience__card'
  );

  animatedElements.forEach((el) => el.classList.add('fade-in'));

  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  if (!prefersReducedMotion && 'IntersectionObserver' in window) {
    const staggerDelays = new Map<Element, number>();

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const delay = staggerDelays.get(entry.target) || 0;
            setTimeout(() => entry.target.classList.add('visible'), delay);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15, rootMargin: '0px 0px -40px 0px' }
    );

    const parentGroups = new Map<Element, Element[]>();
    animatedElements.forEach((el) => {
      const parent = el.parentElement;
      if (!parent) return;
      if (!parentGroups.has(parent)) parentGroups.set(parent, []);
      parentGroups.get(parent)!.push(el);
    });

    parentGroups.forEach((children) => {
      children.forEach((el, index) => {
        staggerDelays.set(el, index * 80);
        observer.observe(el);
      });
    });
  } else {
    animatedElements.forEach((el) => el.classList.add('visible'));
  }

  document.querySelectorAll<HTMLAnchorElement>('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener('click', function (e) {
      const targetId = this.getAttribute('href');
      if (!targetId || targetId === '#') return;
      const targetEl = document.querySelector(targetId);
      if (targetEl) {
        e.preventDefault();
        targetEl.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });
})();
