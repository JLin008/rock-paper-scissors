let choices = [`rock`, `paper`, `scissors`]
let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
    let randomChoice = Math.floor(Math.random() * 3);
    return choices[randomChoice];
}

function getHumanChoice() {
    let humanChoice = prompt("Choose rock, paper, or scissors");
    return humanChoice.toLowerCase();
}

function playRound(humanChoice, computerChoice) {
   

    if (humanChoice === computerChoice) {
        console.log(`It's a tie! You both choose ${humanChoice}`);
        return;

    }
    switch (humanChoice) {
        case "rock":
            if (computerChoice === "paper") {
                console.log("You lose! Paper beats Rock");
                computerScore++;
            } 
            else {
                console.log("You win! Rock beats Scissors");
                humanScore++;
            }
            break;
        case "paper":
            if (computerChoice === "scissors") {
                console.log("You lose! Scissors beats Paper");
                computerScore++;
            } 
            else {
               console.log("You win! Paper beats Rock");
                humanScore++;
            }
            break;
        case "scissors":
            if (computerChoice === "rock") {
                console.log("You lose! Rock beats Scissors");
                computerScore++;
            } 
            else {
                console.log("You win! Scissors beats Paper");
                humanScore++;
            }
            break;
    }

}

function playGame() {
    for (let i = 0; i < 5; i++) {
        let humanChoice = getHumanChoice();
        let computerChoice = getComputerChoice();
        playRound(humanChoice, computerChoice);
    }
    console.log(`Computer Score: ${computerScore} \n Human Score: ${humanScore}`);
}

playGame();
