// var Letter = require("./letter.js")
var Word = require("./word.js")
var inquirer = require("inquirer")

var possibleWords = ["homer", "thucydides", "sophocles", "aeschylus", "virgil", "euripides", "plato", "aristotle"]
// var possibleWords = ["lord of the rings", "hobbit"]
victories = 0
defeats = 0

var continueWord = function () {
    if (!readyWord.returnString().includes("_")) {
        console.log("Well done, you got the whole word! Here's another")
        victories++;
        console.log("You've succeeded " + victories + " times")
        newWord()
        return
    }
    if (guesses === 0) {
        console.log("You aren't very good at guessing. Try again")
        defeats++;
        console.log("You've failed " + defeats + " times")
        newWord()
        return
    }
    console.log(readyWord.returnString())
    inquirer.prompt([
        {
            name: "userGuess",
            message: "guess a letter"
        }
    ]).then(function (response) {
        if (alreadyGuessed.includes(response.userGuess)) {
            console.log("You already guessed that silly!")
            console.log("Here are the letters you've already guessed: " + alreadyGuessed)
        } else {
            readyWord.guess(response.userGuess)
            if (readyWord.returnString().includes(response.userGuess)) {
                console.log("NICE ONE!")
                alreadyGuessed.push(response.userGuess)
            } else {
                console.log("YOU SUCK!")
                guesses--;
                console.log(guesses)
                alreadyGuessed.push(response.userGuess)
            }
        }
        continueWord()
    })
}

var newWord = function () {
    alreadyGuessed = []
    guesses = 10
    randomNumber = Math.floor(Math.random() * possibleWords.length)
    randomWord = possibleWords[randomNumber]
    readyWord = new Word(randomWord)
    continueWord()
}

newWord()