function add(firstNum, secondNum) {
    
}

function subtract(firstNum, secondNum) {
    
}

function multiply(firstNum, secondNum) {
    
}

function divide(firstNum, secondNum) {
    
}

function operate(operator, firstNum, secondNum) {
    if (operator === "+") {
        add(firstNum, secondNum);

    } else if (operator === "-") {
        subtract(firstNum, secondNum);

    } else if (operator === "*") {
        subtract(firstNum, secondNum);

    } else if (operator === "/") {
        divide(firstNum, secondNum);
        
    }


}

function updateDisplay(digit) {
    
}

function program() {
    
    let numberButtons = document.querySelectorAll(".number-button");
    let display = document.querySelector(".display");

    numberButtons.forEach(item => item.addEventListener("click", () => {        
        display.textContent = display.textContent + item.textContent;
    }))
}

program();