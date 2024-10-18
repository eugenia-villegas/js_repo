const computerChoice = Math.random();
const userChoice = prompt("Enter your selection: 1) Rock - 2) Paper - 3) Scissors");
let humanScore = 0;
let computerScore = 0;

function getComputerChoice(computer) {
    let selection;
    if( computer >= 0 && computer <= 0.33) {
        console.log("Computer: Rock");
        selection = 1;
    } else if (computer > 0.33 && computer <= 0.66) {
        console.log("Computer: Paper");
        selection = 2;
    } else {
        console.log("Computer: Scissors");
        selection = 3;
    }
    return selection;
}

function getHumanChoice(human) {
    let hSelection;
    if(human.toLowerCase() == "rock") {
        console.log("Human: Rock");
        return hSelection = human;
    } else if(human.toLowerCase() == "paper") {
        console.log("Human: Paper");
        return hSelection = human;
    } else if(human.toLowerCase() == "scissors") {
        console.log("Human: Scissors");
        return hSelection = human;
    } else {
        console.log("Invalid Answer");
    }
    
}

getComputerChoice(computerChoice);
getHumanChoice(userChoice);

function playRound(human, computer) {
    
}