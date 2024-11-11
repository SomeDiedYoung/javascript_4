let input = document.getElementsByClassName("display")[0];
let firstOperand = null;
let secondOperand = null;
let operator = null;

for (let i = 0; i <= 9; i++) {
    let btn = document.getElementById(i.toString());
    btn.onclick = outputInfo;
}

function outputInfo() {
    input.value += this.textContent;
}

document.getElementById("+").onclick = addOperand;
document.getElementById("-").onclick = addOperand;
document.getElementById("*").onclick = addOperand;
document.getElementById("/").onclick = addOperand;

function addOperand() {
    firstOperand = parseFloat(input.value);
    operator = this.textContent;
    input.value += ` ${operator} `;
}

let result = document.getElementById("result");
result.onclick = function() {
    let parts = input.value.split(' ');
    firstOperand = parseFloat(parts[0]);
    operator = parts[1];
    secondOperand = parseFloat(parts[2]);
    calculate();
};

function calculate() {
    let currentValue = 0;
    switch (operator) {
        case '+':
            currentValue = firstOperand + secondOperand;
            break;
        case '-':
            currentValue = firstOperand - secondOperand;
            break;
        case '*':
            currentValue = firstOperand * secondOperand;
            break;
        case '/':
            currentValue = firstOperand / secondOperand;
            break;
    }
    input.value = currentValue;
}

let reset = document.getElementById("reset");
reset.onclick = clearCalculator;

function clearCalculator() {
    firstOperand = null;
    secondOperand = null;
    operator = null;
    input.value = '';
}
