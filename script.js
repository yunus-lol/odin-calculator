let operandOne;
let operandTwo;
let operator;
let displayValue = "0";

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

updateDisplay();

function click() {
  const nine = document.querySelector("#nine")
  nine.addEventListener("click", () => {
    displayValue += "9"
    updateDisplay()
  })
  const eight = document.querySelector("#eight")
  eight.addEventListener("click", () => {
    displayValue += "8"
    updateDisplay()
  })  
  const seven = document.querySelector("#seven")
  seven.addEventListener("click", () => {
    displayValue += "7"
    updateDisplay()
  })  
  const six = document.querySelector("#six")
  six.addEventListener("click", () => {
    displayValue += "6"
    updateDisplay()
  })
}

click()