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

let currentQuiz = 0;
let score = 0;
const question = document.getElementById("Question");
const c_a = document.getElementById("a_text");
const c_b = document.getElementById("b_text");
const c_c = document.getElementById("c_text");
const c_d = document.getElementById("d_text");
const submit = document.getElementById("submit");
const selectEl = document.querySelectorAll(".answer");
const quizz = document.getElementById("quiz");
const loadQuiz = () => {
  const Quiz = quizData[currentQuiz];
  question.innerText = Quiz.question;
  c_a.innerText = Quiz.a;
  c_b.innerText = Quiz.b;
  c_c.innerText = Quiz.c;
  c_d.innerText = Quiz.d;
  deSelect();
};

const deSelect = () => {
  selectEl.forEach((selectEls) => {
    if (selectEls) {
      selectEls.checked = false;
    }
  });
};

const Select = () => {
  let answer = undefined;
  selectEl.forEach((selectEls) => {
    if (selectEls.checked) {
      answer = selectEls.id;
    }
  });
  return answer;
};

submit.addEventListener("click", () => {
  const test = Select();
  console.log(test);
  if (test) {
    if (test === quizData[currentQuiz].correct) {
      score++;
    }
    currentQuiz++;
    if (currentQuiz < quizData.length) {
      loadQuiz();
    } else {
      quizz.innerHTML = `congratulations you have reached the bottom your score is ${score} over ${quizData.length} <button onClick="location.reload()">Reload Quiz</button>`;
    }
  }
});
loadQuiz();
