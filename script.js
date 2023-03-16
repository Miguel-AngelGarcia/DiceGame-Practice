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
const btnNewGame = document.querySelector('btn--new');
const btnRollDice = document.querySelector('btn--roll');
const btnHold = document.querySelector('btn--hold');

score0Element.textContent = 0;
score1Element.textContent = 0;
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
  console.log('hi');
});
