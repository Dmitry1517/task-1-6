const openBurgerBtn = document.querySelector(".header__burger");
const burgerMenu = document.querySelector(".burger-menu");
const closeBurgerBtn = document.querySelector(".burger-menu__close");

openBurgerBtn.addEventListener("click", () => {
  burgerMenu.style.transform = "translateX(0%)";
  burgerMenu.style.boxShadow = "16px 0 52px 0 rgba(14, 24, 80, 0.2)";
});

closeBurgerBtn.addEventListener("click", () => {
  burgerMenu.style.transform = "translateX(-100%)";
  burgerMenu.style.boxShadow = "";
});