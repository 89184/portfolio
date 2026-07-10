// Utility to add serial prefixes to section labels
function applySectionNumbers() {
  const sections = document.querySelectorAll('.section');
  sections.forEach(sec => {
    const serial = sec.getAttribute('data-serial');
    const label = sec.querySelector('.section-label');
    if (label && serial && !label.querySelector('.section-index')) {
      const span = document.createElement('span');
      span.className = 'section-index';
      span.setAttribute('aria-hidden', 'true');
      span.textContent = `${serial}. `;
      label.prepend(span);
    }

    // add floating badge inside card if label missing
    const card = sec.querySelector('.card-3d');
    if (card && serial && !card.querySelector('.section-serial-badge')) {
      const badge = document.createElement('div');
      badge.className = 'section-serial-badge';
      badge.setAttribute('aria-hidden', 'true');
      badge.textContent = serial;
      card.appendChild(badge);
    }
  });
}

// Observe mutations to catch dynamically loaded sections
const appRoot = document.getElementById('app');
if (appRoot) {
  const mo = new MutationObserver((mutations) => {
    let added = false;
    for (const m of mutations) {
      if (m.addedNodes && m.addedNodes.length) { added = true; break; }
    }
    if (added) setTimeout(applySectionNumbers, 50);
  });
  mo.observe(appRoot, { childList: true, subtree: false });
}

document.addEventListener('portfolio-ready', applySectionNumbers);
document.addEventListener('DOMContentLoaded', () => setTimeout(applySectionNumbers, 80));
