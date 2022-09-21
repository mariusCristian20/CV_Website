//! Difficulty Easy

function Easy(){
    if(document.getElementById("easy").pressed = true){
        setTimeout(Wait, 2000);
        document.getElementById("easy").disabled = true;
        document.getElementById("btnRunE").style.display = "block";
        document.getElementById("btnRunM").style.display = "none";
        document.getElementById("btnRunH").style.display = "none";
        document.getElementById("seeDiffE").style.display = "block";
        document.getElementById("seeDiffM").style.display = "none";
        document.getElementById("seeDiffH").style.display = "none";
    }
    
}

function Wait(){
    document.getElementById("btnRunE").disabled = false;
    clear = setInterval(Move2, 400);
}

let second = 0;
let third = 0;
let clear;


function Move() {
    let first = Math.floor(Math.random() * 100);

    second = second + first;

    if (second >= 500) {
        document.getElementById("congrat").innerHTML = "You Win";
        document.getElementById("btnRunE").disabled = true;
        clearInterval(clear);
        document.getElementById("seeDiffE").disabled = false;
    }


    document.getElementById("distance").innerHTML = second + "m";
    
    
    document.getElementById("firstHorseE").style.transform = "translate(" + second + "px)";
}

function Move2(){
    let first = Math.floor(Math.random() * 100);
    third = third + first;

    if (third >= 500) {
        document.getElementById("congrat").innerHTML = "You Lose";
        document.getElementById("btnRunE").disabled = true;
        clearInterval(clear);
        document.getElementById("seeDiffE").disabled = false;
    }

    document.getElementById("distance2").innerHTML = third + "m";

    document.getElementById("secondHorseE").style.transform = "translate(" + third + "px)";
}

function DifferE(){
    let res;
    res = second - third;
    document.getElementById("difference").innerText = res + "m";
}



//! Difficuulty Medium

function Medium(){
    if(document.getElementById("medium").pressed = true){
        setTimeout(WaitM, 2000);
        document.getElementById("medium").disabled = true;
        document.getElementById("btnRunE").style.display = "none";
        document.getElementById("btnRunM").style.display = "block";
        document.getElementById("btnRunH").style.display = "none";
        document.getElementById("seeDiffE").style.display = "none";
        document.getElementById("seeDiffM").style.display = "block";
        document.getElementById("seeDiffH").style.display = "none";
    }
    
}

function WaitM(){
    document.getElementById("btnRunM").disabled = false;
    clearM = setInterval(Move2M, 300);
}

let secondM = 0;
let thirdM = 0;
let clearM;


function MoveM() {
    let firstM = Math.floor(Math.random() * 100);

    secondM = secondM + firstM;

    if (secondM >= 500) {
        document.getElementById("congrat").innerHTML = "You Win";
        document.getElementById("btnRunM").disabled = true;
        clearInterval(clearM);
        document.getElementById("seeDiffM").disabled = false;
    }


    document.getElementById("distance").innerHTML = secondM + "m";
    
    
    document.getElementById("firstHorseE").style.transform = "translate(" + secondM + "px)";
}

function Move2M(){
    let firstM = Math.floor(Math.random() * 100);
    thirdM = thirdM + firstM;

    if (thirdM >= 500) {
        document.getElementById("congrat").innerHTML = "You Lose";
        document.getElementById("btnRunM").disabled = true;
        clearInterval(clearM);
        document.getElementById("seeDiffM").disabled = false;
    }

    document.getElementById("distance2").innerHTML = thirdM + "m";

    document.getElementById("secondHorseE").style.transform = "translate(" + thirdM + "px)";
}

function DifferM(){
    let resM;
    resM = secondM - thirdM;
    document.getElementById("difference").innerText = resM + "m";
}


//! Difficuulty Hard

function Hard(){
    if(document.getElementById("hard").pressed = true){
        setTimeout(WaitH, 2000);
        document.getElementById("hard").disabled = true;
        document.getElementById("btnRunE").style.display = "none";
        document.getElementById("btnRunM").style.display = "none";
        document.getElementById("btnRunH").style.display = "block";
        document.getElementById("seeDiffE").style.display = "none";
        document.getElementById("seeDiffM").style.display = "none";
        document.getElementById("seeDiffH").style.display = "block";
    }
    
}

function WaitH(){
    document.getElementById("btnRunH").disabled = false;
    clearH = setInterval(Move2H, 200);
}

let secondH = 0;
let thirdH = 0;
let clearH;


function MoveH() {
    let firstH = Math.floor(Math.random() * 100);

    secondH = secondH + firstH;

    if (secondH >= 500) {
        document.getElementById("congrat").innerHTML = "You Win";
        document.getElementById("btnRunH").disabled = true;
        clearInterval(clearH);
        document.getElementById("seeDiffH").disabled = false;
    }


    document.getElementById("distance").innerHTML = secondH + "m";
    
    
    document.getElementById("firstHorseE").style.transform = "translate(" + secondH + "px)";
}

function Move2H(){
    let firstH = Math.floor(Math.random() * 100);
    thirdH = thirdH + firstH;

    if (thirdH >= 500) {
        document.getElementById("congrat").innerHTML = "You Lose";
        document.getElementById("btnRunH").disabled = true;
        clearInterval(clearH);
        document.getElementById("seeDiffH").disabled = false;
    }

    document.getElementById("distance2").innerHTML = thirdH + "m";

    document.getElementById("secondHorseE").style.transform = "translate(" + thirdH + "px)";
}

function DifferH(){
    let resH;
    resH = secondH - thirdH;
    document.getElementById("difference").innerText = resH + "m";
}