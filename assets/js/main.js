const menuEmail = document.querySelector('.nabvar-email').addEventListener('click', toggleDesktopMenu)
const desktopMenu = document.querySelector('.desktop-menu')


function toggleDesktopMenu(){
desktopMenu.classList.toggle('inactive')
}