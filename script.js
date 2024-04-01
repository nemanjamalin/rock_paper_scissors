let playerScore = 0;
let computerScore = 0;

function getComputerChoice(){
    const choices = ['rock','paper','scissors'];
    const choiceIndex = Math.floor(Math.random()*3);

    return choices[choiceIndex];
} // basically we have an array with choices, then we generate random number from 0 - 2
// then we return item from choices with random number generated as index of choices

// console.log(getComputerChoice()); tested if computer choice works


function playRound(playerSelection,computerSelection){

    playerSelection = playerSelection[0].toUpperCase() + playerSelection.slice(1).toLowerCase();
    computerSelection = computerSelection[0].toUpperCase() + computerSelection.slice(1).toLowerCase();;

    const winMessage = `You Win! ${playerSelection} beats ${computerSelection}`;
    const lostMessage = `You Lose! ${computerSelection} beats ${playerSelection}`;
    const tieMessage = `It's a tie!`;
    
    if(playerSelection === computerSelection) return tieMessage;

    if(playerSelection === 'Rock' && computerSelection === 'Scissors' || playerSelection === 'Paper' && computerSelection === 'Rock' || playerSelection === 'Scissors' && computerSelection === 'Paper') 
        {
            playerScore++; //increment players score
            return winMessage; //return message
        }
    

    if(computerSelection === 'Rock' && playerSelection === 'Scissors' || computerSelection === 'Paper' && playerSelection === 'Rock' || computerSelection === 'Scissors' && playerSelection === 'Paper') 
        {
            computerScore++; //increment computers score
            return lostMessage; //return message
        }
   



} // not so good way to determine if you win or lose, but works for this purpose


const playerSelection = prompt('Write your choice:');
const computerSelection = getComputerChoice();

console.log(playRound(playerSelection,computerSelection));
console.log('player score:',playerScore);
console.log('computer score:',computerScore);


