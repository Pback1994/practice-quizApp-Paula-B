# practice-quizApp-Paula-B

Goal: Create an interactive quiz application.

Step 1: Complete HTML Setup.

- Create Form (X):

  - Question (text input)
  - Answer Choices (4 buttons representing each answer)
  - Feedback (text input)
  - Next Question (button)

- Step 2: Implement JavaScript Functionality.

  - Display question (array) (X):

    - Question (string)
    - Array (answer choices)
    - Correct answer index.

  - Handle answer selection:

    - Add click event listener to the answer buttons.
    - When a button is clicked, check if the selected answer is correct and update the feedback element accordingly.
    - Disable all answer buttons after a selection to prevent further clicks.

  - Next button:

    - Add event listener to next button (load next question and re-enable answer buttons).
