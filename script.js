function add(firstNum, ...secondNum) {
    console.log("add");
    
}

function subtract(firstNum, ...secondNum) {
    console.log("subtract");
    
}

function multiply(firstNum, ...secondNum) {
    console.log("multiply");
    
}

function divide(firstNum, ...secondNum) {
    console.log("divide");
    
}

function operate(numArr) {
    let numberOne = null;
    let numberTwo = null;
    let operator = null;
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
            add(numberOne, numberTwo);

        } else if (operator === "-") {
            subtract(numberOne, numberTwo);

        } else if (operator === "*") {
            multiply(numberOne, numberTwo);

        } else if (operator === "/") {
            divide(numberOne, numberTwo);
            
        }


    }
}

function extractCalc(string) {
    return string.split(" ");
    
}

function program() {

    let numberButtons = document.querySelectorAll(".number-button");
    let operatorButtons = document.querySelectorAll(".operator-button");
    let resultButton = document.querySelector(".result-button");
    let display = document.querySelector(".display span");

    numberButtons.forEach(item => item.addEventListener("click", () => {        
        display.textContent = display.textContent + item.textContent;
    }));

    operatorButtons.forEach(item => item.addEventListener("click", () => {
        display.textContent = display.textContent + " " + item.textContent + " ";
    }));

    resultButton.addEventListener("click", () => {
        let calcArr = extractCalc(display.textContent);

        operate(calcArr);
    });
}

program();