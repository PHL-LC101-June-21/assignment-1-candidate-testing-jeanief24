 const input = require('readline-sync');

// TODO 1.1a: Define candidateName // 
let candidateName = ""

// TODO 1.2a: Define question, correctAnswer, and candidateAnswer //
//let question =input.question ("1. Who was the first American woman in space? ");
//let correctAnswer = ('Sally Ride');
//let candidateAnswer = "";
//let candidateAnswers= []

// Define questions and correctAnswers variables as arrays. Use the table below to fill these arrays.
let questions = [
  ["1. Who was the first American woman in space?"],
  ["2. True or false: 5 kilometer == 5000 meters?"],
  ["3. (5+3)/2 * 10 = ?"],
  ["4. Given the array [8, 'Orbit', 'Trajectory' 45], what entry is at index 2?]"
  ]

let correctAnswers = [
 ["Sally Ride"],
 ["true", "40"],
 ["Trajectory"], 
 ["3"],
 ["What is the minimum crew size for the ISS?"]
 ]
let candidateAnswers= []
// Replace your code from TODO 1.2b with a loop that programmatically asks each question in the array and stores the user's responses.
// Replace the basic feedback from TODO 1.2c with a template literal that displays each of the candidate's responses in addition to the corresponding correct answers.
// Question	Answer
// Who was the first American woman in space?	"Sally Ride"
// True or false: 5 kilometer == 5000 meters?	"true"
// (5 + 3)/2 * 10 = ?	"40"
// Given the array [8, 'Orbit', 'Trajectory', 45], what entry is at index 2?	"Trajectory"
// What is the minimum crew size for the ISS?	"3"

//function askForName() {
// TODO 1.1b: Ask for candidate's name //
candidateName = input.question ("What is your name? ")

console.log (`Contact Name: ${candidateName}`)
console.log (`${candidateName} Good Luck!`)

//function askQuestion() {
// TODO 1.2b: Ask candidate the question and assign the response as candidateAnswer

for (let i = 0; i < questions.length; i+=1) {
   console.log(questions[i]);
}

// .
// function gradeQuiz(candidateAnswers) {

//   // TODO 1.2c: Let the candidate know if they have answered the question correctly or incorrectly // 
//console.log (`Candidate answer: ${question}`)
//console.log (`Correct answer: ${correctAnswer}`)
 //}

//   let grade = "Correct"
//   if (question == correctAnswer) {
//     console.log ("Correct")
//   }else {
//    console.log ("Incorrect")
//   }

// //   return grade;
//   if (question == correctAnswer) {
//     console.log('Pass')
//   }else{
//     console.log ('Fail')
//   }
// }

// function runProgram() {
//   askForName();
//   // TODO 1.1c: Ask for candidate's name //
  
//   askQuestion();
//   gradeQuiz(this.candidateAnswers);
// }

// // Don't write any code below this line //
// // And don't change these or your program will not run as expected //
// module.exports = {
//   candidateName: candidateName,
//   question: question,
//   correctAnswer: correctAnswer,
//   candidateAnswer: candidateAnswer,
//   questions: questions,
//   correctAnswers: correctAnswers,
//   candidateAnswers: candidateAnswers,
//   gradeQuiz: gradeQuiz,
//   runProgram: runProgram
// };