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
    //when the result will be a tie
    if (playerChoice === computerChoice) {
        div.textContent=`It's a tie. You both chose ${playerChoice}`
    // set all cases when it will be a win and increment the score.
    } else if ( (playerChoice === 'rock' && computerChoice ==='scissor') ||
                (playerChoice === 'scissor' && computerChoice ==='paper') ||
                (playerChoice === 'paper' && computerChoice ==='rock')){
        
        div.textContent = `You win. ${playerChoice} beats ${computerChoice}`
        playerScore+=1
                }
    // other cases will be definitely a lost.
    else {
        div.textContent=`You lost! ${computerChoice} beats ${playerChoice} `
        computerScore+=1
    }

}

// function that handles the click on the button
function func(button){
        let computerChoice = getComputerChoice()
        // get the value of the clicked button
        let playerChoice = button.innerText;
        playRound(playerChoice,computerChoice);
        const text = `Current score: Player ${playerScore} points vs computer ${computerScore} points`
        score.textContent = text
        // handle when the score reaches 5 points. 
        if (playerScore === 5) {
            final.textContent = 'WOOOW YOU WIN!'
            // Way to remove Event Listener
            buttons.forEach(button => {
                button.removeEventListener('click', handleClick);
            });
        } else if (computerScore === 5) {
            final.textContent = 'HEHEHEHE YOU ARE A LOSER!!'
            buttons.forEach(button => {
                button.removeEventListener('click', handleClick);
            });
        }
        
}

// Division to show the result of single play
const div = document.querySelector('.result')
// Show the current score
const score = document.querySelector('.score')
// Division to show the final result
const final = document.querySelector('div')

const buttons = document.querySelectorAll('button')
// Get the choice of the player
buttons.forEach( (button) => {
    button.addEventListener('click',handleClick = ()=>{
        func(button)}
)    
})

