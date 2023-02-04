console.log("Kon'nichiwa, Sekai!");
const modeBtn = document.querySelector(".mode-button");
const modeDisc = document.querySelector(".disc");
const title = document.querySelector(".title");
const calculatorScreen = document.querySelector(".calculator-screen-input");
const digitKeys = document.querySelectorAll(".digits");
const operatorKeys = document.querySelectorAll(".operator");

modeBtn.addEventListener("click", () => {
  if(document.body.classList.contains("light")){
    document.body.classList.replace("light", "dark");
    modeBtn.style.backgroundColor = "var(--bg-dark)";
    modeDisc.classList.replace("light", "dark");
    title.classList.replace("light", "dark");
    calculatorScreen.classList.replace("light", "dark");
} else {
    document.body.classList.replace("dark", "light");
    modeBtn.style.backgroundColor = "var(--bg-light)";
    modeDisc.classList.replace("dark", "light");
    title.classList.replace("dark", "light");
    calculatorScreen.classList.replace("dark", "light");
}
    digitKeys.forEach((key) => {
        key.classList.contains("light")?key.classList.replace("light", "dark"):key.classList.replace("dark", "light");
    });
    operatorKeys.forEach((key) => {
        key.classList.contains("light")?key.classList.replace("light", "dark"):key.classList.replace("dark", "light");
    });
});

let expression = "";
let result = "";
let operator = "";

digitKeys.forEach((key) => {
    key.addEventListener('click', () => {
        if(expression.length <= 10 && key.value !== "clear" && key.value !== "all-clear") {
            expression += key.value;
            calculatorScreen.value = expression;
        }
    })
});

operatorKeys.forEach((key) => {
    key.addEventListener('click', () => {
        if (key.value !== "=" && expression.length > 0 ) {
            operator = key.value;
            expression += operator;
            calculatorScreen.value = expression;
        }
    })
});

document.querySelector('.equal-sign').addEventListener('click', () => {
    if (expression.length > 0) {
        result = eval(expression);
        calculatorScreen.value = result;
        expression = "";
    }
});

document.querySelector('.all-clear').addEventListener('click', () => {
    expression = "";
    calculatorScreen.value = expression;
});

document.querySelector('.clear').addEventListener('click', () => {
    expression = expression.slice(0, expression.length - 1);
    calculatorScreen.value = expression;
});


// My first code
// let expression = "";
// let result = "";
// let operator = "";
// let operatorPressed = false;
// let equalPressed = false;
// digitKeys.forEach((key) => {
//     key.addEventListener("click", () => {
//         if(equalPressed){
//             expression = "";
//             equalPressed = false;
//         }
//         if(expression.length < 20 && key.value != "clear" && key.value != "all-clear"){
//             expression += key.value;
//             calculatorScreen.value = expression;
//         }
//     });
// });

// operatorKeys.forEach((key) => {
//     key.addEventListener("click", () => {
//         if (key.value == "=") {
//             if(expression.length < 20){
//                 let expressionArray = expression.split(operator);
//                 if(expressionArray.length > 1){
//                     let num1 = parseInt(expressionArray[0]);
//                     let num2 = parseInt(expressionArray[1]);
//                     switch(operator){
//                         case "+":
//                             result = num1 + num2;
//                             break;
//                         case "-":
//                             result = num1 - num2;
//                             break;
//                         case "x":
//                             result = num1 * num2;
//                             break;
//                         case "/":
//                             result = num1 / num2;
//                             break;
//                         default:
//                             result = "Error";
//                     }
//                     expression = result;
//                     calculatorScreen.value = result;
//                     operatorPressed = false;
//                     equalPressed = true;
//                 }
//             }
//         }else {
//             if(expression.length < 20){
//                 if(operatorPressed){
//                     expression = expression.slice(0, expression.length - 1);
//                 }
//                 expression += key.value;
//                 calculatorScreen.value = expression;
//                 operatorPressed = true;
//                 operator = key.value;
//             }
//         }
//     });
// });

// document.querySelector(".all-clear").addEventListener("click", () => {
//     expression = "";
//     calculatorScreen.value = expression;
//     operatorPressed = false;
//     equalPressed = false;
// });

// document.querySelector(".clear").addEventListener("click", () => {
//     if(expression.length > 0){
//         expression = expression.slice(0, expression.length - 1);
//         calculatorScreen.value = expression;
//     }
// });