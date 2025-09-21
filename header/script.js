const headerBurger = document.querySelector(".header-burger");
const headerBurgerButton = document.querySelector(".header-burger-button");

headerBurgerButton.addEventListener("click", () => {
  headerBurger.classList.toggle("active");
});
