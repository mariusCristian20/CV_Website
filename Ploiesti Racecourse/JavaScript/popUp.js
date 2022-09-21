// Pop-up Info

// Open Up Functions

function PopUp() {
    let fPop = new PopUpClass();
    fPop.FirstPopUp();
}

function PopUp2() {
    let sPop = new PopUpClass();
    sPop.SecondPopUp();
}

function PopUp3() {
    let tPop = new PopUpClass();
    tPop.ThridPopUp();
}

function PopUp4() {
    let tPop = new PopUpClass();
    tPop.FourthPopUp();
}

// Close Up Functions

function CloseUp() {
    let fPop = new CloseUpClass();
    fPop.FirstColseUp();
}

function CloseUp2() {
    let sPop = new CloseUpClass();
    sPop.SecondColseUp();
}

function CloseUp3() {
    let tPop = new CloseUpClass();
    tPop.ThridColseUp();
}

function CloseUp4() {
    let tPop = new CloseUpClass();
    tPop.FourthColseUp();
}

class PopUpClass {

    FirstPopUp() {
        document.getElementById("coverAll").style.display = "block";
        document.getElementById("firstStory").style.display = "flex";
        document.getElementById("firstStory").style.flexDirection = "column";
        document.getElementById("firstStory").style.justifyContent = "space-between";
        document.getElementById("moveCarousel").style.zIndex = "-1";
    }

    SecondPopUp() {
        document.getElementById("coverAll").style.display = "block";
        document.getElementById("secondStory").style.display = "flex";
        document.getElementById("secondStory").style.flexDirection = "column";
        document.getElementById("secondStory").style.justifyContent = "space-between";
        document.getElementById("moveCarousel").style.zIndex = "-1";
    }

    ThridPopUp() {
        document.getElementById("coverAll").style.display = "block";
        document.getElementById("thridStory").style.display = "flex";
        document.getElementById("thridStory").style.flexDirection = "column";
        document.getElementById("thridStory").style.justifyContent = "space-between";
        document.getElementById("moveCarousel").style.zIndex = "-1";
    }

    FourthPopUp() {
        document.getElementById("coverAll").style.display = "block";
        document.getElementById("fourthStory").style.display = "flex";
        document.getElementById("fourthStory").style.flexDirection = "column";
        document.getElementById("fourthStory").style.justifyContent = "space-between";
        document.getElementById("moveCarousel").style.zIndex = "-1";
    }
}

class CloseUpClass {
    FirstColseUp() {
        document.getElementById("coverAll").style.display = "none";
        document.getElementById("firstStory").style.display = "none";
        document.getElementById("moveCarousel").style.zIndex = "1";
    }

    SecondColseUp() {
        document.getElementById("coverAll").style.display = "none";
        document.getElementById("secondStory").style.display = "none";
        document.getElementById("moveCarousel").style.zIndex = "1";
    }

    ThridColseUp() {
        document.getElementById("coverAll").style.display = "none";
        document.getElementById("thridStory").style.display = "none";
        document.getElementById("moveCarousel").style.zIndex = "1";
    }

    FourthColseUp() {
        document.getElementById("coverAll").style.display = "none";
        document.getElementById("fourthStory").style.display = "none";
        document.getElementById("moveCarousel").style.zIndex = "1";
    }
}