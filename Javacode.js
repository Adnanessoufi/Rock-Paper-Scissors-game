// Rock paper scissors game will be played against the computer.

//Write a getComputerChoice function that randomly returns “rock”, “paper” or “scissors”.
function getComputerChoice(){
   //create an array containing rock paper scissors 
    const Main_list = ['rock','paper','scissors'];
   //random choice from that array
    let choice_index = Math.floor(Math.random()*Main_list.length);
    choice = Main_list[choice_index]
   //return the random choice
   return choice
}

