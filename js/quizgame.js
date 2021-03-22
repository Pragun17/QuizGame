//declare all variables
var start = document.getElementById("start");
var quiz = document.getElementById("quiz");
var quizQuestion = document.getElementById("quizQuestion");
var quizImg = document.getElementById("quizImg");
var optionA = document.getElementById("choiceA");
var optionB = document.getElementById("choiceB");
var optionC = document.getElementById("choiceC");
var optionD = document.getElementById("choiceD");
var scoreBlock = document.getElementById("scoreBlock");
var scoreMessage = document.getElementById("scoreMessage");
var quizAgain = document.getElementById("quizAgain");
var choices = document.getElementById("choices");
var choiceResponse = document.getElementById("choiceResponse");
var score = 0;

//questions function so our getQuestion function later can get the right value from array

let questions = [{
    question: "Which of the following is a window not used in FIR filter design?",
    
    choiceA: "Hamming",
    choiceB: "Whiteman",
    choiceC: "Blackman",
    choiceD: "Hanning",
    correctAnswer: "B"
}, {
    question: "The approximate transition width of Rectangular Window is",
    
    choiceA: "8π/M",
    choiceB: "12π/M",
    choiceC: "4π/M",
    choiceD: "16π/M",
    correctAnswer: "C"
}, {
    question: "The time domain sequence for a Hamming Window is",
    
    choiceA: "0.54-0.46cos(2πn/M-1)",
    choiceB: "0.5(1-cos(2πn/M-1))",
    choiceC: "1",
    choiceD: "None",
    correctAnswer: "A"
}, {
    question: "The time domain sequence for a Hanning Window is",
    
    choiceA: "0.5(1-cos(2πn/M-1))",
    choiceB: "1",
    choiceC: "0.54-0.46cos(2πn/M-1)",
    choiceD: "None",
    correctAnswer: "A"
}, {
    question: " Which of the following defines the rectangular window function of length M-1?",
    
    choiceA: "w(n)=0, n=0,1,2...M-1 & =1, else where",
    choiceB: "None of the mentioned",
    choiceC: "w(n)=1, n=0,1,2...M-1 & =-1, else where",
    choiceD: "w(n)=1, n=0,1,2...M-1 & =0, else where",
    correctAnswer: "D"
}, {
    question: "With an increase in the value of M, the height of each side lobe ____________",
    
    choiceA: "Do not vary",
    choiceB: "Decreases",
    choiceC: "Increases",
    choiceD: "Does not depend on value of M",
    correctAnswer: "C"
}, {
    question: "What is the approximate transition width of a Blackman Window?",
    
    choiceA: "4π/M",
    choiceB: "12π/M",
    choiceC: "6π/M",
    choiceD: "8π/M",
    correctAnswer: "B"
}, {
    question: "Which of the following windows has a time domain sequence h(n)=1−2|𝑛−(𝑀−1)/2|/𝑀−1?",
    
    choiceA: "Hanning window",
    choiceB: "Hamming window",
    choiceC: "Blackman window",
    choiceD: "Bartlett window",
    correctAnswer: "D"
}, {
    question: "The width of each side lobes decreases with an increase in M.",
    
    choiceA: "True",
    choiceB: "False",
    choiceC: "Both",
    choiceD: "None",
    correctAnswer: "A"
}, {
    question: "The peak side lobe value(in db) of a reactangular window is",
    
    choiceA: "-25",
    choiceB: "-13",
    choiceC: "-31",
    choiceD: "-57",
    correctAnswer: "B"
}, ];


var questionIndex = 0;


// getQuestion function

function getQuestion() {

    choiceResponse.style.display = "none";
    let q = questions[questionIndex];
    quizQuestion.innerHTML = "<p>Question " +(questionIndex+1) + ": " + q.question + "</p>";
    // quizImg.innerHTML = "<img src=" + q.imgSrc + ">";
    optionA.innerHTML = q.choiceA;
    optionB.innerHTML = q.choiceB;
    optionC.innerHTML = q.choiceC;
    optionD.innerHTML = q.choiceD;
    choices.style.display = "block";
}


// start quiz

function beginQuiz() {
    start.style.display ="none";
    getQuestion();
    quiz.style.display = "block";
}

// show score function

function showScore() {
    quiz.style.display = "none";
    scoreBlock.style.display = "block";
    scoreBlock.innerHTML = "<p> You scored " + score + " out of 10!</p>";

    if (score < 4) {
        scoreMessage.innerHTML = "<p>Not so good! Time for some revision.</p>";
    }
    else if (score < 8) {
        scoreMessage.innerHTML = "<p>Pretty good! But still room for improvement.</p>"
    }
    else {
        scoreMessage.innerHTML = "<p>Great work! You really know the concepts!!</p>"
    }
    scoreMessage.style.display = "block";
    quizAgain.style.display = "block";
}


//function to check if answer is correct

function check(answer) {
    if (questionIndex < questions.length - 1) {
        if (answer == questions[questionIndex].correctAnswer) {
            score++;
            questionIndex++;
            choices.style.display = "none";
            choiceResponse.innerHTML= "<p>Correct!</p>"
            choiceResponse.style.display = "block";
            setTimeout(getQuestion,2000);
        }
        else {
            questionIndex++;
            choices.style.display = "none";
            choiceResponse.innerHTML= "<p>Incorrect!</p>"
            choiceResponse.style.display = "block";
            setTimeout(getQuestion,2000);
        }
    }
    else {
        if (answer == questions[questionIndex].correctAnswer) {
            score++;
            choices.style.display = "none";
            choiceResponse.innerHTML= "<p>Correct!</p>"
            choiceResponse.style.display = "block";
            setTimeout(showScore,2000);
        }
        else {
            choices.style.display = "none";
            choiceResponse.innerHTML= "<p>Inorrect!</p>"
            choiceResponse.style.display = "block";
            setTimeout(showScore,2000);
        }
    }
}

function restartQuiz() {
    start.style.display = "block";
    scoreBlock.style.display = "none";
    scoreMessage.style.display = "none";
    quizAgain.style.display = "none";
    score = 0;
    questionIndex = 0;
}
