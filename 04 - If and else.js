alert('Welcome to the secret number game!');

// Sets the secret number between 1 and 10 and logs it to the console
let secretNumber = Math.floor(Math.random() * 10) + 1;
let guess;
let attempts = 0;
console.log(secretNumber);

// MAIN LOOP: The game keeps running while the guess is incorrect
while (guess != secretNumber) {
    guess = prompt('Choose a number between 1 and 10.');

    // 1. Validates if the guess is an integer within the required pattern
    while (isNaN(guess) || guess <= 0 || guess % 1 !== 0 || guess.trim() === '' || guess > 10) {
        alert('Invalid number. Use positive integers from 1 to 10.');
        guess = prompt('Choose a number between 1 and 10.');
    }

    attempts++;
    
    // 2. Gives a hint if the guess is wrong
    if (guess < secretNumber) {
        alert('The secret number is greater than ' + guess + '!');
    } else if (guess > secretNumber) {
        alert('The secret number is less than ' + guess + '!');
    }
}

// End of the game
alert(`Congratulations! You guessed the secret number in ${attempts === 1 ? 'a single attempt' : attempts + ' attempts'}!`);
