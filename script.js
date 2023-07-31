const GAME_ROUNDS = 5
let currentRound = GAME_ROUNDS

const userChoiceEl = document.getElementById("user-choice")
const cpuChoiceEl = document.getElementById("cpu-choice")
const rockEl = document.getElementById("rock-el")
const paperEl = document.getElementById("paper-el")
const scissorsEl = document.getElementById("scissors-el")
const playerScoreEl = document.getElementById("player-score")
const cpuScoreEl = document.getElementById("cpu-score")
const commentaryEl = document.getElementById("commentary-el")

let playerScore = 0
let cpuScore = 0

// player clicks - chooses , refence choice to playerChoice

document.addEventListener("click", (e) => {
  const id = e.target.id
  const playerChoice = e.target.dataset.choice
  const cpuChoice = getCpuChoice()

  if (id === "rock-el") {
    userChoiceEl.textContent = playerChoice
    cpuChoiceEl.textContent = cpuChoice
    game(playerChoice, cpuChoice)
  }
  if (id === "paper-el") {
    userChoiceEl.textContent = playerChoice
    cpuChoiceEl.textContent = cpuChoice
    game(playerChoice, cpuChoice)
  }
  if (id === "scissors-el") {
    userChoiceEl.textContent = playerChoice
    cpuChoiceEl.textContent = cpuChoice
    game(playerChoice, cpuChoice)
  }
})

function game(playerChoice, cpuChoice) {
  if (playerChoice === "rock" && cpuChoice === "scissors") {
    playerScore += 1
    commentaryEl.textContent = "Player Wins"
  } else if (playerChoice === "rock" && cpuChoice === "paper") {
    cpuScore += 1
    commentaryEl.textContent = "CPU Wins"
  } else {
    commentaryEl.textContent = "Draw"
  }

  if (playerChoice === "paper" && cpuChoice === "rock") {
    playerScore += 1
    commentaryEl.textContent = "Player Wins"
  } else if (playerChoice === "paper" && cpuChoice === "scissors") {
    cpuScore += 1
    commentaryEl.textContent = "CPU Wins"
  } else {
    commentaryEl.textContent = "Draw"
  }

  if (playerChoice === "scissors" && cpuChoice === "paper") {
    playerScore += 1
    commentaryEl.textContent = "Player Wins"
  } else if (playerChoice === "scissors" && cpuChoice === "rock") {
    cpuScore += 1
    commentaryEl.textContent = "CPU Wins"
  } else {
    commentaryEl.textContent = "Draw"
  }

  playerScoreEl.textContent = playerScore
  cpuScoreEl.textContent = cpuScore
  currentRound -= 1
}

function getCpuChoice() {
  const options = ["rock", "paper", "scissors"]
  const length = options.length
  return options[randomize(length)]
}

// help function to randomize
function randomize(num) {
  return Math.floor(Math.random() * num)
}

function playRound() {
  // code here
}
