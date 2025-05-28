const menuHam = document.getElementById("menu_mob");
const listMenuMobile = document.getElementById("active_menu_mob");
const main = document.getElementById("main_bg");

function activeMenu() {
  listMenuMobile.classList.toggle("active");
  listMenuMobile.classList.toggle("bg-menu");
}

function imgTroca() {
  if (listMenuMobile.classList.contains("active")) {
    menuHam.src = "./images/icon-close.svg";
  } else {
    menuHam.src = "./images/icon-hamburger.svg";
  }
}

menuHam.addEventListener("click", activeMenu);
menuHam.addEventListener("click", imgTroca);
