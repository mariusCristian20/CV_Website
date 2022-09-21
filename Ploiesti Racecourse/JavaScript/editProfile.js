let image = document.getElementById("pictureSaved");
let profile = document.getElementById("profilePicture");

function EditProfile() {
    let name = document.getElementById("name").value;
    let mail = document.getElementById("mail").value;
    let picture = document.getElementById("picture").files[0];

    let reader = new FileReader();

    reader.onload = function (e) {
        image.src = e.target.result;
        profile.src = e.target.result;
    }
    reader.readAsDataURL(picture);

    document.getElementById("nameSaved").innerText = name;
    document.getElementById("mailSaved").innerText = mail;
}


function AppearEditProfile() {
    document.getElementById("coverEditProfile").style.display = "block";
    document.getElementById("editProfile").style.transform = "translateY(0px)";
    document.getElementById("editProfile").style.opacity = "1";
    document.getElementById("moveCarousel").style.zIndex = "-1";
}

function DisappearEditProfile() {
    document.getElementById("coverEditProfile").style.display = "none";
    document.getElementById("editProfile").style.transform = "translateY(-550px)";
    document.getElementById("editProfile").style.opacity = "0.2";
    document.getElementById("moveCarousel").style.zIndex = "1";
}

window.onload = function () {
    // let image = document.getElementById("pictureSaved");
    // let profile = document.getElementById("profilePicture");
    document.getElementById("nameSaved").innerText = localStorage.getItem("name");
    document.getElementById("mailSaved").innerText = localStorage.getItem("mail");
    image.src = localStorage.getItem("image");
    profile.src = localStorage.getItem("image");
}