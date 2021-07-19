const images = ["1.jpg","2.jpg"];

const choosenImage = images[Math.floor(Math.random() * images.length)];



const bgImage = document.createElement("img");

bgImage.src = `img/${choosenImage}`;
bgImage.classList.add("background");

document.body.appendChild(bgImage);