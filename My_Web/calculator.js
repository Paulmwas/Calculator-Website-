const keys = Array.from(document.querySelectorAll(".btn"));
const display = document.querySelector("#display");
let operator = null;
let firstValue = "";
let secondValue = "";
let shouldReset = false;

keys.forEach(key => {
    key.addEventListener("click", () => {
        if (key.classList.contains("operator")) {
            handleOperator(key.value);
        } else if (key.id === "clear") {
            resetDisplay();
        } else if (key.id === "calculate") {
            calculate();
        } else {
            inputNumber(key.value);
        }
    });
});

function handleOperator(nextOperator) {
    if (!firstValue) {
        operator = nextOperator;
        return;
    }
    if (secondValue) {
        calculate();
    }
    operator = nextOperator;
    shouldReset = true;
}

function resetDisplay() {
    display.value = "";
    firstValue = "";
    secondValue = "";
    operator = null;
    shouldReset = false;
}

function calculate() {
    let result = "";
    if (operator === "+") {
        result = parseFloat(firstValue) + parseFloat(secondValue);
    } else if (operator === "-") {
        result = parseFloat(firstValue) - parseFloat(secondValue);
    } else if (operator === "*") {
        result = parseFloat(firstValue) * parseFloat(secondValue);
    } else if (operator === "/") {
        result = parseFloat(firstValue) / parseFloat(secondValue);
    }
    display.value = result;
    firstValue = result;
    shouldReset = true;
}

function inputNumber(num) {
    if (shouldReset) {
        display.value = "";
        shouldReset = false;
    }
    display.value += num;
    if (!operator) {
        firstValue += num;
    } else {
        secondValue += num;
    }
}