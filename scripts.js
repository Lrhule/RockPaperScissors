let pScore = 0;
let cScore = 0;
let playerScore = document.getElementById("ps")
let computerScore = document.getElementById("cs")

function compSelect() 
{
  var ranNum = (Math.random() * 10);
  if (ranNum < 3.3) {return 'rock'}
  else if (ranNum < 6.6) {return 'paper'}
  else return 'scissors';
}

function rpsGame(playerInput, compInput) 
{
  playerInput = playerInput.toLowerCase();
  if (playerInput == compInput) {$("#res").html("Result: Draw")};
  switch (playerInput) 
  {
    case 'rock':
      switch (compInput)
      {
        case 'scissors': $("#res").html("Result: Rock beats Scissors, You Win")
          pScore++
          break;
        case 'paper': $("#res").html("Result: Paper beats Rock, You Lose")
          cScore++
          break;
      }
      break;
    case 'scissors': switch (compInput)
    {
        case 'paper': $("#res").html("Result: Scissors beat Paper, You Win")
          pScore++
          break;
        case 'rock': $("#res").html("Result: Rock beats Scissors, You Lose")
          cScore++
          break;
    }
      break;
    case 'paper': switch (compInput)
    {
        case 'rock': $("#res").html("Result: Paper beats Rock, You Win")
          pScore++
          break;
        case 'scissors': $("#res").html("Result: Scissors beat Paper, You Lose")
          cScore++
          break;
    }
      break;
  }
   $("#ps").html("Player Score: " + pScore);
   $("#cs").html("Computer Score: " + cScore);
}



document.getElementById("r").addEventListener("click", () => rpsGame('rock', compSelect()));

document.getElementById("p").addEventListener("click", () => rpsGame('paper', compSelect()));

document.getElementById("s").addEventListener("click", () => rpsGame('scissors', compSelect()));

