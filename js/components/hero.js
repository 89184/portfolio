// ── Hero Component - AI/ML Particle Animation ──
// Optimized for Performance (CLS, LCP, FPS)

export function initHeroParticles() {
  const canvas = document.getElementById('particleCanvas');
  if (!canvas) {
    console.warn('⚠️ Particle canvas not found');
    return;
  }

  const ctx = canvas.getContext('2d');
  let width, height;
  let particles = [];
  let animationId = null;
  let isVisible = false;
  
  // ── Performance: FPS Throttling ──
  let lastFrameTime = 0;
  const TARGET_FPS = 30; // 30 FPS is enough for background particles
  const FRAME_INTERVAL = 1000 / TARGET_FPS;

  function resizeCanvas() {
    const rect = canvas.parentElement?.getBoundingClientRect();
    if (!rect) return;
    
    // Use devicePixelRatio for sharper rendering on retina displays
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    canvas.width = rect.width * dpr;
    canvas.height = rect.height * dpr;
    canvas.style.width = rect.width + 'px';
    canvas.style.height = rect.height + 'px';
    
    width = canvas.width;
    height = canvas.height;
    
    // Scale context for retina
    ctx.scale(dpr, dpr);
  }

  // ── Particle Class ──
  class Particle {
    constructor() {
      this.reset();
    }

    reset() {
      this.x = Math.random() * width;
      this.y = Math.random() * height;
      this.size = Math.random() * 2.5 + 0.5; // Smaller particles = better performance
      this.speedX = (Math.random() - 0.5) * 0.4;
      this.speedY = (Math.random() - 0.5) * 0.4;
      this.opacity = Math.random() * 0.25 + 0.05;
      this.pulseSpeed = Math.random() * 0.015 + 0.005;
      this.pulsePhase = Math.random() * Math.PI * 2;
      this.color = Math.random() > 0.6 ? '37, 99, 235' : '13, 148, 136';
    }

    update() {
      this.x += this.speedX;
      this.y += this.speedY;
      this.pulsePhase += this.pulseSpeed;

      // Wrap around edges
      if (this.x < -10) this.x = width + 10;
      if (this.x > width + 10) this.x = -10;
      if (this.y < -10) this.y = height + 10;
      if (this.y > height + 10) this.y = -10;

      this.currentOpacity = this.opacity * (0.6 + 0.4 * Math.sin(this.pulsePhase));
    }

    draw() {
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(${this.color}, ${this.currentOpacity})`;
      ctx.fill();
    }
  }

  function initParticles() {
    // Reduce particle count for better performance (40 instead of 60)
    const particleCount = Math.min(40, Math.floor((width * height) / 50000));
    particles = [];
    for (let i = 0; i < particleCount; i++) {
      particles.push(new Particle());
    }
  }

  function drawConnections() {
    const maxDistance = Math.min(150, Math.max(100, (width + height) / 12));
    const connectionOpacity = 0.06;
    
    // Only draw connections if there are particles
    if (particles.length < 2) return;
    
    for (let i = 0; i < particles.length; i++) {
      for (let j = i + 1; j < particles.length; j++) {
        const dx = particles[i].x - particles[j].x;
        const dy = particles[i].y - particles[j].y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        
        if (distance < maxDistance) {
          const opacity = (1 - distance / maxDistance) * connectionOpacity;
          ctx.beginPath();
          ctx.moveTo(particles[i].x, particles[i].y);
          ctx.lineTo(particles[j].x, particles[j].y);
          ctx.strokeStyle = `rgba(37, 99, 235, ${opacity})`;
          ctx.lineWidth = 0.5;
          ctx.stroke();
        }
      }
    }
  }

  // ── Optimized Animation Loop ──
  function animate(timestamp) {
    // FPS Throttling
    if (timestamp - lastFrameTime < FRAME_INTERVAL) {
      animationId = requestAnimationFrame(animate);
      return;
    }
    lastFrameTime = timestamp;

    // Clear canvas with performance in mind
    ctx.clearRect(0, 0, width, height);
    
    // Update and draw particles
    const len = particles.length;
    for (let i = 0; i < len; i++) {
      particles[i].update();
      particles[i].draw();
    }
    
    // Draw connections (skip if too many particles for performance)
    if (len < 30) {
      drawConnections();
    }
    
    animationId = requestAnimationFrame(animate);
  }

  function init() {
    resizeCanvas();
    initParticles();
    if (animationId) {
      cancelAnimationFrame(animationId);
      animationId = null;
    }
    lastFrameTime = 0;
    animationId = requestAnimationFrame(animate);
    isVisible = true;
  }

  function stop() {
    if (animationId) {
      cancelAnimationFrame(animationId);
      animationId = null;
    }
    isVisible = false;
  }

  // ── Intersection Observer (Start/Stop on visibility) ──
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting && !isVisible) {
        init();
      } else if (!entry.isIntersecting && isVisible) {
        stop();
      }
    });
  }, { threshold: 0.1 });

  observer.observe(canvas);

  // ── Debounced Resize Handler ──
  let resizeTimeout = null;
  const handleResize = () => {
    if (resizeTimeout) {
      cancelAnimationFrame(resizeTimeout);
      resizeTimeout = null;
    }
    resizeTimeout = requestAnimationFrame(() => {
      if (isVisible) {
        resizeCanvas();
        initParticles();
      }
      resizeTimeout = null;
    });
  };

  window.addEventListener('resize', handleResize, { passive: true });

  // ── Cleanup ──
  return () => {
    stop();
    observer.disconnect();
    window.removeEventListener('resize', handleResize);
    if (resizeTimeout) {
      cancelAnimationFrame(resizeTimeout);
      resizeTimeout = null;
    }
  };
}

// ── Initialize when portfolio is ready ──
document.addEventListener('portfolio-ready', initHeroParticles);