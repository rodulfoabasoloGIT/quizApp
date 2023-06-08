const quizData = [
  {
    question: "How old is abasolo?",
    a: "10",
    b: "15",
    c: "12",
    d: "26",
    correct: "d",
  },
  {
    question: "most used programming Language",
    a: "java",
    b: "python",
    c: "javascript",
    d: "PHP",
    correct: "a",
  },
  {
    question: "best hero of ame",
    a: "Tiny",
    b: "abaddon",
    c: "Spectre",
    d: "Terrorblade",
    correct: "c",
  },
  {
    question: "who is the champion of T.I 11",
    a: "Team spirit",
    b: "Team Liquid",
    c: "Tundra Esports",
    d: "Blacklist Rivalry",
    correct: "c",
  },
  {
    question: "who is the champion of Lima Major",
    a: "Gaimin Gladiators",
    b: "Team Liquid",
    c: "Talon Esports",
    d: "Team Spirit",
    correct: "a",
  },
];

const questionEl = document.getElementById("Question");
const quiz = document.getElementById("quiz");
const answerEls = document.querySelectorAll(".answer");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const submitBtn = document.getElementById("submit");

let currentQuiz = 0;
let score = 0;

// to load the quiz from objects
function loadQuiz() {
  deSelect();
  const currentQuizData = quizData[currentQuiz];
  questionEl.innerText = currentQuizData.question;
  a_text.innerText = currentQuizData.a;
  b_text.innerText = currentQuizData.b;
  c_text.innerText = currentQuizData.c;
  d_text.innerText = currentQuizData.d;
}

// after choicing an answer it will deselect to another question
function deSelect() {
  answerEls.forEach((answerEl) => {
    answerEl.checked = false;
  });
}

// to select the choices
function getSelected() {
  let answer = undefined;
  answerEls.forEach((answerEl) => {
    if (answerEl.checked) {
      answer = answerEl.id;
    }
  });
  return answer;
}

// to count how many scores you have
submitBtn.addEventListener("click", () => {
  const answer = getSelected();
  console.log(answer);
  if (answer) {
    if (answer === quizData[currentQuiz].correct) {
      score++;
    }
    currentQuiz++;
    if (currentQuiz < quizData.length) {
      loadQuiz();
    } else {
      quiz.innerHTML = `your score is ${score}/${quizData.length} questions.`;
    }
  }
});

loadQuiz();
