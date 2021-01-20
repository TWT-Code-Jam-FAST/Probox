var inp1 = "";
var inp2 = "";
var ans = "";
var isInp1 = true;
var operation = "";

function digit(input) {
  document.getElementById("clear-button").innerHTML = "C";
  if (isInp1) {
    inp1 += input;
    display(inp1);
  } else {
    inp2 += input;
    display(inp2);
  }
}

function decimal() {
  if (isInp1) {
    if (!inp1.includes(".")) {
      inp1 += ".";
    }
    display(inp1);
  } else {
    if (!inp2.includes(".")) {
      inp2 += ".";
    }
    display(inp2);
  }
}

function cClear() {
  if (inp2 != "") {
    inp2 = "";
    display("");
  } else if (operation != "") {
    operation = "";
    setOperation("");
    isInp1 = true;
    display(inp1);
    document.getElementById("clear-button").innerHTML = "AC";
  } else {
    document.getElementById("clear-button").innerHTML = "C";
    clearInp();
  }
}

function clearInp() {
  inp1 = "";
  inp2 = "";
  operation = "";
  isInp1 = true;
  setOperation("");
  display("");
}

function add() {
  calculate();
  if (isInp1 && inp1 != "") {
    isInp1 = false;
    operation = "+";
    setOperation("+");
  }
}

function sub() {
  calculate();
  if (isInp1 && inp1 != "") {
    isInp1 = false;
    operation = "–";
    setOperation("–");
  }
}

function div() {
  calculate();
  if (isInp1 && inp1 != "") {
    isInp1 = false;
    operation = "÷";
    setOperation("÷");
  }
}

function multiply() {
  calculate();
  if (isInp1 && inp1 != "") {
    isInp1 = false;
    operation = "×";
    setOperation("×");
  }
}

let _inp1,
  _inp2 = 0;
function calculate() {
  if (inp1 != "" && inp2 != "") {
    switch (operation) {
      case "+":
        _inp1 = Number(inp1);
        _inp2 = Number(inp2);
        ans = _inp1 + _inp2;
        showAns(ans);
        break;
      case "–":
        _inp1 = Number(inp1);
        _inp2 = Number(inp2);
        ans = _inp1 - _inp2;
        showAns(ans);
        break;
      case "÷":
        _inp1 = Number(inp1);
        _inp2 = Number(inp2);
        ans = _inp1 / _inp2;
        showAns(ans);
        break;
      case "×":
        _inp1 = Number(inp1);
        _inp2 = Number(inp2);
        ans = _inp1 * _inp2;
        showAns(ans);
        break;
    }
  }
}

function showAns(answer) {
  inp1 = (Math.round(ans * 1000000000) / 1000000000).toString();
  display(inp1);
  inp2 = "";
  isInp1 = true;
  setOperation("");
  operation = "";
}

function negate() {
  if (isInp1) {
    inp1 *= -1;
    display(inp1);
  } else {
    inp2 *= -1;
    display(inp2);
  }
}

function percent() {
  if (isInp1) {
    inp1 /= 100;
    inp1 = Math.round(inp1 * 1000000000) / 1000000000;
    display(inp1);
  } else {
    inp2 /= 100;
    inp2 = Math.round(inp2 * 1000000000) / 1000000000;
    display(inp2);
  }
}

function display(input) {
  document.getElementById("input-number").innerHTML = input;
}

function setOperation(input) {
  document.getElementById("operation-symbol").innerHTML = input;
}
