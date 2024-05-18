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


//write a 'playGame' function that plays 5 rounds declares a winner at the end.
function playGame(){
    for(let i = 0; i<5; i++){
        //in each loop, get both player and computer choices and evaluate them using playRound fct.
        playerChoice = getHumanChoice()
        computerChoice = getComputerChoice()
        playRound(playerChoice,computerChoice)
        console.log(`Current score: Player ${playerScore} points vs Computer ${computerScore} points`)
    }
    //Compare between the scores and give the result.
    if (playerScore === computerScore)
        console.log(`It's a tie`)
    else if (playerScore > computerScore)
        console.log(`Congratulations. You Win`)
    else console.log(`unfortunately. You lose`)
}

playGame()


