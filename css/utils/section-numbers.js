// ── Section Numbers Utility ──
// Adds numbered badges to each section for better navigation

export function initSectionNumbers() {
  const sections = document.querySelectorAll('.section:not(.hero-section):not(.summary-section)');
  
  sections.forEach((section, index) => {
    // Add data attribute for section number
    section.dataset.sectionNumber = index + 1;
    
    // Optional: Add a small badge to the section
    const card = section.querySelector('.card-3d');
    if (card) {
      const badge = document.createElement('span');
      badge.className = 'section-number-badge';
      badge.textContent = `#${index + 1}`;
      badge.style.cssText = `
        position: absolute;
        top: 1rem;
        right: 1.5rem;
        font-size: 0.7rem;
        font-weight: 700;
        color: rgba(37, 99, 235, 0.2);
        letter-spacing: 1px;
        z-index: 10;
        pointer-events: none;
        font-family: 'Courier New', monospace;
      `;
      card.appendChild(badge);
    }
  });
  
  console.log(`✅ ${sections.length} sections numbered`);
}

// Auto-initialize when portfolio is ready
document.addEventListener('portfolio-ready', initSectionNumbers);