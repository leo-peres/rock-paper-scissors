function playRoundEventHandler(e) {

    computerChoice = getComputerChoice();

    switch(e.target.id) {
        case "rock-btn":
            playRound("rock", computerChoice);
            break;
        case "paper-btn":
            playRound("paper", computerChoice);
            break;
        case "scissors-btn":
            playRound("scissors", computerChoice);
            break;
        default:
            alert("a");
    }

}

const buttonList = document.querySelector("#button-list");
buttonList.addEventListener("click", playRoundEventHandler);

const roundResultP = document.querySelector("#round-result");
const humanScoreP = document.querySelector("#human-score");
const computerScoreP = document.querySelector("#computer-score");

let humanScore = 0;
let computerScore = 0;

function updateScore() {
    humanScoreP.textContent = `Human: ${humanScore}`;
    computerScoreP.textContent = `Computer: ${computerScore}`;
}

function getComputerChoice() {
    let r = Math.floor(3*Math.random());
    return (r == 0 && "rock") || (r == 1 && "paper") || (r == 2 && "scissors");
}

function playRound(humanChoice, computerChoice) {

    //rock > scissors > paper > rock
    let auxArray = ["rock", "scissors", "paper"];
    let human = auxArray.findIndex(s => s === humanChoice);
    let computer = auxArray.findIndex(s => s === computerChoice);
    if(human == computer)
        roundResultP.textContent = "There was a tie.";
    else if((human - computer + 3)%3 == 2) {
        roundResultP.textContent = `You won because ${humanChoice} beats ${computerChoice}.`;
        humanScore++;
    }
    else {
        roundResultP.textContent = `You lost because ${computerChoice} beats ${humanChoice}.`;
        computerScore++;
    }

    updateScore();

}