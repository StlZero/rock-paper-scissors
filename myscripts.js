// Variables

const choice = ["rock", "paper", "scissor"];
let playerCounter = 0;
let computerCounter = 0;

// playerSelection
function playerChoice(){
    let getChoice = prompt("What's your choice").toLowerCase();
    return getChoice;
}

// computerSelection
function getComputerChoice() {
    let randomChoice = Math.floor(Math.random() * choice.length);
    return choice[randomChoice];
}

// Return the result of a round
function playRound(playerSelection, computerSelection) {
    // Case where the choices are the same
    console.log("Player picked " + playerSelection);
    console.log("Computer picked " + computerSelection);

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

// Keeping player's and computer's score
function game(roundResult) {
    // Shows previous round's result
    console.log(roundResult);

    if (roundResult == "You win!") {
        return playerCounter += 1;
    } else if (roundResult == "You lose") {
        return computerCounter += 1;
    } else {
        return;
    }
}

// Plays game for 5 rounds
for (let i = 1; i < 6; i++) {
    console.log("Round: " + i);
    game(playRound(playerChoice(), getComputerChoice()));
}

// Player's and Computer's counter after 5 rounds
console.log("Player counter: " + playerCounter);
console.log("Computer counter: " + computerCounter);

// Calculating winner
if (playerCounter > computerCounter) {
    console.log("Final result: Player won!");
} else if (computerCounter > playerCounter) {
    console.log("Final result: Computer won!");
} else {
    console.log("Final result: It's a tie!");
}