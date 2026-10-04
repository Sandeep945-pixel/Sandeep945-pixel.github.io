document.documentElement.classList.add('js');
const button = document.querySelector('.menu-toggle');
const navigation = document.querySelector('#main-nav');
button.hidden = false;
function closeMenu() {
  navigation.classList.remove('is-open');
  button.setAttribute('aria-expanded', 'false');
  button.textContent = 'Menu';
}
button.addEventListener('click', () => {
  const open = button.getAttribute('aria-expanded') !== 'true';
  navigation.classList.toggle('is-open', open);
  button.setAttribute('aria-expanded', String(open));
  button.textContent = open ? 'Close' : 'Menu';
});
navigation.addEventListener('click', (event) => {
  if (event.target.closest('a')) closeMenu();
});
document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape' && button.getAttribute('aria-expanded') === 'true') {
    closeMenu();
    button.focus();
  }
});
window.matchMedia('(min-width: 761px)').addEventListener('change', closeMenu);
