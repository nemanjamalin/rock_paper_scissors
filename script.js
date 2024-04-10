//VARIABLES

let playerScore = 0;
let computerScore = 0;
let roundNumber = 1;
const computerCHOICES = ['rock','paper','scissors'];

const choices = document.querySelector('.choices');

const logs = document.querySelector('.logs');

const restart = document.querySelector('button');


//EVENT LISTENERS
choices.addEventListener('click', function(e){
    const element = e.target;
    const choice = element.dataset.choice;
    
    if(playerScore === 5 || computerScore === 5) 
    {
        return;
    }
    playGame(choice);
});


restart.addEventListener('click', innit);


//FUNCTIONS

function innit(){
    playerScore = 0;
    computerScore = 0;
    playerSelection = "";
    roundNumber = 1;

    logs.innerHTML = '';
}

function getCapitalizedWord(word){
    word = word[0].toUpperCase() + word.slice(1).toLowerCase();
    return word;
}

function getComputerChoice(){
    const choiceIndex = Math.floor(Math.random()*3);

    return computerCHOICES[choiceIndex];
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


function playGame(playerChoice){

    const playerSelection = playerChoice; 
    const computerSelection = getComputerChoice(); 
    const roundWinnerMessage = playRound(playerSelection,computerSelection); 
    //function call, determines who wins, returns the according message;

  
        logs.innerHTML=`
        round ${roundNumber}/5 <br>
        ${roundWinnerMessage} <br>
        player score: ${playerScore} <br>
        computer score: ${computerScore} <br>
        `
        logs.innerHTML+='<br>';

        logs.innerHTML += playerScore === 5 ? `You win` 
        : computerScore === 5 ? 'Computer wins' : '';

        roundNumber++;
        // playerScore > computerScore ?
        // logs.innerHTML += 'Player wins out of 5 rounds'
        // : playerScore < computerScore ?
        // logs.innerHTML+='Computer wins out of 5 rounds'
        // :  
        // logs.innerHTML +=`It's a tie out of 5 rounds` //tenary operator, to determine a winner
      
}













