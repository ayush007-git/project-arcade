

const inputs = document.querySelector(".inputs"),
  hintTag = document.querySelector(".hint span"),
  guessLeft = document.querySelector(".guess-left span"),
  wrongLetter = document.querySelector(".wrong-letter span"),
  resetBtn = document.querySelector(".reset-btn"),
  typingInput = document.querySelector(".typing-input");

let word, maxGuesses, incorrectLetters = [], correctLetters = [];

function getRandomWord() {
    fetch('https://random-word-api.vercel.app/api?words=1', {
      method: 'GET'
    })
      .then(response => response.json())
      .then(data => {
        const randomWord = data[0];
  
        // Create the link for the dictionary API using the random word
        const dictionaryApiLink = `https://api.dictionaryapi.dev/api/v2/entries/en/${randomWord}`;
  
        // Fetch the definition from the dictionary API
        fetch(dictionaryApiLink, {
          method: 'GET'
        })
          .then(response => response.json())
          .then(data => {
            const hint = data[0].meanings[0].definitions[0].definition;
  
            word = randomWord;
            maxGuesses = word.length >= 5 ? 8 : 6;
            correctLetters = [];
            incorrectLetters = [];
            hintTag.innerText = hint;
            guessLeft.innerText = maxGuesses;
            wrongLetter.innerText = incorrectLetters;
  
            let html = "";
            for (let i = 0; i < word.length; i++) {
              html += `<input type="text" disabled>`;
              inputs.innerHTML = html;
            }
          })
          .catch(error => {
            console.error('Error:', error);
          });
      })
      .catch(error => {
        console.error('Error:', error);
      });
  }
  

getRandomWord();

function initGame(e) {
  let key = e.target.value.toLowerCase();
  if (
    key.match(/^[A-Za-z]+$/) &&
    !incorrectLetters.includes(` ${key}`) &&
    !correctLetters.includes(key)
  ) {
    if (word.includes(key)) {
      for (let i = 0; i < word.length; i++) {
        if (word[i] == key) {
          correctLetters += key;
          inputs.querySelectorAll("input")[i].value = key;
        }
      }
    } else {
      maxGuesses--;
      incorrectLetters.push(` ${key}`);
    }
    guessLeft.innerText = maxGuesses;
    wrongLetter.innerText = incorrectLetters;
  }
  typingInput.value = "";

  setTimeout(() => {
    if (correctLetters.length === word.length) {
      alert(`Congrats! You found the word ${word.toUpperCase()}`);
      return getRandomWord();
    } else if (maxGuesses < 1) {
      alert("Game over! You don't have remaining guesses");
      for (let i = 0; i < word.length; i++) {
        inputs.querySelectorAll("input")[i].value = word[i];
      }
    }
  }, 100);
}

resetBtn.addEventListener("click", getRandomWord);
typingInput.addEventListener("input", initGame);
inputs.addEventListener("click", () => typingInput.focus());
document.addEventListener("keydown", () => typingInput.focus());
