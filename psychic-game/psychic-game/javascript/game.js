/* homework week 3 - psychic game */
/* */


/*  */
var homerowKeyComputer = ["a", "s", "d", "f", "g", "h", "j", "k", "l"];

// all these variables //

var userYesPlay = 0;
var userNoPlay = 0;

var userRoundsWon = 0;
var userRoundsLost = 0;

var userWon = 0;
var userLost = 0;

var userGuesses = 0;
var userGuessesSoFar = 0;

var wins = 0;
var losses = 0;

var computerChoice = ' ';
var computerGuess = ' ';



/* Would You Like To Play? Appears on hover... */
// .question :hover

if (userYesPlay = true) {

}

if (userNoPlay = true) {

}



/* User option to choose Yes or No appears after question */
// .answer-yes onclick = true/false
// .answer-no onclick = true/false


/* If No... */
// .answer-no = true
// .answer-yes = false


/* reset html to be blank and question upon hover */
// if answer-no(true) { reload mf page }



/* If Yes... */
/* if answer-yes = true { 
// Tell user the rules of the game, how they will win... how they will loose //
// div.userYesPlay 
// h2.homerow-prompt-1

// div.userYesPlay-prompt-2

// p#homerow-prompt-hint
// p#homerow-hint-1
// span#homerow-fine

// web page writing what the hell is going to happen */

document.onkeyup = function (event) {


        /* Computer chooses a homerow key : */
        var computerChoice = homerowKeyComputer[Math.floor(Math.random() * homerowKeyComputer.length)];

        /* User guess : .onkeyup : homerow keys */
    /*    
    var userGuesses = (userGuess)
    var userGuessesSoFar = 0;
        
     */


        var userGuess = event.key;

        if ((userGuess === "a") ||
            (userGuess === "s") ||
            (userGuess === "d") ||
            (userGuess === "f") ||
            (userGuess === "g") ||
            (userGuess === "h") ||
            (userGuess === "j") ||
            (userGuess === "k") ||
            (userGuess === "l")) {

            if ((userGuess === computerGuess)) {
                userGuessesSoFar++;
                userGuesses = 3 - userGuessesSoFar;
                wins++;
            } else if ((wins === 3) && (losses === 2)) {
                userRoundsWon++;
            } else if ((userGuesses === 0) && (userGuessesSoFar === 3)) {
                userGuesses = 3;
                userGuessesSoFar = 0;
            }
            
            if ((userGuess != computerGuess)) {
                losses++;
            }  else if ((wins === 2) && (losses === 3)) {
                userRoundsLost++;

            } else if ((userRoundsWon >= 2) && (userRoundsLost <= 1)) {
                userWon++;
            } else if ((userRoundsWon <= 1 ) && (userRoundsLost >=2 )) {
                userLost++;
            } else if (userGuess === computerGuess) {
                ties++;
            }



        }

        var html =
            "<p>You Choose :" + userGuess + "<p>" +
            "<p>The Computer Choice: " + computerChoice + "</p>" +





            /* Guesses Left = # of guesses left for the user before they loose the round. */
            /* Guesses So Far = # of guesses committed by user */
            "<p>Guesses Left: " + userGuesses + "</p>" +
            "<p>Guesses So Far: " + userGuessesSoFar + "</p>" +


            /* Round Wins Counter  
            /* if (userGuess === computerGuess) {userRoundsWon++;}
            */
            "<p>Rounds Won : " + userRoundsWon + "</p>" +

            /* Round Losses Counter */
            "<p>Rounds Lost: " + userRoundsLost + "</p>" +

            /* Wins = # of times the user has guessed the letter */
            "<p>Game Wins: " + userWon + "</p>" +

            /* Losses = # of times user has failed to guess the letter correctly */
            "<p>Game Losses: " + userLost + "</p>" +


            /*Attempts / Declines */
            "<p>Attempts: " + userYesPlay + "</p>" +
            "<p>Declines: " + userNoPlay + "</p>";




        /* Game Wins Counter */

        /* Games Lost Counter */

        // Creates the holder of our new HTML page that displays : Wins, Losses, Guesses, and so on and so forth...


        // Set the inner HTML contents of the #game div to our html string
        document.querySelector("#game").innerHTML = html;