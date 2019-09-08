$(document).ready(function () {

    var timer;
    var intervalId;

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

});