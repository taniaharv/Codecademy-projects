let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:

function generateTarget(min, max) {
    min = 0;
    max = 10;
    return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
  };

function compareGuesses(currentHumanGuess, computerGuess, target) {
    if (Math.abs(currentHumanGuess - target) <= Math.abs(computerGuess - target)) {
        return true
    } else {
        return false
    }
};

function updateScore(winner) {
    if (winner = 'human') {
        humanScore = humanScore + 1
    } else {
        computerScore = computerScore + 1
    }
};

function advanceRound() {
    currentRoundNumber = currentRoundNumber + 1
};
    
function difference(a, b) {
  return Math.abs(a - b);
}