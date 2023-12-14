// Ex 01
function evenOrOdd(number) {
  if (number % 2 === 0) {
    return true;
  } else {
    return false;
  }
}
evenOrOdd(4);

// Ex 02
function concatenate(name, surname) {
  return `${name} ${surname}`;
}
concatenate("Nuno", "Sousa");

//Ex 03
function sumNumbers(number) {
  let total = 0;

  for (let i = 0; i < number; i++) {
    total += i;
  }

  return total;
}
sumNumbers(10);

// Ex 04
function generateRandomNumber() {
  // Returns a random integer from 1 to 10:
  let randomNumber = Math.floor(Math.random() * 10) + 1;
  // get the user input from the prompt function and convert it into a Number
  let userGuess = +prompt("Guess the number between 1 and 10:");

  if (userGuess < randomNumber) {
    return "Higher!";
  } else if (userGuess > randomNumber) {
    return "Lower!";
  } else {
    return "Correct";
  }
}
// generateRandomNumber();

// Ex 05
function convertCelsiusToFahrenheit(celsius) {
  return `It is ${(celsius * 9) / 5 + 32}ºF outside!`;
}
convertCelsiusToFahrenheit(14);

// Ex 06
let clicks = 0;
function countClicks() {
  clicks++;
  console.log(`Number of clicks: ${clicks}.`);
}

// Ex 07
function digitalClock() {
  let dateTime = new Date();

  // if ... is below 10, add a zero before, otherwise don't add anything
  let hours =
    dateTime.getHours() < 10 ? `0${dateTime.getHours()}` : dateTime.getHours();

  let minutes =
    dateTime.getMinutes() < 10
      ? `0${dateTime.getMinutes()}`
      : dateTime.getMinutes();

  let seconds =
    dateTime.getSeconds() < 10
      ? `0${dateTime.getSeconds()}`
      : dateTime.getSeconds();

  //   if (hours < 10) {
  //     hours = `0${hours}`;
  //   }

  //   if (minutes < 10) {
  //     minutes = `0${minutes}`;
  //   }

  //   if (seconds < 10) {
  //     seconds = `0${seconds}`;
  //   }

  console.log(`${hours}h : ${minutes}min : ${seconds}s`);
  return `${hours}h : ${minutes}min : ${seconds}s`;
}
setInterval(() => {
  digitalClock();
}, 1000);
