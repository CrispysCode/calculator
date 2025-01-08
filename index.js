const btns = document.querySelectorAll(".btn-num, .btn-oper");
const display = document.querySelector(".display");
const equalBtn = document.querySelector(".btn-equal")
const clearBtn = document.querySelector(".btn-clear");
let currentInput = "";
let prevInput = "";
let oper = "";

clearBtn.addEventListener('click', () => {
    display.textContent = "";
});

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
  return b !== 0 ? a / b : "Error";
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

btns.forEach(btn => {
    btn.addEventListener('click', (e) => {
        const btnValue = btn.getAttribute('data-num');
        if (btn.classList.contains('btn-num')) {
            currentInput += btnValue;
            display.textContent = currentInput;
        }
        
        if (btn.classList.contains('btn-oper')) {
            if (currentInput !== "") {
                if (prevInput !== "") {
                prevInput = operate(oper, parseFloat(prevInput), parseFloat(currentInput));
                display.textContent = prevInput;
            } else {
                prevInput = currentInput;
            }
        }
        currentInput = "";
        oper = btnValue;
    }
    })
});
