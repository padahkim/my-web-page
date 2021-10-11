const leftArrow = document.querySelector(".left.arrow");
const rightArrow = document.querySelector(".right.arrow");

const SHOWING__CLASS ="showing";

function clickLeftArrow() {
  console.log("left")
}

function clickRightArrow() {
  console.log("right")
}


leftArrow.addEventListener("click", clickLeftArrow);
rightArrow.addEventListener("click", clickRightArrow);



