function add(firstNum, secondNum) {
    return firstNum + secondNum;
    
}

function subtract(firstNum, secondNum) {
    return firstNum - secondNum;
    
}

function multiply(firstNum, secondNum) {
    return firstNum * secondNum;
    
}

function divide(firstNum, secondNum) {
    return firstNum / secondNum;
    
}

function operate(numArr) {
    let numberOne = null;
    let numberTwo = null;
    let operator = null;
    let result = null;

    let OPERATORS = "+-*/";    

    for (let digit of numArr) {
    
        if (OPERATORS.includes(digit)) {
            operator = digit;
            continue;
            
        } else {
            if (numberOne === null) {
                numberOne = digit;
                continue;

            } else if (numberTwo === null) {
                numberTwo = digit;

            }
        }

        

        if (operator === "+") {
            result = add(numberOne, numberTwo);

        } else if (operator === "-") {
            result = subtract(numberOne, numberTwo);

        } else if (operator === "*") {
            result = multiply(numberOne, numberTwo);

        } else if (operator === "/") {
            result = divide(numberOne, numberTwo);
            
        }
    }

    return result;
}

function extractCalc(string) {
    return string.split(" ");
    
}

function program() {

    let numberButtons = document.querySelectorAll(".number-button");
    let operatorButtons = document.querySelectorAll(".operator-button");
    let resultButton = document.querySelector(".result-button");
    let display = document.querySelector(".display span");

    let resultOnDisplay = false;

    numberButtons.forEach(item => item.addEventListener("click", () => {
        if (resultOnDisplay) {
            display.textContent = "";
            resultOnDisplay = false;
        }

        display.textContent = display.textContent + item.textContent;
    }));

    operatorButtons.forEach(item => item.addEventListener("click", () => {
        if (resultOnDisplay) {
            display.textContent = "";
            resultOnDisplay = false;
        }

        display.textContent = display.textContent + " " + item.textContent + " ";
    }));

    resultButton.addEventListener("click", () => {
        let calcArr = extractCalc(display.textContent);

        display.textContent = operate(calcArr);

        resultOnDisplay = true;
    });
}

program();