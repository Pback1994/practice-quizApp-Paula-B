// Import question data.

import { allQuestions } from "./questions.js";

// Track current question index (start at one since question in the questions.js file start at 1 - index).

let currentQuestionIndex = 1;

// Get DOM elements

const quizTitle = document.getElementById("quiz-title");
const quizQuestion = document.getElementById("quiz-question");
const quizAnswer = document.getElementById("quiz-answers");
const nextButton = document.getElementById("next-button");
const quizResponse = document.getElementById("quiz-response");

// Track user selection (response message)

let selectedAnswer = null;

// Function to display question

function displayQuestion(questionObject) {
  quizTitle.textContent = questionObject.title;
  quizQuestion.textContent = questionObject.question;

  // Clear previous quiz answer and response and reset selection.

  quizAnswer.innerHTML = "";
  quizResponse.textContent = "";
  selectedAnswer = null;

  // Loop through the answers and create radio buttons dynamically.

  for (const [answerIndex, answerText] of Object.entries(
    questionObject.answers
  )) {
    const label = document.createElement("label");
    const radio = document.createElement("input");

    radio.type = "radio";
    radio.name = "quiz-answer";
    radio.value = answerIndex;

    radio.addEventListener("change", () => {
      selectedAnswer = answerIndex;
    });

    label.appendChild(radio);
    label.append(` ${answerText}`);
    quizAnswer.appendChild(label);
    quizAnswer.appendChild(document.createElement("br"));
  }
}

// Function to handle clicking "Next" button

function handleNextQuestion() {
  const currentQuestion = allQuestions[currentQuestionIndex];

  if (!selectedAnswer) {
    quizResponse.textContent = "Please select an answer!";
    return;
  }

  const isCorrect = selectedAnswer == getCorrectAnswerIndex(currentQuestion);
  quizResponse.textContent = isCorrect
    ? "&#10003 Correct!"
    : `X Incorrect. The correct answer is: ${currentQuestion.solution}`;
}

// Show the first question on load.

displayQuestion(allQuestions[currentQuestionIndex]);
