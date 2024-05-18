// Rock paper scissors game will be played against the computer.

//Write a getComputerChoice function that randomly returns “rock”, “paper” or “scissors”.
function getComputerChoice(){
   //create an array containing rock paper scissors 
    const Main_list = ['rock','paper','scissors'];
   //random choice from that array
    let computer_choice_index = Math.floor(Math.random()*Main_list.length);
    computer_choice = Main_list[choice_index]
   //return the random choice
   return computer_choice
}

//Create a getHumanChoice function that takes the user choice and returns it.
function getHumanChoice(){
    //take the user choice by prompting a message and return it
    let user_choice = prompt("choose between rock,paper,scissor").toLocaleLowerCase().trim()
    return user_choice
}


