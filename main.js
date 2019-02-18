let playerOne = document.getElementById("playerOne");
let playerTwo = document.getElementById("playerTwo");
let diceTotal = 0; 
let diceText = document.getElementById("diceText");
let diceText2 = document.getElementById("diceText2");
let status = document.getElementById("status"); 
let status2 = document.getElementById("status2");
let currentPlayer = 1;

function rollDice1() {  
 if(currentPlayer == 1) {

  let die1 = document.getElementById("diceText");     
    d1 = Math.floor(Math.random() * 6) + 1; 
    diceTotal += d1;    
    die1.innerHTML = d1;  
    status.innerHTML = "Your Score is " + diceTotal; 
   currentPlayer = 2;

  if(d1 == 1){
      diceTotal = 0;
      status.innerHTML = "Game Over Player 1 you rolled a 1. Reset your Score"; 
      status2.innerHTML = "Player 2 You Win. Reset your Score"; 
      currentPlayer = 1;
    } else if (diceTotal == 20){  
      diceTotal = 0;   
    status.innerHTML = "Player 1 you Scored 20 You Win! Reset Score";  
    status2.innerHTML = "Player 2 You Lose. Reset your Score";    
    currentPlayer = 1; 
   } else if (diceTotal >= 21){
    diceTotal = 0;
    status.innerHTML = "Game Over Player 1. You went Bust! Reset Score"; 
    status2.innerHTML = "Player 2 You Win. Reset your Score";
    currentPlayer = 1
   }
  } 
}


function rollDice2 () {
if (currentPlayer == 2){

let die2 = document.getElementById("diceText2");      
  d2 = Math.floor(Math.random() * 6) + 1;  
  diceTotal += d2;        
  die2.innerHTML = d2;  
  status2.innerHTML = "Your Score is " + diceTotal; 
 currentPlayer = 1;
if(d2 == 1){
    diceTotal = 0;
    status2.innerHTML = "Game Over Player 2 you rolled a 1. Reset your Score"; 
    status.innerHTML = "Player 1 You Win. Reset your Score";
    currentPlayer = 1;
  } else if (diceTotal == 20){  
    diceTotal = 0;   
  status2.innerHTML = "Player 2 you Scored 20 You Win! Reset Score";      
  status.innerHTML = "Player 1 You Lose. Reset your Score"; 
  currentPlayer = 1;
 } else if (diceTotal >= 21){
  diceTotal = 0;
  status2.innerHTML = "Game Over Player 2 You went Bust! Reset Score"; 
  status.innerHTML = "Player 1 You Win. Reset Score";  
  currentPlayer = 1;
  }
  }  
}

function resetButton () {
      diceTotal = 0;
      diceText.innerHTML = "Roll Dice to play";   
      status.innerHTML = "Score Reset to " + diceTotal;    
}  

function resetButton2 () {
  diceTotal = 0;
  diceText2.innerHTML = "Roll Dice to play";   
  status2.innerHTML = "Score Reset to " + diceTotal;    
}  

