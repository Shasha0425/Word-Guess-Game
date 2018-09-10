 
//Create list of words to choose from//
var wordList = ["css", "git", "javascript", "console", "github", "html", "developer",];

 //Tell the computer to choose a word//
 var compWord = wordList[Math.floor(Math.random() * wordList.length)];
console.log(compWord)

//Creates blank spaces for the word before it is guessed
var unansweredWord = [];
    for (var i = 0; i < compWord.length; i++) {
        unansweredWord[i] = "_";
    }
console.log(unansweredWord)



// var = lettersRemaining = wordList.length;
// console.log(lettersRemaining)


document.onkeyup = function(event) {
    
    var userGuess = event.key;
    document.getElementById('wrongGuess').innerHTML = key;
}

 
    console.log (compWord);

    // alert("You Guessed: " + userGuess)



//Computer chooses a word//
//User enters a letter//
//Computer compares user-entered letter to chosen word//
//If letter matches word, letter is displyed in word filed//
//If letter does not match, letter is displyed in "entered letter field"//
