let playerScore = 0;
let computerScore = 0;


const CHOICES = ['rock','paper','scissors'];



function getCapitalizedWord(word){
    word = word[0].toUpperCase() + word.slice(1).toLowerCase();
    return word;
}

function getComputerChoice(){
    const choiceIndex = Math.floor(Math.random()*3);

    return CHOICES[choiceIndex];
}

function getPlayerChoice(){
    const playerSelection = prompt('Please choose rock/paper/scissors:').toLowerCase();
    console.log(playerSelection);
    if(CHOICES.includes(playerSelection)) return playerSelection;

    alert('Not valid, try again!')
    return getPlayerChoice();
}




function playRound(playerSelection,computerSelection){

    playerSelection = getCapitalizedWord(playerSelection);
    computerSelection = getCapitalizedWord(computerSelection);

    const winMessage = `You Win! ${playerSelection} beats ${computerSelection}`;
    const lostMessage = `You Lose! ${computerSelection} beats ${playerSelection}`;
    const tieMessage = `It's a tie!`;
    
    if(playerSelection === computerSelection) return tieMessage;

    if(playerSelection === 'Rock' && computerSelection === 'Scissors' || playerSelection === 'Paper' && computerSelection === 'Rock' || playerSelection === 'Scissors' && computerSelection === 'Paper') 
        {
            playerScore++; 
            return winMessage; 
        }
    

    if(computerSelection === 'Rock' && playerSelection === 'Scissors' || computerSelection === 'Paper' && playerSelection === 'Rock' || computerSelection === 'Scissors' && playerSelection === 'Paper') 
        {
            computerScore++; 
            return lostMessage; 
        }
   



} // not so good way to determine if you win or lose, but works for this purpose


function playGame(roundNumber){
    const playerSelection = getPlayerChoice(); 
    const computerSelection = getComputerChoice(); 
    const roundWinnerMessage = playRound(playerSelection,computerSelection);

    alert(`
        round ${roundNumber}/5
        ${roundWinnerMessage}
        player score: ${playerScore}
        computer score: ${computerScore}
    `)
}

for(let i=0;i<5;i++){
    playGame(i+1); 
}

playerScore > computerScore ?
    alert('Player wins out of 5 rounds')
: playerScore < computerScore ?
    alert('Computer wins out of 5 rounds')
:   alert(`It's a tie out of 5 rounds`); //tenary operator, to determine a winner




