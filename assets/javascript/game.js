// Create an array of all the Marvel vs. Capcom characters
const mvcCharacters = [
  "Black Panther",
  "Black Widow",
  "Captain America",
  "Captain Marvel",
  "Doctor Strang",
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
  "Moster Hunter",
  "Morrigan",
  "Nathan Spencer",
  "Nemesis",
  "Ryu",
  "Sigma",
  "Stryder Hiryu",
  "X",
  "Zero"
];

// Create stat tracking variables
let wins = 0;
let currentCharacter = []; // Should this be an empty array or empty string???
let remainingLives = 5;
let lettersGuessed = [];

// Create holder variables for press-enter-img, player-img, player-lives, wins, current-word, remaining-lives (guesses), letters-guessed
let pressEnterRow = document.getElementById("press-start-row");
let pressEnterGIF = document.getElementById("press-start-img");
let playerImg = document.getElementById("player1-img");
let playerHealthBar = document.getElementById("player-health-bar");
let currentCharacterTitle = document.getElementById("current-character-title");
let currentCharacterTiles = document.getElementById("current-character-tiles");
let lastLetterGuessedTitle = document.getElementById(
  "last-letter-guessed-title"
);
let lastLetterGuessedText = document.getElementById("last-letter-guessed-text");
let lettersAlreadyGuessedTitle = document.getElementById(
  "letters-already-guess-title"
);
let lettersAlreadyGuessedArray = document.getElementById(
  "letters-already-guessed-array"
);

// Start function when enter is pressed by the User
document.onkeyup = function(event) {
  // Determine which button was pressed and assign it to a variable
  let userGuess = event.key;

  console.log(userGuess); // log user's first letter guess
  console.log(typeof userGuess); // log variable type of the user's guess

  // Pick a random character from the characters array
  let chosenCharacter =
    mvcCharacters[Math.floor(Math.random() * mvcCharacters.length)];

  console.log(chosenCharacter); // check that a random character was chosen

  // Create empty array to hold all the individual letters of the chosen character's name
  let chosenCharacterLetters = [];

  // Split up the chosen character's name into its component letters
  chosenCharacterLetters = chosenCharacter.split("");

  console.log(chosenCharacterLetters); // check that the random character's name was parse into individual letters
  console.log(chosenCharacter.length); // check length of the chosen character's name
  console.log(chosenCharacterLetters.length); // check length of the array of letters of chosen character's name
  // if these two numbers match, you are good

  // Create an empty array that will hold the number of underscores equivalent to the number of letters in the array of letters in the character's name
  let chosenCharacterNumLetters = [];

  // Create a function takes the number of letters in the array of letters in the character's name and create an equivalent number of underscores
  let generateUnderscores = function(chosenCharacterLetters) {
    for (let i = 0; i < chosenCharacterLetters.length; i++) {
      chosenCharacterNumLetters.push("_");
    }
    return generateUnderscores;
  };

  generateUnderscores(chosenCharacterLetters);

  console.log(chosenCharacterNumLetters);

  // GAME LOGIC
  // On any key press, initiate game logic
  // Create match, non-match, already-guessed conditions
  // Update the respective counter variables

  // If it is a match:
  if (chosenCharacterLetters.includes(userGuess)) {
    // 1) Print that matched letter to the position it exists in the character's name

    // 2) Add that letter to the letters guessed array
    lettersGuessed.push(userGuess);

    //
    console.log(userGuess + " is included"); // check that user guess is a match
  }
  // Else if the user guess has already been guessed:
  else if (lettersGuessed.includes(userGuess)) {
    // 1) return an error
    alert("You have already guessed the letter " + userGuess);
  }
  // If there is no match:
  else {
    // 1) Add that letter to the letters guessed array
    lettersGuessed.push(userGuess);
    console.log(userGuess + " is not included"); // check that user guess is not a match
  }

  console.log(lettersGuessed); // check that user guesses are being logged to lettersGuessed array
};
