'use strick';

// Body
const body = document.querySelector('body');
// Header
const againBtn = document.querySelector('.again');
const randomNum = document.querySelector('.number');
// Main - Section 1
const guessNum = document.querySelector('.guess');
const checkBtn = document.querySelector('.check');
// Main - Section 2
const message = document.querySelector('.message');
const score = document.querySelector('.score');
const highScore = document.querySelector('.highscore');

let secretNum = Math.ceil(Math.random() * 20);
let highS = 0;

checkBtn.addEventListener('click', function () {
  // When there is no input
  if (!guessNum.value) {
    message.innerHTML = '⛔ No Number!';

    // When player wins
  } else if (Number(guessNum.value) === secretNum) {
    message.innerHTML = '🎉 Correct Number!';
    randomNum.innerHTML = secretNum;
    body.style.backgroundColor = '#006600';
    randomNum.style.width = '250px';
    highS = score.innerHTML;
    highScore.innerHTML = highS;

    // When guess is too high
  } else if (Number(guessNum.value) > secretNum) {
    message.innerHTML = '📈 Too high!';
    score.innerHTML--;

    // When guess is too low
  } else {
    message.innerHTML = '📉 Too low!';
    score.innerHTML--;
  }
});

againBtn.addEventListener('click', function () {
  message.innerHTML = 'Start guessing...';
  randomNum.innerHTML = '?';
  guessNum.value = '';
  guessNum.focus();
  score.innerHTML = 20;
  body.style.backgroundColor = '#222';
  randomNum.style.width = '150px';
  secretNum = Math.ceil(Math.random() * 20);
});
