$(document).ready(function () {

    //Green Start Game Button initiates the :10 second timer on click; 
    //It also hides the button and reveals the first question
    $("#startGameBtn").click(function () {
        startGame();
        let tenSecTimer = 10;
        let resetTimer = setInterval(function () {
            document.getElementById("timer").innerHTML = "You have &nbsp :" + tenSecTimer + "&nbsp &nbsp seconds left.";
            tenSecTimer -= 1;
            if (tenSecTimer <= -0.5) {
                clearInterval(resetTimer);
                document.getElementById("timer").innerHTML = ":00";
                // Code below this line is to test the countdown timer#s ability to trigger an action upon countdown
                // document.getElementById("trivia").innerHTML = "What's your favorite scary movie?";

            }
        }, 1000);


        console.log(tenSecTimer);
    });


    function startGame() {
        document.getElementById("disappear").innerHTML = "";
        document.getElementById("question1").innerHTML = questions[0];
        document.getElementById("choices").innerHTML = choices0;
        // document.getElementById("choices").innerHTML = questionCount;

    }
    function correctAnswer() {
        document.getElementById("msg2").innerHTML = "Correct";
        document.getElementById("choices").innerHTML = "";
        //Commenting out Score variable until I get it to work
        // document.getElementById("score").innerHTML = "";

    }

    function incorrectAnswer() {
        document.getElementById("msg2").innerHTML = "Sorry. That's incorrect.";
        document.getElementById("choices").innerHTML = "";

    }


    let questions = ["1. &nbsp Avocados, walnuts, and almonds are good sources of?",
        "2. &nbsp Frequent consumption of sugar-sweetened beverages in non-active individuals is associated with:",
        "3. &nbsp An excellent source of protein for lean muscle mass includes:",
        "4. &nbsp Sweet Potatoes and carrots are great sources of?",
        "5. &nbsp  Starchy foods such as rice, root vegetables, and pasta are good sources of?",
        "6. &nbsp  Which term below does not represent a type of sugar?",
        "7. &nbsp  The term 'Calorie' is synonomous with...",
        "8. &nbsp  This nutrient is important for digestion and regularity.",
        "9. &nbsp  Amino Acids are the building blocks of which macronutrient?",
        "10. &nbsp Sucrose is the technical term for...?"];

    //ID names cA and iA stand for "correct answer" & incorrect answer, respectively.
    let choices0 = ['<button type="button" class="btn-primary" id="cA1">Healthy Fats</button>',
        '<button type="button" class="btn-primary" id="iA1">Unwanted weight gain</button>',
        '<button type="button" class="btn-primary" id="iA1">Bad Calories</button>',
        '<button type="button" class="btn-primary" id="iA1">Good Carbs</button>'];

    let choices1 = ['<button type="button" class="btn-primary" id="iA2">Lean muscle mass</button>',
        '<button type="button" class="btn-primary" id="iA2">Improved focus</button>',
        '<button type="button" class="btn-primary" id="iA2">Weightloss</button>',
        '<button type="button" class="btn-primary" id="cA2">Obesity</button>'];

    let choices2 = ['<button type="button" class="btn-primary" id="iA3">donuts & other pastries</button>',
        '<button type="button" class="btn-primary" id="cA3">lean meats & eggs</button>',
        '<button type="button" class="btn-primary" id="iA3">Coffee</button>',
        '<button type="button" class="btn-primary" id="iA3">Energy drinks</button>'];

    let choices3 = ['<button type="button" class="btn-primary" id="cA4">Vitamin A, to support good vision.</button>',
        '<button type="button" class="btn-primary" id="iA4">Vitamin D, to support bone health</button>',
        '<button type="button" class="btn-primary" id="iA4">Protein, for lean muscle mass</button>',
        '<button type="button" class="btn-primary" id="iA4">Caffeine, for extra energy</button>'];



    let choices4 = ['<button type="button" class="btn-primary" id="iA5">Bone marrow</button>',
        '<button type="button" class="btn-primary" id="iA5">Vitamin D, to support bone health</button>',
        '<button type="button" class="btn-primary" id="iA5">Protein, for lean muscle mass</button>',
        '<button type="button" class="btn-primary" id="cA5">Carbohydrates, for energy</button>'];

    let choices5 = ['<button type="button" class="btn-primary" id="iA6">Sucrose</button>',
        '<button type="button" class="btn-primary" id="cA6">Grandiose</button>',
        '<button type="button" class="btn-primary" id="iA6">Maltose</button>',
        '<button type="button" class="btn-primary" id="iA6">Fructose</button>'];


    let choices6 = ['<button type="button" class="btn-primary" id="iA7">Gram</button>',
        '<button type="button" class="btn-primary" id="cA7">Energy</button>',
        '<button type="button" class="btn-primary" id="iA7">Dietary Fat</button>',
        '<button type="button" class="btn-primary" id="iA7">Pounds</button>'];

    let choices7 = ['<button type="button" class="btn-primary" id="cA8">Fiber</button>',
        '<button type="button" class="btn-primary" id="iA8">Vitamin D</button>',
        '<button type="button" class="btn-primary" id="iA8">Pepto Bismol</button>',
        '<button type="button" class="btn-primary" id="iA8">Iron</button>'];

    let choices8 = ['<button type="button" class="btn-primary" id="iA9">Carbohydrates</button>',
        '<button type="button" class="btn-primary" id="iA9">Fats</button>',
        '<button type="button" class="btn-primary" id="iA9">Amino Walls</button>',
        '<button type="button" class="btn-primary" id="cA9">Protein</button>'];

    let choices9 = ['<button type="button" class="btn-primary" id="iA10">Vitamin A</button>',
        '<button type="button" class="btn-primary" id="iA10">Artificial Sweetners</button>',
        '<button type="button" class="btn-primary" id="iA10">Himalayan Salt</button>',
        '<button type="button" class="btn-primary" id="cA10">Table Sugar</button>'];

    let score = 0;

    // let questionCount = 0;
    // questionCount++


    // Buttons below represent all correct and incorrect answer choices.  
    // Each question initiates one of two events:
    // Either: Correct, push 'Next' button to advance to next question || 
    // Incorrect, push 'Next' button to advance to next question

    $("#choices").on("click", "#cA1", function () {
        correctAnswer();
        document.getElementById("msg3").innerHTML = '<button class="btn btn-success btn-lg" role="button" id="nextQ">Next</button>';
        score++
        console.log('hitting new clicker')
        // alert('hitting ca1 id')
        // alert("Your score:" + score);
    })

    $("#choices").on("click", "#iA1", function () {
        incorrectAnswer();
        document.getElementById("msg3").innerHTML = '<button class="btn btn-success btn-lg" role="button" id="nextQ">Next</button>';
        console.log('Sorry. Wrong answer.');

    })

    $("#choices").on("click", "#cA2", function () {
        correctAnswer();
        document.getElementById("msg3").innerHTML = '<button class="btn btn-success btn-lg" role="button" id="nextQ2">Next</button>';
        score++
        console.log('hitting new clicker')
        // alert('hitting ca1 id')
        // alert("Your score:" + score);
    })

    $("#choices").on("click", "#iA2", function () {
        incorrectAnswer();
        document.getElementById("msg3").innerHTML = '<button class="btn btn-success btn-lg" role="button" id="nextQ2">Next</button>';
        console.log('Sorry. Wrong answer.');

    })

    $("#choices").on("click", "#cA3", function () {
        correctAnswer();
        document.getElementById("msg3").innerHTML = '<button class="btn btn-success btn-lg" role="button" id="nextQ3">Next</button>';
        score++
        console.log('hitting new clicker')
        // alert('hitting ca1 id')
        // alert("Your score:" + score);
    })

    $("#choices").on("click", "#iA3", function () {
        incorrectAnswer();
        document.getElementById("msg3").innerHTML = '<button class="btn btn-success btn-lg" role="button" id="nextQ3">Next</button>';
        console.log('Sorry. Wrong answer.');

    })
    $("#choices").on("click", "#cA4", function () {
        correctAnswer();
        document.getElementById("msg3").innerHTML = '<button class="btn btn-success btn-lg" role="button" id="nextQ4">Next</button>';
        score++
        console.log('Q4. Correct Answer')
        // alert('hitting ca1 id')
        // alert("Your score:" + score);
    })

    $("#choices").on("click", "#iA4", function () {
        incorrectAnswer();
        document.getElementById("msg3").innerHTML = '<button class="btn btn-success btn-lg" role="button" id="nextQ4">Next</button>';
        console.log('Sorry. Wrong answer.');

    })
    $("#choices").on("click", "#cA5", function () {
        correctAnswer();
        document.getElementById("msg3").innerHTML = '<button class="btn btn-success btn-lg" role="button" id="nextQ5">Next</button>';
        score++
        console.log('Q5. Correct Answer')
        // alert('hitting ca1 id')
        // alert("Your score:" + score);
    })

    $("#choices").on("click", "#iA5", function () {
        incorrectAnswer();
        document.getElementById("msg3").innerHTML = '<button class="btn btn-success btn-lg" role="button" id="nextQ5">Next</button>';
        console.log('Sorry. Wrong answer.');

    })

    $("#choices").on("click", "#cA6", function () {
        correctAnswer();
        document.getElementById("msg3").innerHTML = '<button class="btn btn-success btn-lg" role="button" id="nextQ6">Next</button>';
        score++
        console.log('Q5. Correct Answer')
        // alert('hitting ca1 id')
        // alert("Your score:" + score);
    })

    $("#choices").on("click", "#iA6", function () {
        incorrectAnswer();
        document.getElementById("msg3").innerHTML = '<button class="btn btn-success btn-lg" role="button" id="nextQ6">Next</button>';
        console.log('Sorry. Wrong answer.');

    })

    $("#choices").on("click", "#cA7", function () {
        correctAnswer();
        document.getElementById("msg3").innerHTML = '<button class="btn btn-success btn-lg" role="button" id="nextQ7">Next</button>';
        score++
        console.log('Q5. Correct Answer')
        // alert('hitting ca1 id')
        // alert("Your score:" + score);
    })

    $("#choices").on("click", "#iA7", function () {
        incorrectAnswer();
        document.getElementById("msg3").innerHTML = '<button class="btn btn-success btn-lg" role="button" id="nextQ7">Next</button>';
        console.log('Sorry. Wrong answer.');

    })

    $("#choices").on("click", "#cA8", function () {
        correctAnswer();
        document.getElementById("msg3").innerHTML = '<button class="btn btn-success btn-lg" role="button" id="nextQ8">Next</button>';
        score++
        console.log('Q5. Correct Answer')
        // alert('hitting ca1 id')
        // alert("Your score:" + score);
    })

    $("#choices").on("click", "#iA8", function () {
        incorrectAnswer();
        document.getElementById("msg3").innerHTML = '<button class="btn btn-success btn-lg" role="button" id="nextQ8">Next</button>';
        console.log('Sorry. Wrong answer.');

    })
    $("#choices").on("click", "#cA9", function () {
        correctAnswer();
        document.getElementById("msg3").innerHTML = '<button class="btn btn-success btn-lg" role="button" id="nextQ9">Next</button>';
        score++
        console.log('Q5. Correct Answer')
        // alert('hitting ca1 id')
        // alert("Your score:" + score);
    })

    $("#choices").on("click", "#iA9", function () {
        incorrectAnswer();
        document.getElementById("msg3").innerHTML = '<button class="btn btn-success btn-lg" role="button" id="nextQ9">Next</button>';
        console.log('Sorry. Wrong answer.');

    })


    //Below are the green 'Next' buttons that advance User to next question


    $("#msg3").on("click", "#nextQ", function () {
        document.getElementById("msg2").innerHTML = "";
        document.getElementById("question1").innerHTML = questions[1];
        document.getElementById("choices").innerHTML = choices1;
        console.log('Moving to question 2.');

    })

    $("#msg3").on("click", "#nextQ2", function () {
        document.getElementById("msg2").innerHTML = "";
        document.getElementById("question1").innerHTML = questions[2];
        document.getElementById("choices").innerHTML = choices2;
        console.log('Moving to question 3.');
        console.log('test for Q3 next button');
        // alert('hitting ca1 id')
        // alert("Your score:" + score);
    })

    $("#msg3").on("click", "#nextQ3", function () {
        document.getElementById("msg2").innerHTML = "";
        document.getElementById("question1").innerHTML = questions[3];
        document.getElementById("choices").innerHTML = choices3;
        console.log('This is question 4.');
        console.log('test for Q4 next button');

    })

    $("#msg3").on("click", "#nextQ4", function () {
        document.getElementById("msg2").innerHTML = "";
        document.getElementById("question1").innerHTML = questions[4];
        document.getElementById("choices").innerHTML = choices4;
        console.log('Moving to question 5.');

        // alert('hitting ca1 id')
        // alert("Your score:" + score);
    })

    $("#msg3").on("click", "#nextQ5", function () {
        document.getElementById("msg2").innerHTML = "";
        document.getElementById("question1").innerHTML = questions[5];
        document.getElementById("choices").innerHTML = choices5;
        console.log('Moving to question 6.');

    })


    $("#msg3").on("click", "#nextQ6", function () {
        document.getElementById("msg2").innerHTML = "";
        document.getElementById("question1").innerHTML = questions[6];
        document.getElementById("choices").innerHTML = choices6;
        console.log('Moving to question 6.');

    })

    $("#msg3").on("click", "#nextQ7", function () {
        document.getElementById("msg2").innerHTML = "";
        document.getElementById("question1").innerHTML = questions[7];
        document.getElementById("choices").innerHTML = choices7;
        console.log('Moving to question 6.');

    })

    $("#msg3").on("click", "#nextQ8", function () {
        document.getElementById("msg2").innerHTML = "";
        document.getElementById("question1").innerHTML = questions[8];
        document.getElementById("choices").innerHTML = choices8;
        console.log('Moving to question 6.');

    })

    $("#msg3").on("click", "#nextQ9", function () {
        document.getElementById("msg2").innerHTML = "";
        document.getElementById("question1").innerHTML = questions[9];
        document.getElementById("choices").innerHTML = choices9;
        console.log('Moving to question 6.');

    })

    //Last 'Next' button below will take User to final screen that displays Score and 'Thank You' message












    // let answer02 = ["Obesity/Unwanted weight gain", "Lean muscle mass", "Beachbody", "Weightloss"]




});