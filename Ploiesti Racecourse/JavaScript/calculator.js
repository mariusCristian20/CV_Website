// let num1;
// let num2;
// let num;
// var color;
// var text;

function ResetAll() {
    if (document.getElementById("restBTN")) {
        ResetEverything();
    }
}

function Reset() {
    if (document.getElementById("restBTN1")) {
        ResetHalf();
    }
}

function ResetEverything() {
    let num;
    let color;
    num = 0;
    document.getElementById("para").innerHTML = num;
    document.getElementById("youDo").innerHTML = "Calculator reseted";
    document.getElementById("check1").checked = false;
    document.getElementById("check2").checked = false;
    document.getElementById("check3").checked = false;
    document.getElementById("check4").checked = false;
    color = document.getElementById("label1").style.color = "black";
    color = document.getElementById("label2").style.color = "black";
    color = document.getElementById("label3").style.color = "black";
    color = document.getElementById("label4").style.color = "black";
    num1 = document.getElementById("numb1").value = 0;
    num2 = document.getElementById("numb2").value = 0;
}



function ResetHalf() {
    let num;
    let color;
    num = 0;
    document.getElementById("para").innerHTML = num;
    document.getElementById("youDo").innerHTML = "Calculator reseted";
    document.getElementById("check1").checked = false;
    document.getElementById("check2").checked = false;
    document.getElementById("check3").checked = false;
    document.getElementById("check4").checked = false;
    color = document.getElementById("label1").style.color = "black";
    color = document.getElementById("label2").style.color = "black";
    color = document.getElementById("label3").style.color = "black";
    color = document.getElementById("label4").style.color = "black";
}

function Verify() {
    if (document.getElementById("check1").checked === true) {
        AdditionColorText();
    }
    else if (document.getElementById("check2").checked === true) {
        SubtractionColorText();
    }
    else if (document.getElementById("check3").checked === true) {
        MultiplicationColorText();
    }
    else if (document.getElementById("check4").checked === true) {
        DivisionColorText();
    }
}

// After you pressed on result button here is checking what is pressed and calls functions

function myNumber() {
    if (document.getElementById("check1").checked === true) {
        Addition();
    }
    else if (document.getElementById("check2").checked === true) {
        Subtraction();
    }
    else if (document.getElementById("check3").checked === true) {
        Multiplication()
    }
    else if (document.getElementById("check4").checked === true) {
        Division();
    }
    else {
        document.getElementById("para").innerHTML = "You didn't choose any operator";
    }
}

//! Here is changing color and puts text when you choose an operator

function AdditionColorText() {
    let color;
    let text;
    color = document.getElementById("label1").style.color = "red";
    text = document.getElementById("youDo").innerText = "You are doing addition";
    color = document.getElementById("label2").style.color = "black";
    color = document.getElementById("label3").style.color = "black";
    color = document.getElementById("label4").style.color = "black";
}

function SubtractionColorText() {
    let color;
    let text;
    color = document.getElementById("label2").style.color = "red";
    text = document.getElementById("youDo").innerText = "You are doing subtraction";
    color = document.getElementById("label1").style.color = "black";
    color = document.getElementById("label3").style.color = "black";
    color = document.getElementById("label4").style.color = "black";
}

function MultiplicationColorText() {
    let color;
    let text;
    color = document.getElementById("label3").style.color = "red";
    text = document.getElementById("youDo").innerText = "You are doing multiplication";
    color = document.getElementById("label1").style.color = "black";
    color = document.getElementById("label2").style.color = "black";
    color = document.getElementById("label4").style.color = "black";
}

function DivisionColorText() {
    let color;
    let text;
    color = document.getElementById("label4").style.color = "red";
    text = document.getElementById("youDo").innerText = "You are doing division";
    color = document.getElementById("label1").style.color = "black";
    color = document.getElementById("label2").style.color = "black";
    color = document.getElementById("label3").style.color = "black";
}

//! Is making the operations


function Addition() {
    let num1 = document.getElementById("numb1").value;
    let num2 = document.getElementById("numb2").value;
    let num = parseInt(num1) + parseInt(num2);
    document.getElementById("para").innerHTML = num;
}
function Subtraction() {
    let num1 = document.getElementById("numb1").value;
    let num2 = document.getElementById("numb2").value;
    let num = parseInt(num1) - parseInt(num2);
    document.getElementById("para").innerHTML = num;
}
function Multiplication() {
    let num1 = document.getElementById("numb1").value;
    let num2 = document.getElementById("numb2").value;
    let num = parseInt(num1) * parseInt(num2);
    document.getElementById("para").innerHTML = num;
}
function Division() {
    let num1 = document.getElementById("numb1").value;
    let num2 = document.getElementById("numb2").value;
    let num = parseInt(num1) / parseInt(num2);
    document.getElementById("para").innerHTML = num;
}