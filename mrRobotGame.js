https://replit.com/@ayushsanj/Mr-Robot-Fans#readme.md?embed=1&output=1

var chalk = require('chalk');
var readLine = require('readline-sync');
var score = 0;

// username
var username = readLine.question("click and see the code option below and then write your name here!");
console.log(chalk.red("welcome " + username + " Let's play the game!"));

// game intro and rules
console.log("Please answer in single word or name only, whatever applicable");
console.log("=========================================");
console.log("Okay! Let's test you how much you love mr robot?!!");

// game play starts
// game play function
function letsPlay(question, answer) {
    var userAnswer = readLine.question(question);
    if(userAnswer === answer) {
        console.log("nyc! up next");
        score += 2;
    } else if (score <= 0 || userAnswer != answer) {
        console.log("Sorry! recheck it!")
        console.log("Answer: " + answer);
    }
    console.log("current Score is: " + score);
    console.log("=========================================");

}

//all questions
var questions = [{
    question: "Who was Mr Robot; his dad? or Eliot?",
    answer: "his dad"
},
{
    question: "What was the name of the society, he was working privately?",
    answer: "F-Society"
},
{
    question: "His sister name?",
    answer: "Darlene"
},
{
    question: "Was he one of the best hacker in the world?",
    answer: "yes"

}, 
{
    question: "Last name of Eliot?",
    answer: "Anderson"
}
];

//highscores of the users
var highScores = [{
    name: "ayush",
    score: 5
}];

//loop
for(var i = 0; i < questions.length; i++) {
    var currQue = questions[i];
    letsPlay(currQue.question, currQue.answer);

    if(score === 6) {
        console.log(chalk.green("Congratualtions u r on level 2"));
    } else if(score === 4) {
        console.log(chalk.green("great job there! " + username));
    } else if (score >= highScores[0].score) {
        console.log(chalk.green("Congratualtions!!, you are one of the toppers!!"));
    }
}

console.log("your total score: " + score);
console.log("******game-ends******");
console.log("****share your screenshot to update on server!!****");





