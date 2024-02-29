const questions = [
{
    question: "Which is the heaviest animal in the world?",
    answers: [
        { text: "Rhinoceros", correct: false },
        { text: "Elephant", correct: false },
        { text: "Blue Whale", correct: true },
        { text: "Hippopotamus", correct: false },
    ]
}, 
{
    question: "Which is largest country in the world?",
    answers: [
        { text: "Russia", correct: true },
        { text: "Canada", correct: false },
        { text: "United States", correct: false },
        { text: "China", correct: false },
    ]
}, 
{
    question: "Which is the largest desert in the world?",
    answers: [
        { text: "Bhutan", correct: false },
        { text: "Nepal", correct: false },
        { text: "Shri Lanka", correct: false },
        { text: "Vatican City", correct: true },
    ]
}, 
{
    question: "Which is the smallest continent in the world?",
    answers: [
        { text: "Australia", correct: true },
        { text: "Asia", correct: false },
        { text: "Africa", correct: true },
        { text: "Arctic", correct: false },
    ]
}
];

const questionElement = document.getElementById('question');
const answerButtons = document.getElementById('answer-buttons');
const nextButton = document.getElementById('next-btn');

let currentQuestionIndex = 0;
let score = 0;

function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestions();
}

function showQuestions() {
    resetState();

    let currentQuestion = questions[currentQuestionIndex];
    let questionNumber = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNumber + '. ' + currentQuestion.question;

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement('button');
        button.innerHTML = answer.text;
        button.classList.add('btn');
        answerButtons.appendChild(button);
    });
}

function resetState() {
    nextButton.style.display = "none";
    while(answerButtons.firstChild) {
        answerButtons.removeChild(answerButtons.firstChild);
    }
}

startQuiz();