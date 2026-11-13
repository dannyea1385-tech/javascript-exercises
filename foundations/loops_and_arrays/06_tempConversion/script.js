
// 1. Seleccionamos los botones de la interfaz
const rockBtn = document.querySelector('#rock');
const paperBtn = document.querySelector('#paper');
const scissorsBtn = document.querySelector('#scissors');

// 2. Les agregamos un escuchador de eventos para el clic
rockBtn.addEventListener('click', () => {
  playRound('rock', getComputerChoice());
});

paperBtn.addEventListener('click', () => {
  playRound('paper', getComputerChoice());
});

scissorsBtn.addEventListener('click', () => {
  playRound('scissors', getComputerChoice());
});
// Variables de puntuación
let playerScore = 0;
let computerScore = 0;

// Función para que la computadora elija aleatoriamente
function getComputerChoice() {
  const choices = ['rock', 'paper', 'scissors'];
  const randomIndex = Math.floor(Math.random() * choices.length);
  return choices[randomIndex];
}

// Función que juega una ronda y actualiza la interfaz
function playRound(playerSelection, computerSelection) {
  const roundResult = document.querySelector('#round-result');
  const playerScoreSpan = document.querySelector('#player-score');
  const computerScoreSpan = document.querySelector('#computer-score');

  // Si ya alguien ganó 5 puntos, no dejar seguir jugando
  if (playerScore >= 5 || computerScore >= 5) {
    return;
  }

  let resultMessage = "";

  if (playerSelection === computerSelection) {
    resultMessage = `¡Empate! Ambos eligieron ${playerSelection}.`;
  } else if (
    (playerSelection === 'rock' && computerSelection === 'scissors') ||
    (playerSelection === 'paper' && computerSelection === 'rock') ||
    (playerSelection === 'scissors' && computerSelection === 'paper')
  ) {
    playerScore++;
    resultMessage = `¡Ganaste esta ronda! ${playerSelection} vence a ${computerSelection}.`;
  } else {
    computerScore++;
    resultMessage = `¡Perdiste esta ronda! ${computerSelection} vence a ${playerSelection}.`;
  }

  // Actualizar los textos en pantalla
  roundResult.textContent = resultMessage;
  playerScoreSpan.textContent = playerScore;
  computerScoreSpan.textContent = computerScore;

  // Comprobar si alguien llegó a 5 puntos
  if (playerScore === 5) {
    roundResult.textContent = "¡Felicidades! ¡Ganaste el juego al llegar a 5 puntos! 🏆";
  } else if (computerScore === 5) {
    roundResult.textContent = "¡La computadora ganó el juego con 5 puntos! Inténtalo de nuevo. 🤖";
  }
}
