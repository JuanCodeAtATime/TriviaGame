$(document).ready(function () {


    //ISSUE 10/17/19 3PM...Need to clearInterval per question Ref:https://stackoverflow.com/questions/109086/stop-setinterval-call-in-javascript?rq=1
    //Green Start Game Button initiates the :10 second timer on click; 
    //It also hides the button and reveals the first question

    $("#startGameBtn").click(function () {
        startGame();
        tenSecTimer = 10;
        resetTimer = setInterval(function () {
            document.getElementById("timer").innerHTML = "You have &nbsp :" + tenSecTimer + "&nbsp &nbsp seconds left.";
            tenSecTimer -= 1;
            if (tenSecTimer <= -0.5) {
                document.getElementById("timer").innerHTML = "Time's Up!";
            }

        }, 1000);


    });

    function startGame() {
        document.getElementById("disappear").innerHTML = "";
        document.getElementById("question1").innerHTML = questions[0];
        document.getElementById("choices").innerHTML = choices0;


        // document.getElementById("choices").innerHTML = questionCount;

    }
    function correctAnswer() {
        score++
        document.getElementById("msg2").innerHTML = "Correct";
        document.getElementById("choices").innerHTML = "";

        //Commenting out Score variable until I get it to work
        // document.getElementById("score").innerHTML = "";

    }

    function incorrectAnswer() {
        incorrects = 0;
        incorrects++;
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

    let score = 0;


    // let questionCount = 0;
    // questionCount++


    // Buttons below represent all correct and incorrect answer choices.  
    // Each question initiates one of two events:
    // Either: Correct, push 'Next' button to advance to next question || 
    // Incorrect, push 'Next' button to advance to next question

    $("#choices").on("click", "#cA1", function () {
        correctAnswer();
        setTimeout(threeSecDelay0, 3000);

    })

    $("#choices").on("click", "#iA1", function () {
        incorrectAnswer();
        setTimeout(threeSecDelay0, 3000);
    })

    $("#choices").on("click", "#cA2", function () {
        correctAnswer();
        setTimeout(threeSecDelay1, 3000);

    })

    $("#choices").on("click", "#iA2", function () {
        incorrectAnswer();
        setTimeout(threeSecDelay1, 3000);
    })

    $("#choices").on("click", "#cA3", function () {
        correctAnswer();
        setTimeout(threeSecDelay2, 3000);

    })

    $("#choices").on("click", "#iA3", function () {
        incorrectAnswer();
        setTimeout(threeSecDelay2, 3000);
    })

    $("#choices").on("click", "#cA4", function () {
        correctAnswer();
        setTimeout(threeSecDelay3, 3000);

    })

    $("#choices").on("click", "#iA4", function () {
        incorrectAnswer();
        setTimeout(threeSecDelay3, 3000);

    })
    $("#choices").on("click", "#cA5", function () {
        correctAnswer();
        setTimeout(threeSecDelay4, 3000);
        score++

    })

    $("#choices").on("click", "#iA5", function () {
        incorrectAnswer();
        setTimeout(threeSecDelay4, 3000);
    })

    $("#choices").on("click", "#cA6", function () {
        correctAnswer();
        setTimeout(threeSecDelay5, 3000);

    })

    $("#choices").on("click", "#iA6", function () {
        incorrectAnswer();
        setTimeout(threeSecDelay5, 3000);

    })

    $("#choices").on("click", "#cA7", function () {
        correctAnswer();
        setTimeout(threeSecDelay6, 3000);

    })

    $("#choices").on("click", "#iA7", function () {
        incorrectAnswer();
        setTimeout(threeSecDelay6, 3000);
    })

    $("#choices").on("click", "#cA8", function () {
        correctAnswer();
        setTimeout(threeSecDelay7, 3000);

    })

    $("#choices").on("click", "#iA8", function () {
        incorrectAnswer();
        setTimeout(threeSecDelay7, 3000);
    })

    $("#choices").on("click", "#cA9", function () {
        correctAnswer();
        setTimeout(threeSecDelay8, 3000);

    })

    $("#choices").on("click", "#iA9", function () {
        incorrectAnswer();
        setTimeout(threeSecDelay8, 3000);
    })

    $("#choices").on("click", "#cA10", function () {
        correctAnswer();
        setTimeout(threeSecDelay9, 3000);
    })

    $("#choices").on("click", "#iA10", function () {
        incorrectAnswer();
        setTimeout(threeSecDelay9, 3000);
    })

    //Below are the green 'Next' buttons that advance User to next question



    function threeSecDelay0() {
        document.getElementById("msg2").innerHTML = "";
        document.getElementById("question1").innerHTML = questions[1];
        document.getElementById("choices").innerHTML = choices1;
        tenSecTimer = 10;
        resetTimer = setInterval(function () {
            document.getElementById("timer").innerHTML = "You have &nbsp :" + tenSecTimer + "&nbsp &nbsp seconds left.";
            tenSecTimer -= 1;
            if (tenSecTimer <= -0.5) {
                document.getElementById("timer").innerHTML = "Time's Up!";
            }

        }, 1000);


    }

    function threeSecDelay1() {
        document.getElementById("msg2").innerHTML = "";
        document.getElementById("question1").innerHTML = questions[2];
        document.getElementById("choices").innerHTML = choices2;
        tenSecTimer = 10;
        resetTimer = setInterval(function () {
            document.getElementById("timer").innerHTML = "You have &nbsp :" + tenSecTimer + "&nbsp &nbsp seconds left.";
            tenSecTimer -= 1;
            if (tenSecTimer <= -0.5) {
                document.getElementById("timer").innerHTML = "Time's Up!";
            }

        }, 1000);

    }

    function threeSecDelay2() {
        document.getElementById("msg2").innerHTML = "";
        document.getElementById("question1").innerHTML = questions[3];
        document.getElementById("choices").innerHTML = choices3;
        tenSecTimer = 10;
        resetTimer = setInterval(function () {
            document.getElementById("timer").innerHTML = "You have &nbsp :" + tenSecTimer + "&nbsp &nbsp seconds left.";
            tenSecTimer -= 1;
            if (tenSecTimer <= -0.5) {
                document.getElementById("timer").innerHTML = "Time's Up!";
            }

        }, 1000);


    }

    function threeSecDelay3() {
        document.getElementById("msg2").innerHTML = "";
        document.getElementById("question1").innerHTML = questions[4];
        document.getElementById("choices").innerHTML = choices4;
        tenSecTimer = 10;
        resetTimer = setInterval(function () {
            document.getElementById("timer").innerHTML = "You have &nbsp :" + tenSecTimer + "&nbsp &nbsp seconds left.";
            tenSecTimer -= 1;
            if (tenSecTimer <= -0.5) {
                document.getElementById("timer").innerHTML = "Time's Up!";
            }

        }, 1000);

    }

    function threeSecDelay4() {
        document.getElementById("msg2").innerHTML = "";
        document.getElementById("question1").innerHTML = questions[5];
        document.getElementById("choices").innerHTML = choices5;
        tenSecTimer = 10;
        resetTimer = setInterval(function () {
            document.getElementById("timer").innerHTML = "You have &nbsp :" + tenSecTimer + "&nbsp &nbsp seconds left.";
            tenSecTimer -= 1;
            if (tenSecTimer <= -0.5) {
                document.getElementById("timer").innerHTML = "Time's Up!";
            }

        }, 1000);

    }


    function threeSecDelay5() {
        document.getElementById("msg2").innerHTML = "";
        document.getElementById("question1").innerHTML = questions[6];
        document.getElementById("choices").innerHTML = choices6;
        console.log('Moving to question 6.');
        tenSecTimer = 10;
        resetTimer = setInterval(function () {
            document.getElementById("timer").innerHTML = "You have &nbsp :" + tenSecTimer + "&nbsp &nbsp seconds left.";
            tenSecTimer -= 1;
            if (tenSecTimer <= -0.5) {
                document.getElementById("timer").innerHTML = "Time's Up!";
            }

        }, 1000);

    }

    function threeSecDelay6() {
        document.getElementById("msg2").innerHTML = "";
        document.getElementById("question1").innerHTML = questions[7];
        document.getElementById("choices").innerHTML = choices7;
        console.log('Moving to question 6.');
        tenSecTimer = 10;
        resetTimer = setInterval(function () {
            document.getElementById("timer").innerHTML = "You have &nbsp :" + tenSecTimer + "&nbsp &nbsp seconds left.";
            tenSecTimer -= 1;
            if (tenSecTimer <= -0.5) {
                document.getElementById("timer").innerHTML = "Time's Up!";
            }

        }, 1000);

    }

    function threeSecDelay7() {
        document.getElementById("msg2").innerHTML = "";
        document.getElementById("question1").innerHTML = questions[8];
        document.getElementById("choices").innerHTML = choices8;
        console.log('Moving to question 6.');
        tenSecTimer = 10;
        resetTimer = setInterval(function () {
            document.getElementById("timer").innerHTML = "You have &nbsp :" + tenSecTimer + "&nbsp &nbsp seconds left.";
            tenSecTimer -= 1;
            if (tenSecTimer <= -0.5) {
                document.getElementById("timer").innerHTML = "Time's Up!";
            }

        }, 1000);

    }

    function threeSecDelay8() {
        document.getElementById("msg2").innerHTML = "";
        document.getElementById("question1").innerHTML = questions[9];
        document.getElementById("choices").innerHTML = choices9;
        console.log('Moving to question 6.');
        tenSecTimer = 10;
        resetTimer = setInterval(function () {
            document.getElementById("timer").innerHTML = "You have &nbsp :" + tenSecTimer + "&nbsp &nbsp seconds left.";
            tenSecTimer -= 1;
            if (tenSecTimer <= -0.5) {
                document.getElementById("timer").innerHTML = "Time's Up!";
            }

        }, 1000);

    }

    //Last 'Next' button (#nextToScore) takes User to final screen that displays Score and 'Thank You' message

    function threeSecDelay9() {
        document.getElementById("msg2").innerHTML = "";

        if (score >= 7) {
            document.getElementById("question1").innerHTML = "Sweet!  You got &nbsp " + score + " &nbsp out of 10 correct.";
        }
        else if (score === 10) {
            document.getElementById("question1").innerHTML = "You Rock!  You got a perfect &nbsp " + score + " &nbsp out of 10 correct.";
        }
        else {
            document.getElementById("question1").innerHTML = "You got &nbsp" + score + " &nbsp out of 10 correct.  Better luck next time, kiddo.";
        }

        document.getElementById("choices").innerHTML = "Thanks for playing Nutrition Facts!";
        console.log('Final Score message.');

    }




});


