const questions = [
    {
        question: "What's your preferred music style?",
        answers: [
            { text: "Country music with storytelling", era: "Fearless" },
            { text: "Pop with a dramatic flair", era: "Red" },
            { text: "Synth-pop and electronic", era: "1989" },
            { text: "Dark pop and edgy sounds", era: "Reputation" },
            { text: "Dreamy indie folk", era: "Folklore/Evermore" }
        ]
    },
    {
        question: "Pick your ideal outfit:",
        answers: [
            { text: "Sparkly dresses and cowboy boots", era: "Fearless" },
            { text: "Vintage high-waisted shorts and red lipstick", era: "Red" },
            { text: "Crop tops and high heels", era: "1989" },
            { text: "All black with snake motifs", era: "Reputation" },
            { text: "Cozy cardigans and cottagecore aesthetic", era: "Folklore/Evermore" }
        ]
    },
    {
        question: "What's your ideal weekend?",
        answers: [
            { text: "Road trip with friends", era: "Fearless" },
            { text: "Coffee shop writing in your diary", era: "Red" },
            { text: "Dancing with your best friends", era: "1989" },
            { text: "Exclusive party in the city", era: "Reputation" },
            { text: "Quiet time in nature", era: "Folklore/Evermore" }
        ]
    },
    {
        question: "Choose a mood:",
        answers: [
            { text: "Hopeful and romantic", era: "Fearless" },
            { text: "Passionate and nostalgic", era: "Red" },
            { text: "Confident and carefree", era: "1989" },
            { text: "Fierce and unapologetic", era: "Reputation" },
            { text: "Introspective and mysterious", era: "Folklore/Evermore" }
        ]
    },
    {
        question: "Pick a color palette:",
        answers: [
            { text: "Gold and yellow", era: "Fearless" },
            { text: "Red and burgundy", era: "Red" },
            { text: "Blue and pink pastels", era: "1989" },
            { text: "Black and silver", era: "Reputation" },
            { text: "Forest green and grey", era: "Folklore/Evermore" }
        ]
    }
];

let currentQuestionIndex = 0;
const eraCount = {};

const questionElement = document.getElementById('question');
const answersElement = document.getElementById('answers');
const resultContainer = document.getElementById('result-container');
const questionContainer = document.getElementById('question-container');
const resultElement = document.getElementById('result');
const restartButton = document.getElementById('restart-btn');

function startQuiz() {
    currentQuestionIndex = 0;
    resultContainer.classList.add('hide');
    questionContainer.classList.remove('hide');
    for (let era in eraCount) {
        delete eraCount[era];
    }
    showQuestion();
}

function showQuestion() {
    const question = questions[currentQuestionIndex];
    questionElement.textContent = question.question;
    answersElement.innerHTML = '';
    
    question.answers.forEach(answer => {
        const button = document.createElement('button');
        button.textContent = answer.text;
        button.addEventListener('click', () => selectAnswer(answer));
        answersElement.appendChild(button);
    });
}

function selectAnswer(answer) {
    eraCount[answer.era] = (eraCount[answer.era] || 0) + 1;
    currentQuestionIndex++;
    
    if (currentQuestionIndex < questions.length) {
        showQuestion();
    } else {
        showResult();
    }
}

function showResult() {
    questionContainer.classList.add('hide');
    resultContainer.classList.remove('hide');
    
    const mostFrequentEra = Object.entries(eraCount).reduce((a, b) => 
        (a[1] > b[1] ? a : b))[0];
    
    resultElement.textContent = `${mostFrequentEra}`;
}

restartButton.addEventListener('click', startQuiz);

startQuiz(); 