window.addEventListener("load", RandomLikesCommentsShares);

function RandomLikesCommentsShares() {
    let upLikes = document.getElementsByClassName("likeCountIcon");
    let colorLike = document.getElementsByClassName("likeColor");

    let countLikes = document.getElementsByClassName("like");
    let countComments = document.getElementsByClassName("comments");
    let countShares = document.getElementsByClassName("shares");

    for (let i = 0; i < countLikes.length; i++) {
        countLikes[i].textContent = Random(5000, 1);
    }
    for (let i = 0; i < countComments.length; i++) {
        countComments[i].textContent = Random(5000, 1);
    }
    for (let i = 0; i < countShares.length; i++) {
        countShares[i].textContent = Random(5000, 1);
    }


    for (let i = 0; i < upLikes.length; i++) {
        upLikes[i].addEventListener("click", () => {
            if (colorLike[i].style.color === "red") {
                countLikes[i].textContent = Number(countLikes[i].textContent) - 1; colorLike[i].style.color = ""; colorLike[i].style.fontVariationSettings = "'FILL' 0,'wght' 800,'GRAD' 25,'opsz' 24";
                return;
            }
            countLikes[i].textContent = Number(countLikes[i].textContent) + 1; colorLike[i].style.color = "red"; colorLike[i].style.fontVariationSettings = "'FILL' 1,'wght' 300,'GRAD' 0,'opsz' 65";
        });
    }

}

function Random(max, min) {
    return Math.floor(Math.random() * (max - min)) + min;
}
