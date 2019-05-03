// Global Variables
// ______________________________________________________

var wordList = ["usa", "china", "italy", "germany", "mexico", "canada"];
var selectedWord = "";
var lettersInWord = [];
var numBlanks = 0;
var blanksAndSuccesses = [];
var wrongLetters = [];

var guessesLeft = 9;
var winsCounter = 0;
var lossesCounter = 0;



// Functions
// ______________________________________________________

    function startGame() {
        selectedWord = wordList[Math.floor(Math.random() * wordList.length)];
            lettersInWord = selectedWord.split("");
            numBlanks = lettersInWord.length;


        // reset
        guessesLeft = 9;
        wrongLetters = [];
        blanksAndSuccesses = [];

        // populate blanks and succeses with right number of blanks
        for(var i = 0; i < numBlanks; i++){
            blanksAndSuccesses.push("-");
        }
    
        // changing HTML
        document.getElementById("wordToGuess").innerHTML = blanksAndSuccesses;
        document.getElementById("numGuesses").innerHTML = guessesLeft;
        document.getElementById("winCounter").innerHTML = winsCounter;
        document.getElementById("lossCounter").innerHTML = lossesCounter;


        // testing
        console.log(selectedWord);
        console.log(lettersInWord);
        console.log(numBlanks);
        console.log(blanksAndSuccesses);
    }


function checkLetters(letter){
    // check if letter exists in code
    
    var isLetterInWord = false;
       
        for (var i = 0; i < numBlanks; i++){
            if(selectedWord[i] === letter){
                isLetterInWord = true;

            }
        }

        // check where in word letter exists, then populate out blanks and successes
        if(isLetterInWord) {
            for (var i = 0; i < numBlanks; i++){
                if (selectedWord[i] == letter){
                blanksAndSuccesses[i] = letter;
        }
    }
}
        else{
            wrongLetters.push(letter);
            numGuesses--
        }

    // testing
    console.log(blanksAndSuccesses);
    }
    function roundComplete(){
        console.log("Win Count: " + winsCounter + " | Loss Count " + lossesCounter + " | Guesses Left: " + guessesLeft);
    }  




 


// Main process__________________________________________
// starts game for first time
startGame();

// register keyclicks

document.onkeyup = function(event){
    var letterGuessed = String.fromCharCode(event.keyCode).toLowerCase();
    checkLetters(letterGuessed);
    roundComplete();

    // testing
    console.log(letterGuessed);

}