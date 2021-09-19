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
    return "No Computer Input";
  }
  playerSelection = capitalize(playerSelection);
  if(playerSelection === computerSelection) {
    return "Tie"
  }
  if(playerSelection === "Rock") {
    if(computerSelection === "Paper") {
      return "You Lose! Paper beats Rock."
    }
    else if(computerSelection == "Scissors") {
      return "You win! Rock beats Scissors."
    }
  }
  else if (playerSelection === "Paper") {
    if(computerSelection === "Rock") {
      return "You win! Paper beats Rock.";
    }
    else if(computerSelection === "Scissors"){
      return "You lose! Scissors beats Paper."
    }
  }
  else if(playerSelection === "Scissors") {
    if(computerSelection === "Rock") {
      return "You Lose! Rock beats Scissors.";
    }
    else if(computerSelection === "Paper") {
      return "You win! Scissors beats Paper.";
    }
  }
  else {
    return ("Oops! Not Rock, Paper, or Scissors!" +
    "Please enter Rock, Paper, or Scissors!");
  }
}

function capitalize(string) {
  return string.slice(0,1).toUpperCase() + string.slice(1);
}