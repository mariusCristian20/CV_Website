//! Carousel

function MoveImages() {
    if (document.getElementById("btn1").checked === true) {
        document.getElementById("first").style.display = "block";
        document.getElementById("second").style.display = "none";
        document.getElementById("third").style.display = "none";
        document.getElementById("btn1").style.display = "block";
        document.getElementById("btn2").style.display = "block";
        document.getElementById("btn3").style.display = "block";
    }
    else if (document.getElementById("btn2").checked === true) {
        document.getElementById("first").style.display = "none";
        document.getElementById("second").style.display = "block";
        document.getElementById("third").style.display = "none";
        document.getElementById("btn1").style.display = "block";
        document.getElementById("btn2").style.display = "block";
        document.getElementById("btn3").style.display = "block";
    }
    else if (document.getElementById("btn3").checked === true) {
        document.getElementById("first").style.display = "none";
        document.getElementById("second").style.display = "none";
        document.getElementById("third").style.display = "block";
        document.getElementById("btn1").style.display = "block";
        document.getElementById("btn2").style.display = "block";
        document.getElementById("btn3").style.display = "block";
    }
}