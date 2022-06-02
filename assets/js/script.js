// select all elements
var start = document.querySelector("startbtn");
//const quiz = document.getElementById("quiz");
const question = document.getElementById("question");
const choiceA = document.getElementById("A");
const choiceB = document.getElementById("B");
const choiceC = document.getElementById("C");
const choiceD = document.getElementById("D");
const begin = document.getElementById("begin");
const quiz = document.getElementById("quiz");
const end = document.getElementById("end");

// javascript questions
var questions = [
  {
    question: "Commonly used data types DO NOT include:",
    choiceA: "strings",
    choiceB: "booleans",
    choiceC: "alerts",
    choiceD: "numbers",
    correct: "A",
  },
  {
    question: "The condition in an if/else statement is enclosed with ______.",
    choiceA: "quotes",
    choiceB: "curly brackets",
    choiceC: "parenthesis",
    choiceD: "square brackets",
    correct: "A",
  },
  {
    question: "Arrays in JavaScript can be used to store _____.",
    choiceA: "numbers and strings",
    choiceB: "other arrays",
    choiceC: "booleans",
    choiceD: "all of the above",
    correct: "A",
  },
  {
    question:
      "String values must be enclosed within _____ when being assigned to variables.",
    choiceA: "commas",
    choiceB: "curly brackets",
    choiceC: "quotes",
    choiceD: "parenthesis",
    correct: "A",
  },
  {
    question:
      "A very useful tool used during development and debugging for printing content to the debugger is:",
    choiceA: "JavaScript",
    choiceB: "terminal/bash",
    choiceC: "for loops",
    choiceD: "console.log",
    correct: "A",
  },
];
// timer countdown variable
var timer = document.getElementById("timer");
var counter = 75;
var timerInterval;
var countDownTimer = function () {

  // setting the timer to countdown 1 second

  timerInterval = setInterval(function () {
    counter--;
    timer.innerHTML = counter;
    if (counter <= 0) {
      clearInterval(timerInterval);
      scoreRender();
    }
  }, 1000);
};

// restart quiz
var playAgain = function () {
  counter = counter * 0 + 75;
  finalScore = finalScore * 0 + 3;
  textInput.style.display = "none";
  startQuiz();
};

// variables used to calculate how many questions are left

let runningQuestion = 0;

// question function
function renderQuestion() {
  let q = questions[runningQuestion];
  question.innerHTML = q.question;
  choiceA.innerHTML = q.choiceA;
  choiceB.innerHTML = q.choiceB;
  choiceC.innerHTML = q.choiceC;
  choiceD.innerHTML = q.choiceD;
}

//start.style.display = "none";

//quiz.style.display = "block";

//render progress
function renderScore(){
  quiz.style.display = "none";
  end.style.display = "block";
}

// score calculation
let score = 0;

// check answer function
function checkAnswer(answer) {
  if (answer == questions[runningQuestion].correct) {
    // answer is correct
    score++;
  } else {
    // answer is wrong
    counter -= 10;
  }
  runningQuestion++;
  if (runningQuestion < questions.length) {
    count = 0;
    renderQuestion();
  } else {
    renderScore();
  }
}

// start the game
var startQuiz = function () {
  begin.style.display = "none";
  quiz.style.display = "block";
  var finalScore = document.getElementById("finalScore");
  finalScore.innerText = score; 
  countDownTimer();
  renderQuestion();
};

startbtn.addEventListener("click", startQuiz);
var history = JSON.parse(localStorage.getItem("history")) || []
var playerName = document.getElementById("playerName");

playerName.addEventListener("submit", function(event){
  event.preventDefault();
  var initials = document.getElementById("text-input");
  var newScore = {initials:initials, score:score};
  history.push(newScore);
  localStorage.setItem(JSON.stringify("history"));
})
