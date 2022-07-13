document
  .querySelector(".testimonial-slider-previous-btn")
  .addEventListener("click", () => {
    showSlide(-1);
  });

document
  .querySelector(".testimonial-slider-next-btn")
  .addEventListener("click", () => {
    showSlide(1);
  });

function showSlide(offset) {
  const slides = document.querySelectorAll(".testimonial-slider-slide");

  const activeIndex = [...slides].indexOf(
    document.querySelector("[data-active]")
  );

  let newIndex = activeIndex + offset;

  if (newIndex < 0) newIndex = slides.length - 1;
  if (newIndex >= slides.length) newIndex = 0;

  slides[newIndex].dataset.active = "";
  delete slides[activeIndex].dataset.active;

  slides[newIndex].removeAttribute("aria-hidden");
  slides[activeIndex].setAttribute("aria-hidden", "true");
}
