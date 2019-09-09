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

    timer = 5;
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

    correct = 0;
    incorrect = 0;
    unanswered = 0;

    document.getElementById("container").style.backgroundImage = '';
    document.getElementById("container").style.backgroundRepeat = ''
    document.getElementById("container").style.backgroundPosition = ''

    $('#button-start').hide();

    $('#numberCorrect').html('');
    $('#numberIncorrect').html('');
    $('#numberUnanswered').html('');
    $('#button-restart').html('');

 

    $('#question1').html("Who is the lead singer?");
    $('#answer1').html("<button class = 'answerButtons1' id = 'a11' value = '0'>Anna</button><button class = 'answerButtons1' id = 'a12' value = '1'>Maddie</button><button class = 'answerButtons1' id = 'a13' value = '2'>Peg</button><button class = 'answerButtons1' id = 'a14' value = '3'>Tess</button>");
    
    $(".answerButtons1").on("click", function() {

          userSelect1 = $(this).attr("value");
          userGuess1 = parseInt(userSelect1);

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

    $('#question2').html("Which band member's mom is enganged to Ryan?");
    $('#answer2').html("<button class = 'answerButtons2' id = 'a21' value = '0'>Scott</button><button class = 'answerButtons2' id = 'a22' value = '1'>Maddie</button><button class = 'answerButtons2' id = 'a23' value = '2'>Anna</button><button class = 'answerButtons2' id = 'a24' value = '3'>Ethan</button>");

    $(".answerButtons2").on("click", function() {
       
        userSelect2 = $(this).attr("value");
        userGuess2 = parseInt(userSelect2);

          $("#a21").attr("disabled", true);
          $("#a22").attr("disabled", true);
          $("#a23").attr("disabled", true);
          $("#a24").attr("disabled", true);

        if (userGuess2 === 2) {
            correct++;
        }
        else {
            incorrect++;
        }
    })

    $('#question3').html("Who plays the drums?");
    $('#answer3').html("<button class = 'answerButtons3' id = 'a31' value = '0'>Steve</button><button class = 'answerButtons3' id = 'a32' value = '1'>Tess</button><button class = 'answerButtons3' id = 'a33' value = '2'>Ethan</button><button class = 'answerButtons3' id = 'a34' value = '34'>Scott</button>");

    $(".answerButtons3").on("click", function() {

        userSelect3 = $(this).attr("value");
        userGuess3 = parseInt(userSelect3);

        $("#a31").attr("disabled", true);
        $("#a32").attr("disabled", true);
        $("#a33").attr("disabled", true);
        $("#a34").attr("disabled", true);

        if (userGuess3 === 2) {
            correct++;
        }
        else {
            incorrect++;
        }
    })

    $('#question4').html("What song did they play at the House of Blues?");
    $('#answer4').html("<button class = 'answerButtons4' id = 'a41' value = '0'>Ultimate</button><button class = 'answerButtons4' id = 'a42' value = '1'>You</button><button class = 'answerButtons4' id = 'a43' value = '2'>Get Out</button><button class = 'answerButtons4' id = 'a44' value = '3'>Take Me Away</button>");

    $(".answerButtons4").on("click", function() {

        userSelect4 = $(this).attr("value");
        userGuess4 = parseInt(userSelect4);

        $("#a41").attr("disabled", true);
        $("#a42").attr("disabled", true);
        $("#a43").attr("disabled", true);
        $("#a44").attr("disabled", true);

        if (userGuess4 === 3) {
            correct++;
        }
        else {
            incorrect++;
        }
    })

    $('#question5').html("Who played the guitar solo at the House of Blues?");
    $('#answer5').html("<button class = 'answerButtons5' id = 'a51' value = '0'>Anna as Tess</button><button class = 'answerButtons5' id = 'a52' value = '1'>Jake</button><button class = 'answerButtons5' id = 'a53' value = '2'>Tess as Anna</button><button class = 'answerButtons5' id = 'a54' value = '3'>Anna as Ryan</button>");

    $(".answerButtons5").on("click", function() {

        userSelect5 = $(this).attr("value");
        userGuess5 = parseInt(userSelect5);

        $("#a51").attr("disabled", true);
        $("#a52").attr("disabled", true);
        $("#a53").attr("disabled", true);
        $("#a54").attr("disabled", true);

        if (userGuess5 === 0) {
            correct++;
        }
        else {
            incorrect++;
        }
    })

    answered = correct + incorrect;

    if (answered === 5 || timer <= 0) {
        endGame ();
    }

}

function endGame() {


    unanswered = 5 - (correct+incorrect)

    $('#timer').hide();

    $('#question1').html('');
    $('#answer1').html('');

    $('#question2').html('');
    $('#answer2').html('');

    $('#question3').html('');
    $('#answer3').html('');

    $('#question4').html('');
    $('#answer4').html('');

    $('#question5').html('');
    $('#answer5').html('');

    document.getElementById("container").style.backgroundImage = "url('../trivia-game/assets/images/band-image.JPG')";
    document.getElementById("container").style.backgroundRepeat = "no-repeat"
    document.getElementById("container").style.backgroundPosition = "center"

    $('#numberCorrect').html("Correct Answers: " + correct)
    $('#numberIncorrect').html("Incorrect Answers: " + incorrect)
    $('#numberUnanswered').html("Unanswered Questions: " + unanswered)

    $('#button-restart').html("<button id = 'restart'>Restart</button");
    $('#restart').on('click', startGame);

}
  
});