'use strict';

const secretNumber = document.querySelector('.number');
const message = document.querySelector('.message');
const check = document.querySelector('.check');
const score = document.querySelector('.score');
const body = document.querySelector('body');
const again = document.querySelector('.again');
const winning = document.querySelector('.winning');
let number = Number(Math.trunc(Math.random() * 20) + 1);
console.log(number);
let scoreValue = 5;
let highscore = 0;
check.addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  if (!guess) {
    message.textContent = 'OOPS! No Number 🚫';
  } else if (guess === number) {
    if (scoreValue > 1) {
      secretNumber.textContent = number;
      message.textContent = 'Hurray! correct number🎉';
      body.style.backgroundColor = '#60b347';
      secretNumber.style.width = '30rem';
      winning.play();
      if (scoreValue > highscore) {
        highscore = scoreValue;
        document.querySelector('.highscore').textContent = highscore;
      }
    } else {
      message.textContent = 'GAME OVER';
      score.textContent = '0';
    }
  } else if (guess < number) {
    message.textContent = `' ${guess} is Too Low📉'`;
    document.querySelector('.guess').value = null;

    if (scoreValue > 1) {
      scoreValue--;
      score.textContent = scoreValue;
    } else {
      message.textContent = 'GAME OVER';
      score.textContent = 'BETTER LUCK NEXT TIME';
    }
  } else if (guess > number) {
    message.textContent = `'${guess} is Too High📈'`;
    document.querySelector('.guess').value = null;

    if (scoreValue > 1) {
      scoreValue--;
      score.textContent = scoreValue;
    } else {
      message.textContent = 'GAME OVER';
      score.textContent = 'BETTER LUCK NEXT TIME';
    }
  }
});

document.querySelector('.check').addEventListener('keydown', function () {
  if (e.key === 'enter') {
    const guess = Number(document.querySelector('.guess').value);

    if (!guess) {
      message.textContent = 'OOPS! No Number 🚫';
    } else if (guess === number) {
      if (scoreValue > 1) {
        secretNumber.textContent = number;
        message.textContent = 'Hurray! correct number🎉';
        body.style.backgroundColor = '#60b347';
        secretNumber.style.width = '30rem';
        winning.play();
        if (scoreValue > highscore) {
          highscore = scoreValue;
          document.querySelector('.highscore').textContent = highscore;
        }
      } else {
        message.textContent = 'GAME OVER';
        score.textContent = '0';
      }
    } else if (guess < number) {
      message.textContent = `' ${guess} is Too Low📉'`;
      document.querySelector('.guess').value = null;

      if (scoreValue > 1) {
        scoreValue--;
        score.textContent = scoreValue;
      } else {
        message.textContent = 'GAME OVER';
        score.textContent = 'BETTER LUCK NEXT TIME';
      }
    } else if (guess > number) {
      message.textContent = `'${guess} is Too High📈'`;
      document.querySelector('.guess').value = null;

      if (scoreValue > 1) {
        scoreValue--;
        score.textContent = scoreValue;
      } else {
        message.textContent = 'GAME OVER';
        score.textContent = 'BETTER LUCK NEXT TIME';
      }
    }
  }
});

again.addEventListener('click', function () {
  scoreValue = 5;
  document.querySelector('.guess').value = null;
  message.textContent = 'Start guessing...';
  secretNumber.style.width = '15rem';
  body.style.backgroundColor = '#222';
  secretNumber.textContent = '?';
  number = Number(Math.trunc(Math.random() * 20) + 1);
  console.log(number);
});
