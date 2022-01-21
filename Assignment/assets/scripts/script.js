"use strict";
let operationDiv = document.getElementById("operation-div");
let resultDiv = document.getElementById("result-div");
/*
convert given string into comma seperated value
formateNumberWithComm(inputString)
@param {string} inputString :- which is in normal form
@return {string} outputString :- comma seperated value of given string usign regex
*/
function formatNumbersWithComma(input) {
    return input.replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",");
}
/*
generate maths eqution to eval.
addChar(element : html-element)
@param {html-element} element :- it is a value assoiated with button
*/
function addChar(element) {
    let char = element.getAttribute("data-value");
    let currentValue = operationDiv.innerText.replace(/,/g, '');
    currentValue += char;
    operationDiv.innerText = formatNumbersWithComma(currentValue);
}
/*
it change sign of current input
plusorMinus()
*/
function plusorMinus() {
    let originalVal = Number(operationDiv.innerText.replace(/,/g, ''));
    originalVal = originalVal * -1;
    operationDiv.innerText = formatNumbersWithComma(originalVal.toString());
}
/* clearScreen()
 it clear the result area or we can say display part */
function clearScreen() {
    operationDiv.innerText = "";
}
/* backspace()
it clears the last character from the input string */
function backspace() {
    let operationValue = operationDiv.innerText.replace(/,/g, '');
    let operationValueLength = operationValue.length;
    let newOperationValue = operationValue.substring(0, operationValueLength - 1);
    operationDiv.innerText = formatNumbersWithComma(newOperationValue);
}
/* calculate()
it will calculate the simple math equation and display */
function calculate() {
    let operationValue = operationDiv.innerText.replace(/,/g, '');
    operationDiv.innerText = formatNumbersWithComma(eval(operationValue).toString());
}
/* trigonometry function to calculate sine,cos,tan,cot,cosec,sec
trigonometry(function name)
@param {string} name :- name of the function which we need  to execute */
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
/* calculate the specified mathsfunction's value
mathFunction(function_name : string)
@param {string} : function_name -> name of the function which we need to execute
 */
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
/* calculate the square the given input value
calc_square() */
function calc_square() {
    let operationValue = Number(operationDiv.innerText.replace(/,/g, ''));
    operationValue *= operationValue;
    operationDiv.innerText = formatNumbersWithComma(operationValue.toString());
}
/* calculate the absolute value of given input
calc_absolute() */
function calc_absolute() {
    let operationValue = Number(operationDiv.innerText.replace(/,/g, ''));
    operationDiv.innerText = String(Math.abs(operationValue));
}
/* calculate the exponent value of the given value
calc_exp() */
function calc_exp() {
    let operationValue = Number(operationDiv.innerText.replace(/,/g, ''));
    operationDiv.innerText = String(Math.exp(operationValue));
}
/* fixed value with exponent values
fixed_exp() */
function fixed_exp() {
    let operationValue = Number(operationDiv.innerText.replace(/,/g, ''));
    operationDiv.innerText = formatNumbersWithComma(operationValue.toExponential(3));
}
/* convert given radiad value into degree
radianToDegree()
 */
function radianToDegree() {
    let operationValue = Number(operationDiv.innerText.replace(/,/g, ''));
    operationValue = operationValue * (180 / Math.PI);
    operationDiv.innerText = formatNumbersWithComma(operationValue.toString());
}
/* calculate the square root of given input
calc_sqrt() */
function calc_sqrt() {
    let operationValue = Number(operationDiv.innerText.replace(/,/g, ''));
    operationDiv.innerText = Math.sqrt(operationValue).toString();
}
/* calculate the factorial value of the given value
calc_factorial() */
function calc_factorial() {
    let operationValue = Number(operationDiv.innerText.replace(/,/g, ''));
    let result = 1;
    let i = 0;
    for (i = operationValue; i >= 1; i--) {
        result *= i;
    }
    operationDiv.innerText = result.toString();
}
/* calculate the value of the power of 10
cal_ten_pow() */
function calc_ten_pow() {
    let operationValue = Number(operationDiv.innerText.replace(/,/g, ''));
    operationDiv.innerText = Math.pow(10, operationValue).toString();
}
/* calculate the logerithmic value base 10 and display result
calc_log() */
function calc_log() {
    let operationValue = Number(operationDiv.innerText.replace(/,/g, ''));
    operationDiv.innerText = Math.log10(operationValue).toString();
}
/* calculate the logerithmic value base e and display result
calc_ln() */
function calc_ln() {
    let operationValue = Number(operationDiv.innerText.replace(/,/g, ''));
    operationDiv.innerText = Math.log(operationValue).toString();
}
//------------------------------------------Memory functions------------------------------------------
// MC, MR, M+, M-, MS funtionality
let memoryValue = 0; //this is a memory  which store the memory value
let mStatus = 0; //this flag is used whether memory is present or not
/* clear or remove the memory values
memoryClear() */
function memoryClear() {
    memoryValue = 0;
    mStatus = 0;
    if (mStatus == 0) {
        document.getElementById("memory-clear").style.opacity = "0.2";
        document.getElementById("memory-recall").style.opacity = "0.2";
    }
}
/* calculate the value of memory values and display
memoryRecall() */
function memoryRecall() {
    operationDiv.innerText = formatNumbersWithComma(memoryValue.toString());
}
/* add the input value to the memory stack
memoryPlus() */
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
/* reduse memory value by the givan value
memoryMinus() */
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
/* put the input value into the memory stack
memorySave() */
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
