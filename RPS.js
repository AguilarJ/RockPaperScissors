humanScore = 0;
computerScore = 0;
function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }
    
//Logic to get computer's choice
function getComputerChoice(){
    compChoice=getRandomInt(3);
    var computerChoice = null;
    if(compChoice == 0){
        computerChoice = "rock";
    }
    else if(compChoice == 1){
        computerChoice = "paper";
    }
    else if(compChoice == 2){
        computerChoice = "scissors";
    }
    return computerChoice;
};

//Logic to get human's choice
function getHumanChoice(){
var hChoice = prompt("Rock, Paper or Scissors?")
var humanChoice = null;
if (hChoice.toLowerCase() == "rock"){
    humanChoice = "rock";
}
else if (hChoice.toLowerCase() == "paper"){
    humanChoice = "paper";
}
else if (hChoice.toLowerCase() == "scissors"){
    humanChoice = "scissors";
}
return humanChoice;
};


function bothChoices(humanChoice, computerChoice){
 
    console.log("Your choice: " + humanChoice);
    console.log("Computer choice: " + computerChoice);
}
function getScore(humanScore, computerScore){
    console.log("Your score: " + humanScore, "Computer Score: " + computerScore);
}

function playRound() {
    const humanChoice = getHumanChoice();  // Get new human choice
    const computerChoice = getComputerChoice();  // Get new computer choice
    bothChoices(humanChoice, computerChoice);
  
    if(humanChoice == computerChoice){
    console.log("It's a tie");
    }
    else if(humanChoice == "rock" && computerChoice == "scissors"){
        console.log("You won! Rock beats Scissors");
        humanScore++;
    }
    else if(humanChoice == "paper" && computerChoice == "rock"){
        console.log("You won! Paper beats Rock");
        humanScore++;
    }
    else if(humanChoice == "scissors" && computerChoice == "paper"){
        console.log("You won! Scissors beats Paper");
        humanScore++;
    }
    else if(humanChoice == "scissors" && computerChoice == "rock"){
        console.log("You lost! Rock beats Scissors");
        computerScore++;
    }
    else if(humanChoice == "paper" && computerChoice == "scissors"){
        console.log("You lost! Scissors beats Paper");
        computerScore++;
    }
    else if(humanChoice == "rock" && computerChoice == "paper"){
        console.log("You lost! Paper beats Rock");
        computerScore++;
    }
    else{
        "error";
    }
    
  }
  
  function playGame(){
  
      for(i=0; i<5 ; i++){  
    playRound();
    getScore(humanScore, computerScore);
      }
      if(humanScore > computerScore){
          console.log("You won the game!  " )
      }
       else if( humanScore < computerScore){
          console.log("You lost the game! Get better!")
      }
      else{
          console.log("You tied the game!")
      }
  }

playGame();

