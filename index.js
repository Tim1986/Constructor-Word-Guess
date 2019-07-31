// var Letter = require("./letter.js")
var Word = require("./word2.js")
var inquirer = require("inquirer")

var possibleWords = ["beauty and the beast", "the lion king", "the jungle book", "the little mermaid", "the hunchback of notre dame", "lilo and stitch", "moana", "fellowship of the ring", "the two towers", "return of the king", "the avengers", "star wars", "empire strikes back", "return of the jedi", ""]
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