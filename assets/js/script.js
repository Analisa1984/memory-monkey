let userAnswer; //document.getElementById("user-answer").value;
let score = 0;
document.addEventListener("DOMContentLoaded", function () {
  let buttons = document.getElementsByTagName("button");

  for (let button of buttons) {
    button.addEventListener("click", function () {
      if (this.getAttribute("data-type") === "start-game") {
        startGame();
        displayUserEntry();
        document.getElementById("start-game").disabled = true;
      } else {
        checkAnswer();
      }
    });
  }
});

function startGame() {
  // Logic to start the game
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

  let randomGameArrayItem =
    gameArray[Math.floor(Math.random() * gameArray.length)];
  console.log(randomGameArrayItem);

  let randomItemsDisplay = document.getElementById("random-items-display");
  console.log(randomItemsDisplay);

  randomItemsDisplay.innerHTML = `Memorize this item: <button>${randomGameArrayItem}</button>`;
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

        document.getElementById("user-reply").innerHTML = `<button>${userEntryArray}</button>`;
       startGame();
      }
      else {
        userEntryArray.push(this.innerHTML);

        document.getElementById("user-reply").innerHTML = `<button>${userEntryArray}</button>`; 
        
        console.log(userAnswer);
         }
    });
  }
}

// function correctAnswer() {
//   // Logic for correct answer
//    userAnswer = document.getElementById("user-reply").value;

//   if (userAnswer === randomGameArrayItem) {
//     return `Good Job! ${userAnswer} is the correct answer.`;
//   } else {
//     return `Oops! ${userAnswer} is incorrect. The correct answer was ${randomGameArrayItem}.`;
//   }
// }

function checkAnswer() {
  // Logic to proceed to the next round or end the game based on user's answer

  let buttons = document.getElementsByTagName("button");
  let randomGameArrayItem = document.getElementById("random-items-display").value;
  let score;
  let round = 1;

  for (let button of buttons) {
    button.addEventListener("click", function () {
      if (this.getAttribute("data-type") === "submit") {
        if (userAnswer == randomGameArrayItem) {
          startNewRound();          
          return "Congratulations! Your answer is correct.";
        } else {
          endGame();
          return "Game Over! Your answer is incorrect.";
        }
      } else {
        return `Please submit your answer to check.`;
      }
    });
  }
}
function startNewRound() {
  // Logic to start a new round
  startGame();
  document.getElementById("game-round").innerHTML = `Round ${++gameRound}`;
}

function endGame() {
  // Logic to end the game
  document.getElementById("game-over").innerHTML = "Game Over!";
  score = 0;
  document.getElementById("score").innerHTML = `Score: ${score}`;

}

let gameRound = document.getElementById("game-round");
let gameOver = document.getElementById("game-over");
