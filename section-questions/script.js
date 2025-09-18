const questionAccordionItems = document.querySelectorAll(
  ".question-accordion-item"
);

questionAccordionItems.forEach((item) => {
  item.addEventListener("click", () => {
    item.classList.toggle("active");
  });
});
