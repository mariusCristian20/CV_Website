let opacityBarn1, opacityBarn;
let opacityWhiteHorse, opacityWhiteHorse1;
let opacityHorseCalf, opacityHorseCalf1;
let opacityWomanAndHorse, opacityWomanAndHorse1;
let displayWomanAndHorse, displayWomanAndHorse1, displayHorseCalf, displayHorseCalf1, displayWhiteHorse, displayWhiteHorse1, displayBarn, displayBarn1;


// ! Barn Images

function DisappearBarn() {
    opacityBarn = document.getElementById("barn").style.opacity = "50%";
    if(opacityBarn === opacityBarn1){
        displayBarn = document.getElementById("barn").style.display = "none";
        displayBarn1 = document.getElementById("barn1").style.display = "none";
        Congrats();
    }
    
}

function DisappearBarn1() {
    opacityBarn1 = document.getElementById("barn1").style.opacity = "50%";
    if(opacityBarn === opacityBarn1){
        displayBarn = document.getElementById("barn").style.display = "none";
        displayBarn1 = document.getElementById("barn1").style.display = "none";
        Congrats();
    }
}

// ! White Horse Images

function DisappearWhiteHorse() {
    opacityWhiteHorse = document.getElementById("whiteHorse").style.opacity = "50%";
    if(opacityWhiteHorse === opacityWhiteHorse1){
        displayWhiteHorse = document.getElementById("whiteHorse").style.display = "none";
        displayWhiteHorse1 = document.getElementById("whiteHorse1").style.display = "none";
        Congrats();
    }
}

function DisappearWhiteHorse1() {
    opacityWhiteHorse1 = document.getElementById("whiteHorse1").style.opacity = "50%";
    if(opacityWhiteHorse === opacityWhiteHorse1){
        displayWhiteHorse = document.getElementById("whiteHorse").style.display = "none";
        displayWhiteHorse1 = document.getElementById("whiteHorse1").style.display = "none";
        Congrats();
    }
}

// !Horse Calf Images

function DisappearHorseCalf() {
    opacityHorseCalf = document.getElementById("horseCalf").style.opacity = "50%";
    if(opacityHorseCalf === opacityHorseCalf1){
        displayHorseCalf = document.getElementById("horseCalf").style.display = "none";
        displayHorseCalf1 = document.getElementById("horseCalf1").style.display = "none";
        Congrats();
    }
}

function DisappearHorseCalf1() {
    opacityHorseCalf1 = document.getElementById("horseCalf1").style.opacity = "50%";
    if(opacityHorseCalf === opacityHorseCalf1){
        displayHorseCalf = document.getElementById("horseCalf").style.display = "none";
        displayHorseCalf1 = document.getElementById("horseCalf1").style.display = "none";
        Congrats();
    }
}

// !Horse Woman And Horse

function DisappearWomanAndHorse() {
    opacityWomanAndHorse = document.getElementById("womanAndHorse").style.opacity = "50%";
    if(opacityWomanAndHorse === opacityWomanAndHorse1){
        displayWomanAndHorse = document.getElementById("womanAndHorse").style.display = "none";
        displayWomanAndHorse1 = document.getElementById("womanAndHorse1").style.display = "none";
        Congrats();
    }
}

function DisappearWomanAndHorse1() {
    opacityWomanAndHorse1 = document.getElementById("womanAndHorse1").style.opacity = "50%";
    if(opacityWomanAndHorse === opacityWomanAndHorse1){
        displayWomanAndHorse = document.getElementById("womanAndHorse").style.display = "none";
        displayWomanAndHorse1 = document.getElementById("womanAndHorse1").style.display = "none";
        Congrats();
    }
}

function Congrats(){
    if(displayWomanAndHorse === "none" && displayWomanAndHorse1 === "none" && displayHorseCalf === "none" && displayHorseCalf1 === "none" && displayWhiteHorse === "none" && displayWhiteHorse1 === "none" && displayBarn === "none" && displayBarn1 === "none"){
        document.getElementById("infoMatchGames").innerText = "You Win";
    }
    else{
        document.getElementById("infoMatchGames").innerText = "Continue for check images...";
    }
}