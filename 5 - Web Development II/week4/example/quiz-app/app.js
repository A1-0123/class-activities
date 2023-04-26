let index = 0;
let score = 0;
let submitted = false;
let questions = [
    {
        "question": "What is the capital of France ?",
        "choices": ["London", "Paris", "Berlin"],
        "answer": 1
    },
    {
        "question": "What is the highest mountain in the world ?",
        "choices": ["Everest", "K2", "Makalu"],
        "answer": 0
    },
    {
        "question": "Who invented the telephone ?",
        "choices": ["Alexander Graham Bell", "Thomas Edison", "Nikola Tesla"],
        "answer": 0
    }
];

// $.getJSON("./data/data.json", (data) => {
//     console.log(data);
//     questions = data;
//     console.log(questions);
// })

// console.log(questions); 
// why we are not able to get questions here ?
// how to fix this issue ?

function showQuestion() {
    $("#question").text(questions[index].question);
    $("#choices").empty();
    for(let i = 0; i < questions[index].choices.length; i++){
        $("#choices").append(
            "<li><input type='radio' name='choice' value='"+ i +"' />" + "<span>" + questions[index].choices[i] + "</span>" + "</li>"
        )
    }
}

function checkAnswers () {
    let selected = $("input[name='choice']:checked").val();
    if(!selected){
        alert("Please select an answer!")
        return;
    }
    submitted = true;
    $("#btn-submit").attr("disabled", true);
    if(selected == questions[index].answer){
        score++;
        $("#result").html("Correct!").css("color", "green").fadeIn();
    }else {
        $("#result").html("Incorrect! The correct answer is " + questions[index].choices[questions[index].answer]).css("color", "red").fadeIn();
    }
}

function nextQuestion() {
    index++;
    if(index >= questions.length){
        $("#question").text("Quiz Completed!");
        $("#choices").html("");
        $("#btn-submit").attr("disabled", true);
        $("#btn-next").attr("disabled", true);
        $("#result").html("Your score " + score + " out of " + questions.length).css("color", "black").fadeIn();
    }else{
        submitted = false;
        $("#btn-submit").attr("disabled", false);
        $("#result").fadeOut();
        showQuestion();
    }
}

$("#btn-submit").click(() => {
    if(!submitted){
        checkAnswers();
    }
})

$("#btn-next").click(() => nextQuestion())

showQuestion();