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
  if (displayValue.length > 14) {
    clearDisplay()
  }
}

function clearDisplay() {
  displayValue = "";
}

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    if (button.textContent === "AC") {
      clearDisplay()
      appendToDisplay("")
    } else if (button.textContent === "=") {
      for (let x = 0; x < displayValue.length; x++) {
        if (displayValue[x] == "+") { // case if operator is +
            let split = displayValue.split("+")
            if (split.length > 2) {
              clearDisplay()
              appendToDisplay("too long")
            } else {
              operandOne = parseInt(split[0])
              operandTwo = parseInt(split[1])
              let answer = operate("+", operandOne, operandTwo)
              clearDisplay()
              appendToDisplay(answer)
            }
          clearDisplay()
        } else if (displayValue[x] == "-") { // case if operator is -
            split = displayValue.split("-")
            if (split.length > 2) {
              clearDisplay()
              appendToDisplay("too long")
            } else {
              operandOne = parseInt(split[0])
              operandTwo = parseInt(split[1])
              answer = operate("-", operandOne, operandTwo)
              clearDisplay()
              appendToDisplay(answer)
            }
          clearDisplay()
        } else if (displayValue[x] == "/") { // case if operator is /
            split = displayValue.split("/")
            if (split.length > 2) {
              clearDisplay()
              appendToDisplay("too long")
            } else {
              operandOne = parseInt(split[0])
              operandTwo = parseInt(split[1])
              answer = operate("/", operandOne, operandTwo)
              clearDisplay()
              appendToDisplay(answer)
            }
          clearDisplay()
        } else if (displayValue[x] == "*") { // case if operator is *
            split = displayValue.split("*")
            if (split.length > 2) {
              clearDisplay()
              appendToDisplay("too long")
            } else {
              operandOne = parseInt(split[0])
              operandTwo = parseInt(split[1])
              answer = operate("*", operandOne, operandTwo)
              clearDisplay()
              appendToDisplay(answer)
            }
          clearDisplay()
        }
      }
    } else {
      appendToDisplay(button.textContent)
    }
  });
});