"use strict"

const userChoiceEl = document.getElementById("user-choice")
const cpuChoiceEl = document.getElementById("cpu-choice")
const rockEl = document.getElementById("rock-el")
const paperEl = document.getElementById("paper-el")
const scissorsEl = document.getElementById("scissors-el")

// player picks
// cpu randomizes a choice
// function that compares choices and outputs decision

document.addEventListener("click", (e) => {
  const id = e.target.id
  const choice = e.target.dataset.choice

  if (id === "rock-el") {
    userChoiceEl.textContent = choice
    cpuChoiceEl.textContent = cpuChoice()
  }
  if (id === "paper-el") {
    userChoiceEl.textContent = choice
    cpuChoiceEl.textContent = cpuChoice()
  }
  if (id === "scissors-el") {
    userChoiceEl.textContent = choice
    cpuChoiceEl.textContent = cpuChoice()
  }
})

function gameLogic(playerChoice, cpuChoice) {
  // do something
}

function cpuChoice() {
  const options = ["rock", "paper", "scissors"]
  const length = options.length
  return options[randomize(length)]
}

// help function to randomize
function randomize(num) {
  return Math.floor(Math.random() * num)
}

console.log(rockEl.value)
