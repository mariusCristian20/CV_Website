function BuyTicketsKids() {
    let userMoney = document.getElementById("userMoney").innerText;
    let userMoney1 = document.getElementById("userMoney1").innerText;
    let userTickets = document.getElementById("userTickets").innerText;

    if (+userMoney >= 10 && +userMoney1 >= 10) {
        let buy = +userMoney - 10;
        let buy1 = +userMoney1 - 10;
        document.getElementById("userMoney").innerText = buy;
        document.getElementById("userMoney1").innerText = buy1;
        let tickets = +userTickets + 1;
        document.getElementById("userTickets").innerText = tickets;    
    }
    else{
        alert("You don't have money.")
    }
}

function BuyTicketsStudents() {
    let userMoney = document.getElementById("userMoney").innerText;
    let userMoney1 = document.getElementById("userMoney1").innerText;
    let userTickets = document.getElementById("userTickets").innerText;

    if (+userMoney >= 10 && +userMoney1 >= 10) {
        let buy = +userMoney - 15;
        let buy1 = +userMoney1 - 15;
        document.getElementById("userMoney").innerText = buy;
        document.getElementById("userMoney1").innerText = buy1;
        let tickets = +userTickets + 1;
        document.getElementById("userTickets").innerText = tickets;    
    }
    else{
        alert("You don't have money.")
    }
}

function BuyTicketsFamilies() {
    let userMoney = document.getElementById("userMoney").innerText;
    let userMoney1 = document.getElementById("userMoney1").innerText;
    let userTickets = document.getElementById("userTickets").innerText;

    if (+userMoney >= 10 && +userMoney1 >= 10) {
        let buy = +userMoney - 20;
        let buy1 = +userMoney1 - 20;
        document.getElementById("userMoney").innerText = buy;
        document.getElementById("userMoney1").innerText = buy1;
        let tickets = +userTickets + 1;
        document.getElementById("userTickets").innerText = tickets;    
    }
    else{
        alert("You don't have money.")
    }
}

function BuyTicketsRetierd() {
    let userMoney = document.getElementById("userMoney").innerText;
    let userMoney1 = document.getElementById("userMoney1").innerText;
    let userTickets = document.getElementById("userTickets").innerText;

    if (+userMoney >= 10 && +userMoney1 >= 10) {
        let buy = +userMoney - 10;
        let buy1 = +userMoney1 - 10;
        document.getElementById("userMoney").innerText = buy;
        document.getElementById("userMoney1").innerText = buy1;
        let tickets = +userTickets + 1;
        document.getElementById("userTickets").innerText = tickets;    
    }
    else{
        alert("You don't have money.")
    }
}