"use strict";
let operationDiv = document.getElementById("operation-div");
let resultDiv = document.getElementById("result-div");
/*
formatNumbersWithComma(input)

this function will display out put with comma standard
e.g 5000 -> 5,000
for better readabilty
*/
function formatNumbersWithComma(input) {
    return input.replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",");
}
/* addChar(element : html-element)
   it add char or input (value) by click on the button
   generallly it create input string or expression for the output

*/
function addChar(element) {
    let char = element.getAttribute("data-value");
    let currentValue = operationDiv.innerText.replace(/,/g, '');
    currentValue += char;
    operationDiv.innerText = formatNumbersWithComma(currentValue);
}
/* plusorMinus()
 this function convert sign of the givan input
 if it is +ve then convert into -ve and vise-versa
*/
function plusorMinus() {
    let originalVal = Number(operationDiv.innerText.replace(/,/g, ''));
    originalVal = originalVal * -1;
    operationDiv.innerText = formatNumbersWithComma(originalVal.toString());
}
// clearScreen()
// it clear the result area or we can say display part
function clearScreen() {
    operationDiv.innerText = "";
}
// backspace()
// it clears the last character from the input string 
function backspace() {
    let operationValue = operationDiv.innerText.replace(/,/g, '');
    let operationValueLength = operationValue.length;
    let newOperationValue = operationValue.substring(0, operationValueLength - 1);
    operationDiv.innerText = formatNumbersWithComma(newOperationValue);
}
//Calculate fun.
// calculate()
// it will calculate the simple math equation and display
function calculate() {
    let operationValue = operationDiv.innerText.replace(/,/g, '');
    operationDiv.innerText = formatNumbersWithComma(eval(operationValue).toString());
}
// trigonometry function to calculate sine,cos,tan,cot,cosec,sec
// trigonometry(function name)
// it calculate trigonometry function value from given input and display
function trigonometry(fun) {
    let operationValue = Number(operationDiv.innerText.replace(/,/g, ''));
    let result = 0;
    switch (fun) {
        case "sine":
            result = Math.sin(operationValue);
            break;
        case "cos":
            result = Math.cos(operationValue);
            break;
        case "tan":
            result = Math.tan(operationValue);
            break;
        case "cot":
            result = 1 / Math.tan(operationValue);
            break;
        case "cosec":
            result = 1 / Math.sin(operationValue);
            break;
        case "sec":
            result = 1 / Math.cos(operationValue);
            break;
    }
    if (result === NaN) {
        operationDiv.innerText = "Error";
    }
    else {
        operationDiv.innerText = formatNumbersWithComma(result.toString());
    }
}
// mathFunction(function_name : string)
// this function will calculate the basic maths function values
function mathFunction(functionName) {
    let operationValue = Number(operationDiv.innerText.replace(/,/g, ''));
    let result = 0;
    switch (functionName) {
        case 'floor':
            result = Math.floor(operationValue);
            break;
        case 'ceil':
            result = Math.ceil(operationValue);
            break;
        case 'trunc':
            result = Math.trunc(operationValue);
            break;
    }
    operationDiv.innerText = formatNumbersWithComma(result.toString());
}
// calc_square()
// this function calculate the square the given input value
function calc_square() {
    let operationValue = Number(operationDiv.innerText.replace(/,/g, ''));
    operationValue *= operationValue;
    operationDiv.innerText = formatNumbersWithComma(operationValue.toString());
}
// calc_absolute()
// this function calculate the absolute value of given input
function calc_absolute() {
    let operationValue = Number(operationDiv.innerText.replace(/,/g, ''));
    operationDiv.innerText = String(Math.abs(operationValue));
}
// calc_exp()
// this function will calculate the exponent value of the given value
function calc_exp() {
    let operationValue = Number(operationDiv.innerText.replace(/,/g, ''));
    operationDiv.innerText = String(Math.exp(operationValue));
}
// fixed_exp()
// this function will fixed value with exponent values
// e.g 0.1234454e+20 -> 0.12e+20
function fixed_exp() {
    let operationValue = Number(operationDiv.innerText.replace(/,/g, ''));
    operationDiv.innerText = formatNumbersWithComma(operationValue.toExponential(3));
}
// radianToDegree()
// this function will convert 
function radianToDegree() {
    let operationValue = Number(operationDiv.innerText.replace(/,/g, ''));
    operationValue = operationValue * (180 / Math.PI);
    operationDiv.innerText = formatNumbersWithComma(operationValue.toString());
}
// calc_sqrt()
// this function will calculate the square root of given input
function calc_sqrt() {
    let operationValue = Number(operationDiv.innerText.replace(/,/g, ''));
    operationDiv.innerText = Math.sqrt(operationValue).toString();
}
// calc_factorial()
// this function will calculate the factorial value of the given value
function calc_factorial() {
    let operationValue = Number(operationDiv.innerText.replace(/,/g, ''));
    let result = 1;
    let i = 0;
    for (i = operationValue; i >= 1; i--) {
        result *= i;
    }
    operationDiv.innerText = result.toString();
}
// cal_ten_pow()
// this function will calculate the value of the power of 10
function calc_ten_pow() {
    let operationValue = Number(operationDiv.innerText.replace(/,/g, ''));
    operationDiv.innerText = Math.pow(10, operationValue).toString();
}
// log base 10 function
// calc_log()
// this function will calculate the logerithmic value base 10 and display result
function calc_log() {
    let operationValue = Number(operationDiv.innerText.replace(/,/g, ''));
    operationDiv.innerText = Math.log10(operationValue).toString();
}
//natural logarithm function
// calc_ln()
// this function will calculate the logerithmic value base e and display result
function calc_ln() {
    let operationValue = Number(operationDiv.innerText.replace(/,/g, ''));
    operationDiv.innerText = Math.log(operationValue).toString();
}
//------------------------------------------Memory functions------------------------------------------
// MC, MR, M+, M-, MS funtionality
let memoryValue = 0; //this is a memory  which store the memory value
let mStatus = 0; //this flag is used whether memory is present or not
// memoryClear()
// this function will clear or remove the memory values
function memoryClear() {
    memoryValue = 0;
    mStatus = 0;
    if (mStatus == 0) {
        document.getElementById("memory-clear").style.opacity = "0.2";
        document.getElementById("memory-recall").style.opacity = "0.2";
    }
}
// memoryRecall()
// it will calculate the value of memory values and display
function memoryRecall() {
    operationDiv.innerText = formatNumbersWithComma(memoryValue.toString());
}
// memoryPlus()
// it will add the input value to the memory stack
// e.g currentValue of memory stack plus given value
function memoryPlus() {
    let operationValue = Number(operationDiv.innerText.replace(/,/g, ''));
    if (operationDiv.innerText != "") {
        memoryValue += operationValue;
        mStatus = 1;
    }
    if (mStatus == 1) {
        document.getElementById("memory-clear").style.opacity = "1";
        document.getElementById("memory-recall").style.opacity = "1";
    }
    operationDiv.innerText = "";
}
// memoryMinus()
// this function will reduse memory value by the givan value 
// e.g currentValue of memory stack minus given value
function memoryMinus() {
    let operationValue = Number(operationDiv.innerText.replace(/,/g, ''));
    if (operationDiv.innerText != "") {
        memoryValue -= operationValue;
        mStatus = 1;
    }
    if (mStatus == 1) {
        document.getElementById("memory-clear").style.opacity = "1";
        document.getElementById("memory-recall").style.opacity = "1";
        mStatus = 1;
    }
    operationDiv.innerText = "";
}
// memorySave()
// it will put the input value into the memory stack
// curentValue of memorystack will replace by inputvalue
function memorySave() {
    let operationValue = Number(operationDiv.innerText.replace(/,/g, ''));
    if (operationDiv.innerText != "") {
        memoryValue = operationValue;
        mStatus = 1;
    }
    if (mStatus == 1) {
        document.getElementById("memory-clear").style.opacity = "1";
        document.getElementById("memory-recall").style.opacity = "1";
    }
    operationDiv.innerText = "";
}
