export function initCertifications() {
  const sec = document.querySelector('.certifications-section');
  if (!sec) return;
  sec.querySelectorAll('.cert-item').forEach(ci => ci.setAttribute('role', 'article'));
}

document.addEventListener('portfolio-ready', initCertifications);
