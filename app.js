const quizData = [
  {
    question: "how old is abasolo?",
    a: "25",
    b: "10",
    c: "15",
    d: "20",
    answer: "a",
  },

  {
    question: "what is the favorite hero of abasol?",
    a: "spectre",
    b: "terroblade",
    c: "invoker",
    d: "anti-mage",
    answer: "b",
  },

  {
    question: "favorite food of abasol?",
    a: "chicken",
    b: "siomai",
    c: "balut",
    d: "takoyaki",
    answer: "b",
  },

  {
    question: "favorite int hero?",
    a: "invoker",
    b: "windranger",
    c: "pugna",
    d: "lion",
    answer: "a",
  },

  {
    question: "favorite programming language?",
    a: "Javascript",
    b: "Java",
    c: "C++",
    d: "C#",
    answer: "a",
  },
];

const questionHolder = document.getElementById("Question");
const c_a = document.getElementById("a_text");
const c_b = document.getElementById("b_text");
const c_c = document.getElementById("c_text");
const c_d = document.getElementById("d_text");
const submits = document.getElementById("submit");
const answerEl = document.querySelectorAll(".answer");
const results = document.getElementById("quiz");

let currentQuiz = 0;
let score = 0;

const loadQuiz = () => {
  questionHolder.innerHTML = quizData[currentQuiz].question;
  c_a.innerHTML = quizData[currentQuiz].a;
  c_b.innerHTML = quizData[currentQuiz].b;
  c_c.innerHTML = quizData[currentQuiz].c;
  c_d.innerHTML = quizData[currentQuiz].d;
  deSelect();
};

const deSelect = () => {
  answerEl.forEach((answerEls) => {
    if (answerEls) {
      answerEls.checked = false;
    }
  });
};

const Select = () => {
  let answer = undefined;
  answerEl.forEach((answerEls) => {
    if (answerEls.checked) {
      answer = answerEls.id;
    }
  });
  return answer;
};

submits.addEventListener("click", () => {
  const currentQuizes = quizData[currentQuiz];
  const test = Select();
  console.log(test);
  if (test) {
    if (test == currentQuizes.answer) {
      score++;
    }
    currentQuiz++;
    if (currentQuiz < quizData.length) {
      loadQuiz();
    } else {
      results.innerHTML = `
      <h2>Your result is ${score} over ${quizData.length}</h2>
      <button onClick=location.reload()>Reload Question</button>
      `;
    }
  }
});

loadQuiz();
