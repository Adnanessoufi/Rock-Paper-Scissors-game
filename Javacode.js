// Rock paper scissors game will be played against the computer.

//Write a getComputerChoice function that randomly returns “rock”, “paper” or “scissors”.
function getComputerChoice(){
   //create an array containing rock paper scissors 
    const MainList = ['rock','paper','scissor'];
   //random choice from that array
    let computerChoiceIndex = Math.floor(Math.random()*MainList.length);
    computerChoice = MainList[computerChoiceIndex]
   //return the random choice
   return computerChoice
}

//Create a 'getHumanChoice' function that takes the user choice and returns it.
function getHumanChoice(){
    //take the user choice by prompting a message and return it
    let userChoice = prompt("choose between rock,paper,scissor").toLocaleLowerCase().trim()
    return userChoice
}


// write variables to keep track of the player and computer score. Set them to 0.
let playerScore = 0
let computerScore = 0

//write a 'playRound' function that evaluate the players choices increments the round winner’s score and announce the winner.
function playRound(playerChoice,computerChoice){
    //when the result will be a tie
    if (playerChoice === computerChoice) {
        console.log(`It's a tie. You both chose ${playerChoice}`)
    // set all cases when it will be a win and increment the score.
    } else if ( (playerChoice === 'rock' && computerChoice ==='scissor') ||
                (playerChoice === 'scissor' && computerChoice ==='paper') ||
                (playerChoice === 'paper' && computerChoice ==='rock')){
        console.log(`You win. ${playerChoice} beats ${computerChoice}`)
        playerScore+=1

                }
    // other cases will be definitely a lost.
    else {
        console.log(`You lost! ${computerChoice} beats ${playerChoice}`)
        computerScore+=1
    }
}

const buttons = document.querySelectorAll('button')
buttons.forEach( button => {
    playerChoice = button.innerText
    button.addEventListener('click',playRound(playerChoice,computerChoice))

})


