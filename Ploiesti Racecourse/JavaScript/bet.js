function Bet(){
    let random = Random(15, 1);
    let userValue = document.getElementById("numb").value;
    let userMoney = document.getElementById("userMoney").innerText;
    let userMoney1 = document.getElementById("userMoney1").innerText;

    if (+userValue >= 1 && +userValue <= 14) {
        if(+userValue === +random){
            alert("🥳🥳🥳 You Won");
            let updateUserMoney = +userMoney * 1.5;
            let updateUserMoney1 = + userMoney1 * 1.5;
            document.getElementById("userMoney").innerText = parseInt(updateUserMoney);
            document.getElementById("userMoney1").innerText = parseInt(updateUserMoney1);
        }
        else{
            let updateUserMoney = +userMoney - 10;
            let updateUserMoney1 = +userMoney1 - 10;
            if (+updateUserMoney <= 0 && +updateUserMoney1 <= 0) {
                document.getElementById("bet").style.display = "none";
                alert("😞😞You Lost All Of Your Money");
            }
            document.getElementById("userMoney").innerText = updateUserMoney;
            document.getElementById("userMoney1").innerText = updateUserMoney1;
        }
    }
    else{
        alert("Enter a number between 1 and 14.");
    }
}

function Random(max, min) {
    let random = Math.floor(Math.random() * (max - min)) + min;
    return random;
}