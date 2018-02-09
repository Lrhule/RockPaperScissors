let pScore = 0;										//setting variables for the player and computer score
let cScore = 0;
let playerScore = document.getElementById("ps")		// grabbing the player score html elements
let computerScore = document.getElementById("cs")

function compSelect() 								// function to select Rock, Paper or Scissors at random
{
  var ranNum = (Math.random() * 10);
  if (ranNum < 3.3) {return 'rock'}
  else if (ranNum < 6.6) {return 'paper'}			// generate number between 1 & 9 and choose result by thirds
  else return 'scissors';
}

function rpsGame(playerInput, compInput) 		// function for the game
{
    if (playerInput == compInput) {$("#res").html("Result: Draw")}; 	//result for a draw 
  switch (playerInput) 
  {
    case 'rock':  								// case for player input = rock
      switch (compInput)
      {
        case 'scissors': $("#res").html("Result: Rock beats Scissors, You Win")  //output for rock vs scissors + increase player score by 1
          pScore++
          break;
        case 'paper': $("#res").html("Result: Paper beats Rock, You Lose")		//output for rock vs paper + increase computer score by 1
          cScore++
          break;
      }
      break;
    case 'scissors': switch (compInput)		//case for player input = scissors
    {
        case 'paper': $("#res").html("Result: Scissors beats Paper, You Win") 	// output for scissors vs paper + increase player score by 1
          pScore++
          break;
        case 'rock': $("#res").html("Result: Rock beats Scissors, You Lose")	//output for scissors vs rock + increase computer score by 1
          cScore++
          break;
    }
      break;
    case 'paper': switch (compInput) 		// case for player input = paper 
    {
        case 'rock': $("#res").html("Result: Paper beats Rock, You Win") 		// output for paper vs rock + increase player score by 1
          pScore++
          break;
        case 'scissors': $("#res").html("Result: Scissors beats Paper, You Lose") 	// output for paper vs scissors + increase computer score by 1
          cScore++
          break;
    }
      break;
  }
   $("#ps").html("Player Score: " + pScore); 		//change content for score elements to match current count 
   $("#cs").html("Computer Score: " + cScore);		//after output 
}



document.getElementById("r").addEventListener("click", () => rpsGame('rock', compSelect()));	//grab click event from player choice and start game function

document.getElementById("p").addEventListener("click", () => rpsGame('paper', compSelect()));	//change argument based on which button is pressed

document.getElementById("s").addEventListener("click", () => rpsGame('scissors', compSelect()));

