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
