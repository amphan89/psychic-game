var options = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var userGuess = [];

function letterGuess(){
    userGuess.push(event.key)

    if (!options.includes(userGuess)){
        alert("you did not enter a valid key")
    }
}

document.onkeypress = letterGuess;