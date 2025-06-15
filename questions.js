const question1_answers = {
  1: "Hypertext Markup Language",
  2: "High-Level Text Machine Language",
  3: "Hyper Transfer Markup Language",
  4: "Home Tool Markup Language",
};

const correctQ1AnswerIndex = 1;

export const question1 = {
  id: 1,
  title: "Question 1:",
  question: "What does HTML stand for?",
  answers: question1_answers,
  solution: question1_answers[correctQ1AnswerIndex],
};

const question2_answers = {
  1: "<img>",
  2: "<link>",
  3: "<a>",
  4: "<url>",
};

const correctQ2AnswerIndex = 3;

export const question2 = {
  id: 2,
  title: "Question 2:",
  question: "Which tag is used to create a link to another page or website?",
  answers: question2_answers,
  solution: question2_answers[correctQ2AnswerIndex],
};

const question3_answers = {
  1: "<head>",
  2: "<body>",
  3: "<html>",
  4: "<title>",
};

const correctQ3AnswerIndex = 2;

export const question3 = {
  id: 3,
  title: "Question 3:",
  question:
    "Which tag is used to define the structure and content of an HTML document?",
  answers: question3_answers,
  solution: question3_answers[correctQ3AnswerIndex],
};

const question4_answers = {
  1: "src",
  2: "href",
  3: "alt",
  4: "title",
};

const correctQ4AnswerIndex = 3;

export const question4 = {
  id: 4,
  title: "Question 4:",
  question:
    "Which attribute is used to provide alternate text for an image if it cannot be displayed",
  answers: question4_answers,
  solution: question4_answers[correctQ4AnswerIndex],
};

const question5_answers = {
  1: "text-color",
  2: "background-color",
  3: "font-color",
  4: "color",
};

const correctQ5AnswerIndex = 2;

export const question5 = {
  id: 5,
  title: "Question 5:",
  question:
    "Which CSS property is used to change the background color of an element?",
  answers: question5_answers,
  solution: question5_answers[correctQ5AnswerIndex],
};

const question6_answers = {
  1: "Cascading Style Sheets",
  2: "Creative Style Sheets",
  3: "Colorful Style Sheets",
  4: "Computer Style Sheets",
};

const correctQ6AnswerIndex = 1;

export const question6 = {
  id: 6,
  title: "Question 6:",
  question: "What does CSS stand for?",
  answers: question6_answers,
  solution: question6_answers[correctQ6AnswerIndex],
};

const question7_answers = {
  1: ".myElement",
  2: "#myElement",
  3: "element#myElement",
  4: "myElement",
};

const correctQ7AnswerIndex = 2;

export const question7 = {
  id: 7,
  title: "Question 7:",
  question: "How do you select an element with the ID 'myElement' in CSS?",
  answers: question7_answers,
  solution: question7_answers[correctQ7AnswerIndex],
};

const question8_answers = {
  1: "text-size",
  2: "font-align",
  3: "text-align",
  4: "font-position",
};

const correctQ8AnswerIndex = 3;

export const question8 = {
  id: 8,
  title: "Question 8:",
  question:
    "Which CSS property controls the alignment of text within an element?",
  answers: question8_answers,
  solution: question8_answers[correctQ8AnswerIndex],
};

const question9_answers = {
  1: "<style>",
  2: "<script>",
  3: "<link>",
  4: "<js>",
};

const correctQ9AnswerIndex = 2;

export const question9 = {
  id: 9,
  title: "Question 9:",
  question: "Which tag is used to include JavaScript code in an HTML document?",
  answers: question9_answers,
  solution: question9_answers[correctQ9AnswerIndex],
};

const question10_answers = {
  1: "variable",
  2: "var (or let or const)",
  3: "v",
  4: "int",
};

const correctQ10AnswerIndex = 2;

export const question10 = {
  id: 10,
  title: "Question 10:",
  question: "Which keyword(s) is used to declare a variable in JavaScript?",
  answers: question10_answers,
  solution: question10_answers[correctQ10AnswerIndex],
};

export const allQuestions = {
  1: question1,
  2: question2,
  3: question3,
  4: question4,
  5: question5,
  6: question6,
  7: question7,
  8: question8,
  9: question9,
  10: question10,
};
