export function initSummary() {
  const sec = document.querySelector('.summary-section');
  if (!sec) return;
  const card = sec.querySelector('.card-3d') || sec;
  card.setAttribute('role', 'region');
  card.setAttribute('aria-label', sec.querySelector('.section-label')?.textContent?.trim() || 'Summary');
}

document.addEventListener('portfolio-ready', initSummary);
