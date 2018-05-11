//========================================================================================================================
//VARIABLES
//========================================================================================================================
// wordBank to selected a gameWord.
var wordBank = [
    "schrute",
    "michael",
    "kevin",
    "jim",
    "pam",
    "oscar",
    "andy",
    "dwight",
    "erin",
    "toby",
    "jan"
];

//create variables to store: correct guess, incorrect letters, guesses remaining, total win, total loss.
    var guessesRemaining = 7;

    var guessBank = [];
    var gameWord = selectGameWord();
    var hiddenWord = startGame();

//========================================================================================================================
//FUNCTIONS
//========================================================================================================================

// randomly selected guessWord from wordBank.
function selectGameWord(){    
    return wordBank[Math.floor(Math.random() * wordBank.length)];
}
console.log(gameWord);

function startGame() {
    //Split gameWord into array of characters
    var gameWordChar = gameWord.split("");
    //Add blankSpaces and add blank space to display.
    var display = [];
    for(i = 0; i <gameWordChar.length; i++) {
        display.splice(i, 0, "_");
    }
    document.querySelector("#display").innerHTML = display.join("");
    return display;
}


// Determine if letter pressed is in randomly selected word.
function checkGuess(){
    // create a function to run whenever a key is pressed.   
    document.onkeyup = function(event) {
        // determine which key was pressed.
        var userGuess = event.key;

        checkGuessBank(userGuess);

        var index = gameWord.indexOf(userGuess)

        if(index !== -1) {
            correctLetter++;
            replaceLetter(index, userGuess); 
        }
        else {
            wrongLetter++;
            guessesRemaining--;
        }

        // create a variable to hold new HTML
        var html =
        "<p>You chose: " + userGuess + "</p>" +
        "<p>Guesses Remaining: " + guessesRemaining + "</p>"

        // set the inner html contents of #game div to html string.
        document.querySelector("#game").innerHTML = html;

        checkGameOver();
    };
}

function checkGuessBank(value){
    //if guess is not in guess bank, add character to guess bank.
    if(guessBank.indexOf(value) === -1) {
        guessBank.push(value);
    }
    //create bank var and display guessBank in #bank div
    var bank =
        "<p> Guessed Letters: " + guessBank + "</p>"
    document.querySelector("#bank").innerHTML = bank;
}

//Replace Blank Space with Letter
//x = index ~~~~ y = gameWord
function replaceLetter(x, y) {
    hiddenWord.splice(x, 1, y);
    z = hiddenWord.join("");
    document.querySelector("#display").innerHTML = z;

    //check win
    if (z === gameWord) {
        alert("You Win!");
        document.location.reload();
    }
}

function checkGameOver() {
    if(guessesRemaining === 0) {
        
        alert("Game Over, You Lose!");
        document.location.reload();
    }
}

//========================================================================================================================
// PLAY GAME
//========================================================================================================================
    startGame();
    checkGuess();
