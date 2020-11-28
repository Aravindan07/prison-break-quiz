const readlineSync = require('readline-sync');
const chalk = require('chalk');

var score = 0;

var userName = readlineSync.question("May I have your name ? ");
console.log(chalk.cyanBright("\nWelcome to the quiz ",userName));
console.log(chalk.yellowBright("\nThis quiz is about the famous American web series PRISON BREAK.Feel free to play thiz quiz and have some fun!"));

function play(question,answer,wrongSuggestion){
  var userAnswer = readlineSync.question(question);
  console.log(chalk.bgBlackBright("\nYou selected option ",userAnswer));
  if(userAnswer.toLowerCase() === answer || userAnswer === answer){
    console.log(chalk.green("\nYou are right!\n"));
    score = score + 1;
  }
  else{
    console.log(chalk.bgRed('\nOops!,You are wrong!\n'));
    console.log(chalk.bgRed(`${wrongSuggestion}\n`));

  }
  console.log('Your score : ' + chalk.green.underline.bold(score));
    console.log('_________________');
}

  var questions = [{
    question: `
    What is the name of the prison where Michael saves his brother from death penalty ?\n
    a) Fox River
    b) Sona
    c) New York state penetentiary\n`,
    answer: 'a',
    wrongSuggestion: 'You guessed it wrong',
  },{
    question: `
    In season 1, the cell where Lincoln stayed was originally occupied by whom ?\n
    a) Serial Killer Danny
    b) Serial Killer John Wayne Gacy,
    c) John the ripper\n`,
    answer: 'b',
    wrongSuggestion: 'You guessed it wrong',
    },
    {
    question: `
    The characters who have never been arrested in the series is ?\n
    a) T-Bag and C-note
    b) Sara Tancredi
    c) Veronica Donavan and Sufio Lugo \n`,
    answer: 'c',
    wrongSuggestion: 'You guessed it wrong',
  },
  {
    question: `
    This series has been banned in atleast how many prisons ?\n
    a) 23
    b) 13
    c) 17
    \n`,
    answer: 'b',
    wrongSuggestion: 'You guessed it wrong',
  },
  {
    question: `
    What is Michael Scofield profession before he went into the prison ?\n
    a) Structural Engineer
    b) Computer Engineer
    c) Electrical Engineer
    \n`,
    answer: 'a',
    wrongSuggestion: 'You guessed it wrong',
  }];

  for(var i = 0; i<questions.length; i++){
    play(questions[i].question,questions[i].answer,questions[i].wrongSuggestion);
  }

let highScorers = [
  {
  name: "Aravind",
  score: "5",
  },
  {
  name: "Ravi",
  score: "4",
  }
];

console.log("\nYour overall score is : " + chalk.greenBright.bold(score));
console.log(chalk.cyanBright.bold(`\nThanks ${userName} for playing the quiz.`));

if(score >= 2){
  let newPlayer = {
    name: userName,
    score: score, 
  }
  highScorers.push(newPlayer);
};

console.log(chalk.greenBright('\nHIGHSCORERS'));
console.log('_________________\n');
highScorers.forEach(player => 
    console.log(`${player.name} scored ${player.score}`)
); 
