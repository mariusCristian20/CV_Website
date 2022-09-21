// initilization
let sq1 = document.getElementById("square1");
let sq2 = document.getElementById("square2");
let sq3 = document.getElementById("square3");
let sq4 = document.getElementById("square4");
let sq5 = document.getElementById("square5");
let sq6 = document.getElementById("square6");
let sq7 = document.getElementById("square7");
let sq8 = document.getElementById("square8");
let sq9 = document.getElementById("square9");
let assembleBtn = document.getElementById("assembleBtn");
let fllMouse = document.getElementById("followMouse");

let name1 = document.getElementById("name");
let profession = document.getElementById("profession");
let about = document.getElementById("about");

// event listener
let arrow = document.getElementById("arrow");

arrow.addEventListener("click", MoveWindow);

assembleBtn.addEventListener("click", PutPiecesBack);

document.body.addEventListener("mousemove", MoveMousePointer);
assembleBtn.addEventListener("mousemove", () => { fllMouse.style.width = "30px"; fllMouse.style.height = "30px"; });
assembleBtn.addEventListener("mouseout", () => { fllMouse.style.width = "10px"; fllMouse.style.height = "10px"; });

// functions
function PutPiecesBack() {
    sq1.style.transform = "translate(0px, 0px)";
    sq2.style.transform = "translate(0px, 0px)";
    sq3.style.transform = "translate(0px, 0px)";
    sq4.style.transform = "translate(0px, 0px)";
    sq5.style.transform = "translate(0px, 0px)";
    sq6.style.transform = "translate(0px, 0px)";
    sq7.style.transform = "translate(0px, 0px)";
    sq8.style.transform = "translate(0px, 0px)";
    sq9.style.transform = "translate(0px, 0px)";
    assembleBtn.style.opacity = "0";


    setTimeout(Disappear, 3000);
}

function Disappear() {
    sq1.style.opacity = "0";
    sq2.style.opacity = "0";
    sq3.style.opacity = "0";
    sq4.style.opacity = "0";
    sq5.style.opacity = "0";
    sq6.style.opacity = "0";
    sq7.style.opacity = "0";
    sq8.style.opacity = "0";
    sq9.style.opacity = "0";

    setTimeout(Gone, 3000);

    setTimeout(InfoDisappear, 900);

    assembleBtn.style.display = "none";
}

function InfoDisappear() {
    name1.style.opacity = "1";
    profession.style.opacity = "1";
    about.style.opacity = "1";
}

function Gone() {
    sq1.style.display = "none";
    sq2.style.display = "none";
    sq3.style.display = "none";
    sq4.style.display = "none";
    sq5.style.display = "none";
    sq6.style.display = "none";
    sq7.style.display = "none";
    sq8.style.display = "none";
    sq9.style.display = "none";
}

function MoveWindow() {
    window.scrollBy(0, 677);
}

function MoveMousePointer(event) {
    fllMouse.style.transform = `translate(${event.clientX - 5}px, ${event.clientY - 5}px)`;
}


// ! projects

let frame = document.getElementsByClassName("iframe");
let aLink = document.getElementsByClassName("btnNewBrowser");
let btn = document.getElementsByClassName("btnThisBrowser");

for (let i = 0; i < btn.length; i++) {
    btn[i].addEventListener("mousedown", () => { btn[i].style.boxShadow = "inset 0px 1px 4px #fff"; });
    btn[i].addEventListener("mouseup", () => { btn[i].style.boxShadow = "0px 1px 4px #fff"; });
}

for (let i = 0; i < btn.length; i++) {
    btn[i].addEventListener("click", OpenBrowser);
    btn[i].myPara = i;
}

function OpenBrowser(counter) {
    let i = counter.currentTarget.myPara;
    let urls = ["../Ploiesti Racecourse/Pages/logIn.html", "../SpaceBook/Pages/logIn.html", "../Travel Agency/Pages/index.html", "../News Outlet Project Complete/pages/index.html", "../Creating Users/Pages/index.html"];
    frame[i].style.backgroundColor = "#fff";
    frame[i].src = urls[i];
}

for (let i = 0; i < aLink.length; i++) {
    aLink[i].addEventListener("mousedown", () => { aLink[i].style.boxShadow = "inset 0px 1px 4px #fff"; });
    aLink[i].addEventListener("mouseup", () => { aLink[i].style.boxShadow = "0px 1px 4px #fff"; });
}

