export function initTestimonials() {
  const sec = document.querySelector('.testimonials-section');
  if (!sec) return;
  sec.querySelectorAll('figure').forEach(f => f.setAttribute('role', 'figure'));
}

document.addEventListener('portfolio-ready', initTestimonials);
