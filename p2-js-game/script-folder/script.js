import { words } from './word-categories.js';

const maxTries = 5;
let currentWordGuessed = '';
let currentWordArray = [];
let triesRemaining = maxTries;
let wins = 0;

const revealButton = document.getElementById('reveal-button');
const coverImage = document.getElementById('cover-image');
const txtHolder = document.querySelector('.txt-holder');
const content = document.getElementById('content');

const exitButton = document.getElementById('exit-button');
const exitModal = document.querySelector('.exit-modal');
const exitWrapper = document.querySelector('.exit-wrapper');
const clonedButton = exitWrapper.cloneNode(true);
exitModal.appendChild(clonedButton);

const letterButtons = document.getElementById('buttons-container');
const wordContainer = document.getElementById('word-container');
const messageContainer = document.getElementById('message-container');
const hangmanImage = document.getElementById('hangman-image');

const result = document.getElementById('result');
const winStreak = document.getElementById('win-streak');
const modalWindow = document.getElementById('modal-window');
const modalHeader = document.getElementById('modal-header');
const exitBtnModal = document.querySelector('.exit-modal');

const instructions = document.getElementById('instructions');
const instructionBtn = document.getElementById('instruction-btn');
function category() {}

instructionBtn.addEventListener('click', () => {
  instructions.style.display =
    instructions.style.display === 'none' ? 'block' : 'none';
});

// const instructionsButton = document.getElementById('instructionsButton');
// const instructionsDiv = document.getElementById('instructions');
// instructionsButton.addEventListener('click', () => {
//   instructionsDiv.style.display =
//     instructionsDiv.style.display === 'none' ? 'block' : 'none';
// });

function revealBtn() {
  coverImage.style.display = 'none';
  txtHolder.style.display = 'none';
  content.style.display = 'block';
}
revealButton.addEventListener('click', revealBtn);

function exitBtn() {
  content.style.display = 'none';
  coverImage.style.display = 'block';
  txtHolder.style.display = 'block';
}
exitButton.addEventListener('click', () => {
  exitBtn();
  startGame();
});

function startGame() {
  currentWordGuessed =
    words[Math.floor(Math.random() * words.length)].toUpperCase();
  // convert word to '-' except spaces
  currentWordArray = currentWordGuessed
    .split('')
    .map((char) => (char === ' ' ? '\u00A0\u00A0' : '_'));

  wordContainer.innerHTML = currentWordArray.join(' ');
  messageContainer.innerText = 'Guess the Word';
  triesRemaining = maxTries;
  hangmanImage.src = `stickman/hangman-${triesRemaining}.svg`;
  letterButtons.innerHTML = ''; // Clear previous letter buttons thus it dont add up

  for (let alphabet = 65; alphabet <= 90; alphabet++) {
    // ASCII codes for uppercase letters
    const letter = String.fromCharCode(alphabet);
    const button = document.createElement('button');
    button.setAttribute('class', 'buttons-container');
    button.innerText = letter;
    button.addEventListener('click', () => guessWord(letter));
    letterButtons.appendChild(button);
  }
}

function guessWord(guess) {
  guess = guess.toUpperCase();

  // check if the input letter matches the word
  if (currentWordGuessed.includes(guess)) {
    updateCurrentWordArray(guess);

    wordContainer.innerText = currentWordArray.join(' '); //replace '-' w/ the correct letters guessed//

    if (!currentWordArray.includes('_')) {
      messageContainer.innerText = 'You win!';
      wins++;

      showModal(`you win`);
      disableButtons();
    }
  } else {
    handleIncorrectGuess(guess);
    disableButtons();
  }
}

function updateCurrentWordArray(guess) {
  for (let i = 0; i < currentWordGuessed.length; i++) {
    if (currentWordGuessed[i] === guess) {
      currentWordArray[i] = guess;
    }
  }
}

function handleIncorrectGuess(guess) {
  triesRemaining--;
  hangmanImage.src = `stickman/hangman-${triesRemaining}.svg`;

  if (triesRemaining === 1) {
    showModal(`You lose`);
  } else if (triesRemaining === 2) {
    messageContainer.innerText = 'Last guess!';
  } else {
    messageContainer.innerText = `Sorry, "${guess}" is not in the word.`;
  }
}
// disable letter buttons when clicked
// function disableButtons() {
//   for (const button of letterButtons) {
//     button.disabled = true;
//   }

// }

document.getElementById('reset-button').addEventListener('click', () => {
  startGame();
  for (const button of letterButtons.children) {
    button.disabled = false;
  }
});

startGame();

// Show modal window
function showModal(header, message) {
  modalHeader.innerText = header;
  result.innerText = `The word is:\n${currentWordGuessed}`;
  winStreak.innerText = `Total win/s: ${wins}`;
  hangmanImage.src = `stickman/hangman-5.svg`;

  modalWindow.style.display = 'block';
  exitBtnModal.style.display = 'block';
}
// Hide modal window
function hideModal() {
  modalWindow.style.display = 'none';
}

const modalButton = document.getElementById('modal-button');
modalButton.addEventListener('click', () => {
  hideModal();
  startGame();
});

exitBtnModal.addEventListener('click', () => {
  exitBtn();
  hideModal();
  startGame();
});
