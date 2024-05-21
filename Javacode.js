// Rock paper scissors game will be played against the computer.

//Write a getComputerChoice function that randomly returns “rock”, “paper” or “scissors”.
function getComputerChoice(){
   //create an array containing rock paper scissors 
    const MainList = ['rock','paper','scissor'];
   //random choice from that array
    let computerChoiceIndex = Math.floor(Math.random()*MainList.length);
    let computerChoice = MainList[computerChoiceIndex]
   //return the random choice
   return computerChoice
}

// write variables to keep track of the player and computer score. Set them to 0.
let playerScore = 0
let computerScore = 0

//write a 'playRound' function that evaluate the players choices increments the round winner’s score and announce the winner.
function playRound(playerChoice,computerChoice){
    const div = document.querySelector('div')
    //when the result will be a tie
    if (playerChoice === computerChoice) {
        div.textContent=`It's a tie. You both chose ${playerChoice}`
    // set all cases when it will be a win and increment the score.
    } else if ( (playerChoice === 'rock' && computerChoice ==='scissor') ||
                (playerChoice === 'scissor' && computerChoice ==='paper') ||
                (playerChoice === 'paper' && computerChoice ==='rock')){
        div.textContent=`You win. ${playerChoice} beats ${computerChoice}`
        playerScore+=1

                }
    // other cases will be definitely a lost.
    else {
        div.textContent=`You lost! ${computerChoice} beats ${playerChoice})`
        computerScore+=1
    }
}

const buttons = document.querySelectorAll('button')


buttons.forEach( (button) => {
    button.addEventListener('click', () => {
        let computerChoice = getComputerChoice()
        let playerChoice = button.innerText;
        playRound(playerChoice,computerChoice)}
    )
})



