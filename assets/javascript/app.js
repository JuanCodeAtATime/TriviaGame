$(document).ready(function () {



    //The 'Corrects' variable is counted during the game
    // and displayed after the last (10th) question.

    let corrects = 0;

    //The tenSeconds() function initiates the setInterval for the 10 second timer.  
    //This setInterval function controls the :10 second timers of all 10 questions.

    function tenSeconds() {
        tenSecTimer = 10;
        countdown = setInterval(function () {
            document.getElementById("timer").innerHTML = "You have &nbsp :" + tenSecTimer + "&nbsp &nbsp seconds left.";
            tenSecTimer -= 1;
            // console.log(tenSecTimer)
            if (tenSecTimer <= -0.5) {
                qReset();
                document.getElementById("choices").innerHTML = "";
                timeRanOut();

            }

        }, 1000);
    }

    function qReset() {
        clearInterval(countdown);

    }

    //This ID for Start Game controls the green Start button on the home screen
    //It disappears upon click.

    $("#startGameBtn").click(function () {
        startGame();
    });

    //This function initiates the game and dynamically generates the 1st of 10 questions.
    function startGame() {
        document.getElementById("disappear").innerHTML = "";
        document.getElementById("question1").innerHTML = questions[0];
        document.getElementById("choices").innerHTML = choices0;
        document.getElementById("skipBtn").innerHTML = skipBtns[0];
        tenSeconds();


    }

    //This function informs the User that they answered correctly, and it increments 
    //the 'Corrects' by 1
    function correctAnswer() {
        corrects++
        document.getElementById("msg2").innerHTML = "Correct";
        document.getElementById("choices").innerHTML = "";
        document.getElementById("skipBtn").innerHTML = "";
        qReset();


    }

    //This function informs the User that they answered incorrectly
    function incorrectAnswer() {
        document.getElementById("msg2").innerHTML = "Sorry. That's incorrect.";
        document.getElementById("choices").innerHTML = "";
        document.getElementById("skipBtn").innerHTML = "";
        qReset();

    }

    //This timeRanOut function informs the User that their time ran out.  
    //It also hides all buttons except for the 'Next' button, prompting 
    //the User to advance to the next question.

    function timeRanOut() {
        document.getElementById("timer").innerHTML = "Time's Up! Press Next to continue.";
        document.getElementById("choices").innerHTML = "";
        qReset();

    }

    //All ten questions were placed in a single array.

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

    let choices2 = ['<button type="button" class="btn-primary" id="iA3">Donuts & Other pastries</button>',
        '<button type="button" class="btn-primary" id="cA3">Lean meats & Eggs</button>',
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

    //The NEXT buttons were assigned a different ID as I wanted the answer choices
    // to disappear upon ten-sec timer expiration.

    let skipBtns = ['<button type="button" class="btn-success" id="skip0">NEXT</button>',
        '<button type="button" class="btn-success" id="skip1">NEXT</button>',
        '<button type="button" class="btn-success" id="skip2">NEXT</button>',
        '<button type="button" class="btn-success" id="skip3">NEXT</button>',
        '<button type="button" class="btn-success" id="skip4">NEXT</button>',
        '<button type="button" class="btn-success" id="skip5">NEXT</button>',
        '<button type="button" class="btn-success" id="skip6">NEXT</button>',
        '<button type="button" class="btn-success" id="skip7">NEXT</button>',
        '<button type="button" class="btn-success" id="skip8">NEXT</button>',
        '<button type="button" class="btn-success" id="skip9">NEXT</button>']

    // Buttons below represent all correct, incorrect, and next answer choices.
    // User will receive immediate feedback on their response.  
    // Whether correct or incorrect, both responses have a three second delay (setTimeout),
    // then advance to next question without User input (as specified in Homework Instructions).


    $("#choices").on("click", "#cA1", function () {
        correctAnswer();
        qReset()
        setTimeout(threeSecDelay0, 3000);

    })

    $("#choices").on("click", "#iA1", function () {
        incorrectAnswer();
        qReset()
        setTimeout(threeSecDelay0, 3000);
    })

    $("#skipBtn").on("click", "#skip0", function () {
        qReset()
        setTimeout(threeSecDelay0, 3000);
    })


    $("#choices").on("click", "#cA2", function () {
        correctAnswer();
        qReset()
        setTimeout(threeSecDelay1, 3000);

    })

    $("#choices").on("click", "#iA2", function () {
        incorrectAnswer();
        qReset()
        setTimeout(threeSecDelay1, 3000);
    })

    $("#skipBtn").on("click", "#skip1", function () {
        qReset()
        setTimeout(threeSecDelay1, 3000);
    })


    $("#choices").on("click", "#cA3", function () {
        correctAnswer();
        qReset()
        setTimeout(threeSecDelay2, 3000);

    })

    $("#choices").on("click", "#iA3", function () {
        incorrectAnswer();
        qReset()
        setTimeout(threeSecDelay2, 3000);
    })

    $("#skipBtn").on("click", "#skip2", function () {
        qReset()
        setTimeout(threeSecDelay2, 3000);
    })


    $("#choices").on("click", "#cA4", function () {
        correctAnswer();
        qReset()
        setTimeout(threeSecDelay3, 3000);

    })

    $("#choices").on("click", "#iA4", function () {
        incorrectAnswer();
        qReset()
        setTimeout(threeSecDelay3, 3000);

    })

    $("#skipBtn").on("click", "#skip3", function () {
        qReset()
        setTimeout(threeSecDelay3, 3000);
    })

    $("#choices").on("click", "#cA5", function () {
        correctAnswer();
        qReset()
        setTimeout(threeSecDelay4, 3000);

    })

    $("#choices").on("click", "#iA5", function () {
        incorrectAnswer();
        qReset()
        setTimeout(threeSecDelay4, 3000);
    })

    $("#skipBtn").on("click", "#skip4", function () {
        qReset()
        setTimeout(threeSecDelay4, 3000);
    })


    $("#choices").on("click", "#cA6", function () {
        correctAnswer();
        qReset()
        setTimeout(threeSecDelay5, 3000);

    })

    $("#choices").on("click", "#iA6", function () {
        incorrectAnswer();
        qReset()
        setTimeout(threeSecDelay5, 3000);

    })
    $("#skipBtn").on("click", "#skip5", function () {
        qReset()
        setTimeout(threeSecDelay5, 3000);
    })


    $("#choices").on("click", "#cA7", function () {
        correctAnswer();
        qReset()
        setTimeout(threeSecDelay6, 3000);

    })

    $("#choices").on("click", "#iA7", function () {
        incorrectAnswer();
        qReset()
        setTimeout(threeSecDelay6, 3000);
    })

    $("#skipBtn").on("click", "#skip6", function () {
        qReset()
        setTimeout(threeSecDelay6, 3000);
    })

    $("#choices").on("click", "#cA8", function () {
        correctAnswer();
        qReset()
        setTimeout(threeSecDelay7, 3000);
    })

    $("#choices").on("click", "#iA8", function () {
        incorrectAnswer();
        qReset()
        setTimeout(threeSecDelay7, 3000);
    })

    $("#skipBtn").on("click", "#skip7", function () {
        qReset()
        setTimeout(threeSecDelay7, 3000);
    })

    $("#choices").on("click", "#cA9", function () {
        correctAnswer();
        qReset()
        setTimeout(threeSecDelay8, 3000);
    })

    $("#choices").on("click", "#iA9", function () {
        incorrectAnswer();
        qReset()
        setTimeout(threeSecDelay8, 3000);
    })
    $("#skipBtn").on("click", "#skip8", function () {
        qReset()
        setTimeout(threeSecDelay8, 3000);
    })


    $("#choices").on("click", "#cA10", function () {
        correctAnswer();
        qReset()
        setTimeout(threeSecDelay9, 3000);
    })

    $("#choices").on("click", "#iA10", function () {
        incorrectAnswer();
        qReset()
        setTimeout(threeSecDelay9, 3000);
    })
    $("#skipBtn").on("click", "#skip9", function () {
        qReset()
        setTimeout(threeSecDelay9, 3000);
    })

    //Functions below clear the previous question after a three-second delay and
    //generates the next question and answer choices.

    function threeSecDelay0() {
        document.getElementById("msg2").innerHTML = "";
        document.getElementById("question1").innerHTML = questions[1];
        document.getElementById("choices").innerHTML = choices1;
        document.getElementById("skipBtn").innerHTML = skipBtns[1]
        tenSeconds();


    }

    function threeSecDelay1() {
        document.getElementById("msg2").innerHTML = "";
        document.getElementById("question1").innerHTML = questions[2];
        document.getElementById("choices").innerHTML = choices2;
        document.getElementById("skipBtn").innerHTML = skipBtns[2]
        tenSeconds();

    }

    function threeSecDelay2() {
        document.getElementById("msg2").innerHTML = "";
        document.getElementById("question1").innerHTML = questions[3];
        document.getElementById("choices").innerHTML = choices3;
        document.getElementById("skipBtn").innerHTML = skipBtns[3]
        tenSeconds();


    }

    function threeSecDelay3() {
        document.getElementById("msg2").innerHTML = "";
        document.getElementById("question1").innerHTML = questions[4];
        document.getElementById("choices").innerHTML = choices4;
        document.getElementById("skipBtn").innerHTML = skipBtns[4];
        tenSeconds();

    }

    function threeSecDelay4() {
        document.getElementById("msg2").innerHTML = "";
        document.getElementById("question1").innerHTML = questions[5];
        document.getElementById("choices").innerHTML = choices5;
        document.getElementById("skipBtn").innerHTML = skipBtns[5]
        tenSeconds();



    }


    function threeSecDelay5() {
        document.getElementById("msg2").innerHTML = "";
        document.getElementById("question1").innerHTML = questions[6];
        document.getElementById("choices").innerHTML = choices6;
        document.getElementById("skipBtn").innerHTML = skipBtns[6]
        tenSeconds();

    }

    function threeSecDelay6() {
        document.getElementById("msg2").innerHTML = "";
        document.getElementById("question1").innerHTML = questions[7];
        document.getElementById("choices").innerHTML = choices7;
        document.getElementById("skipBtn").innerHTML = skipBtns[7];
        tenSeconds();

    }

    function threeSecDelay7() {
        document.getElementById("msg2").innerHTML = "";
        document.getElementById("question1").innerHTML = questions[8];
        document.getElementById("choices").innerHTML = choices8;
        document.getElementById("skipBtn").innerHTML = skipBtns[8]
        tenSeconds();

    }

    function threeSecDelay8() {
        document.getElementById("msg2").innerHTML = "";
        document.getElementById("question1").innerHTML = questions[9];
        document.getElementById("choices").innerHTML = choices9;
        document.getElementById("skipBtn").innerHTML = skipBtns[9]
        tenSeconds();


    }

    //Last function below (threeSecDelay9) displays score 
    //with comments based on their correct questions.

    function threeSecDelay9() {
        document.getElementById("msg2").innerHTML = "";

        if (corrects >= 7) {
            document.getElementById("question1").innerHTML = "Sweet!  You got &nbsp " + corrects + " &nbsp out of 10 correct.";
            document.getElementById("timer").innerHTML = "Thanks for playing NUTRITION FACTS!";

        }
        else if (corrects === 10) {
            document.getElementById("question1").innerHTML = "You Rock!  You got a perfect &nbsp " + corrects + " &nbsp out of 10 correct.";
            document.getElementById("timer").innerHTML = "Thanks for playing NUTRITION FACTS!";
        }
        else {
            document.getElementById("question1").innerHTML = "You got &nbsp" + corrects + " &nbsp out of 10 correct.  Better luck next time, kiddo.";
            document.getElementById("timer").innerHTML = "Thanks for playing NUTRITION FACTS!";
        }

        document.getElementById("choices").innerHTML = "";
        console.log('Final message with thank you and score.');

    }




});


