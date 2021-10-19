const startPage = document.querySelector(".start-page");
const textIntro = document.querySelector(".text-intro");
const startButton = startPage.querySelector(".start__btn");
const startScreenImg = startPage.querySelector(".start-screen__img");
const gamePage = document.querySelector(".game-page")
const gameContentPage = gamePage.querySelector(".game-content");
const cardCover = gamePage.querySelector(".cover");
const cardBackside = gamePage.querySelector(".backside");
const cardCoverNumber = gamePage.querySelectorAll('[count]');

const HIDDEN = "hidden";

function startGame() {
  startScreenImg.classList.toggle(HIDDEN);
  textIntro.classList.toggle(HIDDEN);
  gamePage.classList.toggle(HIDDEN);
  startButton.classList.toggle(HIDDEN);
  makeCardCover();
}



function makeCardInside() {
  for(let j = 0; j < 2; j++) {
    for (let i = 0; i < 8; i++) {
      let card = document.createElement('div');
      card.className = "item-list";
      card.innerHTML = 
      `<img data-count="${i}" src="images/${i+1}.jpg"/>
      </div>`
      cardBackside.append(card);
    }
  }
}

function makeCardCover() {
  for (let i = 0; i < 16; i++) {
    let card = document.createElement('div');
    card.className = "item-list";
    card.innerHTML = 
    `<img data-count="${i}" src="images/card-cover.jpg"/>
    </div>`
    cardCover.append(card);
  }
  makeCardInside();
}




function clickCardCover(event) {
  event.target.classList.add(HIDDEN);
  console.log(event.target);
  console.log(event.curretTarget);
  //event.target.dataset.count.
}

startButton.addEventListener("click", startGame);
gameContentPage.addEventListener("click", clickCardCover);