var Letter = require("./letter.js")

function Word(str) {
    this.arrayOfLetters = []
    for (var i = 0; i < str.length; i++) {
        this.arrayOfLetters.push(new Letter(str[i]))
    }
    // takes every letter in argument, runs the Letter object constructor on it, then pushes it into arrayOfLetters
    this.returnString = function () {
        var result = []
        for (var i = 0; i < this.arrayOfLetters.length; i++) {
            result.push(this.arrayOfLetters[i].toString())
        }
        // returnString takes each letter in arrayOfLetters, stringifies them, pushes them into a new array, and joins them with a space
        return result.join(" ")
    }
    this.guess = function(character) {
        for (var i = 0; i < this.arrayOfLetters.length; i++) {
            this.arrayOfLetters[i].check(character)
        }
    }
}

var test = new Word("two words")

test.guess("t")
console.log(test.returnString())
test.guess("q")
console.log(test.returnString())
test.guess("r")
console.log(test.returnString())

module.exports = Word