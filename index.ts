#! /usr/bin/env node

import inquirer from 'inquirer';

// 1. computer will generate a random number

// 2. User guess the number

// 3. computer will compare the user guess with the random number

// 4. if user guess is equal to the random number

// 5. if user guess the wrong number 

let randomNumber = Math.floor(Math.random() * 10 + 1 );

let guessNumber = await inquirer.prompt([
    {
        name: "userGuessNumber",
        type: "number",
        message: "Please guess your number between 1 - 10: ",
    },
]);

if (guessNumber.userGuessNumber === randomNumber) {
    console.log("Congtratulations! You Win :) ");
}else {
     console.log("Opps, you guessed wrong number :( ");
}