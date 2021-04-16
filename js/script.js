let playerChoice = ``;
let playerScore = 0;
let computerScore = 0;

const noOfRounds = 5;

// Function to verify if the player has keyed in one of the following inputs: `rock`, `paper`, `scissors`
function verifyChoice(playerChoice)
{
    if (playerChoice === `rock` || playerChoice === `paper` || playerChoice === `scissors`)
    {
        return playerChoice;
    }
    else
    {
        return;
    }
}

// Function that randomly returns the value of one of the elements stored in the hand variable
function computerPlay()
{
    let hand = [`rock`, `paper`, `scissors`];

    let choice = hand[Math.floor(Math.random() * hand.length)];

    return choice;
}

// Function that displays the winner who first reaches a score of set by global variable noOfRounds
function displayWinner(playerScore, computerScore)
{
    const h1 = document.querySelector(`header center h1`);

    if (playerScore > computerScore && playerScore === noOfRounds)
    {
        h1.textContent = `Congratulations! You won.`;
    }
    else if (computerScore > playerScore && computerScore === noOfRounds)
    {
        h1.textContent = 'You lost. Better luck next time.';
    }
}

// Function that updates scores
function updateScore(playerScore, computerScore)
{
    const playerScoreDisplay = document.querySelector(`#player-score`);
    const computerScoreDisplay = document.querySelector(`#computer-score`);

    playerScoreDisplay.textContent = playerScore;
    computerScoreDisplay.textContent = computerScore;
}

// Function that alerts a win/lose condition based on the two specified parameters
function outcome(playerSelection, computerSelection)
{
    const h1 = document.querySelector(`header center h1`);

    // Creates playerSelectionCapitalized variable that converts the first letter of the string value in playerSelection to upper case
    let playerSelectionCapitalized = playerSelection[0].toUpperCase() + playerSelection.slice(1);

    // Creates computerSelectionCapitalized variable that converts the first letter of the string value in computerSelection to upper case
    let computerSelectionCapitalized = computerSelection[0].toUpperCase() + computerSelection.slice(1);

    if ((playerSelection === `rock` && computerSelection === `scissors`) || (playerSelection === `paper` && computerSelection === `rock`) || (playerSelection === `scissors` && computerSelection === `paper`))
    {
        playerScore++;

        updateScore(playerScore, computerScore);

        h1.textContent = `You win! ${playerSelectionCapitalized} beats ${computerSelectionCapitalized}.`;
    }
    else if ((computerSelection === `rock` && playerSelection === `scissors`) || (computerSelection === `paper` && playerSelection === `rock`) || (computerSelection === `scissors` && playerSelection === `paper`))
    {
        computerScore++;

        updateScore(playerScore, computerScore);

        h1.textContent = `You lose! ${computerSelectionCapitalized} beats ${playerSelectionCapitalized}.`;
    }

    if (playerScore === noOfRounds || computerScore === noOfRounds)
    {
        displayWinner(playerScore, computerScore);

        playerScore = 0;
        computerScore = 0;
    }
}

// Function that plays a round of the game
function playRound()
{
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

// Function that plays a round of rock paper scissors whenever a button is clicked
function clickButton()
{
    const button = document.querySelectorAll(`button`);

    for (let i = 0; i < button.length; i++)
    {
        button[i].addEventListener(`click`, function()
        {
            playerChoice = button[i][`value`];

            playRound();
        });
    }
}

// Function to load main header
function mainHeader()
{
    const header = document.querySelector(`header center`);
    let h1 = document.createElement(`h1`);

    h1.textContent = `ROCK, PAPER, OR SCISSORS?`;
    header.appendChild(h1);
}

// Function call 
mainHeader();
clickButton();