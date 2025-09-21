const programAccordionItems = document.querySelectorAll(".program-accordion-item");

programAccordionItems.forEach((item) => {
  item.addEventListener("click", () => {
    item.classList.toggle("active");
  });
});
