// function Name() {
//     let name = document.getElementById("name").value;
//     document.getElementById("postName").innerText = name;
// }

function LogIn() {
    let name1 = document.getElementById("name").value;
    let mail = document.getElementById("mail").value;
    let picture = document.getElementById("picture").files[0];
    let reader = new FileReader();



    if (name1 === "" || mail === "" || picture === "") {
        alert("Enter your name, email and profile picture");
    }
    else {
        localStorage.setItem("name", name1);
        localStorage.setItem("mail", mail);
        reader.onload = function (e) {
            localStorage.setItem("image", e.target.result);
        }
        reader.readAsDataURL(picture);
        window.open("../Pages/index.html", "_self");
        //! This can't be assiged a value because the page loads and the value is lost
        //? document.getElementById("postName").innerText = name1;
        // console.log(picture);
    }

}