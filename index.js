var Word = require("./word2.js")
var inquirer = require("inquirer")
var validLetters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
var possibleWords = ["beauty and the beast", "the lion king", "the jungle book", "the little mermaid", "the hunchback of notre dame", "lilo and stitch", "moana", "fellowship of the ring", "the two towers", "return of the king", "the avengers", "thor", "captain america the first avenger", "captain ameria the winter soldier", "iron man", "star wars", "empire strikes back", "return of the jedi"]
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
        console.log("You aren't very good at guessing. Try a new word")
        defeats++;
        console.log("In case you were wondering, the last word was " + randomWord)
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
        if (alreadyGuessed.includes(response.userGuess.toLowerCase())) {
            console.log("You already guessed that silly!")
            console.log("Here are the letters you've already guessed: " + alreadyGuessed.join(" "))
        } else if (response.userGuess.length > 1) {
            console.log("Hey, only one letter at a time!")
        } else if (validLetters.includes(response.userGuess.toLowerCase()) === false) {
            console.log("Hey! Letters only")
        } else {
            readyWord.guess(response.userGuess.toLowerCase())
            if (readyWord.returnString().includes(response.userGuess.toLowerCase())) {
                console.log("NICE ONE!")
                alreadyGuessed.push(response.userGuess.toLowerCase())
            } else {
                guesses--;
                if (guesses > 0) {
                    console.log("YOU SUCK!")
                    console.log("You only have " + guesses + " guesses left")
                    alreadyGuessed.push(response.userGuess.toLowerCase())    
                }
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
    console.log("The category is 'movie'")
    continueWord()
}

newWord()