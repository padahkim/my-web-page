// ================================
// START YOUR APP HERE
// ================================

// KEN: You can delete this code..
/*setTimeout(function () {
  alert('Getting Started? Look for app/index.js..');
}, 500);
*/
/*
  KEN: Do not modify `calculateWinner` function.
  Use 'calculateWinner' function to determine if there is a winner.

  Pass in an array of 'X', 'O'.

  EX 1)

  const squares = [
    null, null, null,
    null, 'X', null,
    null, null, 'O',
  ];

  const result = calculateWinner(squares);
  console.log(result); // null

  EX 2)

  const squares = [
    null, 'O', 'O',
    'X', 'X', 'X',
    null, 'O', 'O',
  ];

  const result = calculateWinner(squares);
  console.log(result); // 'X'

 */
function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];

    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }

  return null;
}

/*

  KEN: Your code starts below..

 */
  const squares =[
    null, null, null,
    null, null, null,
    null, null, null,
  ];


const $startGameButton = document.querySelector("button");
const square = document.querySelectorAll(".board > div");
const player1 = document.querySelector(".player.one");
const player2 = document.querySelector(".player.two");
const CLICKED_CLASS = "turn";
const $board = document.querySelector(".board");
const $winner__board = document.querySelector(".winner__board");
const CIRCLE_PLAYER1 = "O";
const CIRCLE_PLAYER2 = "X";

let isPLAYER_ONE = true;

function checkBox(event){
  if (isPLAYER_ONE){
  if (squares[event.target.id] === null){
  event.target.textContent = CIRCLE_PLAYER1;
  player1.classList.toggle(CLICKED_CLASS);
  squares[event.target.id] = CIRCLE_PLAYER1;
  isPLAYER_ONE = false;
  player2.classList.remove(CLICKED_CLASS);
  endGame();}
  } else {
  if (squares[event.target.id] === null){
  event.target.textContent = CIRCLE_PLAYER2;
  player2.classList.toggle(CLICKED_CLASS);
  squares[event.target.id] = CIRCLE_PLAYER2;
  isPLAYER_ONE = true;
  player1.classList.remove(CLICKED_CLASS);
  endGame();
  }
}
}

function endGame(){
  if (calculateWinner(squares)===CIRCLE_PLAYER1){
    $board.classList.add("hidden");
    $winner__board.innerHTML = '<h1>Winner is O</h1>'
    restartGame();
  }else if (calculateWinner(squares)===CIRCLE_PLAYER2){
    $board.classList.add("hidden");
    $winner__board.innerHTML = '<h1>Winner is X</h1>'
    restartGame();
  }
}

function restartGame(){
  $startGameButton.innerHTML = "Restart";
}



function startGame(){
  square.forEach((box)=>box.addEventListener("click",checkBox))
}

function resetGame(){
  for (const box of square){
  box.textContent = "";
  }
  for (let element in squares){
    squares[element] = null;
  }
  $winner__board.innerHTML = '';
  $board.classList.remove("hidden");

  player1.classList.remove(CLICKED_CLASS);
  player2.classList.remove(CLICKED_CLASS);
  startGame()
}

$startGameButton.addEventListener("click",resetGame)

/* Previous logic i made
let isO = true;

function startGame(){
for(let i=0 ; i < square.length ; i++){
  square[i].addEventListener("click",function(){
  if(isO){
    square[i].textContent="O"
    isO=false;
  }else{
    square[i].textContent="X"
    isO=true;
  }
  })
  }
}

*/
/*
function startGame(){
for(let i = 0 ; i<square.length ; i++){
  const squareBox = square[i]
  squareBox.addEventListener("click",() => {
  if(squareBox.id%2===0){
    squareBox.textContent = "O"
  }else{
    squareBox.textContent = "X"
  }
  })
}
}
*/

/*
function checkBox(event){
  if(event.target.id%2===0){
  player[0].style.color = "blue";
  event.target.textContent="O"
  player[1].style.color = "black";
  }else{
  player[1].style.color = "red";
  event.target.textContent="X"
  player[0].style.color = "black";
  }
}
*/
/*

const square = document.querySelectorAll(".board > div");
const player = document.getElementById("player");
const getAllClickX = square.forEach(function(div){
  div.removeEventListener("click",checkSquareX);}
)
const getAllClickO = square.forEach(function(div){
  div.removeEventListener("click",checkSquareO);
  }
)

function checkSquareX(event){
  event.target.textContent = "X"
  player.innerHTML = "player 2's turn"
  player.innerHTML = "player1"
  playPlayer1();
  getAllClickX
}
function playPlayer2(){
  getAllClickX
}
function checkSquareO(event){
  event.target.textContent = "O"
  player.innerHTML = "player 1's turn"
  player.innerHTML = "player2"
  playPlayer2();
  getAllClickO
}
function playPlayer1(){
  getAllClickO
}
*/


/*


*/

/*const H1 = square.querySelector("h1");
*/
//addEventListener("click", checkSquare)

/*function checkSquareO(event){

  let countCircle = squares.filter(element => 'O' === element).length
  if(countCircle === 0){
  event.target.textContent = "O"
  player.innerHTML = "player 1's turn"
  countCircle++
  console.log(countCircle)
  }
}

function playGame(){
  square.forEach(function(div){
  div.addEventListener("click",checkSquareO)
    }
  )
}

*/

//if null 이면 클릭시변경