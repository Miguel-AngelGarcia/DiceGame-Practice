'use strict';

const scoreCheck = function (playerScore) {
  if (playerScore >= 100) {
    //game is over!
  }
};

const resetCurrentScore = function () {
  currentScore = 0;
  document.getElementById(`current--${activePlayer}`).textContent = 0;
};

const playerToggle = function () {
  activePlayer = activePlayer === 0 ? 1 : 0;
  player0Element.classList.toggle('player--active');
  player1Element.classList.toggle('player--active');
};

//[.]Selector is for classes
//# is for IDs
const player0Element = document.querySelector('.player--0');
const player1Element = document.querySelector('.player--1');
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
let playing = true;
//will hide dice
//will create '.hidden' class in css
diceElement.classList.add('hidden');

btnRollDice.addEventListener('click', function () {
  if (playing) {
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
      document.getElementById(`current--${activePlayer}`).textContent =
        currentScore;
    } else {
      //check who is astive player. If 0, -> 1 & vice-versa [if 1 -> 0]
      //sets current players score to 0, then switches player
      resetCurrentScore();
      //check if element is present, switches to opposite value
      playerToggle();
    }
  }
});

btnHold.addEventListener('click', function () {
  if (playing) {
    //add to players total score
    scores[activePlayer] += currentScore;

    document.getElementById(`score--${activePlayer}`).textContent =
      scores[activePlayer];
    //check if score is < 100
    if (scores[activePlayer] >= 5) {
      //stop playing
      playing = false;
      diceElement.classList.add('hidden');
      //player wins
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add('player--winner');
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.remove('player--active');
      //console.log(scores[activePlayer]);
    } else {
      //reset score
      resetCurrentScore();
      //switch active player
      playerToggle();
    }
  }
});

btnNewGame.addEventListener('click', function () {
  //will be resetting the game.
  //will reset  winners current score | other players should be 0
  document
    .querySelector(`.player--${activePlayer}`)
    .classList.remove('player--winner');
  resetCurrentScore();

  //need to reset visual of total score

  //will reset variable of total score
  playing = true;
  scores[0] = 0;
  scores[1] = 0;

  document.getElementById('score--0').textContent = 0;
  document.getElementById('score--1').textContent = 0;

  if (activePlayer === 1) {
    activePlayer = 0;
    player1Element.classList.remove('player--active');
    player0Element.classList.add('player--active');
  } else {
    player0Element.classList.add('player--active');
  }

  //console.log(scores);
});
