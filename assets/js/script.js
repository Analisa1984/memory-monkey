let userAnswer; //document.getElementById("user-answer").value;
let score = 0;
let buttons = document.getElementsByTagName("button");
let round = 1;

const zero = document.getElementById("zero").innerHTML;
  const one = document.getElementById("one").innerHTML;
  const two = document.getElementById("two").innerHTML;
  const three = document.getElementById("three").innerHTML;
  const four = document.getElementById("four").innerHTML;
  const five = document.getElementById("five").innerHTML;
  const six = document.getElementById("six").innerHTML;
  const seven = document.getElementById("seven").innerHTML;
  const eight = document.getElementById("eight").innerHTML;
  const nine = document.getElementById("nine").innerHTML;

  const a = document.getElementById("a").innerHTML;
  const b = document.getElementById("b").innerHTML;
  const c = document.getElementById("c").innerHTML;
  const d = document.getElementById("d").innerHTML;
  const e = document.getElementById("e").innerHTML;
  const f = document.getElementById("f").innerHTML;
  const g = document.getElementById("g").innerHTML;
  const h = document.getElementById("h").innerHTML;
  const i = document.getElementById("i").innerHTML;
  const j = document.getElementById("j").innerHTML;
  const star = document.getElementById("star").innerHTML;
  const heart = document.getElementById("heart").innerHTML;
  const smile = document.getElementById("smile").innerHTML;
  const moon = document.getElementById("moon").innerHTML;
  const sun = document.getElementById("sun").innerHTML;
  const leaf = document.getElementById("leaf").innerHTML;
  const tree = document.getElementById("tree").innerHTML;
  const dove = document.getElementById("dove").innerHTML;
  const frog = document.getElementById("frog").innerHTML;
  const house = document.getElementById("house").innerHTML;

  const gameArray = [
    zero,
    one,
    two,
    three,
    four,
    five,
    six,
    seven,
    eight,
    nine,
    a,
    b,
    c,
    d,
    e,
    f,
    g,
    h,
    i,
    j,
    star,
    heart,
    smile,
    moon,
    sun,
    leaf,
    tree,
    dove,
    frog,
    house,
  ];
  console.log(gameArray);

  let randomIndex= Math.floor(Math.random() * gameArray.length);
  console.log(randomIndex);

  let randomGameArrayItem = gameArray[randomIndex];
  console.log(randomGameArrayItem);


  


document.addEventListener("DOMContentLoaded", function () {
  

  for (let button of buttons) {
    button.addEventListener("click", function () {
      if (this.getAttribute("data-type") === "start-game") {
        console.log("im at line 81 after start game");


        startGame();
        displayUserEntry();
        document.getElementById("start-game").disabled = true;
      } else {
        //checkAnswer();
      }
    });
  }
});

function startGame() {
  
  let randomItemsDisplay = document.getElementById("random-items-display");
  console.log(randomItemsDisplay);

  

  if (round == 1) {
    randomItemsDisplay.innerHTML = `Memorize this item: <button>${randomGameArrayItem}</button>`;
  } else {
    randomItemsDisplay.innerHTML = `Memorize this item: <button>[${randomGameArrayItem} * ${round} </button>`;
  }

   setTimeout(function () {
    randomItemsDisplay.innerHTML = " "; 
  }, 3000);
  
    
}


function displayUserEntry() {
  // Logic to display user entry options

  let userEntryArray = [];

  let buttons = document.getElementsByTagName("button");

  for (let button of buttons) {
    button.addEventListener("click", function (e) {
      if (this.getAttribute("data-type") === "submit") {
        
        checkAnswer(); // Call the function to check the user's answer when the button is clicked
      } else if (this.getAttribute("data-type") === "delete") {
        userEntryArray.pop();

        document.getElementById("user-reply").innerHTML = `<button>${userEntryArray}</button>`;
        
      } else if (this.getAttribute("data-type") === "new-game") {
        userEntryArray = [];
        document.getElementById("game-round").textContent = `Round 1`;
        document.getElementById("user-reply").innerHTML = `<button>${userEntryArray}</button>`;
        document.getElementById("score-board").textContent = `Score: 0`;
        startGame();
    
      }
      else {
        userEntryArray.push(this.innerHTML);

        document.getElementById("user-reply").innerHTML = `<button>${userEntryArray}</button>`; 
        
        console.log(userEntryArray);
         }
    });
  }
}



function checkAnswer() {
  // Logic to proceed to the next round or end the game based on user's answer
  let userAnswer= document.getElementById("user-reply").innerHTML;
 console.log("Im at line 146");

 

 

  for (let button of buttons) {
    button.addEventListener("click", function () {
      if (this.getAttribute("data-type") === "submit") {
        console.log("random item is  at line 170" + randomGameArrayItem);
        console.log("user Answewr is at line 171" + userAnswer);
         if (userAnswer == randomGameArrayItem){
          console.log("im here at line 157 after if user answer equals random item");
          // startNewRound();
          document.getElementById("game-area").innerText = `YOU HAVE WON, PROCEED TO NEXT ROUND!`
         } else {
          document.getElementById("game-area").innerHTML = `INCORRECT! NICE TRY! THE CARD SHOWN WAS ${randomGameArrayItem}`;
          endGame();
         }
        }
      });
  }
}



function startNewRound() {
  // Logic to start a new round
  let round = 1;
  round += 1;
  
  document.getElementById("game-round").innerHTML = `Round ${round}`;

  let randomItemsDisplay = document.getElementById("random-items-display");
  console.log(randomItemsDisplay);

  randomItemsDisplay.innerHTML = `Memorize this item: <button>${randomGameArrayItem++}</button>`;

   setTimeout(function () {
    randomItemsDisplay.innerHTML = " "; 
  }, 3000);
}

function endGame() {
  // Logic to end the game
  let gameOver = document.getElementById("game-over");
  gameOver.textContent = "Game Over!";
  score = 0;
  let newScore = document.getElementById("score-board");
  newScore.textContent = `Score: ${score}`;

}

let gameRound = document.getElementById("game-round");
let gameOver = document.getElementById("game-over");
