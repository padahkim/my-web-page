const slides = document.querySelectorAll(".slider__item");
const prevBtn = document.querySelector("#prevBtn");
const nextBtn = document.querySelector("#nextBtn");

const HIDDEN__CLASS ="hidden";

let slideCounter = 0;

function flipSlide() {
  if (slideCounter >= slides.length) {
    slideCounter = 0;
  } else if(slideCounter <0) {
    slideCounter = slides.length + slideCounter;
  }
  slides.forEach(element=>element.classList.add(HIDDEN__CLASS))
  slides[slideCounter].classList.remove(HIDDEN__CLASS)
}

function clickNextBtn() {
  slideCounter++;
  flipSlide()
}
function clickPrevBtn() {
  slideCounter--;
  flipSlide()
}

nextBtn.addEventListener("click", clickNextBtn);
prevBtn.addEventListener("click", clickPrevBtn);
flipSlide();


