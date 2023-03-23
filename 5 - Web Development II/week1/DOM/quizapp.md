```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8" />
    <title>Quiz App</title>
    <link rel="stylesheet" href="style.css" />
  </head>
  <body>
    <div class="quiz-app">
      <h1>Quiz App</h1>
      <p class="question-text"></p>
      <ul class="answer-list"></ul>
      <button class="submit-button">Submit</button>
      <p class="result-text"></p>
    </div>
    <script src="app.js"></script>
  </body>
</html>
```

```css
body {
  font-family: Arial, sans-serif;
}

.quiz-app {
  max-width: 500px;
  margin: 0 auto;
  padding: 20px;
  background-color: #f2f2f2;
  border-radius: 5px;
}

h1 {
  text-align: center;
  margin-top: 0;
}

p {
  margin-bottom: 20px;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  padding: 10px;
  margin-bottom: 10px;
  background-color: #fff;
  border-radius: 3px;
  box-shadow: 0 2px 2px rgba(0, 0, 0, 0.3);
  cursor: pointer;
}

li.selected {
  background-color: #4caf50;
  color: white;
}

button {
  padding: 5px 10px;
  background-color: #4caf50;
  color: white;
  border: none;
  border-radius: 3px;
  cursor: pointer;
  margin-top: 20px;
}

p.result-text {
  font-weight: bold;
  font-size: 20px;
  text-align: center;
  margin-top: 20px;
}
```

```js
const questionText = document.querySelector(".question-text");
const answerList = document.querySelector(".answer-list");
const submitButton = document.querySelector(".submit-button");
const resultText = document.querySelector(".result-text");

const questions = [
  {
    question: "What is the capital of France?",
    answers: ["Paris", "Berlin", "Rome", "Madrid"],
    correctAnswer: 0,
  },
  {
    question: "What is the largest planet in our solar system?",
    answers: ["Venus", "Jupiter", "Saturn", "Mars"],
    correctAnswer: 1,
  },
  {
    question: "What is the highest mountain in the world?",
    answers: ["Mount Everest", "Kilimanjaro", "Denali", "Matterhorn"],
    correctAnswer: 0,
  },
  {
    question: "What is the largest continent in the world?",
    answers: ["Africa", "South America", "Asia", "Europe"],
    correctAnswer: 2,
  },
];

let currentQuestionIndex = 0;
let selectedAnswerIndex = null;

function renderQuestion() {
  const currentQuestion = questions[currentQuestionIndex];
  questionText.textContent = currentQuestion.question;
  answerList.innerHTML = "";
  currentQuestion.answers.forEach((answer, index) => {
    const li = document.createElement("li");
    li.textContent = answer;
    if (index === selectedAnswerIndex) {
      li.classList.add("selected");
    }
    li.addEventListener("click", () => {
      selectedAnswerIndex = index;
      renderQuestion();
    });
    answerList.appendChild(li);
  });
}

function checkAnswer() {
  const currentQuestion = questions[currentQuestionIndex];
  const selectedAnswer = currentQuestion.answers[selectedAnswerIndex];
  const correctAnswer = currentQuestion.answers[currentQuestion.correctAnswer];
  if (selectedAnswer === correctAnswer) {
    resultText.textContent = "Correct!";
  } else {
    resultText.textContent = `Incorrect. The correct answer was ${correctAnswer}.`;
  }
  submitButton.textContent = "Next";
  submitButton.removeEventListener("click", checkAnswer);
  submitButton.addEventListener("click", nextQuestion);
}

function nextQuestion() {
  currentQuestionIndex++;
  if (currentQuestionIndex === questions.length) {
    endQuiz();
  } else {
    selectedAnswerIndex = null;
    renderQuestion();
    resultText.textContent = "";
    submitButton.textContent = "Submit";
    submitButton.removeEventListener("click", nextQuestion);
    submitButton.addEventListener("click", checkAnswer);
  }
}

function endQuiz() {
  questionText.textContent = "Quiz complete!";
  answerList.innerHTML = "";
  submitButton.style.display = "none";
  resultText.style.display = "none";
}

submitButton.addEventListener("click", checkAnswer);

renderQuestion();
```
