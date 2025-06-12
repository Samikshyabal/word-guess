const secretWord = "apple";
let guessedLetters = [];
let wrongGuesses = 0;

const displayedWord = document.getElementById("displayedWord");
const wrongCount = document.getElementById("wrongCount");

// Function to update the displayed word
function updateDisplay() {
  let display = "";
  for (let letter of secretWord) {
    display += guessedLetters.includes(letter) ? letter : "_";
    display += " ";
  }
  displayedWord.textContent = display.trim();
}

// Handle key presses
document.addEventListener("keydown", function(event) {
  const guess = event.key.toLowerCase();

  if (!guess.match(/[a-z]/) || guess.length !== 1) return;

  if (secretWord.includes(guess)) {
    if (!guessedLetters.includes(guess)) {
      guessedLetters.push(guess);
    }
  } else {
    wrongGuesses++;
    wrongCount.textContent = wrongGuesses;
  }

  updateDisplay();

  // Win condition
  if (secretWord.split("").every(l => guessedLetters.includes(l))) {
    alert("🎉 You guessed the word!");
  }
});

updateDisplay();
