"use strict";
const player0El=document.getElementById(".player--0");
const player1El=document.getElementById(".player--1");
const score0El = document.getElementById("score--0");
const score1El = document.getElementById("score--1");
const scorePlayer0 = document.getElementById("current--0");
const scorePlayer1 = document.getElementById("current--1");
const diceEl = document.querySelector(".dice");
const btnNew = document.querySelector(".btn--new");
const btnRollDice = document.querySelector(".btn--roll");
const btnHold = document.querySelector(".btn--hold");

// inital score of player
score0El.textContent = 0;
score1El.textContent = 0;
diceEl.classList.add("hidden");

// current score
let cScore = 0;

// playe
let activePlayer = 0;

// score of individual player
const scores = [0, 0];

// button roll
btnRollDice.addEventListener("click", function () {
  // role a dice
  const dice = Math.trunc(Math.random() * 6) + 1;

  //display a dice
  diceEl.classList.remove("hidden");
  diceEl.src = `dice-${dice}.png`;

  // check dice number
  if (dice !== 1) {
    // add a score as dice number
    cScore += dice;
    document.getElementById(`current--${activePlayer}`).textContent = cScore;
  } else {
    document.getElementById(`current--${activePlayer}`).textContent = 0;
    cScore = 0;
    activePlayer = activePlayer === 0 ? 1 : 0;
    player0El.classList.toggle('player--active');
    player1El.classList.toggle('player--active');
  }
});
