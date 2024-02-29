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
        { text: "Sri Lanka", correct: false },
        { text: "Vatican City", correct: true },
    ]
}, 
{
    question: "Which is the smallest continent in the world?",
    answers: [
        { text: "Australia", correct: true },
        { text: "Asia", correct: false },
        { text: "Africa", correct: false },
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
        if (answer.correct) {
            button.dataset.correct = answer.correct;
        }
        button.addEventListener('click', selectAnswer);
    });
}

function resetState() {
    nextButton.style.display = "none";
    while(answerButtons.firstChild) {
        answerButtons.removeChild(answerButtons.firstChild);
    }
}

function selectAnswer(e) {
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === 'true';
    if (isCorrect) {
        selectedBtn.classList.add('correct');
        score++;
    } else {
        selectedBtn.classList.add('incorrect');
    }
    Array.from(answerButtons.children).forEach(button => {
        if (button.dataset.correct === 'true') {
            button.classList.add('correct');
        }
        button.disabled = true;
    });
    nextButton.style.display = 'block';
}

function showScore() {
    resetState();
    questionElement.innerHTML = `You scored ${score} out of ${questions.length}`;
    nextButton.innerHTML = 'Play Again';
    nextButton.style.display = 'block';
}

function handleNextButton() {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        showQuestions();
    } else {
        showScore();
    }
}

nextButton.addEventListener('click', () => {
    if (currentQuestionIndex < questions.length) {
        handleNextButton();
    } else {
        startQuiz();
    }
})

startQuiz();