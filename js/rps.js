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
  if(computerSelection == null) {
    return "Error: Computer input";
  }
  playerSelection = capitalize(playerSelection);
  if(playerSelection === computerSelection) {
    return 0;
  }
  if(playerSelection === "Rock") {
    if(computerSelection === "Paper") {
      return -1;
    }
    else if(computerSelection == "Scissors") {
      return 1;
    }
  }
  else if (playerSelection === "Paper") {
    if(computerSelection === "Rock") {
      return 1;
    }
    else if(computerSelection === "Scissors"){
      return -1;
    }
  }
  else if(playerSelection === "Scissors") {
    if(computerSelection === "Rock") {
      return -1;
    }
    else if(computerSelection === "Paper") {
      return 1;
    }
  }
  else {
    return "Error: Player input";
  }
}

function game() {
  for(let i = 0; i < 5; i++) {
  }
}

function capitalize(string) {
  return string.slice(0,1).toUpperCase() + string.slice(1);
}