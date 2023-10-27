let slidesContainer = document.querySelectorAll(".carousel_slideContainer")[0];
let slides = document.querySelectorAll(".carousel_slides");

let index = 0;

const applyClass = (n) => {
  slides[index].classList.remove("carousel_activeSlide");
  index += n;
  if (index == slides.length) index = 0;
  if (index == -1) index = slides.length - 1;
  slides[index].classList.add("carousel_activeSlide");
};

slidesContainer.addEventListener("mouseover", () => {
  mousePress = 1;
});
slidesContainer.addEventListener("mouseout", () => {
  mousePress = 0;
});

let mousePress = 0;
setInterval(() => {
  if (mousePress == 0) applyClass(1);
}, 1200);
