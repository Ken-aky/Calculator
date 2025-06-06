let number1 = ""; 
let number2 = "";
let operator = null;
let result = null;
let resetOnNextInput = false;
let isWhite = false;

function getNumber(button) {
    if (operator === null) {
        if (resetOnNextInput) {
            number1 = button.innerText;
            resetOnNextInput = false;
        } else {
            if (number1 === "" && button.innerText === "0") {
                number1 = "0.";
            } else if (number1 === "0" && button.innerText !== ".") {
                number1 = "0.";
                number1 += button.innerText;
            } else {
                number1 += button.innerText;
            }
        }
        console.log(number1);
        display(number1);
    } else {
        if (number2 === "" && button.innerText === "0") {
            number2 = "0.";
        } else if (number2 === "0" && button.innerText !== ".") {
            number2 = "0.";
            number2 += button.innerText;
        } else {
            number2 += button.innerText;
        }
        console.log(number2);
        display(number2);
    }
}


function getOperator(button) {
    if (number1 !== "") { 
        operator = button.innerText;
    }
    display(operator);
}

function getResult() {
    if (number1 !== "" && number2 !== "" && operator) {
        const n1 = Number(number1);
        const n2 = Number(number2);

        if (operator === "+") {
            result = n1 + n2;
        } else if (operator === "-") {
            result = n1 - n2;
        } else if (operator === "X") {
            result = n1 * n2;
        } else if (operator === "/") {
            result = n1 / n2;
        } else if (operator === "%") {
            result = (n1/100) * n2;
        }
        result = Number(result.toFixed(4));
    } else {
        result = "Fehler!";
    }
    console.log(result);
    number1 = String(result);
    number2 = "";
    operator = null;
    result = null;
    resetOnNextInput = true;
    display(number1);
}

function ClearAll() {
    number1 = "";
    number2 = "";
    operator = null;
    result = null;
    display(0);
}

function signChange() {
    let number = Number(number1);
    if (number !== 0) {
        number = number *(-1)
        number1 = String(number);
    }
    console.log(number1);
    display(number1);
}

function display(element) {
    document.querySelector(".ResultDisplay").innerHTML = element;
}



function colorSwitch() {
    if (isWhite === false) {
        document.body.style.backgroundColor = "white";
        document.getElementsByClassName("Main-container")[0].style.backgroundColor = "white";
        document.getElementsByClassName("Calculator-container")[0].style.backgroundColor = "white";
        document.getElementsByClassName("Calculator-container")[0].style.border = "1px solid black";

        document.getElementsByClassName("display")[0].style.backgroundColor = "white";
        document.getElementsByClassName("display")[0].style.color = "black";
        document.getElementsByClassName("display")[0].style.border = "1px solid black";

        document.getElementsByClassName("ResultDisplay")[0].style.color = "black";

        let allButtons = document.getElementsByTagName("button");
        for (let i = 0; i < allButtons.length; i++) {
            allButtons[i].style.backgroundColor = "white";
            allButtons[i].style.color = "black";
            allButtons[i].style.border = "1px solid black";

            allButtons[i].onmouseenter = function() {
                this.style.backgroundColor = "black";
                this.style.color = "white";
                this.style.border = "1px solid white";
            };
            allButtons[i].onmouseleave = function() {
                this.style.backgroundColor = "white";
                this.style.color = "black";
                this.style.border = "1px solid black";
            };
        }
        
        document.querySelector('.SwitchIcon').src = "/Images/dark.png";

        isWhite = true;
    } else {
        document.body.style.backgroundColor = "black";
        document.getElementsByClassName("Main-container")[0].style.backgroundColor = "black";
        document.getElementsByClassName("Calculator-container")[0].style.backgroundColor = "black";
        document.getElementsByClassName("Calculator-container")[0].style.border = "1px solid white";

        document.getElementsByClassName("display")[0].style.backgroundColor = "black";
        document.getElementsByClassName("display")[0].style.color = "white";
        document.getElementsByClassName("display")[0].style.border = "1px solid white";

        document.getElementsByClassName("ResultDisplay")[0].style.color = "white";

        let allButtons = document.getElementsByTagName("button");
        for (let i = 0; i < allButtons.length; i++) {
            allButtons[i].style.backgroundColor = "black";
            allButtons[i].style.color = "white";
            allButtons[i].style.border = "1px solid white";

            allButtons[i].onmouseenter = function() {
                this.style.backgroundColor = "white";
                this.style.color = "black";
                this.style.border = "1px solid black";
            };
            allButtons[i].onmouseleave = function() {
                this.style.backgroundColor = "black";
                this.style.color = "white";
                this.style.border = "1px solid white";
            };
        }
        
        document.querySelector('.SwitchIcon').src = "/Images/light.png";

        isWhite = false;
    }
}
