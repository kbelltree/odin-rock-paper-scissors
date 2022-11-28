// Create a function named getComputerChoice that randomly returns Rock, Paper, or Scissors. 
function getComputerChoice() {
    // Use random number method that returns one of three options (if 0, return rock; if 1, return paper; if 2, return scissors). 
    let result = Math.floor(Math.random() * 3); 
    switch (result) {
        // Include console.log to check if the desired result is returned. 
        case 0:   
            console.log('rock');
            return "rock";
            break;
        case 1: 
            console.log('paper');
            return "paper";
            break;
        case 2: 
            console.log('scissors');
            return "scissors";
            break;     
    }
} 

// Create a function named playRound for single round play that takes two parameters: playerSelection and computerSelection. 
function playRound (playerSelection, computerSelection){
    // Change playerSelection argument to all lower case to accommodate all string case types. 
    let playerSelectionLowerCased = playerSelection.toLowerCase(); 
    // If playerSelection and computerSelection are the same, return "It's a tie!"
    if (playerSelectionLowerCased === computerSelection){
        return "It's a Tie!";
    } 
    // Create conditionals that declare a Winner of the round with a string for each playerSelection.   
    if (playerSelectionLowerCased === "rock"){
        // If playerSelection is Rock and computerSelection is Scissors, return "You win! Rock beats Scissors."
        if (computerSelection === "scissors"){
            return "You Win! Rock beats Scissors."; 
        } 
        // If playerSelection is Rock and computerSelection is Paper, return "You lose! Paper beats Rock."
        if (computerSelection === "paper"){
            return "You Lose! Paper beats Rock.";
        }
    }
    if (playerSelectionLowerCased === "paper"){
        // If playerSelection is Paper and computerSelection is Rock, return "You win! Paper beats Rock."
        if (computerSelection === "rock"){
            return "You Win! Paper beats Rock.";
        }
        // If playerSelection is Paper and computerSelection is Scissors, return "You lose! Scissors beats Paper."
        if (computerSelection === "scissors") {
            return "You Lose! Scissors beats Paper.";
        }
    }
    if (playerSelectionLowerCased === "scissors"){
        // If playerSelection is Scissors and computerSelection is Paper, return "You win! Scissors beats Paper."
        if (computerSelection === "paper"){
            return "You Win! Scissors beats Paper.";
        }
        // If playerSelection is Scissors and computerSelection is Rock, return "You lose! Rock beats Scissors."
        if (computerSelection === "rock"){
            return "You Lose! Rock beats Scissors.";
        }
    }
    // Create an error case that returns a message in case of misspelling or wrong element entry. 
    else {
        return "Improper entry. Please try again."
    }
}
// Test run
const playerSelection = "rock";
const computerSelection = getComputerChoice();
console.log(playRound(playerSelection, computerSelection));