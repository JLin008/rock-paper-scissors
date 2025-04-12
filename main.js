let choices = [`rock`, `paper`, `scissors`]

function getComputerChoice() {
    let randomChoice = Math.floor(Math.random() * 3);
    return choices[randomChoice];
}

function getHumanChoice() {
    let humanChoice = prompt("Choose rock, paper, or scissors");
    return humanChoice.toLowerCase();
}

function playRound(humanChoice, computerChoice) {
    let winnerOutput = "";

    if (humanChoice === computerChoice) {
        return "It's a tie!";
    }
    switch (humanChoice) {
        case "rock":
            winnerOutput = (computerChoice === "paper") ? "You lose! Paper beats Rock" : "You win! Rock beats Scissors"
            break;
        case "paper":
            winnerOutput = (computerChoice === "rock") ? "You lose! Scissor beats Paper" : "You win! Paper beats Rock"
            break;
        case "scissors":
            winnerOutput = (computerChoice === "rock") ? "You lose! Rock beats Scissors" : "You win! Scissors beats Rock"
            break;
    }
    return winnerOutput;
}

console.log(getComputerChoice());
console.log(getHumanChoice());