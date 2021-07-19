const body = document.querySelector("body"),
container = document.querySelector(".container"),
h1 = container.querySelector("h1"),
button = container.querySelector("button");






button.addEventListener("click",hexGenerator);


function hexGenerator() {
    const hexNumbers = [
      0,
      1,
      2,
      3,
      4,
      5,
      6,
      7,
      8,
      9,
      'A',
      'B',
      'C',
      'D',
      'E',
      'F'
    ];

    let result = "#";

    for (var i = 0; i < 6; i += 1) {
      const randomIndex = Math.floor(Math.random() * hexNumbers.length);
      result += hexNumbers[randomIndex];
    }


    h1.innerText = `HEX COLOR:${result}`
    body.style.backgroundColor = result
    
    return result;
  }

  