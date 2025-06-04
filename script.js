let operandOne;
let operandTwo;
let operator;
let displayValue = "";

function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  return a / b
}

function operate(op, num1, num2) {
  if (op == "+") {
    return add(num1, num2)
  } else if (op == "-") {
    return subtract(num1, num2)
  } else if (op == "*") {
    return multiply(num1, num2)
  } else {
    if (num2 === 0) {
      return "silly goose"
    } else {
      return divide(num1, num2)
    }
  }
}

const buttons = document.querySelectorAll("button");

function updateDisplay() {
  const display = document.querySelector(".display");
  display.classList.add("display-text");
  display.textContent = displayValue;
}

function appendToDisplay(input) {
  displayValue += input;
  updateDisplay();
}

function clearDisplay() {
  displayValue = "";
}

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    appendToDisplay(button.textContent)
  });
});