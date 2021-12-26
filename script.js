let calculation = "";
let display = document.getElementById("display");
let result = "";

function receiveInput(id) {
  let resultCheck = result !== "";
  let operatorCheck = id === "*" || id === "+" || id === "-" || id === "/";
  if (resultCheck && operatorCheck) {
    calculation = result;
    result = "";
    calculation += id;
    display.textContent = calculation;
  } else {
    calculation += id;
    display.textContent = calculation;
  }
}

function calculate() {
  result = eval(calculation);
  display.textContent = result;
}

function reset() {
  display.textContent = "0";
  calculation = "";
  result = "";
}

function del () {
    let newCalculation = calculation.length - 1;
    calculation = calculation.substr(0,newCalculation);
    display.textContent = calculation;
}