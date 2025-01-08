let num;
let operator
let anotherNum;

function add(a, b) {
  return a + b;
}

const subtract = (a, b) => {
    return a - b;
}

const multiply = (a, b) => {
    return a * b;
}

const divide = (a, b) => {
  return a / b;
}

function operate(operator, a, b) {
    if (operator === "+") {
        return add(a, b);
    } 
    if (operator === "-") {
        return subtract(a, b);
    }
    if (operator === "*") {
        return multiply(a, b);
    }
    if (operator === "/") {
        return divide(a, b);
    }
}

