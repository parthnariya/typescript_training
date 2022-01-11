let operationDiv = document.getElementById("operation-div");
let resultDiv = document.getElementById("result-div");

function addChar(element : any) {
  let char : string = element.getAttribute("data-value");
  operationDiv!.innerText += char;
}

function plusorMinus() {
  let originalVal : number = Number(operationDiv!.innerText);
  originalVal = originalVal * -1;
  operationDiv!.innerText = originalVal.toString();
}

// All Clear fun.
function clearScreen() {
  operationDiv!.innerText = "";
}

//Backspace fun.
function backspace() {
  let operationValue : string= operationDiv!.innerText;
  let operationValueLength : number = operationValue.length;
  let newOperationValue : string = operationValue.substring(0, operationValueLength - 1);
  operationDiv!.innerText = newOperationValue;
}

//Calculate fun.
function calculate() {
  let operationValue:string = operationDiv!.innerText;
//   operationValue.replace("^", "**");
    
//   console.log(typeof(operationValue))
  operationDiv!.innerText = eval(operationValue);
}

// trigonometry function to calculate sine,cos,tan,cot,cosec,sec
function trigonometry(fun : string) {
  let operationValue:number = Number(operationDiv!.innerText);
  let result:number = 0;
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
    operationDiv!.innerText = "Error";
  } else {
    operationDiv!.innerText = result.toString();
  }
}

function calc_square() {
  let operationValue:number = Number(operationDiv!.innerText);
  operationDiv!.innerText = String(operationValue * operationValue);
}

function calc_absolute() {
  let operationValue:number = Number(operationDiv!.innerText);
  operationDiv!.innerText = String(Math.abs(operationValue));
}

function calc_exp() {
  let operationValue:number = Number(operationDiv!.innerText);
  operationDiv!.innerText = String(Math.exp(operationValue));
}

function calc_sqrt() {
  let operationValue:number = Number(operationDiv!.innerText);
  operationDiv!.innerText = Math.sqrt(operationValue).toString();
}

function calc_factorial() {
  let operationValue:number = Number(operationDiv!.innerText);
  let result:number = 1;
  let i:number = 0;
  for (i = operationValue; i >= 1; i--) {
    result *= i;
  }
  operationDiv!.innerText = result.toString();
}

function calc_ten_pow() {
  let operationValue : number = Number(operationDiv!.innerText)
  operationDiv!.innerText = Math.pow(10,operationValue ).toString();
}

// log base 10 function
function calc_log() {
  let operationValue : number = Number(operationDiv!.innerText) 
  operationDiv!.innerText = Math.log10(operationValue).toString();
}

//natural logarithm function
function calc_ln() {
  let operationValue : number = Number(operationDiv!.innerText)
  operationDiv!.innerText = Math.log(operationValue).toString();
}

// MC, MR, M+, M-, MS funtionality
let memoryArr : number[] = [];
let mStatus:number = 0;

function memoryClear() {
  memoryArr = [];
  if (mStatus == 1) {
    document.getElementById("memory-clear")!.style.opacity = "0.2";
    document.getElementById("memory-recall")!.style.opacity = "0.2";
  }
}

function memoryRecall() {
  let sum = 0;
  for (let x of memoryArr) {
    sum += Number(x);
  }
  operationDiv!.innerText = sum.toString();
}

function memoryPlus() {
  let operationValue : number = Number(operationDiv!.innerText)
  if (operationDiv!.innerText != "") {
    memoryArr.push(operationValue);
  }
  if (mStatus == 0 && operationDiv!.innerText != "") {
    document.getElementById("memory-clear")!.style.opacity = "1";
    document.getElementById("memory-recall")!.style.opacity = "1";
    mStatus = 1;
  }
  operationDiv!.innerText = "";
}

function memoryMinus() {
  let operationValue : number = Number(operationDiv!.innerText)
  if (operationDiv!.innerText != "") {
    memoryArr.push(operationValue * (-1));
  }
  if (mStatus == 0 && operationDiv!.innerText != "") {
    document.getElementById("memory-clear")!.style.opacity = "1";
    document.getElementById("memory-recall")!.style.opacity = "1";
    mStatus = 1;
  }
  operationDiv!.innerText = "";
}

function memorySave() {
  let operationValue : number = Number(operationDiv!.innerText)
  if (operationDiv!.innerText != "") {
    memoryArr.push(operationValue);
  }
  if (mStatus == 0 && operationDiv!.innerText != "") {
    document.getElementById("memory-clear")!.style.opacity = "1";
    document.getElementById("memory-recall")!.style.opacity = "1";
    mStatus = 1;
  }
  operationDiv!.innerText = "";
}
