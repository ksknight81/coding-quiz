
// // timer countdown variable
// var timeLeft = 75;
//     var elem = document.getElementById('countdown');

//     function countdownTimer(){
//         if (timeLeft == -1) {
//             clearTimeout(timerId);
//             doSomething("times up");
//         } else {
//             elem.innerHTML = timeLeft + 'seconds remaining';
//             timeLeft--;
//         }
// }

// select all elements
const start = document.getElementById("start");
const quiz = document.getElementById("quiz");
const question = document.getElementById("question");
const choiceA = document.getElementById("A");
const choiceB = document.getElementById("B");
const choiceC = document.getElementById("C");
const choiceD = document.getElementById("D");



let questions = [
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
    
// variables
const lastQuestion = questions.length - 1;
let runningQuestion = 0;


// question function


function renderQuestion(){
        let q = questions[runningQuestion];
        question.innerHTML = "<p>" + q.question + "</p>";
        choiceA.innerHTML = q.choiceA;
        choiceB.innerHTML = q.choiceB;
        choiceC.innerHTML = q.choiceC;
        choiceD.innerHTML = q.choiceD;
    }
    
//start.style.display = "none";
renderQuestion();
quiz.style.display = "block";

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
            answerIsWrong();
        }
        if(runningQuestionIndex < lastQuestionIndex){
            count = 0;
            runningQuestionIndex++;
            questionRender();
        }else{
            scoreRender();
        }
    }

    function answerIsWrong (){
        Timer - 10000; 
    }

    // start the game
function startQuiz() {
        start.addEventListener("click", startQuiz);
 
}
    startQuiz();
   