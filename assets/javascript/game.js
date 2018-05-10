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

// randomly selected guessWord from wordBank.
var gameWord = wordBank[Math.floor(Math.random() * wordBank.length)];

//create variables to store: correct guess, incorrect letters, guesses remaining, total win, total loss.
    var guessesRemaining = 7;
    var correctLetter = 0;
    var wrongLetter = 0;
    var totalWin = 0;
    var totalLoss = 0;

    var display = [];
    var guessBank = [];


//========================================================================================================================
//FUNCTIONS
//========================================================================================================================

function startGame() {
    // randomly selected guessWord from wordBank.
        // var gameWord = wordBank[Math.floor(Math.random() * wordBank.length)];
         

    //Create blankSpaces
        // for(i = 0; i < gameWord.length; i++) {
        //     var letters = gameWord.charAt(i);
        //     document.querySelector("#display").insertAdjacentHTML('beforeend', "<span>_ </span>");
        //     console.log(letters);
        // }

        for(i = 0; i < gameWord.length; i++) {
            console.log(gameWord);
            display.push("_ ");   
        }
        document.querySelector("#display").insertAdjacentHTML('beforeend', display);

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
        "<p>Wrong Letters: " + wrongLetter + "</p>" +
        "<p>Wins: " + totalWin + "</p>" +
        "<p>Losses: " + totalLoss + "</p>";

        // set the inner html contents of #game div to html string.
        document.querySelector("#game").innerHTML = html;

        checkGameOver();
    }
}

function checkGuessBank(value){
    if(guessBank.indexOf(value) === -1) {
        guessBank.push(value);
        console.log(guessBank);
    }
    else {
        checkGuess();
    }
}



function checkGameOver() {
    if(guessesRemaining === 0) {
        alert("Game Over");
        totalLoss++;
        document.location.reload();
    }
}




//========================================================================================================================
// PLAY GAME
//========================================================================================================================
    startGame();
    checkGuess();
    





// if all letters guessed [end the game] [add 1 to win] [prompt for new game]

// create function for new game to reset code.

