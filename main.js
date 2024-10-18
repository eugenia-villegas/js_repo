
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
        console.log("Draw!");
    } else if(human == "rock") {
        if (computer == "paper") {
            console.log("You lose! Paper beats Rock");
            return computerScore++;
        } else if(computer == "scissors") {
            console.log("You win! Rock beats Scissors");
            return humanScore++;
        } 
    } else if(human == "paper") {
        if (computer == "rocks") {
            console.log("You win! Paper beats Rock");
            return humanScore++;
        } else if(computer == "scissors") {
            console.log("You lose! Scissors beats Paper");
            return computerScore++;
        }
    } else if(human == "scissors") {
        if (computer == "paper") {
            console.log("You win! Scissors beats Paper");
            return humanScore++
        } else if(computer == "rock") {
            console.log("You lose! Rock beats Scissors");
            return computerScore++;
        }
    }
}

function playGame() {
    for(let i = 1; i < 6; i++) {
        console.log("Round ", i);
        let computerChoice = getComputerChoice();
        let humanChoice = getHumanChoice();

        playRound(humanChoice, computerChoice)
    }
}

playGame();
console.log("Your score is: ", humanScore, ". Computers score is: ", computerScore);
