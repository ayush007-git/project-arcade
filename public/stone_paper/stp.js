let userScore = 0;
let computerScore = 0;
toggleDarkMode();
const choices = ['rock', 'paper', 'scissors'];
let previousComputerChoice = '';

function play(userChoice) {
  let computerChoice;

  do {
    computerChoice = choices[Math.floor(Math.random() * choices.length)];
  } while (computerChoice === previousComputerChoice);

  previousComputerChoice = computerChoice;

  document.getElementById('user-image').src = getImage(userChoice);
  document.getElementById('computer-image').src = getImage(computerChoice);

  const result = getResult(userChoice, computerChoice);
  document.getElementById('winner').textContent = result;

  if (result === 'You win!') {
    userScore++;
  } else if (result === 'Computer wins!') {
    computerScore++;
  }

  document.getElementById('user-score').textContent = `User: ${userScore}`;
  document.getElementById('computer-score').textContent = `Computer: ${computerScore}`;
}

function getImage(choice) {
  return `\\assets\\${choice}.png`; // Assuming you have images named 'rock.png', 'paper.png', and 'scissors.png'
}

function getResult(userChoice, computerChoice) {
  if (userChoice === computerChoice) {
    return 'It\'s a tie!';
  } else if (
    (userChoice === 'rock' && computerChoice === 'scissors') ||
    (userChoice === 'paper' && computerChoice === 'rock') ||
    (userChoice === 'scissors' && computerChoice === 'paper')
  ) {
    return 'You win!';
  } else {
    return 'Computer wins!';
  }
}

function toggleDarkMode() {
    const body = document.body;
    body.classList.toggle('dark-mode');
  }
  
  document.addEventListener('keydown', function(event) {
    if (event.key === 'd') {
      toggleDarkMode();
    }
  });
  