 const input = require('readline-sync');

// TODO 1.1a: Define candidateName // 
let candidateName = ""

// TODO 1.2a: Define question, correctAnswer, and candidateAnswer //
let question ="1. Who was the first American woman in space? ";
let correctAnswer = "Sally Ride"
let candidateAnswer = "";
let questions = [
 "1. Who was the first American woman in space? ", "2. True or false: 5 kilometer == 5000 meters? ", "3. (5+3)/2 * 10 = ? ", "4. Given the array 8, 'Orbit', 'Trajectory' 45 what entry is at index 2? ", "What is the minimum crew size for the ISS? " 
]
let correctAnswers = [
   "Sally Ride",
   "True", "40",
   "Trajectory",
   "3"
 ]
let candidateAnswers= []

// Define questions and correctAnswers variables as arrays. Use the table below to fill these arrays.

// Replace your code from TODO 1.2b with a loop that programmatically asks each question in the array and stores the user's responses.

// Replace the basic feedback from TODO 1.2c with a template literal that displays each of the candidate's responses in addition to the corresponding correct answers.

// Question	Answer
// Who was the first American woman in space?	"Sally Ride"
// True or false: 5 kilometer == 5000 meters?	"true"
// (5 + 3)/2 * 10 = ?	"40"
// Given the array [8, 'Orbit', 'Trajectory', 45], what entry is at index 2?	"Trajectory"
// What is the minimum crew size for the ISS?	"3"

function askForName() {
// TODO 1.1b: Ask for candidate's name //
candidateName = input.question ("What is your name? ")
}

function askQuestion() {
// TODO 1.2b: Ask candidate the question and assign the response as candidateAnswer
for (var i = 0; i < questions.length; i++) {
  let answer = (input.question (questions[i]))
  candidateAnswers.push (answer);
  console.log (candidateAnswer)
  console.log(`Your answer: ${candidateAnswers[i]}\nCorrect answer: ${correctAnswers[i]}\n`);       
}
}
// .
 function gradeQuiz(candidateAnswers) {
let totalGrade = 0
for (let i = 0; i < correctAnswers.length; i++) {
  if (candidateAnswers[i].toLowerCase() === correctAnswers [i].toLowerCase()) { 
    totalGrade++;
  }
}
let grade = (totalGrade/questions.length)* 100;
let candidateStatus = "";
if (grade >= 80) {
  candidateStatus= "SUCCESS";
} else {
  candidateStatus = "FAILED"
}
console.log (`>>> Overall Grade: ${grade}% (${totalGrade} of (${questions.length} responses correct) <<<\n>>> Status: ${candidateStatus} <<<`)
  
  return grade;
}
//   // TODO 1.2c: 
// Replace the basic feedback from TODO 1.2c with a template literal that displays each of the candidate's responses in addition to the corresponding correct answers.

 function runProgram() {
   askForName();
   // TODO 1.1c: Ask for candidate's name //
  
   askQuestion();
   gradeQuiz(this.candidateAnswers);
 }

// // Don't write any code below this line //
// // And don't change these or your program will not run as expected //
 module.exports = {
   candidateName: candidateName,
   question: question,
   correctAnswer: correctAnswer,
   candidateAnswer: candidateAnswer,
   questions: questions,
   correctAnswers: correctAnswers,
   candidateAnswers: candidateAnswers,
   gradeQuiz: gradeQuiz,
   runProgram: runProgram
}
