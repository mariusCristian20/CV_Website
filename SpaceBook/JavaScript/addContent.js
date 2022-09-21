let feed = document.getElementById("feedPost");

let iteration = 0;

let AddContent = function () {
    fetch("../JSON/userContent.json")
        .then(response => response.json())
        .then(data => GoThrough(data))
        .catch(error => console.error("There is a problem: ", error))

    console.log("hello");
};

function GoThrough(data) {
    for (let date of data) {
        PostContent(date);
    }
}

setTimeout(AddContent, 5000);
// window.addEventListener("load", AddContent);
setTimeout(GetLikes, 5100);
// setTimeout(HoverOnBtns, 5100);



function PostContent(data) {
    // Card
    let divCard = document.createElement("div");
    let divInfo = document.createElement("div");
    let divProfile = document.createElement("div");
    let imgProfile = document.createElement("img");
    let divUserInfo = document.createElement("div");
    let h3UserInfo = document.createElement("h3");
    let pUserInfo = document.createElement("p");
    let divUserContent = document.createElement("div");
    let h3UserContent = document.createElement("h3");
    let imgUserContent = document.createElement("img");

    // Reaction Bar

    let divReaction = document.createElement("div");
    let spanLikeContainer = document.createElement("span");
    let spanIconLike = document.createElement("span");
    let spanLikeCount = document.createElement("span");

    let spanCommContainer = document.createElement("span");
    let spanIconComm = document.createElement("span");
    let spanCommCount = document.createElement("span");

    let spanShareContainer = document.createElement("span");
    let spanIconShare = document.createElement("span");
    let spanShareCount = document.createElement("span");

    feed.appendChild(divCard);

    AppendingChildrenCard(divCard, divInfo, divUserContent, divProfile, divUserInfo, h3UserInfo, pUserInfo, imgProfile, h3UserContent, imgUserContent, divReaction);

    AppendingChildrenDivReaction(divReaction, spanLikeContainer, spanIconLike, spanLikeCount, spanCommContainer, spanIconComm, spanCommCount, spanShareContainer, spanIconShare, spanShareCount);

    AppendingChildrenSpanContainer(spanLikeContainer, spanCommContainer, spanShareContainer, spanIconLike, spanLikeCount, spanIconComm, spanCommCount, spanIconShare, spanShareCount);

    // Card Content

    fetch("https://dog.ceo/api/breeds/image/random")
        .then(response => response.json())
        .then(data => imgProfile.src = data.message)
        .catch(error => console.error(error));


    fetch("https://type.fit/api/quotes")
        .then(response => response.json())
        .then(date => h3UserContent.textContent = date[Random(1633, 1)].text)
        .catch(error => console.error(error))


    h3UserInfo.textContent = data.name;
    pUserInfo.textContent = data.registered;

    fetch("https://dog.ceo/api/breeds/image/random")
        .then(response => response.json())
        .then(data => imgUserContent.src = data.message)
        .catch(error => console.error(error))

    imgUserContent.style.width = "100%";

    // Reaction Content

    spanIconLike.textContent = "favorite";
    spanIconComm.textContent = "chat";
    spanIconShare.textContent = "send";

    // Card Classes

    ClassesOnCard(divCard, divInfo, imgProfile, h3UserInfo, pUserInfo, h3UserContent, divReaction, spanLikeContainer, spanIconLike, spanLikeCount, spanCommContainer, spanIconComm, spanCommCount, spanShareContainer, spanIconShare, spanShareCount);

    let countLikesDynamic = document.getElementsByClassName("likeDynamic");
    let countCommentsDynamic = document.getElementsByClassName("commentsDyamic");
    let countSharesDynamic = document.getElementsByClassName("sharesDynamic");

    for (let i = 0; i < countLikesDynamic.length; i++) {
        countLikesDynamic[i].textContent = Random(5000, 1);
    }
    for (let i = 0; i < countCommentsDynamic.length; i++) {
        countCommentsDynamic[i].textContent = Random(5000, 1);
    }
    for (let i = 0; i < countSharesDynamic.length; i++) {
        countSharesDynamic[i].textContent = Random(5000, 1);
    }

}



function AppendingChildrenCard(divCard, divInfo, divUserContent, divProfile, divUserInfo, h3UserInfo, pUserInfo, imgProfile, h3UserContent, imgUserContent, divReaction) {

    const divCardARR = [divInfo, divUserContent, divReaction];

    for (let i = 0; i < divCardARR.length; i++) {
        divCard.appendChild(divCardARR[i]);
    }

    const divInfoARR = [divProfile, divUserInfo];

    for (let i = 0; i < divInfoARR.length; i++) {
        divInfo.appendChild(divInfoARR[i]);
    }

    divProfile.appendChild(imgProfile);

    const divUserInfoARR = [h3UserInfo, pUserInfo];

    for (let i = 0; i < divUserInfoARR.length; i++) {
        divUserInfo.appendChild(divUserInfoARR[i]);
    }

    const divUserContentARR = [h3UserContent, imgUserContent];

    for (let i = 0; i < divUserContentARR.length; i++) {
        divUserContent.appendChild(divUserContentARR[i]);
    }
}

function AppendingChildrenDivReaction(divReaction, spanLikeContainer, spanIconLike, spanLikeCount, spanCommContainer, spanIconComm, spanCommCount, spanShareContainer, spanIconShare, spanShareCount) {

    const reactionChildren = [spanLikeContainer, spanIconLike, spanLikeCount, spanCommContainer, spanIconComm, spanCommCount, spanShareContainer, spanIconShare, spanShareCount];

    for (let i = 0; i < reactionChildren.length; i++) {
        divReaction.appendChild(reactionChildren[i]);
    }
}

function AppendingChildrenSpanContainer(spanLikeContainer, spanCommContainer, spanShareContainer, spanIconLike, spanLikeCount, spanIconComm, spanCommCount, spanIconShare, spanShareCount) {

    const likeContainer = [spanIconLike, spanLikeCount];

    for (let i = 0; i < likeContainer.length; i++) {
        spanLikeContainer.appendChild(likeContainer[i]);
    }

    const commContainer = [spanIconComm, spanCommCount];

    for (let i = 0; i < commContainer.length; i++) {
        spanCommContainer.appendChild(commContainer[i]);
    }

    const shareContainer = [spanIconShare, spanShareCount];

    for (let i = 0; i < shareContainer.length; i++) {
        spanShareContainer.appendChild(shareContainer[i]);
    }
}

function ClassesOnCard(divCard, divInfo, imgProfile, h3UserInfo, pUserInfo, h3UserContent, divReaction, spanLikeContainer, spanIconLike, spanLikeCount, spanCommContainer, spanIconComm, spanCommCount, spanShareContainer, spanIconShare, spanShareCount) {
    divCard.classList.add("card");
    divInfo.classList.add("info");
    imgProfile.classList.add("imgProfile");
    h3UserInfo.classList.add("usersID");
    pUserInfo.classList.add("timePost");
    h3UserContent.classList.add("userContent");

    // Reaction Bar Classes
    divReaction.classList.add("reactionBar");
    spanLikeContainer.classList.add("likeCountIconDynamic");
    spanIconLike.classList.add("material-symbols-outlined", "likeColorDynamic");
    spanLikeCount.classList.add("likeDynamic");

    spanCommContainer.classList.add("commentCountIconDynamic");
    spanIconComm.classList.add("material-symbols-outlined", "commColorDynamic");
    spanCommCount.classList.add("commentsDyamic");

    spanShareContainer.classList.add("shareCountIconDynamic");
    spanIconShare.classList.add("material-symbols-outlined", "shareColorDynamic");
    spanShareCount.classList.add("sharesDynamic");
}

function Random(max, min) {
    return Math.floor(Math.random() * (max - min)) + min;
}

function GetLikes() {
    let countLikesDynamic = document.getElementsByClassName("likeDynamic");
    let upLikes = document.getElementsByClassName("likeCountIconDynamic");
    let colorLike = document.getElementsByClassName("likeColorDynamic");

    for (let i = 0; i < upLikes.length; i++) {
        upLikes[i].addEventListener("click", () => {
            if (colorLike[i].style.color === "red") {
                countLikesDynamic[i].textContent = Number(countLikesDynamic[i].textContent) - 1; colorLike[i].style.color = ""; colorLike[i].style.fontVariationSettings = "'FILL' 0,'wght' 800,'GRAD' 25,'opsz' 24";
                return;
            }
            countLikesDynamic[i].textContent = Number(countLikesDynamic[i].textContent) + 1; colorLike[i].style.color = "red"; colorLike[i].style.fontVariationSettings = "'FILL' 1,'wght' 300,'GRAD' 0,'opsz' 65";
        })
    }
}

// function HoverOnBtns() {
//     let spanContainerLikes = document.getElementsByClassName("likeCountIconDynamic");
//     let colorLike = document.getElementsByClassName("likeColorDynamic");

//     // let ert = document.getElementById("dgsdg");

//     // ert.addEventListener("mousemove")

//     for (let i = 0; i < spanContainerLikes.length; i++) {
//         spanContainerLikes[i].addEventListener("mousemove", () => { colorLike[i].style.color = "red"; colorLike[i].style.fontVariationSettings = "'FILL' 0,'wght' 800,'GRAD' 25,'opsz' 24"; });
//         spanContainerLikes[i].addEventListener("mouseleave", () => { colorLike[i].style.color = ""; colorLike[i].style.fontVariationSettings = "'FILL' 0,'wght' 800,'GRAD' 25,'opsz' 24"; });
//     }
// }