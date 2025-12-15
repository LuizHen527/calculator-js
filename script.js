function add(firstNum, secondNum) {
    return Number(firstNum) + Number(secondNum);
    
}

function subtract(firstNum, secondNum) {
    return firstNum - secondNum;
    
}

function multiply(firstNum, secondNum) {
    return firstNum * secondNum;
    
}

function divide(firstNum, secondNum) {

    if (firstNum === "0" || secondNum === "0") {
        return "Dont divide by zero."
    }

    return firstNum / secondNum;
    
}

function roundFloat(number) {

    let numberRounded = number + "";

    numberRounded = numberRounded.split(".");

    if (numberRounded[1].length > 3) {

        numberRounded = numberRounded[0] + "." + numberRounded[1].slice(0, 3);

        return numberRounded + "...";
    }

    return number
    
}

function operate(numArr) {
    let numberOne = null;
    let numberTwo = null;
    let operator = null;
    let result = 0;

    const OPERATORS = "+-*/";    

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

    if (!Number.isInteger(result)) {
        result = roundFloat(result);
    }

    return result;
}

function extractCalc(string) {

    let calcArr = string.split(" ");

    if (calcArr[2] === "") {
        calcArr.pop();
    }

    return calcArr;
    
}

function program() {

    let numberButtons = document.querySelectorAll(".number-button");
    let operatorButtons = document.querySelectorAll(".operator-button");
    let resultButton = document.querySelector(".result-button");
    let display = document.querySelector(".display span");
    let clearButton = document.querySelector(".clear-button");

    let resultOnDisplay = false;

    numberButtons.forEach(item => item.addEventListener("click", () => {
        if (resultOnDisplay) {
            display.textContent = "";
            resultOnDisplay = false;
        }

        display.textContent = display.textContent + item.textContent;
    }));

    operatorButtons.forEach(item => item.addEventListener("click", () => {
        let calcArr = extractCalc(display.textContent);

        if (resultOnDisplay) {
            display.textContent = "";
            resultOnDisplay = false;
        }

        if (calcArr.length === 3) {
            display.textContent = operate(calcArr);
        }

        if (!(calcArr[calcArr.length - 1] === item.textContent)) {
            console.log("batata");
            display.textContent = display.textContent + " " + item.textContent + " ";

        }

    }));

    resultButton.addEventListener("click", () => {
        let calcArr = extractCalc(display.textContent);

        display.textContent = operate(calcArr);

        resultOnDisplay = true;
    });

    clearButton.addEventListener("click", () => {
        display.textContent = "0";
        resultOnDisplay = true;
    })
        
}

program();