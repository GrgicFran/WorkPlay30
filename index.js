$(function () {

    var workBtn = document.getElementById("work");
    var playBtn = document.getElementById("play");
    var resetBtn = document.getElementById("reset");
    var pauseBtn = document.getElementById("pause");

    var countdown = 30 * 60 * 1000;

    var running = true;
    var timerId = setInterval(timer, 1000);

    $("#work").addClass("greenbg");
    $("body").addClass("workbg");
    $("body").addClass("playbg");
    $("body").removeClass("workbg");
    $("body").removeClass("playbg");

    pauseBtn.addEventListener("click", function () {
        if (running) {
            $("#pause").html("RESUME");
            $("#pause").addClass("paused");

            running = false;
            clearInterval(timerId);
        } else {
            $("#pause").html("PAUSE");
            $("#pause").removeClass("paused");

            running = true;
            timerId = setInterval(timer, 1000);
        }
    });

    workBtn.addEventListener("click", function () {
        $("#work").addClass("greenbg");
        $("#play").removeClass("greenbg");
        $("#container").removeClass("playbg");

        countdown = 30 * 60 * 1000;
        $("#clock").html("30:00");

        clearInterval(timerId);
        if (running) {
            timerId = setInterval(timer, 1000);
        }
    });

    playBtn.addEventListener("click", function () {
        $("#play").addClass("greenbg");
        $("#work").removeClass("greenbg");

        $("#container").addClass("playbg");

        countdown = 30 * 60 * 1000;
        $("#clock").html("30:00");

        clearInterval(timerId);
        /*
        if (running) {
            timerId = setInterval(timer, 1000);
        }
        */

    });

    resetBtn.addEventListener("click", function () {
        countdown = 30 * 60 * 1000;
        $("#clock").html("30:00");

        $("#reset").addClass("paused");

        setTimeout(function () {
            $('#reset').removeClass("paused");
        }, 300);

        clearInterval(timerId);
        if (running) {
            timerId = setInterval(timer, 1000);
        }
    })

    function timer() {
        countdown -= 1000;
        var min = Math.floor(countdown / (60 * 1000));
        //var sec = Math.floor(countdown - (min * 60 * 1000));  // wrong
        var sec = Math.floor((countdown - (min * 60 * 1000)) / 1000); //correct

        if (countdown <= 0) {
            $("#work").toggleClass("greenbg");
            $("#play").toggleClass("greenbg");

            $("#clock").html("30:00");
            countdown = 30 * 60 * 1000;
            //doSomething();
        } else {
            if (sec < 10) {
                sec = "0" + sec;
            }
            if (min < 10) {
                min = "0" + min;
            }
            $("#clock").html(min + ":" + sec);

            document.title = Math.ceil(min) + " minutes left";
        }

    }


});