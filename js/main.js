// ── Main Application Entry Point ──
import SectionLoader from './loaders/section-loader.js';
// 3D Tilt removed - using 2D effects
import { initScrollReveal } from './interactions/scroll-reveal.js';

// ── Component Imports ──
import './components/hero.js';
import './components/summary.js';
import './components/skills.js';
import './components/achievements.js';
import './components/projects.js';
import './components/experience.js';
import './components/certifications.js';
import './components/education.js';
import './components/testimonials.js';
import './components/contact.js';

class PortfolioApp {
  constructor() {
    this.sections = [
      'hero',
      'summary',
      'skills',
      'achievements',
      'projects',
      'experience',
      'certifications',
      'education',
      'testimonials',
      'contact'
    ];
    
    this.container = document.getElementById('app');
    this.loader = new SectionLoader(this.container);
    this.init();
  }

  async init() {
    try {
      await this.loader.loadAll(this.sections);
      console.log(' All sections loaded');
      
      await new Promise(resolve => setTimeout(resolve, 100));
      
      this.setupInteractions();
      this.checkReducedMotion();
      console.log('Portfolio ready! 🚀');
    } catch (error) {
      console.error('Failed to initialize portfolio:', error);
    }
  }

  setupInteractions() {
    // ── Initialize Scroll Reveal (2D) ──
    try {
      initScrollReveal();
      console.log(' Scroll reveal initialized');
    } catch (e) {
      console.warn(' Scroll reveal init failed:', e);
    }

    // ── Dispatch ready event ──
    document.dispatchEvent(new CustomEvent('portfolio-ready'));
  }

  checkReducedMotion() {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
    
    if (prefersReducedMotion.matches) {
      document.querySelectorAll('.section').forEach((sec) => {
        sec.classList.add('visible');
        sec.style.opacity = '1';
        sec.style.transform = 'none';
        sec.style.transitionDelay = '0s';
      });
      
      console.log('♿ Reduced motion preferences applied');
    }
  }
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', () => new PortfolioApp());
} else {
  new PortfolioApp();
}