// Function to verify if the player has keyed in one of the following inputs: `rock`, `paper`, `scissors`
function verifyChoice(playerChoice)
{
    if (playerChoice === `rock` || playerChoice === `paper` || playerChoice === `scissors`)
    {
        return playerChoice;
    }
    else
    {
        alert(`Choice is not valid!`);
    }
}

// Function that randomly returns the value of one of the elements stored in the hand variable
function computerPlay()
{
    let hand = [`rock`, `paper`, `scissors`];

    let choice = hand[Math.floor(Math.random() * hand.length)];

    return choice;
}

// Function that alerts a win/lose condition based on the two specified parameters
function outcome(playerSelection, computerSelection)
{
    // Creates playerSelectionCapitalized variable that converts the first letter of the string value in playerSelection to upper case
    let playerSelectionCapitalized = playerSelection[0].toUpperCase() + playerSelection.slice(1);

    // Creates computerSelectionCapitalized variable that converts the first letter of the string value in computerSelection to upper case
    let computerSelectionCapitalized = computerSelection[0].toUpperCase() + computerSelection.slice(1);

    if ((playerSelection === `rock` && computerSelection === `scissors`) || (playerSelection === `paper` && computerSelection === `rock`) || (playerSelection === `scissors` && computerSelection === `paper`))
    {
        alert(`You win! ${playerSelectionCapitalized} beats ${computerSelectionCapitalized}.`);
    }
    else if ((computerSelection === `rock` && playerSelection === `scissors`) || (computerSelection === `paper` && playerSelection === `rock`) || (computerSelection === `scissors` && playerSelection === `paper`))
    {
        alert(`You lose! ${computerSelectionCapitalized} beats ${playerSelectionCapitalized}.`);
    }
}

// Function that plays a round of the game
function playRound()
{
    // Creates a playerChoice variable that prompts user to input ONLY one of the three following choices: `Rock`, `Paper`, `Scissors`
    let playerChoice = prompt(`Rock, Paper, or Scissors? (Type one of the aforementioned choices in full)`);

    // Converts value stored in playerChoice variable to lower case, for the purpose of making the value case-insensitive
    playerChoice = playerChoice.toLowerCase();

    // Verifies that the inputted player choice is one of three inputs: `rock`, `paper`, `scissors`
    playerChoice = verifyChoice(playerChoice);

    // Conditional statement that stops the function if inputted player choice is not one of the aforementioned three inputs
    // Otherwise, a round of the game will be played
    if (typeof playerChoice === `undefined`)
    {
        return;
    }
    else
    {
        let computerChoice = computerPlay();

        outcome(playerChoice, computerChoice);
    }
    
}

// Function that runs the game
function game()
{
    // Creates a numberOfRounds variable that is used to specify how many rounds of the game should be played
    let numberOfRounds = 5;

    for (let i = 1; i <= numberOfRounds; i++)
    {
        playRound();
    }
}

// Function call 
game();