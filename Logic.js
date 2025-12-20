function getComputerChoice(){
            const choice = Math.random()
            if (choice <= 0.33){
                return "Rock"
            }else if (choice > 0.33 && choice <= 0.66){
                return "Paper"
            }else { return "Scissors"}
        }

function getHumanChoice(){
    console.log("Press 1 for Rock")
    console.log("Press 2 for Paper")
    console.log("Press 3 for Scissors")
    let choice = prompt("Enter your choice")
    switch (choice){
        case "1":
            return "Rock"
            
        case "2":
            return "Paper"
            
        case "3":
            return "Scissors"
                    
    }

}
function playRound(humanChoice, computerChoice) {
    // Player wins
    if (humanChoice == "Rock" && computerChoice == "Scissors") {
        console.log("Player Wins: Rock beats Scissors!!!!");
        humanScore++;
    } else if (humanChoice == "Paper" && computerChoice == "Rock") {
        console.log("Player Wins: Paper beats Rock!!!!");
         humanScore++;
    } else if (humanChoice == "Scissors" && computerChoice == "Paper") {
        console.log("Player Wins: Scissors beats Paper!!!!");
         humanScore++;
    }
    // Computer wins
    else if (humanChoice == "Rock" && computerChoice == "Paper") {
        console.log("Computer Wins: Paper beats Rock!!!!");
        computerScore++;
    } else if (humanChoice == "Paper" && computerChoice == "Scissors") {
        console.log("Computer Wins: Scissors beats Paper!!!!");
        computerScore++;
    } else if (humanChoice == "Scissors" && computerChoice == "Rock") {
        console.log("Computer Wins: Rock beats Scissors!!!!");
        computerScore++;
    }
    // Ties
    else if (humanChoice == computerChoice) {
        console.log("It's a tie! Both chose " + humanChoice);
    }
}

let humanScore = 0
let computerScore = 0

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();
playRound(humanSelection,computerSelection);