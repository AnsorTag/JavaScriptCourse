'use strict';

// Selecting elements

const playerElement0 = document.querySelector(`.player--0`);
const playerElement1 = document.querySelector(`.player--1`);
const scoreElement0 = document.getElementById(`score--0`);
const scoreElement1 = document.getElementById(`score--1`);
const currentScoreElement0 = document.getElementById(`current--0`);
const currentScoreElement1 = document.getElementById(`current--1`);

const diceElement = document.querySelector(`.dice`);
const newGameButton = document.querySelector(`.btn--new`);
const rollDiceButton = document.querySelector(`.btn--roll`);
const holdButton = document.querySelector(`.btn--hold`);

let scores, currentScore, activePlayer, playing;

const restarter = function () {
  scores = [0, 0];
  currentScore = 0;
  activePlayer = 0;
  playing = true;

  const scoreElements = document.querySelectorAll(`.score`);
  for (let i = 0; i < scoreElements.length; i++) {
    scoreElements[i].textContent = 0;
  }

  const currentScoreElements = document.querySelectorAll(`.current-score`);
  for (let i = 0; i < currentScoreElements.length; i++) {
    currentScoreElements[i].textContent = 0;
  }

  const playerElements = document.querySelectorAll(`.player`);
  for (let i = 0; i < playerElements.length; i++) {
    playerElements[i].classList.remove(`player--winner`);
    playerElements[i].classList.remove(`player--active`);
  }

  document.querySelector(`.player--0`).classList.add(`player--active`);

  // USING CALLED VARIABLES

  // scoreElement0.textContent = 0;
  // scoreElement1.textContent = 0;

  // currentScoreElement0.textContent = 0;
  // currentScoreElement1.textContent = 0;

  // playerElement0.classList.remove(`player--winner`);
  // playerElement1.classList.remove(`player--winner`);

  // playerElement0.classList.remove(`player--active`);
  // playerElement1.classList.remove(`player--active`);

  // playerElement0.classList.add(`player--active`);

  // diceElement.classList.add(`hidden`);
};

restarter();

// Starter conditions

scoreElement0.textContent = 0;
scoreElement1.textContent = 0;
diceElement.classList.add(`hidden`);

// Switch Player function

const switchPlayer = function () {
  document.getElementById(`current--${activePlayer}`).textContent = 0;

  activePlayer = activePlayer === 0 ? 1 : 0;
  currentScore = 0;

  playerElement0.classList.toggle(`player--active`);
  playerElement1.classList.toggle(`player--active`);
};

// Die rolling

rollDiceButton.addEventListener(`click`, function () {
  if (playing) {
    //generate the number

    const diceNumber = Math.trunc(Math.random() * 6) + 1;

    diceElement.classList.remove(`hidden`);

    diceElement.src = `dice-${diceNumber}.png`;

    //check if the number is one

    if (diceNumber !== 1) {
      currentScore += diceNumber;

      document.getElementById(`current--${activePlayer}`).textContent =
        currentScore;
    } else {
      switchPlayer();
    }
  }
});

holdButton.addEventListener(`click`, function () {
  if (playing) {
    scores[activePlayer] += currentScore;

    document.getElementById(`score--${activePlayer}`).textContent =
      scores[activePlayer];

    // Winner checker

    if (scores[activePlayer] >= 20) {
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add(`player--winner`);
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.remove(`player-active`);
      diceElement.classList.add(`hidden`);
      playing = false;
    } else {
      switchPlayer();
    }
  }
});

newGameButton.addEventListener(`click`, restarter);
