// Variables

const choice = ["rock", "paper", "scissor"];

// playerSelection
let playerChoice = prompt("What's your choice").toLowerCase();

// computerSelection
function getComputerChoice() {
    let randomChoice = Math.floor(Math.random() * choice.length);
    return choice[randomChoice];
}


function playRound(playerSelection, computerSelection) {
    // Case where the choices are the same
    console.log("Inside function: " + computerSelection);

    if (playerSelection == computerSelection) {
        return ("It's a tie!");

    // Case if player picked rock
    }   else if (playerSelection == "rock") {
        if (computerSelection == "scissor") {
            return ("You win!");
        }
        else {
            return ("You lose");
        }

    // Case if player picked paper
    }   else if (playerSelection == "paper") {
        if (computerSelection == "rock") {
            return ("You win!");
        }
        else {
            return ("You lose");
        }
        
    // Case if paper picked scissor
    }   else if (playerSelection == "scissor") {
        if (computerSelection == "paper") {
            return ("You win!");
        }
        else {
            return ("You lose");
        }
        
    }

}
   
console.log(playRound(playerChoice, getComputerChoice()));

// const playerSelection = "rock";
// const computerSelection = getComputerChoice();
// console.log(playRound(playerSelection, computerSelection));

function game() {
    //Previous function inside this function. Keep track of scores
    //5 rounds game
}