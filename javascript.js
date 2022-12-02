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
    // let playerSelectionLowerCased = playerSelection.toLowerCase(); 
    // (1 round game) IF playerSelection and computerSelection are the same, return "It's a tie!"
    // (5 round game)IF it's a tie, alert and return 0; 
    if (playerSelection === computerSelection){
        console.log(`It's a Tie! Both chose ${playerSelection}.`);
        return 0; 
    } 
    // Create conditionals that declare a Winner of the round with a string for each playerSelection.   
    if (playerSelection === "rock"){
        // (1 round game)If playerSelection is Rock and computerSelection is Scissors, return "You win! Rock beats Scissors."
        // (5 round game)IF player wins, alert and return 1
        if (computerSelection === "scissors"){
            console.log(`You Win! Computer chose ${computerSelection}. Rock beats Scissors.`); 
            return 1;
        } 
        // (1 round game)If playerSelection is Rock and computerSelection is Paper, return "You lose! Paper beats Rock."
        // (5 round game)IF player loses, alert and return 2
        if (computerSelection === "paper"){
            console.log(`You Lose! Computer chose ${computerSelection}. Paper beats Rock.`);
            return 2;
        }
    }
    if (playerSelection === "paper"){
        // (1 round game)If playerSelection is Paper and computerSelection is Rock, return "You win! Paper beats Rock."
        // (5 round game)IF player wins, alert and return 1
        if (computerSelection === "rock"){
            console.log(`You Win! Computer chose ${computerSelection}. Rock beats Scissors.`); 
            return 1; 
        }
        // (1 round game)If playerSelection is Paper and computerSelection is Scissors, return "You lose! Scissors beats Paper."
        // (5 round game)IF player loses, alert and return 2
        if (computerSelection === "scissors") {
            console.log(`You Lose! Computer chose ${computerSelection}. Paper beats Rock.`);
            return 2;
        }
    }
    if (playerSelection === "scissors"){
        // (1 round game)If playerSelection is Scissors and computerSelection is Paper, return "You win! Scissors beats Paper."
        // (5 round game)IF player wins, alert and return 1
        if (computerSelection === "paper"){
            console.log(`You Win! Computer chose ${computerSelection}. Rock beats Scissors.`); 
            return 1;

        }
        // (1 round game)If playerSelection is Scissors and computerSelection is Rock, return "You lose! Rock beats Scissors."
        // (5 round game)IF player loses, alert and return 2
        if (computerSelection === "rock"){
            console.log(`You Lose! Computer chose ${computerSelection}. Paper beats Rock.`);
            return 2;
        }
    } else {
        return;
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
           // Create a variable that store Player's entry in LOWER case. 
           let promptPlayer = prompt("Rock, Paper, or Scissors?").toLowerCase(); 
           // Call playRound function. 
           let result = playRound(promptPlayer, getComputerChoice())
           console.log(result);
            //IF the condition returns TRUE, add one count to the appropriate sum variable. 
            if (result === 0){
                sumOfTie += 1; 
            }
            if (result === 1){
                playerSumOfWin += 1; 
            }
            if (result === 2){
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
    

game();

 
// Test run for single round
// const playerSelection = "rock";
// const computerSelection = getComputerChoice();
// console.log(playRound(playerSelection, computerSelection));