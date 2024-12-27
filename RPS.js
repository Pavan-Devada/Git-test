const prompt = require("prompt-sync")({ sigint: true });

function winnerChecker(computerChoice, playerChoice) {
    if (computerChoice === playerChoice) {
        console.log("It's a tie");
        return null;
    }
    else if ((computerChoice === "rock" && playerChoice === "paper") || (computerChoice === "paper" && playerChoice === "rock")) {
        return "paper";
    }
    else if ((computerChoice === "rock" && playerChoice === "scissor") || (computerChoice === "scissor" && playerChoice === "rock")) {
        return "rock";
    }
    else if ((computerChoice === "scissor" && playerChoice === "paper") || (computerChoice === "paper" && playerChoice === "scissor")) {
        return "scissor";
    }
}

function pointEvaluator(winnerOption, computerChoice, playerChoice) {
    if (!winnerOption) { return null }
    else if (winnerOption === computerChoice) {
        computerCount++;
    }
    else {
        playerCount++;
    }
    console.log(`PLAYER: ${playerCount} COMPUTER: ${computerCount}`);
}

function playround(computerChoice, playerChoice) {
    console.log(computerChoice, playerChoice);
    let winnerOption = winnerChecker(computerChoice, playerChoice);
    pointEvaluator(winnerOption, computerChoice, playerChoice);
}

function getComputerChoice() {
    return listOptions[Math.floor(Math.random() * 3)];
}

function getPlayerChoice() {
    let playerOption = prompt("Enter your choice: rock, paper, scissor: ").toLowerCase();
    if (!listOptions.includes(playerOption)) {
        console.log("Please enter a valid option");
        playerOption = getPlayerChoice();
    }
    return playerOption;

}

function winnerDisplay() {
    if (playerCount === computerCount) {
        console.log("It's a Draw")
    }
    else if (playerCount > computerCount) {
        console.log("Your are the winner")
    }
    else {
        console.log("The system won")
    }
}

function roundsInput() {
    let n = Number(prompt("Enter number of Rounds: "));
    while (n > 0) {
        let computerSelection = getComputerChoice();
        let playerSelection = getPlayerChoice();
        playround(computerSelection, playerSelection);
        n--;
    }
    winnerDisplay();
}

let listOptions = ["rock", "paper", "scissor"];
let playerCount = 0;
let computerCount = 0;

roundsInput();

