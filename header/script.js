const burger = document.querySelector(".burger");
const burgerButton = document.querySelector(".burger-button");

burgerButton.addEventListener("click", () => {
  burger.classList.toggle("active");
});
