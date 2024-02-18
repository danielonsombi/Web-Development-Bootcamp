function ranfomNumberGenerator(){
    var number = Math.floor(Math.random() * 6) + 1;
    return number;
}

function getNewSource(randomNumber) {
    var selectedDice = "dice"+randomNumber+".png";
    var newDiceSrc= "./images/"+selectedDice;

    return newDiceSrc;
}

var player1 = ranfomNumberGenerator();
var player2 = ranfomNumberGenerator();
document.querySelector(".img1").setAttribute("src",getNewSource(player1));
document.querySelector(".img2").setAttribute("src",getNewSource(player2));


//Check the winner:
var winner = "";
if (player1 ===  player2) {
    winner = "Draw!"
} else if (player1 > player2) {
    winner = "🚩Player 1 Wins!"
} else {
    winner = "Player 2 Wins!🚩"
}

document.querySelector("h1").innerHTML = winner;