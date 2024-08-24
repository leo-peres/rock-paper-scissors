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
    }

}

const buttonList = document.querySelector("#button-list");
buttonList.addEventListener("click", playRoundEventHandler);

const scoreDiv = document.querySelector("#score-div");

const roundResultP = document.querySelector("#round-result");
const humanScoreP = document.querySelector("#human-score");
const computerScoreP = document.querySelector("#computer-score");

let humanScore = 0;
let computerScore = 0;

let resetFlag = false;

function updateScore() {
    humanScoreP.textContent = `Human: ${humanScore}`;
    computerScoreP.textContent = `Computer: ${computerScore}`;
}

function getComputerChoice() {
    let r = Math.floor(3*Math.random());
    return (r == 0 && "rock") || (r == 1 && "paper") || (r == 2 && "scissors");
}

function announceWinner() {
    
    const winnerP = document.createElement("p");
    winnerP.id = "winner-para"
    
    if(humanScore >= 5) {
        winnerP.textContent = "You won."
    }
    else if(computerScore >= 5) {
        winnerP.textContent = "Computer won."
    }
    else {
        winnerP.textContent = "Nobody won. Why is this function being called?"
    }

    scoreDiv.appendChild(winnerP);

}

function resetGame() {

    humanScore = 0;
    computerScore = 0;

    updateScore();

    const winnerP = document.querySelector("#winner-para")
    scoreDiv.removeChild(winnerP);

    resetFlag = false;

}

function playRound(humanChoice, computerChoice) {

    if(resetFlag) {
        resetGame();
    }

    roundResultP.textContent = `You chose ${humanChoice} and the computer chose ${computerChoice}.`;

    //rock > scissors > paper > rock
    let auxArray = ["rock", "scissors", "paper"];
    let human = auxArray.findIndex(s => s === humanChoice);
    let computer = auxArray.findIndex(s => s === computerChoice);
    if(human == computer)
        roundResultP.textContent += " There was a tie.";
    else if((human - computer + 3)%3 == 2) {
        roundResultP.textContent += ` You won because ${humanChoice} beats ${computerChoice}.`;
        humanScore++;
    }
    else {
        roundResultP.textContent += ` You lost because ${computerChoice} beats ${humanChoice}.`;
        computerScore++;
    }

    updateScore();

    if(Math.max(humanScore, computerScore) >= 5) {
        announceWinner();
        resetFlag = true;
    }

}