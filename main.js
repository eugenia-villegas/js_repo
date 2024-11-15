
let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
    const computer = Math.random();
    let selection;
    if(computer >= 0 && computer <= 0.33) {
        selection = "rock";
    } else if (computer > 0.33 && computer <= 0.66) {
        selection = "paper";
    } else {
        selection = "scissors";
    }
    return selection;
}

function getHumanChoice() {
    const human = prompt("Enter your selection: 1) Rock - 2) Paper - 3) Scissors");
    let hSelection;
    if(human.toLowerCase() == "rock") {
        hSelection = human;
    } else if(human.toLowerCase() == "paper") {
        hSelection = human;
    } else if(human.toLowerCase() == "scissors") {
        hSelection = human;
    } else {
        console.log("Invalid Answer");
    }
    return hSelection;
}

function playRound(human, computer) {
    if(human == computer) {
        document.getElementById("result").innerHTML = "Draw!";
    } else if(human == "rock") {
        if (computer == "paper") {
            document.getElementById("result").innerHTML = "You lose! Paper beats Rock";
            computerScore++;
            document.getElementById("counterPC").innerHTML = computerScore;
        } else if(computer == "scissors") {
            document.getElementById("result").innerHTML = "You win! Rock beats Scissors";
            humanScore++;
            document.getElementById("counterHuman").innerHTML = humanScore;
        } 
    } else if(human == "paper") {
        if (computer == "rocks") {
            document.getElementById("result").innerHTML = "You win! Paper beats Rock";
            humanScore++;
            document.getElementById("counterHuman").innerHTML = humanScore;
        } else if(computer == "scissors") {
            document.getElementById("result").innerHTML = "You lose! Scissors beats Paper";
            computerScore++;
            document.getElementById("counterPC").innerHTML = computerScore;
        }
    } else if(human == "scissors") {
        if (computer == "paper") {
            document.getElementById("result").innerHTML = "You win! Scissors beats Paper";
            humanScore++;
            document.getElementById("counterHuman").innerHTML = humanScore;
        } else if(computer == "rock") {
            document.getElementById("result").innerHTML = "You lose! Rock beats Scissors";
            computerScore++;
            document.getElementById("counterPC").innerHTML = computerScore;
        }
    }

    if(computerScore == 5) {
        document.getElementById("winner").innerHTML = "COMPUTER WINS";
    } else if (humanScore == 5) {
        document.getElementById("winner").innerHTML = "YOU WIN";
    }
}

function playGame() {

    let playerSelection;

    let rock = document.getElementById("rock").addEventListener("click", function () {
        playerSelection = "rock";
        let computerChoice = getComputerChoice();
        playRound(playerSelection, computerChoice);
    })
    
    let paper = document.getElementById("paper").addEventListener("click", function () {
        playerSelection = "paper";
        let computerChoice = getComputerChoice();
        playRound(playerSelection, computerChoice);
    })

    let scissors = document.getElementById("scissors").addEventListener("click", function () {
        playerSelection = "scissors";
        let computerChoice = getComputerChoice();
        playRound(playerSelection, computerChoice);
    })
}

playGame();