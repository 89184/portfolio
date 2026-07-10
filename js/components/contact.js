export function initContact() {
  const sec = document.querySelector('.contact-section');
  if (!sec) return;
  sec.querySelectorAll('.contact-link').forEach((el) => el.setAttribute('role', 'listitem'));
}

document.addEventListener('portfolio-ready', initContact);
