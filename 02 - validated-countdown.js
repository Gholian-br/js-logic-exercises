// Countdown exercise

let input = prompt('Enter a number to count down to 0:');
let number = parseInt(input);

// Input validation: handles non-numeric inputs
while (isNaN(number)) {
    alert('This is not a valid number. Please try again.');
    input = prompt('Enter a number to count down to 0:');
    number = parseInt(input);
}

// Loop displaying current count until 1
while (number >= 1) {
    console.log('Current count: ' + number + '.');
    number--;
}

// Final result display
console.log('Final count: ' + number + '.');
