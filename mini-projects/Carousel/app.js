const slides = document.querySelectorAll(".slider__item");
const dotBtns = document.querySelectorAll("li ul i");
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
  slides.forEach(element=>element.classList.add(HIDDEN__CLASS));
  slides[slideCounter].classList.remove(HIDDEN__CLASS);
  colorDot(slideCounter);
}

function colorDot(counter) {
  dotBtns.forEach(dotElement=>dotElement.style.backgroundColor="white");
  dotBtns[counter].style.backgroundColor="lightblue";
}

function clickNextBtn() {
  slideCounter++;
  flipSlide();
}

function clickPrevBtn() {
  slideCounter--;
  flipSlide();
}

function clickDotBtn(event) {
  slideCounter = event.target.dataset.indexNumber -1;
  flipSlide();
}

dotBtns.forEach(dot=>dot.addEventListener("click", clickDotBtn));
nextBtn.addEventListener("click", clickNextBtn);
prevBtn.addEventListener("click", clickPrevBtn);

flipSlide();