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

// Create stat tracking variables
let wins = 0;
let losses = 0;
let currentCharacter = []; // Should this be an empty array or empty string???
let userHealth = 100;
let healthIncrement = 10;
let lettersGuessed = [];

// Create a function that picks a random character from the characters array and assigns it to global variable called chosenCharacter
let chosenCharacter;

let pickRandomCharacter = function(mvcCharacters) {
  chosenCharacter = mvcCharacters[Math.floor(Math.random() * mvcCharacters.length)];
}

pickRandomCharacter(mvcCharacters);

// Create a new variable that makes the chosen character's name all lowercase
let chosenCharacterLowercase = chosenCharacter.toLocaleLowerCase();

console.log(chosenCharacter); // check that a random character was chosen
console.log(chosenCharacterLowercase); // check that that random character's name is all lowercase

// Create empty array to hold all the individual letters of the chosen character's name
let chosenCharacterLetters = [];

// Split up the chosen character's name into its component letters
chosenCharacterLetters = chosenCharacterLowercase.split("");

console.log(chosenCharacterLetters); // check that the random character's name was parse into individual letters
console.log(chosenCharacterLowercase.length); // check length of the chosen character's name
console.log(chosenCharacterLetters.length); // check length of the array of letters of chosen character's name
// if these two numbers match, you are good

// Create an empty array that will hold the number of underscores equivalent to the number of letters in the array of letters in the character's name
let chosenCharacterUnderscore = [];

// Create a function takes the number of letters in the array of letters in the character's name and create an equivalent number of underscores
let generateUnderscores = function(chosenCharacterLetters) {
  for (let i = 0; i < chosenCharacterLetters.length; i++) {
    chosenCharacterUnderscore.push("_");
  }
  return generateUnderscores;
};

generateUnderscores(chosenCharacterLetters);

// Create a restart function that picks a new character and resets all relevant variables
let newRound = function() {};

// Create holder variables for press-enter-img, player-img, player-lives, wins, current-word, remaining-lives (guesses), letters-guessed
let directionsRow = document.getElementById("press-start-row");
let pressEnterGIF = document.getElementById("press-start-img");
let playerImg = document.getElementById("player1-img");
let playerHealthBar = document.getElementById("player-health-bar");
let currentCharacterTitle = document.getElementById("current-character-title");
let currentCharacterTiles = document.getElementById("current-character-tiles");
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

  // GAME LOGIC
  // On any key press, initiate game logic
  // Create match, non-match, already-guessed conditions
  // Update the respective counter variables

  // If it is a match:
  if (chosenCharacterLetters.includes(userGuess)) {
    // Find the index of the match user guess value in the array
    let userGuessIndex = chosenCharacterLetters.indexOf(userGuess);

    // Create a for-loop that will check that (if match) that it is not already in the list of letters already guessed
    if (lettersGuessed.includes(userGuess)) {
      alert("You have already guessed the letter " + userGuess);
    }

    // Else if, create a function that takes in three arguments (userGuess & chosenCharacterLetters & chosenCharacterUnderscore) and loops through the entire to replace the underscore at that index position with the letter
    else if (userGuessIndex !== -1) {
      let setAll = function(
        userGuess,
        chosenCharacterLetters,
        chosenCharacterUnderscore
      ) {
        for (var i = 0; i < chosenCharacterLetters.length; i++) {
          if (userGuess === chosenCharacterLetters[i]) {
            chosenCharacterUnderscore[i] = userGuess;
          }
        }
        return chosenCharacterUnderscore;
      };

      setAll(userGuess, chosenCharacterLetters, chosenCharacterUnderscore);

      console.log(chosenCharacterUnderscore); // Log the current underscore array into console

      // Add that letter to the letters guessed array
      lettersGuessed.push(userGuess);

      console.log(userGuess + " is included"); // check if user guess is a match
    }

    // Else if, create a function check when user has completely guessed and the name matches the parsed chosen character's name
    let checkMatchingName = function(
      chosenCharacterLetters,
      chosenCharacterUnderscore
    ) {
      for (var i = 0; i < chosenCharacterLetters.length; i++) {
        if (chosenCharacterLetters[i] !== chosenCharacterUnderscore[i]) {
          return false;
        }
        return true;
      }
    };

    checkMatchingName(chosenCharacterLetters, chosenCharacterUnderscore);

    console.log(checkMatchingName(chosenCharacterLetters, chosenCharacterUnderscore));
    console.log("Wins: " + wins);

    // Else if, create a function that takes in the return statement of checkMatchingName function and executes only when true to pick a new character and reset all relevant variables
    let resetGame = function(checkMatchingName) {
      if (checkMatchingName == true) {
        // pick new character
        pickRandomCharacter(mvcCharacters);
        // reset all relevant variables
      }
    }
  }

  // Else if the user guess has already been guessed:
  else if (lettersGuessed.includes(userGuess)) {
    // 1) Return an error
    alert("You have already guessed the letter " + userGuess);
  }

  // If there is no match:
  else {
    // 1) Add that letter to the letters guessed array
    lettersGuessed.push(userGuess);
    // 2) Decrease the user's health by 10%
    userHealth -= healthIncrement;

    console.log(userGuess + " is not included"); // check that user guess is not a match

    if (userHealth === 0) {
      alert("K.O.");
      losses++;
    }
  }

  // Hide directions
  $("#press-start-row").hide();

  // Show game content
  $("#game-content-row").show();

  // Update displays in html to reflect current scores and stats
  playerHealthBar.style.width = userHealth + "%";
  playerHealthBar.textContent = userHealth + "/100";
  currentCharacterTiles.innerHTML = chosenCharacterUnderscore.join(
    "&nbsp; &nbsp;"
  );
  lettersAlreadyGuessedArray.innerHTML = lettersGuessed.join(", ");

  console.log(lettersGuessed); // check that user guesses are being logged to lettersGuessed array
  console.log(chosenCharacterLetters.indexOf(userGuess)); // print out the index of the user guess in the character letters array
  console.log(chosenCharacterUnderscore); // check that there are same number of underscores as length of character name
  console.log("Health: " + userHealth);
};
