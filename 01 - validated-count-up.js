// Progressive count (Count up).

let input = prompt('Enter a number to count up to, starting from 0:');
let targetNumber = parseInt(input);
let currentCount = 0;

// Input validation: handles non-numeric inputs or negative numbers
while (isNaN(targetNumber) || targetNumber < 0) {
    alert('This is not a valid number. Please try again.');
    input = prompt('Enter a number to count up to, starting from 0:');
    targetNumber = parseInt(input);
}

// Loop to display the current count until the target is reached
while (currentCount !== targetNumber) {
    console.log('Current count: ' + currentCount + '.');
    currentCount++;
}

// Final result display
console.log('Final count: ' + currentCount + '.');
