// Your code here
// index.js

// Constants for dodger movement
const dodger = document.getElementById('dodger');
const game = document.getElementById('game');
const gameWidth = parseInt(game.style.width);
const dodgerWidth = parseInt(dodger.style.width);

// Move dodger to the left
function moveDodgerLeft() {
  let leftNumbers = dodger.style.left.replace('px', '');
  let left = parseInt(leftNumbers, 10);

  if (left > 0) {
    dodger.style.left = `${left - 4}px`;
  }
}

// Move dodger to the right
function moveDodgerRight() {
  let leftNumbers = dodger.style.left.replace('px', '');
  let left = parseInt(leftNumbers, 10);

  if (left < gameWidth - dodgerWidth) {
    dodger.style.left = `${left + 4}px`;
  }
}

// Event listeners for arrow key presses to move dodger
document.addEventListener('keydown', fu
// index.js

// Constants for dodger movement
const dodger = document.getElementById('dodger');
const game = document.getElementById('game');
const gameWidth = parseInt(game.style.width);
const dodgerWidth = parseInt(dodger.style.width);

// Move dodger to the left
function moveDodgerLeft() {
  let leftNumbers = dodger.style.left.replace('px', '');
  let left = parseInt(leftNumbers, 10);

  if (left > 0) {
    dodger.style.left = `${left - 4}px`;
  }
}

// Move dodger to the right
function moveDodgerRight() {
  let leftNumbers = dodger.style.left.replace('px', '');
  let left = parseInt(leftNumbers, 10);

  if (left < gameWidth - dodgerWidth) {
    dodger.style.left = `${left + 4}px`;
  }
}

// Event listener for arrow key presses to move dodger left or right
document.addEventListener('keydown', function(e) {
  if (e.key === 'ArrowLeft') {
    moveDodgerLeft();
  } else if (e.key === 'ArrowRight') {
    moveDodgerRight();
  }
});
