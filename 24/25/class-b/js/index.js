// let firstName = "Nuno";

// name = "John";
// number = 20;

// const users = [
//   {
//     id: 123213123132,
//     name: "Nuno",
//   },
//   {
//     id: 123213123132,
//     name: "Anna",
//   },
//   {
//     id: 123213123132,
//     name: "John",
//   },
// ];

// function multiply(number1, number2) {
//   let result = number1 * number2;
//   console.log(result);
// }

// // multiply(3, 5);

// // arrow function
// const subtraction = (number1, number2) => {
//   let result = number1 - number2;
//   console.log(result);
// };

// // subtraction(5, 6);

// const LIMIT = 10;

// if (LIMIT === 10) {
//   console.log("Number 10");
// } else {
//   console.log("Number which it not 10");
// }

// 1. Get button
// 2. Checking when button is clicked - event listener
// 3. Get paragraph label
// 4. Change the text dynamically

// // 1.
// let button = document.querySelector(".card-button");

// // 3.
let alertElement = document.querySelector(".alert");

// let counter = 0;

// // 2.
// button.addEventListener("click", function () {
//   counter++;

//   alertElement.innerHTML = `You have added ${counter} chairs to your basket!`;
// });

let form = document.querySelector("form");

form.addEventListener("submit", function (event) {
  event.preventDefault();

  let inputValue = document.querySelector("input").value;

  alertElement.innerHTML = inputValue;

  console.log(inputValue);
});
