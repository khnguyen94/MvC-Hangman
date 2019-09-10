// Create an array of all the Marvel vs. Capcom characters
var mvcCharacters = [
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
var wins = 0; 
var currentCharacter = ""; // Should this be an empty array or empty string???
var remainingLives = 5; 
var lettersGuessed = []; 

// Create holder variables for press-enter-img, player-img, player-lives, wins, current-word, remaining-lives (guesses), letters-guessed
var pressEnterRow = document.getElementById("press-start-row");
var pressEnterGIF = document.getElementById("press-start-img");
var playerImg = document.getElementById("player1-img");
var playerHealthBar = document.getElementById("player-health-bar");
var currentCharacterTitle = document.getElementById("current-character-title");
var currentCharacterTiles = document.getElementById("current-character-tiles");
var lettersAlreadyGuessedTitle = document.getElementById("letters-already-guess-title");
var lettersAlreadyGuessedArray = document.getElementById("letters-already-guessed-array");
var asdf = document.getElementById("");
var asdf = document.getElementById("");
