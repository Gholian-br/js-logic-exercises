// Interval countdown exercise using setInterval

let counter = 10;

console.log('Starting countdown.');

// Timer running every 1000ms (1 second)
let timer = setInterval(() => {
    console.log('Current count: ' + counter + '.');
    counter--;

    // Stops the timer when reaching 0
    if (counter === 0) {
        console.log('Final count: ' + counter + '.');
        clearInterval(timer); // Stops the loop
    }
}, 1000);