function AppearHiddenNav() {
    document.getElementById("hiddenNav").style.transform = "translateX(0px)";
    document.getElementById("rightArrow").style.display = "none";
    document.getElementById("leftArrow").style.display ="block";
}

function DisappearHiddenNav() {
    document.getElementById("hiddenNav").style.transform = "translateX(-230px)";
    document.getElementById("rightArrow").style.display = "block";
    document.getElementById("leftArrow").style.display ="none";
}