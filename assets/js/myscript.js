let userAnswer = "";
let maximumRounds = 10;
let userEntryArray = [];
const maxMemoryItems = 10;
let memoryArray = [];
let gameStage = 0;
let gameScore = 0;


// this is not the fontawesome buttons yet, but it is an array of the text of the buttons to be used
  const gameArray = [
    "zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine",
    "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "star",
    "heart","smile", "moon", "sun", "leaf", "tree", "dove", "frog", "house"
  ];
  
  //once DOM Content Loaded add event listener to buttons for click and then function
  document.addEventListener("DOMContentLoaded", function() {
 
  buildButtons();

  let submitButton = document.getElementById("user-entry-final");
  submitButton.addEventListener ("click", checkAnswer);

  let deleteButton = document.getElementById("delete");
  deleteButton.addEventListener ("click", deleteCard);

  let startGameButton = document.getElementById("start-game");
  startGameButton.addEventListener ("click", startGame);

  let newGameButton = document.getElementById("new-game");
  newGameButton.addEventListener ("click", newGame);


  
  let fontawesomeButtons = document.getElementsByClassName("fa-solid");
  for(let i=0; i <fontawesomeButtons.length; i++ ) {
       fontawesomeButtons[i].addEventListener ("click", addToUserAnswer);
    }
});
 

/**
 * this function is building all the fontawesome buttons on the display on game page 
 */
    function buildButtons () {
      let html = "<div>";
      let fa = ""; 
      
      // this process is creating fa -->  1 - 9 and the other fa with text values after 9.      
      for (let i = 0; i < gameArray.length; i++) {
        
       // recall that after 9, array goes to letters and miscellanoues things so,
       //  need to set fa variable to be the same as gameArray value else we couldve 
       // fa = i  for all values
       if (i <= 9) { 
        fa = i; 
      } else {
        fa = gameArray[i];
      }

      // this is wrapping each fa in button (with class fa-solid) and adding span element
      //here the icon is created and wrapped in a button
      //span was added for accesibility reasons for text (explained in readme accesibility section)
      html += `<button id="${gameArray[i]}"><i button-name="${gameArray[i]}" class="fa-solid fa-${fa}" aria-label="${fa}" data-type="${gameArray[i]}"></i><span class=font>${fa}</span></button>`;

    //split buttons into rows of 6 buttons per row - there are 30 buttons currently
    // recall that i starts at 0 so need to add 1 to i to remove possibility of infinity value and 1
    // formula adds 1 to i and checks if divisible by 6 with no remainder
    // every 6 buttons are wrapped in a div and a new div is started for next row of 6 buttons

      if ((i + 1) > 1 && (i + 1) % 6 == 0) {

        // this is to add each row into a div
        html += "</div>";
        if (i < gameArray.length) {
          html += "<div>";
        }
      }

    }

      // place the fontawesome buttons (now in rows of 6 in DIVS) into the fontawesome div
      let fontAwesome = document.getElementById("fontAwesome");
      fontAwesome.innerHTML = html;
      }

      /**
       * Randomly generate a number (maxMemoryItems) of items to remember 
       */
    function initialMemoryItems() {
      // empty the array first
      memoryArray = [];
      //fill array with 10 random chosen items from the gameArray
      for (let i = 0; i < maxMemoryItems; i++) {
        memoryArray.push(gameArray[Math.floor(Math.random() * gameArray.length)]);
      }
    }

  /**
   * create a comma-separated list of items to be remembered for the current game stage
   * returns string e.g. "five, hear, b"
   */
    function toStringSubset() {
      let memoryString = "";
      for(let i = 0; i < gameStage; i++) {
        if(i > 0) {
          memoryString += ",";
        }
        memoryString += memoryArray[i];
      }

      return memoryString;
    }
 
    
  function startGame() {
    initialMemoryItems();
    userEntryArray = [];
    gameStage = 1;
    gameScore = 0;
    showGameRound();
    showGameScore();
    showMemoryChallenge();
    showUserEntry(true);

    //disable the start game button once the start game button is clicked
    document.getElementById("start-game").disabled = true;
    }

    /**
     * start a new game
     */
  function newGame() {
    if (confirm("Are you ready for a new game?")) {
      startGame();
    }
  }

  /**
   * update the score on the screen
   */
  function showGameScore() {
    document.getElementById("score-board").textContent = `Score: ${gameScore}`;
  }

  /**
   * update the game round shown on screen 
   */

  function showGameRound() {
    document. getElementById("game-round"). textContent = `Round: ${gameStage}`;
  }

/**
 * show the user the random items to be remembered
 */
  function showMemoryChallenge() {
 //create the buttons
  let btn;
  let btnHTML = "";
  for (let i = 0; i < gameStage ; i++) {
    btn = document.getElementById(memoryArray[i]);
    btnHTML += `<button>${btn.innerHTML}</button>`;
  }

  //get location of where to display the random card item(s) and display it/them
  let randomItemsDisplay = document.getElementById("random-items-display");
  randomItemsDisplay.innerHTML = `memorize this ${btnHTML}`;


  //set timer to display random card items for 3 seconds
     setTimeout(function () {
    randomItemsDisplay.innerHTML = " "; 
  }, 3000);
  }  
  /**
   * display user's answer choice
   */
  function showUserEntry() {
    let btnHTML = "";
    let btn = "";
    for (let i=0; i < userEntryArray.length; i++) {
    btn = document.getElementById(userEntryArray[i]);
    btnHTML += `<button>${btn.innerHTML}</button>`;
    }
    document.getElementById('user-reply').innerHTML = btnHTML; 
  }

  /**
   * add delete function so user can remove their selection of card 
   * e.g. if wrong button was clicked by user or they want to change their choice of card.
   */
   function deleteCard() {
    userEntryArray.pop();
    showUserEntry();
  }

  /**
   * when user clicks on a button, add it to the user's answer 
   * (make the answer string allowed by user input a maximum of 3)
   * update the display of user answers
   */
   function addToUserAnswer() {
    if (userEntryArray.length < maxMemoryItems) {
      userEntryArray.push(this.getAttribute("data-type")); 
      showUserEntry();
    }
   }
   /**
    * check to see if the user has enetered the correct random card shown
    */
  function checkAnswer() {
   if (gameStage == 0) {
    alert("please start a new game first");

   } else if (gameStage != userEntryArray.length) {
    alert("That's not the right number of items");

   } else {
       if (userEntryArray.toString() == toStringSubset()) {
        //check for game over
        if (isGameOver()) {
          gameScore += 10;
          showGameScore();
          alert(`You remembered correctly! Your score is now ${gameScore}`)
          endGame();
        } else {
          //game not over yet, update the score and add on a next random cad to be remembered
          alert("Well done! On to the next round!")
          userEntryArray = [];
          gameStage++;
          gameScore += 10;
          showGameRound();
          showGameScore();
          showUserEntry();
          showMemoryChallenge();
        }
       } else {
        alert("Oops! Thats Incorrect!")
        // 2 point reduction in points for incorrect answer choice. 
        gameScore -= 2;
        showGameScore();
       }
      }
  }
 /**
   * check to see if game is over (has 3 rounds been completed.)
   */
 function isGameOver() {
   return (gameStage >= maxMemoryItems);
 }
 /**
  * game is over so ask if the user wants a new game. 
  */
 function endGame() {
  if (confirm("Would you like a new game?")) {
    startGame();
  } else {
    //disable submit button if no new game is selected. 
    alert("We hope you enjoyed playing Memory Monkey!, Come back again soon!")
  let submit = document.getElementById("user-entry-final");
  submit.disabled = true; 
  }
 }
  
