const navItem = document.querySelectorAll('.nav-item');
const horizontalBar = document.querySelector('.horizontal_bar');
const topNavigationBar = document.querySelector('.top-navigation-bar');
const headerWelcome = document.querySelector('.header-welcome');
const desktopNavigationBar = document.querySelector('.desktop-nav-container');
const menuIcon = document.querySelector('.menu-icon');
const main = document.querySelector('main');
const mobileMenuFooter = document.querySelector('.mobile_menu_footer');
const navItemArray = Array.from(navItem);
function restoredefaults() {
  menuIcon.classList.remove('active');
  headerWelcome.classList.remove('active');
  topNavigationBar.classList.remove('active');
  desktopNavigationBar.classList.remove('active');
  horizontalBar.classList.remove('active');
  mobileMenuFooter.classList.remove('active');
  for (let item = 0; item < navItemArray.length; item += 1) {
    navItemArray[item].classList.remove('active');
  }
}
function mobilemenu() {
  menuIcon.classList.toggle('active');
  desktopNavigationBar.classList.toggle('active');
  headerWelcome.classList.toggle('active');
  topNavigationBar.classList.toggle('active');
  horizontalBar.classList.toggle('active');
  mobileMenuFooter.classList.toggle('active');
  const navItemArray = Array.from(navItem);
  for (let item = 0; item < navItemArray.length; item += 1) {
    navItemArray[item].classList.toggle('active');
  }
}
main.addEventListener('click', restoredefaults);
document.onclick = (e) => {
  if (e.target === topNavigationBar) {
    restoredefaults();
  }
};
navItemArray.forEach((navMenu) => {
  navMenu.addEventListener('click', restoredefaults);
  navMenu.addEventListener('keydown', (e) => {
    if (e.keyCode === 9) {
      restoredefaults();
    }
  });
});

menuIcon.addEventListener('click', mobilemenu);
menuIcon.addEventListener('keydown', (e) => {
  if (e.keyCode === 9) {
    mobilemenu();
  }
});