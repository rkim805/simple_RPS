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
  display.textContent = (`You chose ${playerSelection}!` + 
    ` The Computer chose ${computerSelection}. `);
  return retVal;
}


score = {
  playerScore: 0,
  computerScore: 0
};

function gameStateUpdate(result) {
  let scoreDisplay = document.querySelector("#score-display");
  switch(result) {
    case "Loss":
      score.computerScore++;
      display.textContent += "You lose this round!";
      break;
    case "Tie":
      display.textContent += "Tie!";
      break;
    case "Win":
      score.playerScore++;
      display.textContent += "You win this round!";
      break;
    default:
      display.textContent = "Input error -- please make sure you enter" +
      "Rock, Paper, or Scissors";
  }

  scoreDisplay.textContent = ` Player Score: ${score.playerScore}` +
  ` vs. Computer Score: ${score.computerScore}`;

  if(score.playerScore === 5 || score.computerScore === 5){
    finalResult = document.querySelector("#final-result");
    document.querySelectorAll("button").forEach(btn => {
      btn.disabled = true;
    })
    if(score.computerScore < score.playerScore) {
      scoreDisplay.textContent = ` Player Score: ${score.playerScore}` +
      ` vs. Computer Score: ${score.computerScore}`;
      finalResult.textContent = "You won the first to 5!";
    }
    else if(score.computerScore > score.playerScore) {
      scoreDisplay.textContent = ` Player Score: ${score.playerScore}` +
      ` vs. Computer Score: ${score.computerScore}`;
      finalResult.textContent = "You lost the first to 5. :(";
    };
  }
}

function capitalize(string) {
  return string.slice(0,1).toUpperCase() + string.slice(1);
}