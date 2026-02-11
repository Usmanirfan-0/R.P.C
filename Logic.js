function getComputerChoice(){
    const choice = Math.random();
    if (choice <= 0.33) return "Rock";
    if (choice <= 0.66) return "Paper";
    return "Scissors";
}

let humanScore = 0;
let computerScore = 0;

function updateUI(message){
    const msgEl = document.querySelector('#message');
    const scoreEl = document.querySelector('#score');
    if (msgEl) msgEl.textContent = message;
    if (scoreEl) scoreEl.textContent = `Player: ${humanScore} — Computer: ${computerScore}`;
}

function endGame(finalMessage){
    updateUI(finalMessage);
    document.querySelector('#rock').disabled = true;
    document.querySelector('#paper').disabled = true;
    document.querySelector('#scissors').disabled = true;
}

function playRound(humanChoice){
    const computerChoice = getComputerChoice();
    let message = '';

    if (humanChoice === computerChoice) {
        message = `It's a tie! Both chose ${humanChoice}.`;
    } else if (
        (humanChoice === 'Rock' && computerChoice === 'Scissors') ||
        (humanChoice === 'Paper' && computerChoice === 'Rock') ||
        (humanChoice === 'Scissors' && computerChoice === 'Paper')
    ){
        humanScore++;
        message = `Player Wins: ${humanChoice} beats ${computerChoice}!`;
    } else {
        computerScore++;
        message = `Computer Wins: ${computerChoice} beats ${humanChoice}!`;
    }

    updateUI(message);

    if (humanScore >= 5) {
        endGame('Game Over — Player wins the match!');
    } else if (computerScore >= 5) {
        endGame('Game Over — Computer wins the match!');
    }
}

function resetGame() {
    humanScore = 0;
    computerScore = 0;
    document.querySelector('#rock').disabled = false;
    document.querySelector('#paper').disabled = false;
    document.querySelector('#scissors').disabled = false;
    updateUI('Game reset! Make your move!');
}

document.querySelector('#rock').addEventListener('click', () => playRound('Rock'));
document.querySelector('#paper').addEventListener('click', () => playRound('Paper'));
document.querySelector('#scissors').addEventListener('click', () => playRound('Scissors'));

updateUI('Make your move!');
document.querySelector('#reset').addEventListener('click', resetGame);