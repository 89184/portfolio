// Scroll Reveal - Intersection Observer
export function initScrollReveal(options = {}) {
  const defaultOptions = {
    threshold: 0.15,
    rootMargin: '0px 0px -50px 0px'
  };
  
  const config = { ...defaultOptions, ...options };
  const sections = document.querySelectorAll('.section');

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        
        // Optional: trigger custom event for analytics
        const sectionName = entry.target.className.split(' ')[1]?.replace('-section', '');
        if (sectionName) {
          document.dispatchEvent(new CustomEvent('section-visible', { 
            detail: { section: sectionName } 
          }));
        }
      }
    });
  }, config);

  sections.forEach((sec) => observer.observe(sec));
}