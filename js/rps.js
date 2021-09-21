function computerPlay() {
  let randomNum = Math.random();
  if(randomNum < (1/3)) {
    return "Rock";
  }
  else if (randomNum < (2/3)) {
    return "Paper";
  }
  else {
    return "Scissors";
  }
}


function playRound(playerSelection, computerSelection) {
  let retVal;
  if(computerSelection == null) {
    return "Error: Computer input";
  }
  playerSelection = capitalize(playerSelection);
  if(playerSelection === computerSelection) {
    retVal = "Tie";
  }
  if(playerSelection === "Rock") {
    if(computerSelection === "Paper") {
      retVal = "Loss";
    }
    else if(computerSelection == "Scissors") {
      retVal = "Win";
    }
  }
  else if (playerSelection === "Paper") {
    if(computerSelection === "Rock") {
      retVal = "Win";
    }
    else if(computerSelection === "Scissors"){
      retVal = "Loss";
    }
  }
  else if(playerSelection === "Scissors") {
    if(computerSelection === "Rock") {
      retVal = "Loss";
    }
    else if(computerSelection === "Paper") {
      retVal = "Win";
    }
  }
  else {
    return "Error: Player input";
  }
  console.log(`You chose ${playerSelection}!` + 
    ` The Computer chose ${computerSelection}.`);
  return retVal;
}


score = {
  playerScore: 0,
  computerScore: 0
};

function gameStateUpdate(result) {
  switch(result) {
    case "Loss":
      score.computerScore++;
      console.log(`You lose this round! Player Score: ${score.playerScore}` +
       ` vs. Computer Score: ${score.computerScore}`);
      break;
    case "Tie":
      console.log("Tie!");
      break;
    case "Win":
      score.playerScore++;
      console.log(`You win this round! Player Score: ${score.playerScore}` +
       ` vs. Computer Score: ${score.computerScore}`);
      break;
    default:
      console.log("Input error -- please make sure you enter Rock, Paper" +
      ", or Scissors");
  }
}

const rockBtn = document.querySelector('#rock');
const paperBtn = document.querySelector('#paper');
const scissorsBtn = document.querySelector('#scissors');

rockBtn.addEventListener('click', () => {
  let result = playRound("rock", computerPlay());
  gameStateUpdate(result);
});

paperBtn.addEventListener('click', () => {
  let result = playRound("paper", computerPlay());
  gameStateUpdate(result);
});

scissorsBtn.addEventListener('click', () => {
  let result = playRound("scissors", computerPlay());
  gameStateUpdate(result);
});



function capitalize(string) {
  return string.slice(0,1).toUpperCase() + string.slice(1);
}