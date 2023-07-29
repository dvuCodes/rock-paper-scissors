"use strict"

const userChoiceEl = document.getElementById("user-choice")
const cpuChoiceEl = document.getElementById("cpu-choice")
const rockEl = document.getElementById("rock-el")
const paperEl = document.getElementById("paper-el")
const scissorsEl = document.getElementById("scissors-el")
const playerScoreEl = document.getElementById("player-score")
const cpuScoreEl = document.getElementById("cpu-score")
const commentaryEl = document.getElementById("commentary-el")

// player picks
// cpu randomizes a choice
// function that compares choices and outputs decision

document.addEventListener("click", (e) => {
  const id = e.target.id
  const playerChoice = e.target.dataset.choice
  const cpuChoice = getCpuChoice()

  if (id === "rock-el") {
    userChoiceEl.textContent = playerChoice
    cpuChoiceEl.textContent = cpuChoice
    gameLogic(playerChoice, cpuChoice)
  }
  if (id === "paper-el") {
    userChoiceEl.textContent = playerChoice
    cpuChoiceEl.textContent = cpuChoice
  }
  if (id === "scissors-el") {
    userChoiceEl.textContent = playerChoice
    cpuChoiceEl.textContent = cpuChoice
  }
})

function gameLogic(playerChoice, cpuChoice) {
  const playerScore = 0
  const cpuScore = 0

  if (playerChoice === "rock") {
    if (cpuChoice === "scissors") {
      playerScore += 1
      playerScoreEl.textContent = playerScore
      commentaryEl.textContent = "Player Wins"
    } else if (cpuChoice === "paper") {
      cpuScore += 1
      cpuChoiceEl.textContent = cpuScore
      commentaryEl.textContent = "CPU Wins"
    }
  }
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

console.log(rockEl.value)
