// var Letter = require("./letter.js")
var Word = require("./word.js")
var inquirer = require("inquirer")

// var possibleWords = ["theosis", "filioque", "theotokos", "cassock", "trinity", "liturgy", "hypostatic", "metropolitan", "litany"]
var possibleWords = ["dog", "cat"]
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
        readyWord.guess(response.userGuess)
        if (readyWord.returnString().includes(response.userGuess)) {
            console.log("NICE ONE!")
        } else {
            console.log("YOU SUCK!")
            guesses--;
            console.log(guesses)
        }
        continueWord()
    })
}

var newWord = function() {
    guesses = 10
    randomNumber = Math.floor(Math.random() * possibleWords.length)
    randomWord = possibleWords[randomNumber]
    readyWord = new Word(randomWord)
    continueWord()    
}

newWord()