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
        document.getElementById("choices").innerHTML = choices1;
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
        "4. &nbsp Sweet Potatoes and carrots are great sources of?"];
    //ID names cA and iA stand for "correct answer" & incorrect answer, respectively.
    let choices1 = ['<button type="button" class="btn-primary" id="cA1">Healthy Fats</button>',
        '<button type="button" class="btn-primary" id="iA1">Unwanted weight gain</button>',
        '<button type="button" class="btn-primary" id="iA1">Bad Calories</button>',
        '<button type="button" class="btn-primary" id="iA1">Good Carbs</button>'];

    let choices2 = ['<button type="button" class="btn-primary" id="iA2">Lean muscle mass</button>',
        '<button type="button" class="btn-primary" id="iA2">Improved focus</button>',
        '<button type="button" class="btn-primary" id="iA2">Weightloss</button>',
        '<button type="button" class="btn-primary" id="cA2">Obesity</button>'];

    let choices3 = ['<button type="button" class="btn-primary" id="iA3">donuts & other pastries</button>',
        '<button type="button" class="btn-primary" id="cA3">lean meats & eggs</button>',
        '<button type="button" class="btn-primary" id="iA3">Coffee</button>',
        '<button type="button" class="btn-primary" id="iA3">Energy drinks</button>'];

    let choices4 = ['<button type="button" class="btn-primary" id="cA4">Vitamin A, to support good vision.</button>',
        '<button type="button" class="btn-primary" id="iA4">Vitamin D, to support bone health</button>',
        '<button type="button" class="btn-primary" id="iA4">Protein, for lean muscle mass</button>',
        '<button type="button" class="btn-primary" id="iA4">Caffeine, for extra energy</button>'];

    let score = 0;

    // let questionCount = 0;
    // questionCount++



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
        console.log('hitting new clicker')
        // alert('hitting ca1 id')
        // alert("Your score:" + score);
    })

    $("#choices").on("click", "#iA4", function () {
        incorrectAnswer();
        document.getElementById("msg3").innerHTML = '<button class="btn btn-success btn-lg" role="button" id="nextQ4">Next</button>';
        console.log('Sorry. Wrong answer.');

    })


    $("#msg3").on("click", "#nextQ", function () {
        document.getElementById("msg2").innerHTML = "";
        document.getElementById("question1").innerHTML = questions[1];
        document.getElementById("choices").innerHTML = choices2;
        console.log('Moving to question 2.');

    })

    $("#msg3").on("click", "#nextQ2", function () {
        document.getElementById("msg2").innerHTML = "";
        document.getElementById("question1").innerHTML = questions[2];
        document.getElementById("choices").innerHTML = choices3;
        console.log('Moving to question 3.');
        console.log('test for Q3 next button');
        // alert('hitting ca1 id')
        // alert("Your score:" + score);
    })

    $("#msg3").on("click", "#nextQ3", function () {
        document.getElementById("msg2").innerHTML = "";
        document.getElementById("question1").innerHTML = questions[3];
        document.getElementById("choices").innerHTML = choices4;
        console.log('This is question 4.');
        console.log('test for Q4 next button');
        // alert('hitting ca1 id')
        // alert("Your score:" + score);
    })










    // let answer02 = ["Obesity/Unwanted weight gain", "Lean muscle mass", "Beachbody", "Weightloss"]




});