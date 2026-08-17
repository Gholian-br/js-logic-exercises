alert('Welcome to the secret number game!');

// Sets the secret number between 1 and 10 and logs it to the console.
let secretNumber = Math.floor(Math.random() * 10) + 1;

console.log(secretNumber);

// Defines guess as a variable and creates the attempts variable starting at 1.
let guess = prompt('Choose a number between 1 and 10.');
let attempts = 1;

// MAIN LOOP: The game keeps running while the guess is incorrect.
while (guess != secretNumber) {

    // 1. Validates if the guess is an integer within the required pattern.
    while (isNaN(guess) || guess <= 0 || guess % 1 !== 0 || guess.trim() === '' || guess > 10) {
        alert('Invalid number. Use positive integers from 1 to 10.');
        guess = prompt('Choose a number between 1 and 10.');
    }

    // 2. Once valid, checks if the guess is higher or lower, increments attempts, and gives a hint.
    if (guess < secretNumber) {
        alert('The secret number is greater than ' + guess + '!');
    } else {
        alert('The secret number is less than ' + guess + '!');
    }
    
    attempts++;
    guess = prompt('Choose a number between 1 and 10');
}

// End of the game
if (attempts > 1){
    alert('Congratulations! You guessed the secret number in ' + attempts + ' attempts!');
    } else {
        alert('Congratulations! You guessed the secret number in a single attempt!');
};
