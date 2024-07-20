const slider = document.querySelectorAll(".carousel");
const next = document.querySelector(".btn-next");
const prev = document.querySelector(".btn-prev");

let currentSlide = 0;
let maxSlide = slider.length - 1;

slider.forEach(
  (image, index) => (image.style.transform = `translateX(${index * 100}%)`)
);

const nextButtonClickHandler = () => {
  if (currentSlide === maxSlide) {
    currentSlide = 0; // going to next slide
  } else {
    currentSlide++;
  }

  slider.forEach(
    (image, index) =>
      (image.style.transform = `translateX(${(index - currentSlide) * 100}%)`)
  );
};

const prevButtonClickHandler = () => {
  if (currentSlide === 0) {
    currentSlide = maxSlide; // going back to last silde
  } else {
    currentSlide--;
  }

  slider.forEach(
    (image, index) =>
      (image.style.transform = `translateX(${(index - currentSlide) * 100}%)`)
  );
};

next.addEventListener("click", nextButtonClickHandler);
prev.addEventListener("click", prevButtonClickHandler);
