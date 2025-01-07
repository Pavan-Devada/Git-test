function add(first, second) {
    return (first + second);
}

function subtract(first, second) {
    return (first - second);
}

function divison(first, second) {
    return (first / second);
}

function multiply(first, second) {
    return (first * second);
}

function percent(value) {
    return (value / 100);
}

function inputUpdate(value) {
    const operators = { add: "+", subtract: "-", multiply: "x", divison: "/", one: "1", two: "2", three: "3", four: "4", five: "5", six: "6", seven: "7", eight: "8", nine: "9", zero: "0" };
    switch (value) {
        case "one":
        case "two":
        case "three":
        case "four":
        case "five":
        case "six":
        case "seven":
        case "eight":
        case "nine":
        case "zero":
            currentInput += operators[value];
            CalculateResult();
            break;
        case "add":
        case "subtract":
        case "multiply":
        case "divison":
            if ("x/+-".includes(currentInput.at(-1))) {
                currentInput = currentInput.slice(0, currentInput.length - 1) + operators[value];
            }
            else {
                currentInput += operators[value];
            }
            break;
        case "percent":
            currentInput += "%";
            break;
        case "double-zero":
            currentInput += "00";
            break;
        case "clear":
            currentInput = currentInput.slice(0, -1);
            displayResult = currentInput;
            break;
        case "all-clear":
            currentInput = "";
            displayResult = "";
            break;
        case "decimal":
            if (!currentInput.includes(".")) {
                currentInput += ".";
            }
            break;
        case "equals":
            currentInput = String(displayResult);
            displayResult = "";
    }
}

function inputDisplay() {
    input.textContent = currentInput;
}

function evaluateDMAS(expression) {
    expression = expression.replace(/\s+/g, '');
    expression = evaluateSimpleExpression(expression, /(\d+(\.\d+)?)([x/])(\d+(\.\d+)?)/, (a, op, b) =>
        op === 'x' ? multiply(a, b) : divison(a, b)
    );
    expression = evaluateSimpleExpression(expression, /(-?\d+(\.\d+)?)([+\-])(\d+(\.\d+)?)/, (a, op, b) =>
        op === '+' ? add(a, b) : subtract(a, b)
    );
    return parseFloat(expression);
}

function evaluateSimpleExpression(expression, regex, callback) {
    let match;
    while ((match = regex.exec(expression))) {
        const [fullMatch, a, , op, b] = match;
        const result = callback(parseFloat(a), op, parseFloat(b));
        expression = expression.replace(fullMatch, result);
    }
    return expression;
}

function CalculateResult() {
    displayResult = evaluateDMAS(currentInput);
}

function outputUpdate() {
    if (!isNaN(displayResult)) {
        output.textContent = displayResult;
    }

}


let inputButtons = document.querySelector(".input-buttons");
inputButtons.addEventListener("click", (event) => {
    target = event.target.classList.value;
    lastButton = target.slice(7)
    inputUpdate(lastButton);
    inputDisplay();
    outputUpdate();
})

let currentInput = "";
let displayResult = "";
let input = document.querySelector(".input");
let output = document.querySelector(".output");
