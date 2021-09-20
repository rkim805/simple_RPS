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
    console.log("Tie!");
    retVal = 0;
  }
  if(playerSelection === "Rock") {
    if(computerSelection === "Paper") {
      retVal = -1;
    }
    else if(computerSelection == "Scissors") {
      retVal = 1;
    }
  }
  else if (playerSelection === "Paper") {
    if(computerSelection === "Rock") {
      retVal = 1;
    }
    else if(computerSelection === "Scissors"){
      retVal = -1;
    }
  }
  else if(playerSelection === "Scissors") {
    if(computerSelection === "Rock") {
      retVal = -1;
    }
    else if(computerSelection === "Paper") {
      retVal = 1;
    }
  }
  else {
    return -99;
  }
  console.log(`You chose ${playerSelection}!` + 
    ` The Computer chose ${computerSelection}.`);
  return retVal;
}

function game() {
  console.log("Lets play 5 rounds of Rock, Paper Scissors!");
  let playPrompt;
  let score = {
    playerScore: 0,
    computerScore: 0
  };
  for(let i = 0; i < 5; i++) {
    playPrompt = prompt("Enter Rock, Paper, or Scissors!");
    let result = playRound(playPrompt, computerPlay());
    switch(result) {
      case -1:
        score.computerScore++;
        console.log(`You lose this round! Player Score: ${score.playerScore}` +
         ` vs. Computer Score: ${score.computerScore}`);
        break;
      case 0:
        console.log("Tie!");
        break;
      case 1:
        score.playerScore++;
        console.log(`You win this round! Player Score: ${score.playerScore}` +
         ` vs. Computer Score: ${score.computerScore}`);
        break;
      case -99:
        console.log("Input error -- please make sure you enter Rock, Paper" +
        ", or Scissors");
        i--; //Decrement i since round was not successfully played
    }
  }
  if(score.playerScore > score.computerScore) {
    console.log(`You won overall! Player Score: ${score.playerScore}` +
    ` vs. Computer Score: ${score.computerScore}`);
  }
  else if(score.computerScore > score.playerScore) {
    console.log(`You lost overall! Player Score: ${score.playerScore}` +
    ` vs. Computer Score: ${score.computerScore}`);
  }
  else {
    console.log("Tie! How drab!");
  }
}

function capitalize(string) {
  return string.slice(0,1).toUpperCase() + string.slice(1);
}