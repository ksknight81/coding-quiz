// select all elements
var start = document.getElementById("startbtn");
//const quiz = document.getElementById("quiz");
const question = document.getElementById("question");
const choiceA = document.getElementById("A");
const choiceB = document.getElementById("B");
const choiceC = document.getElementById("C");
const choiceD = document.getElementById("D");


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
        correct: "A"
    },
    {
        question: "Arrays in JavaScript can be used to store _____.",
        choiceA: "numbers and strings",
        choiceB: "other arrays",
        choiceC: "booleans",
        choiceD: "all of the above",
        correct: "A"
    },
    {
        question: "String values must be enclosed within _____ when being assigned to variables.",
        choiceA: "commas",
        choiceB: "curly brackets",
        choiceC: "quotes",
        choiceD: "parenthesis",
        correct: "A"
    },
    {
        question: "A very useful tool used during development and debugging for printing content to the debugger is:",
        choiceA: "JavaScript",
        choiceB: "terminal/bash",
        choiceC: "for loops",
        choiceD: "console.log",
        correct: "A"
    }
];
// timer countdown variable
var timer = document.getElementById(startbtn);
var counter = 75;

var countDownTimer = function (){
//         
setInterval(function() {
    counter--;
    if (counter >= 0) {
        timer.innerHTML = counter;
    };
    if (counter == 0) {
        question1.textContent = "";
        answer1.textContent = "";
        answer2.textContent = "";
        answer3.textContent = "";
        answer4.textContent = "";
    } 
    }, 1000);
};

// restart quiz
var playAgain = function (){
    counter = counter * 0 + 75;
    finalScore = finalScore * 0 + 3;
    textInput.style.display = "none";
    startQuiz();
};
    
// variables used to calculate how many questions are left
const lastQuestion = questions.length - 1;
let runningQuestion = 0;

// question function
function renderQuestion(){
        let q = questions[runningQuestion];
        question.innerHTML = q.question;
        choiceA.innerHTML = q.choiceA;
        choiceB.innerHTML = q.choiceB;
        choiceC.innerHTML = q.choiceC;
        choiceD.innerHTML = q.choiceD;
        console.log(choiceD)
    }
    
//start.style.display = "none";

//quiz.style.display = "block";

//render progress



    // score calculation
    let score = 0;

// check answer function
function checkAnswer(answer){
        if(answer == questions[runningQuestionIndex].correct) {
            // answer is correct
            score++;
        }else{
            // answer is wrong
            countDownTimer - 1000;
        }
        if(runningQuestionIndex < lastQuestionIndex){
            count = 0;
            runningQuestionIndex++;
            questionRender();
        }else{
            scoreRender();
        }
    }


function startQuiz() {
        startQuiz.addEventListener("click", startbtn);      
}
    // start the game
var startQuiz = function(){
    countDownTimer();
    renderQuestion();
}

  
   