// Create a function named getComputerChoice that randomly returns Rock, Paper, or Scissors. 
function getComputerChoice() {
    // Use random number method that returns one of three options (if 0, return rock; if 1, return paper; if 2, return scissors). 
    let result = Math.floor(Math.random() * 3); 
    switch (result) {
        // Include console.log to check if the desired result is returned. 
        case 0:   
            console.log("Computer: rock");
            return "rock";
            break;
        case 1: 
            console.log("Computer: paper");
            return "paper";
            break;
        case 2: 
            console.log("Computer: scissors");
            return "scissors";
            break;     
    }
} 

// Create a function named playRound for single round play that takes two parameters: playerSelection and computerSelection. 
function playRound(playerSelection, computerSelection){
    // IF playerSelection and computerSelection are the same, return "It's a tie!"
    switch (true) {
      case (playerSelection === computerSelection):
        console.log("It's a tie!");
        return 0; 
        break; 
    // If playerSelection is Rock and computerSelection is Scissors, return "You win! Rock beats Scissors."
      case (playerSelection === "rock" && computerSelection === "scissors"):
        console.log ("You Win! Rock beats Scissors."); 
        return 1;
        break; 
    // If playerSelection is Rock and computerSelection is Paper, return "You lose! Paper beats Rock."
      case (playerSelection === "rock" && computerSelection === "paper"):
        console.log("You Lose! Paper beats Rock.");
        return 2;
        break; 
      // If playerSelection is Paper and computerSelection is Rock, return "You win! Paper beats Rock."
      case (playerSelection === "paper" && computerSelection === "rock"):
        console.log ("You Win! Paper beats Rock."); 
        return 1;
        break; 
      // If playerSelection is Paper and computerSelection is Scissors, return "You lose! Scissors beats Paper."
      case (playerSelection === "paper" && computerSelection === "scissors"):
        console.log ("You Lose! Scissors beats Paper.");
        return 2;
        break;
      //If playerSelection is Scissors and computerSelection is Paper, return "You win! Scissors beats Paper."
      case (playerSelection === "scissors" && computerSelection === "paper"):
        console.log ("You Win! Scissors beats Paper.");
        return 1; 
        break; 
       //If playerSelection is Scissors and computerSelection is Rock, return "You lose! Rock beats Scissors."
      case (playerSelection === "scissors" && computerSelection === "rock"):
        console.log ("You Lose! Rock beats Scissors.");
        return 2; 
        break; 
      default:
        console.log("Invalid entry. Could not play.")
        }
    }
// Create a new function named game() that plays 5 rounds. 
function game() {
    // Create variables that store the sum of winning count.
        let playerSumOfWin = 0;
        let computerSumOfWin = 0;
        let sumOfTie = 0;
    // Loop playRound 5 times    
        for (let i = 0; i < 5; i++){
            // Call playRound function. 
           console.log(`Game ${i+1}`);
           let result = playRound(promptEntry(), getComputerChoice());
           console.log(result);
            //IF the condition returns TRUE, add one count to the appropriate sum variable. 
            if (result === 0){
                sumOfTie += 1; 
            }
            else if (result === 1){
                playerSumOfWin += 1; 
            }
            else if (result === 2){
                computerSumOfWin += 1;    
            } 
        }
        let resultMessage = ``;
    // IF the winning counts of player and computer are the same, return "It's a Tie!"
    if (playerSumOfWin === computerSumOfWin){
        resultMessage += `It's a Tie! You scored ${playerSumOfWin} and Computer scored ${computerSumOfWin}, Tied ${sumOfTie} times.`;
    }
    // IF the player's winning count is greater than the computer's, return "You Win!"
    else if (playerSumOfWin > computerSumOfWin){
        resultMessage += `You Win! You scored ${playerSumOfWin} and Computer scored ${computerSumOfWin}, Tied ${sumOfTie} times.`;
    // Else return "You Lose!"
    } else {
        resultMessage += `You Lose! You scored ${playerSumOfWin} and Computer scored ${computerSumOfWin}, Tied ${sumOfTie} times.`;
    }
        console.log(resultMessage);
        return resultMessage;
    }
    
// Helper function that repeat prompt to player until correct entry is made. 
function promptEntry() {
    let entry;
  // Repeat prompt until conditions is FALSE 
    do {
      entry = prompt("Rock? Paper? or Scissors?");
      console.log(`Entry: ${entry}`);   
    } while (entry.toLowerCase() !== "rock" && entry.toLowerCase() !== "paper" && entry.toLowerCase() !== "scissors" || entry === null || entry === '');
    return entry.toLowerCase(); 
    }
    

    game();
    
 
// Test run for single round
// const playerSelection = "rock";
// const computerSelection = getComputerChoice();
// console.log(playRound(playerSelection, computerSelection));