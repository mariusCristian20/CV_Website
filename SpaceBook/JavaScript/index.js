let cover = document.getElementById("coverBlock");
let account = document.getElementById("account");
let close = document.getElementById("close");

account.addEventListener("click", ShowProfile);
close.addEventListener("click", CloseProfile);

function ShowProfile() {
    cover.style.display = "flex";
}
function CloseProfile() {
    cover.style.display = "none";
}

// user info and changing
let profile = document.getElementById("profile");
let user = document.getElementById("user");

let profilePicture = document.getElementById("containerProfileImage");
let userName = document.getElementById("containerUserName");
let userInfo = document.getElementById("containerUserInfo");

let nameChange = document.getElementById("nameCh");
let infoChange = document.getElementById("infoCh");


let btn = document.getElementById("ch_Data");

btn.addEventListener("click", ChangeData);

let reader = new FileReader();

function ChangeData() {
    let photoChange = document.getElementById("photo").files[0];
    localStorage.setItem("name1", nameChange.value);
    localStorage.setItem("info", infoChange.value);

    reader.onload = function (e) {
        localStorage.setItem("image", e.target.result);
    }
    reader.readAsDataURL(photoChange);

    profilePicture.src = localStorage.getItem("image");
    profile.src = localStorage.getItem("image");
    userName.innerText = localStorage.getItem("name1");
    user.innerText = localStorage.getItem("name1");
    userInfo.innerText = localStorage.getItem("info");
}


