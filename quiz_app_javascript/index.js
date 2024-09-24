const questions = [
    {
        //first question
        question : "which is largest animal ?",
        answers:
        [
            {text:"shark", correct:false},
            {text:"blue whale", correct:true},
            {text:"horse", correct:false},
            {text:"mouse", correct:false}
               
        ]
    },
//secound question
    {

        question: "what is my name ?",

        answers:
        [
            {text:"harsh" , correct:true},
            {text:"barash" , correct:false},
            {text:"yash" , correct:false},
            {text:"dakshta" , correct:false},
        ]
    },


    {

        question: "how many continents are there in the world ?",

        answers:
        [
            
            {text:"3" , correct:false},
            {text:"10" , correct:false},
            {text:"7" , correct:true},
            {text:"none" , correct:false},

            
        ]
    },


];

const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer_button");
const nextbutton = document.getElementById("next-btn");

let currentQuestionIndex = 0;

let score = 0;

function  startQuiz()
{
    currentQuestionIndex = 0;
    score = 0;
    nextbutton.innerHTML = "Next";
    showQuestion();
    console.log(currentQuestionIndex);
    console.log(score);
}

function showQuestion()
{
    resetState();
    //it will be like     question[0]
    //                    quetion[1]...
    let currentQuestion = questions[currentQuestionIndex];
let questionNO = currentQuestionIndex + 1;
questionElement.innerHTML = questionNO + ". " + currentQuestion.question;

currentQuestion.answers.forEach(answer => 
{
    const button = document.createElement("button");
    button.innerHTML = answer.text;
    button.classList.add("btn"); // adds the class 'btn' to button
    answerButtons.appendChild(button);// 

    if(answer.correct)
    { /// what ??
        button.dataset.correct = answer.correct;
    }
    button.addEventListener("click"  , selectAnswer)

});

}


function resetState()
{
    nextbutton.style.display = "none";
    while(answerButtons.firstChild)
    {
        answerButtons.removeChild(answerButtons.firstChild);
    }
}

function selectAnswer(e)
{
    const selectedBtn = e.target;
    const iscorrect = selectedBtn.dataset.correct === "true";


    if(iscorrect)
    {
        selectedBtn.classList.add("correct");
        score++;
        
    }
    else{
        selectedBtn.classList.add("incorrect");

    }



    Array.from(answerButtons.children).forEach(button =>
    {
        if(button.dataset.correct === "ture")
        {
            button.classList.add("correct");

           
        }
       
        

        button.disabled = true;

    });
    nextbutton.style.display = "block";
}

function ShowScore()
{
    currentQuestionIndex
    questionElement.innerHTML = `you socred ${score} out of ${questions.length} questions`;
    nextbutton.innerHTML = "play again";
    nextbutton.style.display = "block"
}
function handleNextButton()
{
    currentQuestionIndex++;
    
    if(currentQuestionIndex < questions.length)
    {
        showQuestion();
    }
    else{
        ShowScore();
    }
}

 nextbutton.addEventListener("click", ()  =>
{

    if(currentQuestionIndex < questions.length)
    {
        handleNextButton();
    }
    else{
        startQuiz();
    }
    
    
});


startQuiz();









