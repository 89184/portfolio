export function initExperience() {
  const expSection = document.querySelector('.experience-section');
  if (!expSection) return;

  const expItems = expSection.querySelectorAll('.exp-item');
  
  expItems.forEach((item) => {
    const header = item.querySelector('.exp-header');
    const details = item.querySelector('.exp-details');
    
    if (header && details && window.innerWidth <= 600) {
      details.style.maxHeight = '0';
      details.style.overflow = 'hidden';
      details.style.transition = 'max-height 0.3s ease';
      
      header.style.cursor = 'pointer';
      header.addEventListener('click', () => {
        const isOpen = details.style.maxHeight !== '0px';
        details.style.maxHeight = isOpen ? '0' : `${details.scrollHeight + 20}px`;
        header.querySelector('.exp-role').style.color = isOpen ? '' : '#60a5fa';
      });
    }
  });
}

document.addEventListener('portfolio-ready', initExperience);
