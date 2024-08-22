function getComputerChoice() {
    let r = Math.floor(3*Math.random());
    return (r == 0 && "rock") || (r == 1 && "paper") || (r == 2 && "scissor");
}

function getHumanChoice() {
    let userInput =  prompt("Type one of:\n  - Rock\n  - Paper\n  - Scissor").toLowerCase();
    let stringArray = ["rock", "paper", "scissor"];
    if(stringArray.find(s => s === userInput) === undefined) {
        alert("Invalid input!");
        return;
    }
    else
        return userInput;
}

function playGame() {

    let humanScore = 0;
    let computerScore = 0;

    let playRound = function (humanChoice, computerChoice) {

        alert(`You chose ${humanChoice} and the computer chose ${computerChoice}.`);

        //rock > scissors > paper > rock
        let auxArray = ["rock", "scissor", "paper"];
        let human = auxArray.findIndex(s => s === humanChoice);
        let computer = auxArray.findIndex(s => s === computerChoice);
        if(human == computer) {
            alert(`There was a tie.`);
            return "tie";
        }
        else if((human - computer + 3)%3 == 2) {
            alert(`You won because ${humanChoice} beats ${computerChoice}.`);
            humanScore++;
            return "human";
        }
        else
            alert(`You lost because ${computerChoice} beats ${humanChoice}.`);
            computerScore++;
            return "computer";

    }

    while(humanScore < 3 && computerScore < 3) {
        playRound(getHumanChoice(), getComputerChoice());
        alert(`The score is now\nHuman: ${humanScore}\nComputer: ${computerScore}`);
    }

    if(humanScore == 3)
        alert("You won.");
    else
        alert("Computer won.")

}