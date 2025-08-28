function getComputerChoice() {
    let num = Math.random()

    if (num >= 0 && num < 1 / 3) {
        return 'rock'
    } else if (num >= 1 / 3 && num < 2 / 3) {
        return 'paper'
    } else {
        return 'scissors'
    }
}

function getHumanChoice() {
    return prompt('Rock, paper, or scissors?').toLowerCase()
}

let computerScore = 0;
let humanScore = 0;

function playRound(humanChoice, computerChoice) {
    if (humanChoice == 'rock') {

        if (computerChoice == 'paper') {
            computerScore++;
            console.log('You lose! Paper covers rock.')
        } else if (computerChoice == 'scissors') {
            humanScore++;
            console.log('You win! Rock crushes scissors.')
        } else {
            console.log('Tie! Play again.')
        }

    } else if (humanChoice == 'paper') {

        if (computerChoice == 'rock') {
            humanScore++;
            console.log('You win! Paper covers rock.')
        } else if (computerChoice == 'scissors') {
            computerScore++;
            console.log('You lose! Scissors cut paper.')
        } else {
            console.log('Tie! Play again.')
        }

    } else if (humanChoice == 'scissors') {
        if (computerChoice == 'paper') {
            humanScore++;
            console.log('You win! Scissors cuts paper.')
        } else if (computerChoice == 'rock') {
            computerScore++;
            console.log('You lose! Rock crushes scissors.')
        } else {
            console.log('Tie! Play again.')
        }
    }
}

function playGame() {

    while (humanScore < 3 && computerScore < 3) {
        playRound(getHumanChoice(), getComputerChoice())
    }

    if (humanScore > computerScore) {
        console.log('WINNER!')
    } else {
        console.log('You lose :(')
    }
}

playGame()