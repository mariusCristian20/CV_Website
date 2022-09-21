let id = 0;
class dynamicHTML {
    constructor(tagName, attributes = [], src, type, value) {
        this.tagName = tagName;
        this.attributes = attributes;
        this.insertText = "";
        this.insertElement = [];
        this.type = type;
        this.value = value;
        this.src = src;
    }

    getID() {
        return `${this.tagName}_tag${id++}`;
    }

    insertTag() {
        let result = "";

        if (this.tagName === "img") {
            result = `<${this.tagName} ${this.src.length > 0 ? this.takeSrc() :
                ""} ${this.attributes.length > 0 ? this.takeATT() : ""} id="${this.getID()}">`;
            return result;
        }
        else if (this.tagName === "input") {
            result = `<${this.tagName} type="${this.type}" value="${this.value}" ${this.attributes.length > 0 ? this.takeATT() : ""} id="${this.getID()}"/>`;
            return result;
        }

        result = `<${this.tagName} ${this.attributes.length > 0 ? this.takeATT() : ""} id="${this.getID()}">${this.insertText.length > 0 ? this.takeText() : ""}${this.insertElement.length > 0 ? this.takeElement() : ""}</${this.tagName}>`;

        return result;
    }

    getHtml() {
        document.write(this.insertTag());
    }

    takeATT() {
        let innerATT = "";
        for (let attribute of this.attributes) {
            innerATT += attribute;
        }

        return innerATT;
    }

    insertSrcMET(src) {
        this.src = src;
        return this.src;
    }
    insertTextMET(text) {
        this.insertText = text;
        return this.insertText;
    }
    insertElementMET(element) {
        this.insertElement += element;
        return this.insertElement;
    }

    takeSrc() {
        return this.src;
    }
    takeText() {
        let innerText = "";
        innerText += this.insertText;
        return innerText;
    }
    takeElement() {
        let innerElement = ""
        innerElement += this.insertElement;
        return innerElement;
    }
}

let parentDiv = new dynamicHTML("div", ['class="parentDiv"']);

fetch("../JSON/exam_data.json")
    .then(response => response.text())
    .then(data => RunThroughUsers(JSON.parse(data)))
    .catch(err => console.log(err))

function RunThroughUsers(data) {
    for (let users of data) {
        parentDiv.insertElementMET(CreatUser(users));
    }

    parentDiv.getHtml();

    let parent = document.getElementById("div_tag235");
    parent.style.display = "flex";
    parent.style.flexDirection = "row";
    parent.style.flexFlow = "wrap";
    parent.style.justifyContent = "center";
    parent.style.alignItems = "center";

    //Styling Elements
    Styling(data);
}

function Styling(data) {
    // div lower styling
    let divLower = document.getElementsByClassName("lowerDiv");
    let divKeeper = document.getElementsByClassName("keeper");
    let divLeftText = document.getElementsByClassName("leftText");
    let rightText = document.getElementsByClassName("spanText");
    IconsStyling();



    for (let i = 0; i < divKeeper.length; i++) {
        if (i === 5 || i === 11 || i === 17 || i === 23 || i === 29) {
            divKeeper[i].style.width = "280px";
            divKeeper[i].style.display = "flex";
            divKeeper[i].style.flexDirection = "row";
            divKeeper[i].style.justifyContent = "space-between";
            divKeeper[i].style.alignItems = "center";
            divKeeper[i].style.marginBlockEnd = "10px";
            divKeeper[i].style.paddingBlockEnd = "10px";
            continue;
        }

        divKeeper[i].style.width = "280px";
        divKeeper[i].style.display = "flex";
        divKeeper[i].style.flexDirection = "row";
        divKeeper[i].style.justifyContent = "space-between";
        divKeeper[i].style.alignItems = "center";
        divKeeper[i].style.borderBlockEnd = "1px solid #A7A2A2";
        divKeeper[i].style.marginBlockEnd = "10px";
        divKeeper[i].style.paddingBlockEnd = "10px";
    }

    for (let i = 0; i < rightText.length; i++) {
        rightText[i].style.color = "#797979";
        rightText[i].style.fontFamily = "Bahnschrift Light";
        rightText[i].style.marginRight = "15px";
    }


    for (let i = 0; i < divLeftText.length; i++) {
        divLeftText[i].style.display = "flex";
        divLeftText[i].style.flexDirection = "row";
        divLeftText[i].style.justifyContent = "center";
        divLeftText[i].style.alignItems = "center";
        divLeftText[i].style.fontFamily = "Bahnschrift SemiBold";
    }

    for (let i = 0; i < divLower.length; i++) {
        divLower[i].style.marginBlockStart = "30px";
    }

    // div upper styling
    let upperDiv = document.getElementsByClassName("upperDiv");

    for (let i = 0; i < upperDiv.length; i++) {
        upperDiv[i].style.display = "flex";
        upperDiv[i].style.flexDirection = "column";
        upperDiv[i].style.justifyContent = "center";
        upperDiv[i].style.alignItems = "center";
        upperDiv[i].style.borderBlockEnd = "1px solid #A7A2A2";
        upperDiv[i].style.paddingBlockEnd = "25px";
    }



    UpperDivChildsStyling(data);
}


function UpperDivChildsStyling(data) {
    let img = document.getElementsByClassName("upperImg");
    let h2 = document.getElementsByClassName("upperH2");
    let pJob = document.getElementsByClassName("jobTitle");
    let pComp = document.getElementsByClassName("companyName");
    let pAdres = document.getElementsByClassName("fullAddress");
    let btnFll = document.getElementsByClassName("btnFollow");
    let btnMess = document.getElementsByClassName("btnMessage");

    // div container styling
    let divContainer = document.getElementsByClassName("container");

    for (let i = 0; i < divContainer.length; i++) {
        divContainer[i].style.width = "fit-content";
        divContainer[i].style.marginLeft = "20px";
        divContainer[i].style.marginRight = "20px";
        divContainer[i].addEventListener("mouseover", () => { btnFll[i].style.visibility = "visible"; btnMess[i].style.visibility = "visible"; });
        divContainer[i].addEventListener("mouseout", () => { btnFll[i].style.visibility = "hidden"; btnMess[i].style.visibility = "hidden"; });
    }

    for (let i = 0; i < img.length; i++) {
        img[i].style.borderRadius = "50%";
        img[i].style.border = "3px solid #024EFF";
    }

    for (let i = 0; i < h2.length; i++) {
        h2[i].style.fontFamily = "Bahnschrift SemiBold";
        h2[i].style.marginBlockEnd = "10px";
        h2[i].style.marginBlockStart = "10px";
    }

    for (let i = 0; i < pJob.length; i++) {
        pJob[i].style.color = "#797979";
        pJob[i].style.fontFamily = "Bahnschrift Light";
        pJob[i].style.marginBlockEnd = "8px";
        pJob[i].style.marginBlockStart = "1px";
    }

    for (let i = 0; i < pComp.length; i++) {
        pComp[i].style.color = "#797979";
        pComp[i].style.fontFamily = "Bahnschrift Light";
        pComp[i].style.marginBlockEnd = "8px";
        pComp[i].style.marginBlockStart = "1px";
    }
    for (let i = 0; i < pAdres.length; i++) {
        pAdres[i].style.color = "#797979";
        pAdres[i].style.fontFamily = "Bahnschrift Light";
        pAdres[i].style.marginBlockEnd = "8px";
        pAdres[i].style.marginBlockStart = "1px";
    }

    for (let i = 0; i < btnFll.length; i++) {
        btnFll[i].style.color = "#fff";
        btnFll[i].style.fontFamily = "Bahnschrift Light";
        btnFll[i].style.padding = "10px";
        btnFll[i].style.borderRadius = "5px";
        btnFll[i].style.marginRight = "8px";
        btnFll[i].style.backgroundColor = "#024EFF";
        btnFll[i].style.border = "none";
        btnFll[i].addEventListener("click", () => alert(`You follow ${data[i].title}. ${data[i].first_name} ${data[i].last_name}`));
        btnFll[i].style.visibility = "hidden";
    }
    for (let i = 0; i < btnMess.length; i++) {
        btnMess[i].style.color = "#024EFF";
        btnMess[i].style.fontFamily = "Bahnschrift Light";
        btnMess[i].style.padding = "10px";
        btnMess[i].style.borderRadius = "5px";
        btnMess[i].style.backgroundColor = "#fff";
        btnMess[i].style.border = "1px solid #024EFF";
        btnMess[i].addEventListener("click", () => alert(`You messaged ${data[i].title}. ${data[i].first_name} ${data[i].last_name}`));
        btnMess[i].style.visibility = "hidden";
    }
}

function IconsStyling() {
    let icons = document.getElementsByClassName("icon");
    let icons1 = document.getElementsByClassName("fa-github");
    let icons2 = document.getElementsByClassName("fa-twitter");
    let icons3 = document.getElementsByClassName("fa-instagram");
    let icons4 = document.getElementsByClassName("fa-facebook");
    let icons5 = document.getElementsByClassName("fa-google-plus-g");

    for (let i = 0; i < icons.length; i++) {
        icons[i].style.width = "25px";
        icons[i].style.marginRight = "10px";
        icons[i].style.marginLeft = "10px";
        icons[i].style.color = "black";
    }
    for (let i = 0; i < icons1.length; i++) {
        icons1[i].style.width = "25px";
        icons1[i].style.marginRight = "10px";
        icons1[i].style.marginLeft = "10px";
        icons1[i].style.color = "black";
    }
    for (let i = 0; i < icons2.length; i++) {
        icons2[i].style.width = "25px";
        icons2[i].style.marginRight = "10px";
        icons2[i].style.marginLeft = "10px";
        icons2[i].style.color = "#1BEFE2";
    }
    for (let i = 0; i < icons3.length; i++) {
        icons3[i].style.width = "25px";
        icons3[i].style.marginRight = "10px";
        icons3[i].style.marginLeft = "10px";
        icons3[i].style.color = "#FE0000";
    }
    for (let i = 0; i < icons4.length; i++) {
        icons4[i].style.width = "25px";
        icons4[i].style.marginRight = "10px";
        icons4[i].style.marginLeft = "10px";
        icons4[i].style.color = "#0055FE";
    }
    for (let i = 0; i < icons5.length; i++) {
        icons5[i].style.width = "25px";
        icons5[i].style.marginRight = "10px";
        icons5[i].style.marginLeft = "10px";
        icons5[i].style.color = "#F80000";
    }
}

function CreatUser(data) {
    let div = new dynamicHTML("div", ['class="container"']);
    let divUpper = new dynamicHTML("div", ['class="upperDiv"']);
    let divLower = new dynamicHTML("div", ['class="lowerDiv"']);
    let imgUp = new dynamicHTML("img", ['class="upperImg"', 'alt="User Image"']);
    let h2Up = new dynamicHTML("h2", ['class="upperH2"']);
    let pUp = new dynamicHTML("p", ['class="jobTitle"']);
    let pUp2 = new dynamicHTML("p", ['class="companyName"']);
    let pUp3 = new dynamicHTML("p", ['class="fullAddress"']);
    let divBtns = new dynamicHTML("div", ['class="btnDiv"']);
    let btnFll = new dynamicHTML("button", ['type="button"', 'class="btnFollow"']);
    let btnMess = new dynamicHTML("button", ['type="button"', 'class="btnMessage"']);


    imgUp.insertSrcMET(`src="${data.profile_img}"`);
    h2Up.insertTextMET(`${data.title}. ${data.first_name} ${data.last_name}`);
    pUp.insertTextMET(`${data.job_title}`);
    pUp2.insertTextMET(`${data.company_name}`);
    pUp3.insertTextMET(`${data.address.country} ${data.address.city} ${data.address.street.name} ${data.address.street.number}`);
    btnFll.insertTextMET("Follow");
    btnMess.insertTextMET("Message");


    divBtns.insertElementMET(btnFll.insertTag());
    divBtns.insertElementMET(btnMess.insertTag());

    divUpper.insertElementMET(imgUp.insertTag());
    divUpper.insertElementMET(h2Up.insertTag());
    divUpper.insertElementMET(pUp.insertTag());
    divUpper.insertElementMET(pUp2.insertTag());
    divUpper.insertElementMET(pUp3.insertTag());
    divUpper.insertElementMET(divBtns.insertTag());

    divLower.insertElementMET(MediaCreation(data));

    div.insertElementMET(divUpper.insertTag());
    div.insertElementMET(divLower.insertTag());



    return div.insertTag();
}

function MediaCreation(data) {
    let divKeeper = new dynamicHTML("div", ['class="keeper"']);
    let divKeeper1 = new dynamicHTML("div", ['class="keeper"']);
    let divKeeper2 = new dynamicHTML("div", ['class="keeper"']);
    let divKeeper3 = new dynamicHTML("div", ['class="keeper"']);
    let divKeeper4 = new dynamicHTML("div", ['class="keeper"']);
    let divKeeper5 = new dynamicHTML("div", ['class="keeper"']);

    let divTextLeft = new dynamicHTML("div", ['class="leftText"']);
    let divTextLeft1 = new dynamicHTML("div", ['class="leftText"']);
    let divTextLeft2 = new dynamicHTML("div", ['class="leftText"']);
    let divTextLeft3 = new dynamicHTML("div", ['class="leftText"']);
    let divTextLeft4 = new dynamicHTML("div", ['class="leftText"']);
    let divTextLeft5 = new dynamicHTML("div", ['class="leftText"']);

    let divTextRight = new dynamicHTML("div", ['class="rightText"']);
    let divTextRight1 = new dynamicHTML("div", ['class="rightText"']);
    let divTextRight2 = new dynamicHTML("div", ['class="rightText"']);
    let divTextRight3 = new dynamicHTML("div", ['class="rightText"']);
    let divTextRight4 = new dynamicHTML("div", ['class="rightText"']);
    let divTextRight5 = new dynamicHTML("div", ['class="rightText"']);

    let icon = new dynamicHTML("i", ['class="fa-solid fa-globe icon"']);
    let icon1 = new dynamicHTML("i", ['class="fa-brands fa-github icon"']);
    let icon2 = new dynamicHTML("i", ['class="fa-brands fa-twitter icon"']);
    let icon3 = new dynamicHTML("i", ['class="fa-brands fa-instagram icon"']);
    let icon4 = new dynamicHTML("i", ['class="fa-brands fa-facebook icon"']);
    let icon5 = new dynamicHTML("i", ['class="fa-brands fa-google-plus-g icon"']);


    let spanIcon = new dynamicHTML("span", ['class="spanIcon"']);
    let spanIcon1 = new dynamicHTML("span", ['class="spanIcon"']);
    let spanIcon2 = new dynamicHTML("span", ['class="spanIcon"']);
    let spanIcon3 = new dynamicHTML("span", ['class="spanIcon"']);
    let spanIcon4 = new dynamicHTML("span", ['class="spanIcon"']);
    let spanIcon5 = new dynamicHTML("span", ['class="spanIcon"']);

    let spanText = new dynamicHTML("span", ['class="spanText"']);
    let spanText1 = new dynamicHTML("span", ['class="spanText"']);
    let spanText2 = new dynamicHTML("span", ['class="spanText"']);
    let spanText3 = new dynamicHTML("span", ['class="spanText"']);
    let spanText4 = new dynamicHTML("span", ['class="spanText"']);
    let spanText5 = new dynamicHTML("span", ['class="spanText"']);

    for (let i = 0; i < data.media.length; i++) {
        if (i === 0) {
            spanText.insertTextMET(`https://${data.media[i]}.com`);
        }
        else if (i === 1) {
            spanText1.insertTextMET(data.media[i]);
        }
        else if (i === 2) {
            spanText2.insertTextMET(`@${data.media[i]}`);
        }
        else if (i === 3) {
            spanText3.insertTextMET(data.media[i]);
        }
        else if (i === 4) {
            spanText4.insertTextMET(data.media[i]);
        }
        else if (i === 5) {
            spanText5.insertTextMET(data.media[i]);
        }
    }

    spanIcon.insertTextMET("Website");
    spanIcon1.insertTextMET("Github");
    spanIcon2.insertTextMET("Twitter");
    spanIcon3.insertTextMET("Instagram");
    spanIcon4.insertTextMET("Facebook");
    spanIcon5.insertTextMET("Google+");

    divTextLeft.insertElementMET(icon.insertTag());
    divTextLeft1.insertElementMET(icon1.insertTag());
    divTextLeft2.insertElementMET(icon2.insertTag());
    divTextLeft3.insertElementMET(icon3.insertTag());
    divTextLeft4.insertElementMET(icon4.insertTag());
    divTextLeft5.insertElementMET(icon5.insertTag());

    divTextLeft.insertElementMET(spanIcon.insertTag());
    divTextLeft1.insertElementMET(spanIcon1.insertTag());
    divTextLeft2.insertElementMET(spanIcon2.insertTag());
    divTextLeft3.insertElementMET(spanIcon3.insertTag());
    divTextLeft4.insertElementMET(spanIcon4.insertTag());
    divTextLeft5.insertElementMET(spanIcon5.insertTag());

    divTextRight.insertElementMET(spanText.insertTag());
    divTextRight1.insertElementMET(spanText1.insertTag());
    divTextRight2.insertElementMET(spanText2.insertTag());
    divTextRight3.insertElementMET(spanText3.insertTag());
    divTextRight4.insertElementMET(spanText4.insertTag());
    divTextRight5.insertElementMET(spanText5.insertTag());

    divKeeper.insertElementMET(divTextLeft.insertTag());
    divKeeper1.insertElementMET(divTextLeft1.insertTag());
    divKeeper2.insertElementMET(divTextLeft2.insertTag());
    divKeeper3.insertElementMET(divTextLeft3.insertTag());
    divKeeper4.insertElementMET(divTextLeft4.insertTag());
    divKeeper5.insertElementMET(divTextLeft5.insertTag());

    divKeeper.insertElementMET(divTextRight.insertTag());
    divKeeper1.insertElementMET(divTextRight1.insertTag());
    divKeeper2.insertElementMET(divTextRight2.insertTag());
    divKeeper3.insertElementMET(divTextRight3.insertTag());
    divKeeper4.insertElementMET(divTextRight4.insertTag());
    divKeeper5.insertElementMET(divTextRight5.insertTag());

    let arr = [divKeeper.insertTag(), divKeeper1.insertTag(), divKeeper2.insertTag(), divKeeper3.insertTag(), divKeeper4.insertTag(), divKeeper5.insertTag()];
    let save = "";

    for (let i = 0; i < arr.length; i++) {
        save += arr[i];
    }

    return save;
}

