let maximum = parseInt(prompt('Enter your maximum number!'));

while (!maximum) {
    maximum = parseInt(prompt('Enter a valid number!!'))
}

const targetNum = Math.floor(Math.random() * maximum) + 1;

let guess = parseInt(prompt('Enter the first guess'));
let attempts = 1;

while (parseInt(guess) !== targetNum) {
    if (guess == 'q') break;
    attempts++;
    if (guess > targetNum) {
        guess = prompt('Too high, enter lower than this');
    } else if (guess < targetNum){
        guess = prompt('Too low, enter higher than this');
    }
    else{
        guess = prompt('Enter a valid number or type "q" to quit')
    }
}
if (guess === 'q') {
    console.log('You quit, loser!!');
} else {
    console.log('You win!!');
    console.log(`You took ${attempts} guesses to guess the correct answer`);
}
