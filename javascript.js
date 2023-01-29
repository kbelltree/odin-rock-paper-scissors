// result section on DOM 
const computerChoice = document.getElementById("computer-choice"); 
const playerChoice = document.getElementById("player-choice"); 
const winnerCall = document.querySelector(".winner-call");
// score section on DOM 
const computerScore = document.getElementById("computer");
const playerScore = document.getElementById("player"); 
// RPS buttons
const buttons = document.querySelectorAll(".button");
// start button 
const startBtn = document.getElementById("start-btn"); 
// replay overlay modal
const replayPopUp = document.getElementById("replay");
// replay button
const replayBtn = document.getElementById("replay-btn");

// score counter for player and computer
let playerWinCount = 0;
let computerWinCount = 0;
// boolean setting to stop game when either score hits 5 (true)  
let stopRound = false; 

// a function randomly returns Rock, Paper, or Scissors as computer's choice
function getComputerChoice() {
    // Use random number method that returns one of three options (if 0, return rock; if 1, return paper; if 2, return scissors). 
    let result = Math.floor(Math.random() * 3); 
    // Conditional that returns result as well as display the computer's choice
    switch (result) {
        case 0:   
            computerChoice.textContent = "✊";
            return "rock";
        case 1: 
            computerChoice.textContent = "✋";
            return "paper";
        case 2:
            computerChoice.textContent = "✌️";
            return "scissors";    
    }
} 

// playRound rebuilt to play until the player of the computer hits 5 first
function playRound(playerSelection, computerSelection) {
    // DOM: Change ALL the console.log messages to show in the text node of winner-call
    // Also increment score accordingly in the score board in each case
    switch (true) { 
      //If both are the same, show "Its'a tie!"
      case (playerSelection === computerSelection):
        winnerCall.textContent = "It's a tie!";
        break; 
      //If playerSelection is Rock and computerSelection is Scissors, return "You win! Rock beats Scissors."
      case (playerSelection === "rock" && computerSelection === "scissors"):
        winnerCall.textContent = "You Win! Rock beats Scissors.";
        playerWinCount++;
        playerScore.innerText = playerWinCount; 
        break; 
      //If playerSelection is Rock and computerSelection is Paper, return "You lose! Paper beats Rock."
      case (playerSelection === "rock" && computerSelection === "paper"):
        winnerCall.textContent = "You Lose! Paper beats Rock.";
        computerWinCount++;
        computerScore.innerText = computerWinCount; 
        break;
      //If playerSelection is Paper and computerSelection is Rock, return "You win! Paper beats Rock."
      case (playerSelection === "paper" && computerSelection === "rock"):
        winnerCall.textContent = "You Win! Paper beats Rock.";
        playerWinCount++;
        playerScore.innerText = playerWinCount; 
        break;
      //If playerSelection is Paper and computerSelection is Scissors, return "You lose! Scissors beats Paper."
      case (playerSelection === "paper" && computerSelection === "scissors"):
        winnerCall.textContent = "You Lose! Scissors beats Paper.";
        computerWinCount++;
        computerScore.innerText = computerWinCount; 
        break; 
      //If playerSelection is Scissors and computerSelection is Paper, return "You win! Scissors beats Paper."
      case (playerSelection === "scissors" && computerSelection === "paper"):
        winnerCall.textContent = "You Win! Scissors beats Paper.";
        playerWinCount++;
        playerScore.innerText = playerWinCount; 
        break;
       //If playerSelection is Scissors and computerSelection is Rock, return "You lose! Rock beats Scissors."
      case (playerSelection === "scissors" && computerSelection === "rock"):
        winnerCall.textContent = "You Lose! Rock beats Scissors.";
        computerWinCount++;
        computerScore.innerText = computerWinCount; 
        break;
    }
    // Check if either one hit 5 before next round fires
    if (playerWinCount === 5 || computerWinCount === 5) {
      // Function call that display who won
      displayWinnerMessage(playerWinCount, computerWinCount);
      // if one has 5 change the boolean true to stop round
      stopRound = true; 
      // Set to display replay overlay after 3 seconds
      setTimeout(askReplay, 3000);
    }
}

// Add playRound as eventListener on click to RPS buttons
buttons.forEach(function(button) { 
  // at the same time the event is fired, pass the button's value as playerSelection argument
  button.addEventListener("click", function(e) { 
    // Set to fire the event only when stopRound is FALSE
    if (!stopRound) { 
      // Display the player's choice
      playerChoice.textContent = e.target.textContent;
      // Call playRound function 
      playRound(e.target.value, getComputerChoice());
    }
  });   
})

// Create a function that displays the winner
function displayWinnerMessage(player, computer) {
  winnerCall.classList.add('shout');
  switch (true) {
    case (player === 5):
      winnerCall.textContent = "You win! 🙌";
      break; 
    case (computer === 5):
      winnerCall.textContent = "Computer wins! 😞";
      break;
  } 
}

// Create a function that ask the player to replay
function askReplay() {
  replayPopUp.style.display = "block";
  replayBtn.addEventListener("click", reset);
}

// Link start button to start function on click, set to fire only once 
startBtn.addEventListener("click", start, {once : true}) 
function start() {
  document.getElementById("intro").style.display = "none";
  winnerCall.textContent = "Rock Paper Scissors!"
}

// Create a function that reload to restart the game
function reset() {
  location.reload();
}

