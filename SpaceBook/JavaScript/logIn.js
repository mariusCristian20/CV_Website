// loging into page

let log = document.getElementById("logIn");
let email = document.getElementById("email");
let password = document.getElementById("password");

log.addEventListener("click", OpenPage);

function OpenPage() {
    if (email.value === "" || password.value === "") {
        alert("Enter password and email.")
    }
    else {
        window.open("../Pages/index.html", "_self");
    }
}

