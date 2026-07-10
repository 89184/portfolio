// Projects Component - Click to Expand with Text Animation

export function initProjects() {
  const projectCards = document.querySelectorAll('.project-card');
  
  projectCards.forEach((card) => {
    // ── Click to expand/collapse ──
    card.addEventListener('click', function(e) {
      // Don't expand if clicking on a link or close button
      if (e.target.closest('a')) return;
      if (e.target.closest('.detail-close-btn')) return;
      
      // Close any other expanded cards
      document.querySelectorAll('.project-card.expanded').forEach((c) => {
        if (c !== this) {
          c.classList.remove('expanded');
          // Reset animations on other cards
          resetAnimations(c);
        }
      });
      
      this.classList.toggle('expanded');
      
      // Disable body scroll when expanded
      if (this.classList.contains('expanded')) {
        document.body.style.overflow = 'hidden';
        // Trigger text animations
        setTimeout(() => {
          triggerTextAnimations(this);
        }, 200);
      } else {
        document.body.style.overflow = '';
        // Reset animations
        resetAnimations(this);
      }
    });
  });
  
  // ── Close on Escape key ──
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      document.querySelectorAll('.project-card.expanded').forEach((card) => {
        card.classList.remove('expanded');
        document.body.style.overflow = '';
        resetAnimations(card);
      });
    }
  });
  
  // ── Close on clicking outside the expanded card ──
  document.addEventListener('click', function(e) {
    const expandedCards = document.querySelectorAll('.project-card.expanded');
    if (expandedCards.length > 0) {
      expandedCards.forEach((card) => {
        // Check if click is outside the card
        if (!card.contains(e.target)) {
          card.classList.remove('expanded');
          document.body.style.overflow = '';
          resetAnimations(card);
        }
      });
    }
  });
}

// ── Trigger Text Animations ──
function triggerTextAnimations(card) {
  const detailView = card.querySelector('.project-detail-view');
  if (!detailView) return;
  
  // Get all animated elements
  const elements = detailView.querySelectorAll('.detail-header, .detail-section, .detail-tech, .detail-links, .detail-close-btn');
  
  // Reset animations first
  elements.forEach((el, index) => {
    el.style.animation = 'none';
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px) scale(0.95)';
    
    // Trigger reflow
    void el.offsetHeight;
    
    // Apply animation with delay
    const delay = 0.05 + (index * 0.08);
    el.style.animation = `textReveal 0.6s cubic-bezier(0.34, 1.56, 0.64, 1) ${delay}s forwards`;
  });
}

// ── Reset Animations ──
function resetAnimations(card) {
  const detailView = card.querySelector('.project-detail-view');
  if (!detailView) return;
  
  const elements = detailView.querySelectorAll('.detail-header, .detail-section, .detail-tech, .detail-links, .detail-close-btn');
  
  elements.forEach((el) => {
    el.style.animation = 'none';
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px) scale(0.95)';
  });
}

// ── Close function for the close button ──
window.closeProjectCard = function(btn) {
  const card = btn.closest('.project-card');
  if (card) {
    card.classList.remove('expanded');
    document.body.style.overflow = '';
    resetAnimations(card);
  }
}

// Initialize when portfolio is ready
document.addEventListener('portfolio-ready', initProjects);