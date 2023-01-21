const menuEmail = document
  .querySelector(".nabvar-email")
  .addEventListener("click", toggleMenuMobile);
const desktopMenu = document.querySelector(".desktop-menu");
const menuHamburguesa = document
  .querySelector(".menu")
  .addEventListener("click", toggleMenuHamburguer);
const menuMobile = document.querySelector(".menu-mobile");
const menuCart = document
  .querySelector(".navbar-shopping-cart")
  .addEventListener("click", toggleMenuProductCart);
const asideProduct = document.querySelector(".my-order");

function toggleMenuMobile() {
  desktopMenu.classList.toggle("inactive");
}

function toggleMenuHamburguer() {
  const isMenuCartOpen = !asideProduct.classList.contains("inactive");
  if (isMenuCartOpen) {
    asideProduct.classList.add("inactive");
  }
  menuMobile.classList.toggle("inactive");
}

function toggleMenuProductCart() {
  const isMenuMobileOpen = !menuMobile.classList.contains("inactive");
  if (isMenuMobileOpen) {
    menuMobile.classList.add("inactive");
  }
  asideProduct.classList.toggle("inactive");
}
