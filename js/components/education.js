export function initEducation() {
  const sec = document.querySelector('.education-section');
  if (!sec) return;
  sec.querySelectorAll('.edu-item').forEach(e => e.setAttribute('role', 'article'));
}

document.addEventListener('portfolio-ready', initEducation);
