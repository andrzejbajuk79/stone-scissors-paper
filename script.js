var computer = {
    name: "computer",
    score: 0,
    pick: ""
};
var player = {
    name: "",
    score: 0,
    pick: ""
};
var round = 0;

 computer.score = 0;
  computer.pick = "";
  player.score = 0;
  player.pick = "";
  round = 0;

 player.name =prompt('what\'s ur name?');
 document.getElementById('playerName').innerHTML = "<h2>" +player.name + "</h2>";


  document.getElementById("button1").onclick = newText; //start gry

function newText() {
  var el = document.getElementById("button1");
var buttons = document.getElementsByClassName("pick-button");
  el.style.color = "red";
  el.style.fontSize = "35px";
  for(var i = 0; i < buttons.length; i++) {
    buttons[i].style.visibility = 'visible';
  }
  
}


//  document.getElementById('pick-button') = playerPick(pick); //bez onclick w index.html ????
// function playerPick(pick).onclick {
//   switch(player.pick = 'pick') {
//   	case 0:
//     player.pick = "rock";
//     break;
//     case 1:
//     player.pick = "paper";
//     break;
//     case 2:
//     player.pick = "scissors";
//     break;

//   }
  
// }

function playerPick(pick) {
  player.pick = pick; 
  computerPick();
  checkResult();
  if ( (player.score >= 10) || (computer.score >=10) ) {
  //log the result
  if (player.score > computer.score) {
    document.getElementById("roundResult").innerHTML = "player wins the game!";
  } else {
    document.getElementById("roundResult").innerHTML = "computer wins the game!";
  }
}
}

// var x = Math.random()*3;
// Math.floor(x);


function computerPick() {
  //random number between 0 and 3
  switch (Math.floor(Math.random()*3)) {
    case 0:
    computer.pick = "rock";
    break;
    case 1:
    computer.pick = "paper";
    break;
    case 2:
    computer.pick = "scissors";
    break;
  }
}

function checkResult() {
  //Check if there is a tie
  var gameResult;
 if (player.pick === computer.pick) {
  gameResult = "tie!"
} else if (player.pick === "rock") { //if player chooses rock

  if (computer.pick === "scissors") { player.score++; gameResult = "Player wins!" } 
  else if (computer.pick === "paper") { computer.score++; gameResult = "Computer wins!" }

} else if (player.pick === "paper") { //if player chooses paper

  if  (computer.pick === "rock") { player.score++; gameResult = "Player wins!" }
  else if (computer.pick === "scissors") { computer.score++; gameResult = "Computer wins!" }

} else if (player.pick === "scissors") { //if player chooses scissors
  if  (computer.pick === "paper") { player.score++; gameResult = "Player wins!" }
  else if (computer.pick === "rock") { computer.score++; gameResult = "Computer wins!" }
  }
  console.log("to jest wybor komp : ", computer.pick); 
  console.log("to jest moj wybor : ", player.pick);
  console.log(gameResult);
  console.log('ja:' + player.score + " " + " wynik komp: " + computer.score);
  document.getElementById('computerPick').innerHTML = computer.pick;
  document.getElementById('playerPick').innerHTML = player.pick;
  document.getElementById('gameResult').innerHTML = gameResult;
  document.getElementById('playerScore').innerHTML = gameResult;
  document.getElementById('computerScore').innerHTML = gameResult;
}





