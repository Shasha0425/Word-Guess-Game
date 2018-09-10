 
//Create list of words to choose from//
var words = ["css", "git", "javascript", "console", "github", "html", "developer",];
var incorrectLetters;
var word;
var blankWordWithGuesses;
var numberOfGuesses = 10;
var startGame = function(){
    lettersGuessedIncorrectly = [];
    word = compWord();
    blankWordWithGuesses = unansweredWord(word.length);
    updateIncorrectGuesses(blankWordWithGuesses);
    userGuess();
};

//Tell the computer to choose a word//
var compWord = function(){
    return words[Math.floor(Math.random() * words.length)]
 };

console.log(compWord)

var userGuess = function(){
    document.onkeypress = handleKeyPress;
};
var checkGuess = function(letter, word) {
    return word.indexOf(letter) > -1;
};

//min 31 of the video if this doesn't work
var unansweredWord = function(length){
    var string = ' ';
    for (var i = 0; i < length; i++) {
        string = string + "_";
}  
    return string.slice(0, -1)
};

var fillInGuess = function(letter, word, blankWordWithGuesses){
    var string = blankWordWithGuesses;
    var word = word;
    var pos;
    while(word.indexOf(letter) > -1){
          pos = word.indexOf(letter);
          string.slice(0,pos) + "z" + string.slice(pos+1)
        } 
};
var checkIfOutOfGuesses = function(){
    return lettersGuessedIncorrectly.length > numberOfGuesses;
};
var checkIfWordIsComplete = function(string){
    return string.indexOf("_") < 0;
};
var handleKeyPress = function (event){
    console.log(event.key)
    var userGuess = event.key;
    if (checkGuess(userGuess, word)){
        correctGuess(userGuess);
    }   else {
        incorrectGuess(userGuess);
    }
    document.getElementById('wrongGuess').innerHTML = key;
};

var correctGuess = function(userGuess){
    console.log("Correct!")
    blankWordWithGuesses = fillInGuess(userGuess);
    updateCorrectGuesses(blankWordWithGuesses);
    if (checkIfWordIsComplete(blankWordWithGuesses)){
        wins();
        }
};
var incorrectGuess = function(userGuess){
    console.log("Incorrect!")
    lettersGuessedIncorrectly.push(userGuess)
    updateIncorrectGuesses(lettersGuessedIncorrectly.join(', '));
    if (checkIfOutOfGuesses){
        loses();
    }
};

var updateIncorrectGuesses = function(string){
    var element = document.getElementById("underscore");
    element.innerHTML = string;
};

var updateCorrectGuesses = function(string){
    var element = document.getElementById("wrongGuess");
    element.innerHTML = string;
};

var wins = function(){

};

var loses = function(){

};

startGame();


//Computer chooses a word//
//User enters a letter//
//Computer compares user-entered letter to chosen word//
//If letter matches word, letter is displyed in word filed//
//If letter does not match, letter is displyed in "entered letter field"//
