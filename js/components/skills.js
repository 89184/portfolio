// Skills Component - Interactive Skill Tags with Count Animation

export function initSkills() {
  const skillsSection = document.querySelector('.skills-section');
  if (!skillsSection) return;

  // ── Skill Tags Interaction ──
  const skillTags = skillsSection.querySelectorAll('.skill-tag');
  
  skillTags.forEach((tag) => {
    tag.addEventListener('click', function() {
      this.classList.toggle('active');
    });
    tag.setAttribute('role', 'button');
    tag.setAttribute('tabindex', '0');
    tag.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        tag.click();
      }
    });
  });

  // ── Count Animation for Statistics ──
  const statNumbers = skillsSection.querySelectorAll('.stat-number');
  
  statNumbers.forEach((stat) => {
    const target = parseInt(stat.getAttribute('data-count'), 10);
    if (isNaN(target)) return;
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          animateCount(stat, target);
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.5 });
    
    observer.observe(stat);
  });
  
  function animateCount(element, target) {
    let current = 0;
    const duration = 1200;
    const stepTime = 16;
    const steps = duration / stepTime;
    const increment = target / steps;
    
    const timer = setInterval(() => {
      current += increment;
      if (current >= target) {
        current = target;
        clearInterval(timer);
      }
      element.textContent = Math.floor(current) + '+';
    }, stepTime);
  }
}

document.addEventListener('portfolio-ready', initSkills);