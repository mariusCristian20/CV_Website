function Disappear(){
    let CT_money = document.getElementById("containerProfile__money").style.opacity;
    let CT_tickets = document.getElementById("containerProfile__tickets").style.opacity;
    let CT_editProfile = document.getElementById("containerProfile__tickets").style.opacity;

    if(CT_editProfile === "1" && CT_money === "1" && CT_tickets === "1"){
        document.getElementById("containerProfile__money").style.opacity = "0";
        document.getElementById("containerProfile__tickets").style.opacity = "0";
        document.getElementById("containerProfile__editProfile").style.opacity = "0";
        document.getElementById("containerProfile__money").style.transform = "translateY(150px)";
        document.getElementById("containerProfile__tickets").style.transform = "translateY(50px)";
        document.getElementById("containerProfile__editProfile").style.transform = "translateY(100px)";
    }
    else if(CT_editProfile === "0" && CT_money === "0" && CT_tickets === "0"){
        document.getElementById("containerProfile__money").style.opacity = "1";
        document.getElementById("containerProfile__tickets").style.opacity = "1";
        document.getElementById("containerProfile__editProfile").style.opacity = "1";
        document.getElementById("containerProfile__money").style.transform = "translateY(-15px)";
        document.getElementById("containerProfile__tickets").style.transform = "translateY(-5px)";
        document.getElementById("containerProfile__editProfile").style.transform = "translateY(-10px)";
    }
    else{
        document.getElementById("containerProfile__money").style.transform = "translateY(-15px)";
        document.getElementById("containerProfile__tickets").style.transform = "translateY(-5px)";
        document.getElementById("containerProfile__editProfile").style.transform = "translateY(-10px)";
        document.getElementById("containerProfile__money").style.opacity = "1";
        document.getElementById("containerProfile__tickets").style.opacity = "1";
        document.getElementById("containerProfile__editProfile").style.opacity = "1";
    }
}