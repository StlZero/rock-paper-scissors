// Variables
let gameStatus = true;

let start_btn = document.querySelector('#start_game');

let btn_rock = document.querySelector('#btn_rock');
let btn_paper = document.querySelector('#btn_paper');
let btn_scissor = document.querySelector('#btn_scissor');
let btn = document.querySelector('button');

let para1 = document.querySelector('.para1');
let para2 = document.querySelector('.para2');

let counter_box1 = document.querySelector('.counter_box1');
let counter_box2 = document.querySelector('.counter_box2');

let scrollable = document.querySelector('.scrollable');

const choice = ["rock", "paper", "scissor"];
let playerCounter = 0;
let computerCounter = 0;

// playerSelection
// function playerChoice(){
//     let getChoice = prompt("What's your choice").toLowerCase();
//     return getChoice;
// }

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

    let para = document.createElement('p');
    para.classList.add('console');

    scrollable.appendChild(para);

    if (playerSelection == computerSelection) {
        para.textContent = "It's a tie!";
        return ("It's a tie!");

    // Case if player picked rock
    }   else if (playerSelection == "rock") {
        if (computerSelection == "scissor") {
            para.textContent = "You win!";
            return ("You win!");
        }
        else {
            para.textContent = "You lose";
            return ("You lose");
        }

    // Case if player picked paper
    }   else if (playerSelection == "paper") {
        if (computerSelection == "rock") {
            para.textContent = "You win!";
            return ("You win!");
        }
        else {
            para.textContent = "You lose";
            return ("You lose");
        }
        
    // Case if paper picked scissor
    }   else if (playerSelection == "scissor") {
        if (computerSelection == "paper") {
            para.textContent = "You win!";
            return ("You win!");
        }
        else {
            para.textContent = "You lose";
            return ("You lose");
        }
    }
}

// Keeping player's and computer's score
function game(roundResult) {
    // Shows previous round's result
    console.log(roundResult);

    if (roundResult == "You win!") {
        playerCounter += 1;
        para1.textContent = playerCounter;
        
    } else if (roundResult == "You lose") {
        computerCounter += 1;
        para2.textContent = computerCounter;
    }
}

//Replay game button && Reset everything
start_btn.addEventListener('click', () => {
    
    gameStatus = true;

    computerCounter = 0;
    playerCounter = 0;
    para1.textContent = 0;
    para2.textContent = 0;

    let consoles = document.querySelectorAll('.console');

    consoles.forEach(element => {
        element.remove();
    });
    
});

// Button event for each selections
btn_rock.addEventListener('click', () => {
    if (gameStatus == true) {
        game(playRound('rock', getComputerChoice()));
        console.log(playerCounter);
        console.log(computerCounter);
        calcWinner();
    }
});
        
btn_paper.addEventListener('click', () => {
    if (gameStatus == true) {
        game(playRound('paper', getComputerChoice()));
        console.log(playerCounter);
        console.log(computerCounter);
        calcWinner();
    }   
});
        
btn_scissor.addEventListener('click', () => {
    if (gameStatus == true) {
        game(playRound('scissor', getComputerChoice()));
        console.log(playerCounter);
        console.log(computerCounter);
        calcWinner();
    }
});




// Rock Paper Scissor buttons
// let rock_Event = btn_rock.addEventListener('click', () => {
//     return 'rock';
// });

// let paper_Event = btn_paper.addEventListener('click', () => {
//     return 'paper';
// });

// let scissor_Event = btn_scissor.addEventListener('click', () => {
//     return 'scissor';
// });



// Plays game for 5 rounds
// for (let i = 0; i < 5; i++) {
//     // console.log("Round: " + i);
//     game(playRound(wait(), getComputerChoice()));
    
// }

// Player's and Computer's counter after 5 rounds
// console.log("Player counter: " + playerCounter);
// console.log("Computer counter: " + computerCounter);

// Calculating winner
// while (playerCounter <= 5 || computerCounter <= 5) {
//     if (playerCounter >= 5 || computerCounter >= 5) {
//         if (playerCounter > computerCounter) {
//             console.log("Final result: Player won!");
//         } else if (computerCounter > playerCounter) {
//             console.log("Final result: Computer won!");
//         } else {
//             console.log("Final result: It's a tie!");
//         }
//     }
// }

// Calculate who won
function calcWinner() {
    if (playerCounter >= 5 || computerCounter >= 5) {
        gameStatus = false;

        let para = document.createElement('p');
        para.classList.add('console');

        scrollable.appendChild(para);

        if (playerCounter > computerCounter) {
            para.textContent = "Final result: Player won!"
            console.log("Final result: Player won!");
        } else if (computerCounter > playerCounter) {
            para.textContent = "Final result: Computer won!"
            console.log("Final result: Computer won!");
        } else {
            para.textContent = "Final result: It's a tie!"
            console.log("Final result: It's a tie!");
        }
    }
}

// Test function
function test() {
    console.log("TEST");
}