const display = document.getElementById("display");
const buttons = document.querySelectorAll("button");

loadSavedCalculation();

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const value = button.dataset.value;
    const action = button.dataset.action;

    if (value) {
      display.value += value;

      saveCalculation();
    } else if (action === "clear") {
      display.value = "";

      saveCalculation();
    } else if (action === "delete") {
      display.value = display.value.slice(0, -1);

      saveCalculation();
    } else if (action === "calculate") {
      try {
        display.value = eval(display.value);
      } catch {
        display.value = "Error";
      }

      saveCalculation();
    }
  });
});

function saveCalculation() {
  localStorage.setItem("calculatorData", display.value);
}

function loadSavedCalculation() {
  const savedData = localStorage.getItem("calculatorData");

  if (savedData) {
    display.value = savedData;
  }
}
