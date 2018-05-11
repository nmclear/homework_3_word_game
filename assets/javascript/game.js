//========================================================================================================================
//VARIABLES
//========================================================================================================================
// wordBank to selected a gameWord.
var wordBank = [
    "scranton",
    "dunder",
    "mifflin",
    "creed",
    "pennsylvania",
    "schrute",
    "accounting",
    "manager",
    "conference",
    "michael",
    "warehouse",
    "paper"
];

//create variables to store: correct guess, incorrect letters, guesses remaining, total win, total loss.
    var guessesRemaining = 7;
    var correctLetter = 0;
    var wrongLetter = 0;

    var guessBank = [];
    var gameWord = selectGameWord();

//========================================================================================================================
//FUNCTIONS
//========================================================================================================================

// randomly selected guessWord from wordBank.
function selectGameWord(){    
    return wordBank[Math.floor(Math.random() * wordBank.length)];
}

function startGame() {
    //Split gameWord into array of characters
    var gameWordChar = gameWord.split("");
    //Create blankSpaces and add blank space to display.
    var display = [];
    for(i = 0; i <gameWordChar.length; i++) {
        console.log(gameWordChar[i]);
        display += "_";
    }
    document.querySelector("#display").innerHTML = display;
}


// Determine if letter pressed is in randomly selected word.
function checkGuess(){
    // create a function to run whenever a key is pressed.   
    document.onkeyup = function(event) {
        // determine which key was pressed.
        var userGuess = event.key;

        checkGuessBank(userGuess);

        if(gameWord.indexOf(userGuess) !== -1) {
            correctLetter++;
            
        } else {
            wrongLetter++;
            guessesRemaining--;
        }


        // create a variable to hold new HTML
        var html =
        "<p>You chose: " + userGuess + "</p>" +
        "<p>Guesses Remaining: " + guessesRemaining + "</p>" +
        "<p>Correct Letters: " + correctLetter + "</p>" +
        "<p>Wrong Letters: " + wrongLetter + "</p>"

        // set the inner html contents of #game div to html string.
        document.querySelector("#game").innerHTML = html;

        checkGameOver();
    }
}



function checkGuessBank(value){
    //if guess is not in guess bank, add character to guess bank.
    if(guessBank.indexOf(value) === -1) {
        guessBank.push(value);
        console.log("guessBank: " + guessBank);
    }
    //create bank var and display guessBank in #bank div
    var bank =
        "<p> Guessed Letters: " + guessBank + "</p>"
    document.querySelector("#bank").innerHTML = bank;
}



function replaceLetter() {
    
}


function checkGameOver() {
    if(guessesRemaining === 0) {
        alert("Game Over");
        document.location.reload();
    }
}




//========================================================================================================================
// PLAY GAME
//========================================================================================================================
    startGame();
    checkGuess();
    



// if all letters guessed [end the game] [prompt for new game]

// create function for new game to reset code.

