const startPage = document.querySelector(".start-page");
const textIntro = document.querySelector(".text-intro");
const startButton = startPage.querySelector(".start__btn");
const startScreenImg = startPage.querySelector(".start-screen__img");
const gamePage = document.querySelector(".game-page")
const gameContentPage = gamePage.querySelector(".game-content");

const HIDDEN = "hidden";

function startGame() {
  startScreenImg.classList.toggle(HIDDEN);
  textIntro.classList.toggle(HIDDEN);
  gamePage.classList.toggle(HIDDEN);
  startButton.classList.toggle(HIDDEN);
  makeCardCover();
}

function makeCardCover() {
  let k = 0;
  let card = document.createElement('div');
  card.className = "card";
  card.innerHTML = 
  `<div class="item-list">
    <img data-count=` + k + `src="images/card-cover.jpg"/>
  </div>`
 gameContentPage.append(card)

  for (let i = 0; i < 16; i++) {
  
  }
}



function clickCardCover(event) {
  if (event.target.dataset.columns) {
    console.log(event.target.dataset.count)
  }
}

startButton.addEventListener("click", startGame);
gameContentPage.addEventListener("click", clickCardCover);