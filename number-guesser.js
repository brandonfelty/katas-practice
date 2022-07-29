const prompt = require('prompt-sync')();

let attempts = 0;
const randomNum = Math.floor(Math.random() * 100);
let answer = -1;

while (answer !== randomNum) {
  answer = Number.parseInt(prompt("Guess a number: "));
  attempts++;
  if (answer > randomNum) {
    console.log("Too High!");
  }
  if (answer < randomNum) {
    console.log("Too Low!");
  }
  if (answer === randomNum) {
    if (attempts === 1) attempts = 0;
    console.log(`You got it ${attempts ? `in ${attempts} attemps!` : "on your first try!"}`);
  }
}

