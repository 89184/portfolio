export function initAchievements() {
  const sec = document.querySelector('.achievements-section');
  if (!sec) return;
  // ensure list has role
  const list = sec.querySelector('.achieve-list');
  if (list) list.setAttribute('role', 'list');
}

document.addEventListener('portfolio-ready', initAchievements);
