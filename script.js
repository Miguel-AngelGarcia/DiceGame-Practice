'use strict';

const scoreCheck = function (playerScore) {
  if (playerScore >= 100) {
    //game is over!
  }
};
//[.]Selector is for classes
//# is for IDs
const score0Element = document.querySelector('#score--0');
//a little bit faster than query selector
const score1Element = document.getElementById('score--1');
const diceElement = document.querySelector('.dice');
const btnNewGame = document.querySelector('.btn--new');
const btnRollDice = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');
const current0Element = document.getElementById('current--0');
const current1Element = document.getElementById('current--1');

score0Element.textContent = 0;
score1Element.textContent = 0;
//    Player 1 | Player 2
let scores = [0, 0];
let currentScore = 0;
let activePlayer = 0;
//will hide dice
//will create '.hidden' class in css
diceElement.classList.add('hidden');

btnRollDice.addEventListener('click', function () {
  // 1. generate random diceroll
  // 2. display dice
  // 3. check for a 1 value
  // if yes, switch to other player.

  const dice = Math.trunc(Math.random() * 6 + 1);
  diceElement.classList.remove('hidden');
  diceElement.src = `dice-${dice}.png`;

  if (dice !== 1) {
    //add number to current score
    currentScore += dice;
    current0Element.textContent = currentScore; //TODO
  } else {
    currentScore = 0;
    current0Element.textContent = currentScore;
  }
});

btnHold.addEventListener('click', function () {
  //add to players total score
});
