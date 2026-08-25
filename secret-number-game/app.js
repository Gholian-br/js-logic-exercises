// Secret Number Game implementation focusing on DOM manipulation, input validation, and game state management in JavaScript.

let secretNumber = generateRandomNumber();
let attempts = 1;

console.log(secretNumber);

// Dynamically updates text content inside a specified HTML tag
function textOnScreen(tag, text) {
  let field = document.querySelector(tag);
  field.innerHTML = text;
}

textOnScreen("h1", "Secret Number Game!");
textOnScreen("p", "Choose a number between 1 and 10.");

// Validates the user's guess against the secret number and updates UI feedback
function verifyGuess() {
  let guess = parseInt(document.querySelector("input").value, 10);
  let attemptWord = attempts > 1 ? "attempts" : "attempt";
  let attemptsMessage = `Congratulations! You guessed the secret number in ${attempts} ${attemptWord}!`;

  if (guess === secretNumber) {
    textOnScreen("h1", "You got it!");
    textOnScreen("p", attemptsMessage);
  } else {
    if (guess > secretNumber) {
      textOnScreen("h1", "Wrong!");
      textOnScreen("p", "The secret number is smaller!");
    } else {
      textOnScreen("h1", "Wrong!");
      textOnScreen("p", "The secret number is bigger!");
    }
    attempts++;
  }
}

// Generates a random integer between 1 and 10
function generateRandomNumber() {
  return parseInt(Math.random() * 10 + 1, 10);
}
