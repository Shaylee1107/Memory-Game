const gameContainer = document.getElementById("game");
let clickCount = 0; 
let firstGuess = null; 
let secondGuess = null; 
let block = document.getElementById('restrict');

const COLORS = [
  "red",
  "blue",
  "green",
  "orange",
  "purple",
  "red",
  "blue",
  "green",
  "orange",
  "purple"
];

function shuffle(array) {
  let counter = array.length;

  while (counter > 0) {
    let index = Math.floor(Math.random() * counter);
    counter--;

    let temp = array[counter];
    array[counter] = array[index];
    array[index] = temp;
  }

  return array;
}

let shuffledColors = shuffle(COLORS);

function createDivsForColors(colorArray) {
  firstGuess = null; 
  secondGuess = null; 
  
  for (let color of colorArray) {
    const newDiv = document.createElement("div");
    newDiv.classList.add("skyblue");

    newDiv.addEventListener("click", function() {
     newDiv.classList.remove("skyblue");
     newDiv.classList.add(color); 
    }) 
    newDiv.addEventListener("click", handleCardClick);
    

    gameContainer.append(newDiv);
  }
}
function handleCardClick(event) {
  clickCount++;
  gameContainer.onclick = function() {
    if (clickCount === 1){
      firstGuess = event.target;
      firstGuess.setAttribute('name', 'card');
      console.log("Your first guess was", firstGuess);
    } else if (clickCount === 2){
      secondGuess = event.target; 
      console.log("Your second guess was", secondGuess);
      block.classList.add('block-div');
      rules();
    }
  }
};

function rules(){
    if(firstGuess.classList.value === secondGuess.classList.value && !secondGuess.hasAttribute('name')){
      console.log("you made a match!");
      setTimeout(function() {
        block.classList.remove('block-div');
      }, 1000)
    } else {
      console.log("No match!");
      setTimeout(function() {
        firstGuess.classList.add('skyblue');
        secondGuess.classList.add('skyblue');
        block.classList.remove('block-div');
      }, 2000)
    }
    clickCount = 0;
    firstGuess.removeAttribute('name');
  }
  

createDivsForColors(shuffledColors);

