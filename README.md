# Constructor-Word-Guess

## Overview

The Constructor Word Guess app utilizes constructor functions interacting together using module exports to make a very nicely structured, user-friendly hangman game in the console.

## Installation

In order to use this app, follow these steps:
1. Clone this repository: https://github.com/Tim1986/Constructor-Word-Guess. 
2. Install the necessary npms. Using your terminal, navigate to the folder with the cloned repository, and type npm install. 

## How to Use It

In order to use the app, once you've navigated to the folder with the cloned repository, simply type node index.js. The app will then run with a series of prompts from inquirer. The program will randomly choose a category of possible answers, and then randomly choose a possible answer from that category. It will display the letters with underscores as substitutes until you guess them. The app will tell you what category you're guessing from.

After that, simply guess letters. If you guess a non-letter character, it will remind you that you should just be typing letters. It'll work fine regardless of whether you're typing capitals or not. If you guess the same letter you've already guessed, it'll remind you what you've already guessed. If you guess multiple letters at one time, it'll remind you to guess one at a time. If you guess incorrectly, it'll tell you, and remind you how many guesses you have left. If you get ten incorrect guesses, it'll tell you the word and then move on to a new word. Alternatively, if you guess the word, it'll move on to a new word. Whether you ultimately succeed or fail, the app will keep track of your successes and failures, and tell you how you're doing before giving you your new word.

## GIF

![First GIF](/constructor1.gif)

## Deployed Link

https://tim1986.github.io/Constructor-Word-Guess/

## Development Process

This app uses Node and the Inquirer npm.

I made this app while I was a student six weeks into a twelve week coding boot camp at UNC Charlotte. I was given this project as an assignment, and a series of activities to help me learn how to get the files to interact properly. I wrote this code, with those caveats.