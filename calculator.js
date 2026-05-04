let calculation = localStorage.getItem("calculation") || "";
// Display calculation when pages loads
displayCalc();

function pressNumber(num) {
  calculation += num;
  displayCalc();
  saveToStorage();
}

function pressOperator(op) {
  calculation += op;
  displayCalc();
  saveToStorage();
}

function pressEquals() {
  calculation = eval(calculation);
  displayCalc();
  saveToStorage();
}

function clearCalc() {
  calculation = "";
  displayCalc();
  saveToStorage();
}

function displayCalc() {
  document.querySelector(".js-calculation").innerHTML = calculation;
}

function saveToStorage() {
  localStorage.setItem("calculation", calculation);
}

document.querySelector(".js-number-button-1").addEventListener("click", () => {
  pressNumber(1);
});

document.querySelector(".js-number-button-2").addEventListener("click", () => {
  pressNumber(2);
});

document.querySelector(".js-number-button-3").addEventListener("click", () => {
  pressNumber(3);
});

document.querySelector(".js-number-button-4").addEventListener("click", () => {
  pressNumber(4);
});

document.querySelector(".js-number-button-5").addEventListener("click", () => {
  pressNumber(5);
});

document.querySelector(".js-number-button-6").addEventListener("click", () => {
  pressNumber(6);
});

document.querySelector(".js-number-button-7").addEventListener("click", () => {
  pressNumber(7);
});

document.querySelector(".js-number-button-8").addEventListener("click", () => {
  pressNumber(8);
});

document.querySelector(".js-number-button-9").addEventListener("click", () => {
  pressNumber(9);
});

document.querySelector(".js-number-button-0").addEventListener("click", () => {
  pressNumber(0);
});

document.querySelector(".js-decimal-button").addEventListener("click", () => {
  pressNumber(".");
});

document
  .querySelector(".js-operator-button-add")
  .addEventListener("click", () => {
    pressOperator("+");
  });

document
  .querySelector(".js-operator-button-minus")
  .addEventListener("click", () => {
    pressOperator("-");
  });

document
  .querySelector(".js-operator-button-divide")
  .addEventListener("click", () => {
    pressOperator("/");
  });

document
  .querySelector(".js-operator-button-multiply")
  .addEventListener("click", () => {
    pressOperator("*");
  });

document.querySelector(".js-clear-button").addEventListener("click", () => {
  clearCalc();
});

document.querySelector(".js-equal-button").addEventListener("click", () => {
  pressEquals();
});
