let operandOne;
let operandTwO;
let operator;

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