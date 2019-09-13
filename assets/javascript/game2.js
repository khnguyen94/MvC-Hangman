// Create an array of all the Marvel vs. Capcom characters
const mvcCharacters = [
  "Black Panther",
  "Black Widow",
  "Captain America",
  "Captain Marvel",
  "Doctor Strange",
  "Dormammu",
  "Gamora",
  "Ghost Rider",
  "Hawkeye",
  "Hulk",
  "Iron Man",
  "Nova",
  "Thanos",
  "Thor",
  "Ultron",
  "Venom",
  "Winter Soldier",
  "Arthur",
  "Chris Redfield",
  "Chun Li",
  "Dante",
  "Firebrand",
  "Frank West",
  "Jedah",
  "Mike Haggar",
  "Monster Hunter",
  "Morrigan",
  "Nathan Spencer",
  "Nemesis",
  "Ryu",
  "Sigma",
  "Stryder Hiryu",
  "X",
  "Zero"
];

// Create variable counters
let wins;
let lives;
let userHealth;
let healthIncrement;
let lettersGuessed;

// Create HTML block elements
let directionsRow;
let gameContentRow;
let playerHealthBarText;
let currentCharacterTiles;
let lettersAlreadyGuessedArray;

// Create HTML text variables
let winsText;
let livesText;

// Create HTML sound variables
let mvcThemeSong;
let winSound;
let loseSound;
let gameOverSound;

// On page load,
window.onload = function() {
  // Create a function that will restart the game by running the initiate game function when the restart button is pressed
  document
    .getElementById("restart-button")
    .addEventListener("click", initiateGame);

  // Link HTML text references
  let directionsRow = document.getElementById("press-start-row");
  winsText = document.getElementById("wins-text");
  livesText = document.getElementById("lives-text");
  playerHealthBarText = document.getElementById("player-health-bar");
  currentCharacterTiles = document.getElementById("current-character-tiles");
  lettersAlreadyGuessedArray = document.getElementById(
    "letters-already-guessed-array"
  );

  // Link HTML sound references
  mvcThemeSong = document.getElementById("mvc-theme-song");

  // Set the start values for counter variables
  wins = 0;
  lives = 3;

  // Initiate the game
  initiateGame();
};

// Create a function that picks a random character from the characters array and assigns it to global variable called chosenCharacter and delete that chosenCharacter from the array, it should take the array of possible characters as an parameter
let chosenCharacter;

const pickRandomCharacter = function(mvcCharacters) {
  chosenCharacter =
    mvcCharacters[Math.floor(Math.random() * mvcCharacters.length)];
  mvcCharacters.splice(chosenCharacter, 1);
  return chosenCharacter;
};

pickRandomCharacter(mvcCharacters);

console.log(chosenCharacter);
console.log(typeof chosenCharacter);

// Create a variable that is all lowercase of the chosen character
chosenCharacterLowercase = chosenCharacter.toLowerCase();

console.log(chosenCharacterLowercase);

// Create a variable that is a parsed array of the lowercase character name
chosenCharacterLetters = chosenCharacterLowercase.split("");

// Create an empty array that will hold the number of underscores equivalent to the number of letters in the array of letters in the character's name
let chosenCharacterUnderscore = [];

// Create a function takes the number of letters in the array of letters in the character's name and create an equivalent number of underscores
const generateUnderscores = function(chosenCharacterLetters) {
  for (let i = 0; i < chosenCharacterLetters.length; i++) {
    chosenCharacterUnderscore.push("_");
  }
  return generateUnderscores;
};

// Create a copy variable of the underscores
let chosenCharacterUnderscoreCopy = chosenCharacterUnderscore;

// Create a function that goes through every index element of the parsed character name, checks for matches between the userGuess and the index element, then in the corresponding array of underscores replace that underscore with that letter value, should take three parameters: userGuess, the array of parsed character letters, and the array of underscores

const replaceAllLetters = function(
  userGuess,
  chosenCharacterLetters,
  chosenCharacterUnderscoreCopy
) {
  for (var i = 0; i < chosenCharacterLetters.length; i++) {
    if (userGuess === chosenCharacterLetters[i]) {
      chosenCharacterUnderscoreCopy[i] = userGuess;
    }
    return chosenCharacterUnderscoreCopy;
  }
};

// replaceAllLetters(userGuess, chosenCharacterLetters, chosenCharacterUnderscoreCopy);

console.log(chosenCharacterLetters);
console.log(chosenCharacterUnderscore);
console.log(chosenCharacterUnderscoreCopy);

// Create a function that loops every time the user presses a new guess, after the underscoreCopy has undated, to check for when word being guessed matches with the 




// Initiate the game when the player presses any key
document.onkeyup = function(event) {
  userGuess = event.key.toLocaleLowerCase();

  // Check to see if userGuess is already guessed
  if (lettersAlreadyGuessedArray.includes(userGuess)) {
    alert("You have already guessed the letter: " + userGuess)
  }

// else if that userGuess hasnt already been guessed, run the match the letter 
  else if (lettersAlreadyGuessedArray.indexOf(userGuess) === -1) {

  }

};

// Create initiateGame function
const initiateGame = function() {
  // Set game variables
  wins = 0;
  lives = 3;
  userHealth = 100;
  healthIncrement = 10;
  currentCharacterTiles = [];
  lettersAlreadyGuessedArray = [];

  // Run the random character function
  pickRandomCharacter(mvcCharacters);

  // Run generate underscore function
  generateUnderscores(chosenCharacterLetters);

  // Run letter matching function
  replaceAllLetters(userGuess, chosenCharacterLetters, chosenCharacterUnderscoreCopy);

  // Run word matching function

  // Update HTML text elements


  
};
