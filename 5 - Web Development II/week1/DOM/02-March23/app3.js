const questionText = document.querySelector(".question-text");

const answerList = document.querySelector(".answer-list");
const submitButton = document.querySelector(".submit-btn");
const resultText = document.querySelector(".result-text");

const questions = [
    {
        question: "What is the capital of Turkey?",
        answers: [
            "Paris",
            "Istanbul",
            "Izmir",
            "Ankara"
        ],
        correctAnswer: 3
    },
    {
        question: "What is the largest planet in our solor system?",
        answers: [
            "Venus",
            "Mars",
            "Earth",
            "Jupiter"
        ],
        correctAnswer: 3
    },
    {
        question: "What is the highest mountain in the world?",
        answers: [
            "Everest",
            "Denali",
            "Matterhorn",
            "Himalaya"
        ],
        correctAnswer: 0
    },
    {
        question: "What is the largest continent in the world?",
        answers:[
            "Africa",
            "Asia",
            "South America",
            "Europe"
        ],
        correctAnswer: 1
    }
];

let currentQuestionIndex = 0;
let selectedAnswerIndex = null;

function renderQuestion(){
    const currentQuestion = questions[currentQuestionIndex];

    questionText.textContent = currentQuestion.question;

    answerList.innerHTML = "";

    currentQuestion.answers.forEach((answer, index) => {
        const li = document.createElement("li");
        li.textContent = answer;
        if(index === selectedAnswerIndex){
            li.classList.add("selected");
        }
        li.addEventListener("click", () => {
            selectedAnswerIndex = index;
            renderQuestion();
        });
        answerList.appendChild(li);
    })
}

function checkAnswer(){
    const currentQuestion = questions[currentQuestionIndex];
    const selectedAnswer = currentQuestion.answers[selectedAnswerIndex];
    const correctAnswers = currentQuestion.answers[currentQuestion.correctAnswer];

    if(selectedAnswer === correctAnswers){
        resultText.textContent = "Correct!"
    }else {
        resultText.textContent = `Incorrect! The correct answers was ${correctAnswers}`
    }

    submitButton.textContent = "Next";
    submitButton.removeEventListener("click", checkAnswer);
    submitButton.addEventListener("click", nextQuestion);
}

function nextQuestion() {
    currentQuestionIndex++;
    if(currentQuestionIndex === questions.length){
        endQuiz();
    }else{
        selectedAnswerIndex = null;
        renderQuestion();

        resultText.textContent = "";
        submitButton.textContent = "Submit";
        submitButton.removeEventListener("click", nextQuestion);
        submitButton.addEventListener("click", checkAnswer);
    }
}

function endQuiz(){
    questionText.textContent = "Quiz completed!";
    answerList.innerHTML = "";
    submitButton.style.display = "none";
    resultText.style.display = "none";
}

submitButton.addEventListener("click", checkAnswer);
renderQuestion();