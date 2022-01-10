var operationDiv = document.getElementById("operation-div");
var resultDiv = document.getElementById("result-div");
function addChar(element) {
    var char = element.getAttribute("data-value");
    operationDiv.innerText += char;
}
function plusorMinus() {
    var originalVal = Number(operationDiv.innerText);
    originalVal = originalVal * -1;
    operationDiv.innerText = originalVal.toString();
}
// All Clear fun.
function clearScreen() {
    operationDiv.innerText = "";
}
//Backspace fun.
function backspace() {
    var operationValue = operationDiv.innerText;
    var operationValueLength = operationValue.length;
    var newOperationValue = operationValue.substring(0, operationValueLength - 1);
    operationDiv.innerText = newOperationValue;
}
//Calculate fun.
function calculate() {
    var operationValue = operationDiv.innerText;
    //   operationValue.replace("^", "**");
    //   console.log(typeof(operationValue))
    operationDiv.innerText = eval(operationValue);
}
// trigonometry function to calculate sine,cos,tan,cot,cosec,sec
function trigonometry(fun) {
    var operationValue = Number(operationDiv.innerText);
    var result;
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
    if (result === "NaN") {
        operationDiv.innerText = "Error";
    }
    else {
        operationDiv.innerText = result;
    }
}
function calc_square() {
    var operationValue = Number(operationDiv.innerText);
    operationDiv.innerText = String(operationValue * operationValue);
}
function calc_absolute() {
    var operationValue = Number(operationDiv.innerText);
    operationDiv.innerText = String(Math.abs(operationValue));
}
function calc_exp() {
    var operationValue = Number(operationDiv.innerText);
    operationDiv.innerText = String(Math.exp(operationValue));
}
function calc_sqrt() {
    var operationValue = Number(operationDiv.innerText);
    operationDiv.innerText = String(Math.sqrt(operationValue));
}
function calc_factorial() {
    var operationValue = Number(operationDiv.innerText);
    var result = 1;
    var i = 0;
    for (i = operationValue; i >= 1; i--) {
        result *= i;
    }
    operationDiv.innerText = result.toString();
}
function calc_ten_pow() {
    var operationValue = Number(operationDiv.innerText);
    operationDiv.innerText = Math.pow(10, operationValue).toString();
}
// log base 10 function
function calc_log() {
    var operationValue = Number(operationDiv.innerText);
    operationDiv.innerText = Math.log10(operationValue);
}
//natural logarithm function
function calc_ln() {
    var operationValue = Number(operationDiv.innerText);
    operationDiv.innerText = Math.log(operationValue).toString();
}
// MC, MR, M+, M-, MS funtionality
var memoryArr = [];
var mStatus = 0;
function memoryClear() {
    memoryArr = [];
    if (mStatus == 1) {
        document.getElementById("memory-clear").style.opacity = "0.2";
        document.getElementById("memory-recall").style.opacity = "0.2";
    }
}
function memoryRecall() {
    var sum = 0;
    for (var _i = 0, memoryArr_1 = memoryArr; _i < memoryArr_1.length; _i++) {
        var x = memoryArr_1[_i];
        sum += Number(x);
    }
    operationDiv.innerText = sum.toString();
}
function memoryPlus() {
    var operationValue = Number(operationDiv.innerText);
    if (operationDiv.innerText != "") {
        memoryArr.push(operationValue);
    }
    if (mStatus == 0 && operationDiv.innerText != "") {
        document.getElementById("memory-clear").style.opacity = "1";
        document.getElementById("memory-recall").style.opacity = "1";
        mStatus = 1;
    }
    operationDiv.innerText = "";
}
function memoryMinus() {
    var operationValue = Number(operationDiv.innerText);
    if (operationDiv.innerText != "") {
        memoryArr.push(operationValue * (-1));
    }
    if (mStatus == 0 && operationDiv.innerText != "") {
        document.getElementById("memory-clear").style.opacity = "1";
        document.getElementById("memory-recall").style.opacity = "1";
        mStatus = 1;
    }
    operationDiv.innerText = "";
}
function memorySave() {
    var operationValue = Number(operationDiv.innerText);
    if (operationDiv.innerText != "") {
        memoryArr.push(operationValue);
    }
    if (mStatus == 0 && operationDiv.innerText != "") {
        document.getElementById("memory-clear").style.opacity = "1";
        document.getElementById("memory-recall").style.opacity = "1";
        mStatus = 1;
    }
    operationDiv.innerText = "";
}
