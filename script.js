'use strict';
var randomNum = Math.floor(Math.random() * 20) + 1;

var num = 20;
var highScore = 0;

document.querySelector('.check').addEventListener('click', function () {
  var guess = Number(document.querySelector('.guess').value);
  if (!guess) {
    document.querySelector('.message ').textContent = 'No Number 😒';
  } else if (guess > randomNum) {
    if (num > 1) {
      num = num - 1;
      document.querySelector('.message').textContent = 'Too High 🤦‍♂️';
      document.querySelector('.score').textContent = num;
    } else {
      document.querySelector('.message').textContent = 'You Lost 🤣';
      document.querySelector('.score').textContent = 0;
    }
  } else if (guess < randomNum) {
    if (num > 1) {
      num = num - 1;
      document.querySelector('.message').textContent = ' Too Low 🤯';
      document.querySelector('.score').textContent = num;
    } else {
      document.querySelector('.message').textContent = 'You Lost 🤣';
      document.querySelector('.score').textContent = 0;
    }
  } else {
    document.querySelector('.message').textContent = 'Correct Number 👌';
    document.querySelector('body').style.backgroundColor = 'Green';
    highScore = num;
    document.querySelector('.highscore').textContent = highScore;
    document.querySelector('.number').textContent = guess;
  }
});
document.querySelector('.again').addEventListener('click', function () {
  randomNum = Math.floor(Math.random() * 20) + 1;
  highScore = 0;
  num = 20;
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').textContent = '?';
  document.querySelector('.score').textContent = num;
  document.querySelector('.highscore').textContent = highScore;
  document.querySelector('.guess').value = '';
});
