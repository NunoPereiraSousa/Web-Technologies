let alertLabel = document.querySelector(".alert");
let button = document.querySelector(".card-button");

let counter = 0;

button.addEventListener("click", function () {
  counter++;
  alertLabel.innerHTML = `You have added ${counter} chairs to your basket!`;
});
