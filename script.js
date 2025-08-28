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

const results = document.getElementById('results');

function playRound(humanChoice, computerChoice) {

    console.log(humanChoice)
    let outcome = document.createElement('p');

    if (humanChoice == 'rock') {
        if (computerChoice == 'paper') {
            computerScore++;
            outcome.textContent = `You lose! Paper covers rock You: ${humanScore} Computer: ${computerScore}`
        } else if (computerChoice == 'scissors') {
            humanScore++;
            outcome.textContent = `You win! Rock crushes scissors. You: ${humanScore} Computer: ${computerScore}`
        } else {
            outcome.textContent = 'Tie! Play again.'
        }

    } else if (humanChoice == 'paper') {

        if (computerChoice == 'rock') {
            humanScore++;
            outcome.textContent = `You win! Paper covers rock. You: ${humanScore} Computer: ${computerScore}`
        } else if (computerChoice == 'scissors') {
            computerScore++;
            outcome.textContent = `You lose! Scissors cut paper. You: ${humanScore} Computer: ${computerScore}`
        } else {
            outcome.textContent = 'Tie! Play again.'
        }

    } else if (humanChoice == 'scissors') {
        if (computerChoice == 'paper') {
            humanScore++;
            outcome.textContent = `You win! Scissors cuts paper. You: ${humanScore} Computer: ${computerScore}`
        } else if (computerChoice == 'rock') {
            computerScore++;
            outcome.textContent = `You lose! Rock crushes scissors. You: ${humanScore} Computer: ${computerScore}`
        } else {
            outcome.textContent = 'Tie! Play again.'
        }
    }

    results.appendChild(outcome)

    if (computerScore == 5) {
        let winner = document.createElement('p')
        winner.textContent = 'Computer wins!'
        results.appendChild(winner)
        computerScore = 0;
        humanScore = 0;
    } else if (humanScore == 5) {
        let winner = document.createElement('p')
        winner.textContent = 'You win!'
        results.appendChild(winner)
        computerScore = 0;
        humanScore = 0;
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

const buttons = document.querySelectorAll('button')

buttons.forEach((button) => {
    button.addEventListener('click', (e) => {
        playRound(e.target.id, getComputerChoice())
    })
})