// State variables
let drawnNumbersList = [];
let maxNumber = 10;
let secretNumber = generateRandomNumber();
let attempts = 1;

/**
 * Displays text on the screen in a specified HTML tag
 * and reads it aloud using text-to-speech.
 */
function displayTextOnScreen(tag, text) {
    let field = document.querySelector(tag);
    field.innerHTML = text;
    
    // Configured for US English voice output
    responsiveVoice.speak(text, 'US English Female', { rate: 1.2 });
}

/**
 * Displays the initial welcoming UI text.
 */
function displayInitialMessage() {
    displayTextOnScreen('h1', 'Secret Number Game');
    displayTextOnScreen('p', 'Choose a number between 1 and 10');
}

// Render initial state on page load
displayInitialMessage();

/**
 * Validates the user's guess against the secret number.
 */
function checkGuess() {
    let guess = document.querySelector('input').value;
    
    if (guess == secretNumber) {
        displayTextOnScreen('h1', 'Correct!');
        let attemptWord = attempts > 1 ? 'attempts' : 'attempt';
        let attemptMessage = `You guessed the secret number in ${attempts} ${attemptWord}!`;
        
        displayTextOnScreen('p', attemptMessage);
        document.getElementById('restart').removeAttribute('disabled');
    } else {
        if (guess > secretNumber) {
            displayTextOnScreen('p', 'The secret number is lower');
        } else {
            displayTextOnScreen('p', 'The secret number is higher');
        }
        attempts++;
        clearInputField();
    }
}

/**
 * Generates a unique random integer between 1 and maxNumber.
 * Recursively generates a new number if it was drawn previously.
 */
function generateRandomNumber() {
    let chosenNumber = parseInt(Math.random() * maxNumber + 1);
    let totalElementsInList = drawnNumbersList.length;

    // Reset history if all available numbers have been drawn
    if (totalElementsInList == maxNumber) {
        drawnNumbersList = [];
    }

    if (drawnNumbersList.includes(chosenNumber)) {
        return generateRandomNumber();
    } else {
        drawnNumbersList.push(chosenNumber);
        console.log(drawnNumbersList);
        return chosenNumber;
    }
}

/**
 * Clears the user input field.
 */
function clearInputField() {
    let guessInput = document.querySelector('input');
    guessInput.value = '';
}

/**
 * Resets the game to its starting state.
 */
function restartGame() {
    secretNumber = generateRandomNumber();
    clearInputField();
    attempts = 1;
    displayInitialMessage();
    document.getElementById('restart').setAttribute('disabled', true);
}
