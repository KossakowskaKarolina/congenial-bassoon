// Toggle class on hamburger menu

const menu = document.querySelector('.navigation__hamburger');
const navMenu = document.querySelector('.navigation__menu');

menu.addEventListener('click', () => {
  menu.classList.toggle('navigation__hamburger--active');
  navMenu.classList.toggle('navigation__menu--hidden');
});