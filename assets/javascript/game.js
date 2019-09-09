$(document).ready(function () {

    var correct = 0;
    var incorrect = 0;
    var unanswered = 0;
    var answered;
    var timer;
    var intervalId;
    var userSelect1;
    var userGuess1;
    var userSelect2;
    var userGuess2;
    var userSelect3;
    var userGuess3;
    var userSelect4;
    var userGuess4;
    var userSelect5;
    var userGuess5;

    $("#button-start").on("click", startGame);

    function startTimer() {

        timer = 10;
        clearInterval(intervalId);
        intervalId = setInterval(decrement, 1000);

    }

    function decrement() {

        timer--;
        $("#timer").show();
        $("#timer").html("Time remaining: " + timer);

        if (timer <= 0) {
        endGame();
        }

    }

    function startGame () {
    
        startTimer();
    
        $('#question1').html("Who is the lead singer?");
        $('#answer1').html("<button class = 'answerButtons1' id = 'a11' value = '0'>Anna</button><button class = 'answerButtons1' id = 'a12' value = '1'>Maddie</button><button class = 'answerButtons1' id = 'a13' value = '2'>Peg</button><button class = 'answerButtons1' id = 'a14' value = '3'>Tess</button>");
        
        $(".answerButtons1").on("click", function() {
    
              userSelect1 = $(this).attr("value");
              userGuess1 = parseInt(userSelect1);
              console.log(userGuess1);
    
              $("#a11").attr("disabled", true);
              $("#a12").attr("disabled", true);
              $("#a13").attr("disabled", true);
              $("#a14").attr("disabled", true);
             
              if (userGuess1 === 1) {
                  correct++;
              }
              else {
                  incorrect++;
              }
    
        })

    }

});