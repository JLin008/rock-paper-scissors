let choices = ["rock", "paper", "scissors"];
let humanScore = 0;
let computerScore = 0;

const output = document.querySelector(".results");
const scoreCount = document.querySelector(".scoreCount");

function getComputerChoice() {
    let randomChoice = Math.floor(Math.random() * 3);
    return choices[randomChoice];
}

function getHumanChoice(humanChoice) {
    if (humanScore >= 5 || computerScore >= 5) {
        output.textContent = (humanScore === 5) ? "You have won 5 times! You win the game!" : "The computer has won 5 times! You lost the game!";
        return;
    }

    let computerChoice = getComputerChoice();
    playRound(humanChoice, computerChoice);

    if (humanScore === 5 || computerScore === 5) {
        output.textContent = (humanScore === 5) ? "You win the game!" : "You lost the game!";
    }
}

function playRound(humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
        output.textContent = `It's a tie! You both chose ${humanChoice}.`;
    } else {
        switch (humanChoice) {
            case "rock":
                if (computerChoice === "paper") {
                    output.textContent = "You lose! Paper beats Rock.";
                    computerScore++;
                } else {
                    output.textContent = "You win! Rock beats Scissors.";
                    humanScore++;
                }
                break;
            case "paper":
                if (computerChoice === "scissors") {
                    output.textContent = "You lose! Scissors beats Paper.";
                    computerScore++;
                } else {
                    output.textContent = "You win! Paper beats Rock.";
                    humanScore++;
                }
                break;
            case "scissors":
                if (computerChoice === "rock") {
                    output.textContent = "You lose! Rock beats Scissors.";
                    computerScore++;
                } else {
                    output.textContent = "You win! Scissors beats Paper.";
                    humanScore++;
                }
                break;
        }
    }

    scoreCount.textContent = `You: ${humanScore} - Computer: ${computerScore}`;
}
