// Toggle class on hamburger menu

const menu = document.querySelector('.navigation__hamburger');

menu.addEventListener('click', () => {
  menu.classList.toggle('navigation__hamburger--active');
});