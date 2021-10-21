const startPage = document.querySelector(".start-page");
const textIntro = document.querySelector(".text-intro");
const startButton = startPage.querySelector(".start__btn");
const startScreenImg = startPage.querySelector(".start-screen__img");
const gamePage = document.querySelector(".game-page")
const gameContentPage = gamePage.querySelector(".game-content");
const cardCover = gamePage.querySelector(".cover");
const cardInside = gamePage.querySelector(".card-inside");
const insideCardsArray = [];

const HIDDEN = "hidden";

function startGame() {
  startScreenImg.classList.toggle(HIDDEN);
  textIntro.classList.toggle(HIDDEN);
  gamePage.classList.toggle(HIDDEN);
  startButton.classList.toggle(HIDDEN);
  makeCardCover();
}

function showingInsideCard() {
  for (index of insideCardsArray) {
  const card = document.createElement('div');
  card.classList.add("item-list");
  console.log(index)
  card.innerHTML = 
  `<img class="inside-img" src=${index}/>`
  cardInside.appendChild(card);
  }
}

// Fisher–Yates shuffle
function shuffleArray(array) {
  let lastIndex = array.length - 1;
  while (lastIndex > -1) {
    const randomIndex = Math.floor(Math.random()*lastIndex + 1);
    let temp = array[randomIndex];
    array[randomIndex] = array[lastIndex];
    array[lastIndex] =  temp;
    lastIndex--;
  }
  showingInsideCard();
}

function makeInsideCard() {
  for(let j = 0; j < 2; j++) {
    for (let i = 0; i < 8; i++) {
      insideCardsArray.push(`"images/${i+1}.jpg"`);
    }
  }
  //oppositeSideArray.sort(() => Math.random() - 0.5)
  shuffleArray(insideCardsArray);
}
 
/*
function makeCardInside() {
  for(let j = 0; j < 2; j++) {
    for (let i = 0; i < 8; i++) {
      const card = document.createElement('div');
      card.className = "item-list";
      card.innerHTML = 
      `<img data-count="${i}" src="images/${i+1}.jpg"/>
      </div>`
      cardBackside.append(card);
    }
  }
}
*/

function makeCardCover() {
  for (let i = 0; i < 16; i++) {
    const card = document.createElement('div');
    card.classList.add("item-list");
    card.innerHTML = 
    `<img class="cover-img" src="images/card-cover.jpg"/>`
    cardCover.appendChild(card);
  }
  makeInsideCard();
}


function clickCardCover(event) {
  if (event.target.classList.contains("cover-img")) {
  event.target.classList.add(HIDDEN);
  }
}
startButton.addEventListener("click", startGame);
cardCover.addEventListener("click", clickCardCover);

