// function multiply(number1, number2) {
//   let result = number1 * number2;

//   console.log(result);

//   return result;
// }

// const multiply2 = (number1, number2) => {
//   let result = number1 * number2;

//   console.log(result);

//   multiply(2, 5);

//   return result;
// };

// multiply2(3, 5);

// 1. Get button element
// 2. Add to button an event listener (click)
// 3. Dop something with the button click
// 4. Get paragraph element
// 5. Modify paragraph text

// 1.
let button = document.querySelector(".card-button");

// 4.
let alertElement = document.querySelector(".alert");
let counter = 0;

// 2.
button.addEventListener("click", () => {
  counter++;

  alertElement.innerHTML = `You have added ${counter} chairs to your basket!`;
});
