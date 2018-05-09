// create array that list out all potential words.
    var wordBank = ["scranton", "dunder", "mifflin", "creed", "pennsylvania", "schrute", "accounting", "manager", "conference", "michael", "warehouse", "paper"];

//create variables to store: correct guess, incorrect letters, guesses remaining, total win, total loss.
    var guessesRemaining = 12;
    var correctLetter = 0;
    var wrongLetter = 0;
    var totalWin = 0;
    var totalLoss = 0;



// randomly selected guessWord from gameWords array.
var gameWord = wordBank[Math.floor(Math.random() * wordBank.length)];
var letters = gameWord.split('');

// list blank space per letter of random word.
for(var i = 0; i < letters.length; i++){
    var blankSpace =
    "<span>_ </span>";
    document.querySelector("#letterSpace").innerHTML = blankSpace.repeat(i);
}




// create a function to run whenever a key is pressed.
document.onkeyup = function(event) {


    // determine which key was pressed.
    var userGuess = event.key;


    // create logic to determine if letter pressed is in randomly selected word.


    if(gameWord.indexOf(userGuess) >= 0) {
        correctLetter++;
        document.querySelector("#letterSpace").innerHTML = userGuess;
    }

    // if letter is not in word, [subtract 1 from guesses left var], [list the letter guess in respected spot]
    else if(gameWord.indexOf(userGuess) === -1) {
        wrongLetter++;
        guessesRemaining--;

    }

    // if letter is in word, replace blank space with the letter.


    // if letter has been already pressed, alert "already guessed"






    // create a variable to hold new HTML
    var html =
    "<p>You chose: " + userGuess + "</p>" +
    "<p>Guesses Remaining: " + guessesRemaining + "</p>" +
    "<p>Correct Guesses: " + correctLetter + "</p>" +
    "<p>Incorrect Guesses: " + wrongLetter + "</p>" +
    "<p>Wins: " + totalWin + "</p>" +
    "<p>Losses: " + totalLoss + "</p>";

    // set the inner html contents of #game div to html string.
    document.querySelector("#game").innerHTML = html;

}







// if guess remaining = 0, [end the game] [add 1 to losses] [prompt for new game]
// if(guessesRemaining === 0){
//     alert("GAME OVER");
//     document.location.reload();
// }



// if all letters guessed [end the game] [add 1 to win] [prompt for new game]

// create function for new game to reset code.

