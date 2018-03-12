// variables 

let min = 1,
    max = 10,
    winningNum = getRandomNum(min, max),
    guessesLeft = 3;

// UI variables

const game = document.querySelector("#game"),
      minNum = document.querySelector(".min-num"),
      maxNum = document.querySelector(".max-num"),
      guessBtn = document.querySelector("#guess-btn"),
      guessInput = document.querySelector("#guess-input"),
      message = document.querySelector(".message");

// assign UI min and max

minNum.textContent = min;
maxNum.textContent = max;

// play again event listener

game.addEventListener("mousedown", function(e) {
  if (e.target.className === "play-again") {
    window.location.reload();
  }
});

// listen for guess

guessBtn.addEventListener("click", function() {
  let guess = parseInt(guessInput.value);
  // validate
  if (isNaN(guess) || guess < min || guess > max) {
    setMessage(`Please enter a number betwen ${min} and ${max}.`, "green");
  }
  // check if won
  if (guess === winningNum) {
    // game over = won
    gameOver(true,`${winningNum} is correct! You win :)`);
  } else {
    // wrong number
    guessesLeft -= 1;
    if (guessesLeft === 0) {
      // game over - lost
      // disable input
      gameOver(false, `Game over, you lost :(. The correct number was ${winningNum}.`);
    } else {
      // game continues - answer wrong
      guessInput.style.borderColor = "red";
      // clear input
      guessInput.value == "";
      setMessage(`${guess} is not correct, ${guessesLeft} guesses left :/.`, "red")
    }
  }
});

// game over

function gameOver(won, msg) {
  let color;
  won === true ? color = "green" : color === "red";
  // disable input
  guessInput.disabled = true;
  guessInput.style.borderColor = color;
  message.style.color = color;
  // message 
  setMessage(msg, color);
  // play again
  guessBtn.value = "Play again";
  guessBtn.className += "play-again";
}

// setMessage() function

function setMessage(msg, color) {
  message.style.color = color;
  message.textContent = msg;
}

// random num

function getRandomNum(min, max) {
  return Math.floor(Math.random() * (max-min+1) + min);
}
