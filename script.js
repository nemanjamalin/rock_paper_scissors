function getComputerChoice(){
    const choices = ['rock','paper','scissors'];
    const choiceIndex = Math.floor(Math.random()*3);

    return choices[choiceIndex];
} // basically we have an array with choices, then we generate random number from 0 - 2
// then we return item from choices with random number generated as index of choices

// console.log(getComputerChoice()); tested if computer choice works


