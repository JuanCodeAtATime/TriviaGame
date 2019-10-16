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
                document.getElementById("trivia").innerHTML = "What's your favorite scary movie?";

            }
        }, 1000);


        console.log(tenSecTimer);
    });

    // Trying to get on click button to work for dynamic jQuery button
    // // $(jQuery("#cA1")).on('click', function () {
    //     console.log("Correct");
    //     correctAnswer1();
    // });







    function startGame() {
        document.getElementById("disappear").innerHTML = "";
        document.getElementById("question1").innerHTML = questions[0];
        document.getElementById("choices").innerHTML = choices1;
        // document.getElementById("choices").innerHTML = questionCount;


    }



    // Not functioning...commenting out until issue is fixed
    function correctAnswer1() {
        document.getElementById("msg3").innerHTML = "Correct";
        document.getElementById("choices").innerHTML = "";
        document.getElementById("scre").innerHTML = "";

        // document.getElementById("cA1").addEventListener('click', correctAnswer1());
        // $( "#other" ).click(function() {
        //     $( "#target" ).click();
        //   });

    }




    let questions = ["1. &nbsp Avocados, walnuts, and almonds are good sources of?",
        "2. &nbsp Frequent consumption of sugar-sweetened beverages in non-active individuals is associated with:",
        "3. &nbsp An excellent source of carbohydrates for a long race includes:",
        "4. &nbsp Sweet Potatoes and carrots are great sources of?"];
    //Fix the space between btn-primary.  That's why the buttons arent renering
    let choices1 = [`<button type="button" class="btn btn-primary" id="cA1">Healthy Fats</button>`,
        "<button type="button" class="btn btn - primary" id="iA1">Unwanted weight gain</button>",
        "<button type="button" class="btn btn - primary" id="iA1">Bad Calories</button>",
        "<button type="button" class="btn btn - primary" id="iA1">Good Carbs</button>"];

    // let questionCount = 0;
    // questionCount++

    // let score = 0;
    // score++;

    $("#choices").on("click", "#cA1", function () {
        // $("#choices").click();
        console.log('hitting new clicker')
        alert('hitting ca1 id')
    })



    // let answer02 = ["Obesity/Unwanted weight gain", "Lean muscle mass", "Beachbody", "Weightloss"]




});