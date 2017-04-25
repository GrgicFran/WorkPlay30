$(function () {

    var workBtn = document.getElementById("work");
    var playBtn = document.getElementById("play");
    var resetBtn = document.getElementById("reset");

    var countdown = 30 * 60 * 1000;

    $("#work").addClass("greenbg");

    workBtn.addEventListener("click", function () {
        $("#work").addClass("greenbg");
        $("#play").removeClass("greenbg");

        countdown = 30 * 60 * 1000;
        $("#clock").html("30:00");
    });

    playBtn.addEventListener("click", function () {
        $("#play").addClass("greenbg");
        $("#work").removeClass("greenbg");

        countdown = 30 * 60 * 1000;
        $("#clock").html("30:00");
    });

    resetBtn.addEventListener("click", function () {
        countdown = 30 * 60 * 1000;
        $("#clock").html("30:00");
    })

    var timerId = setInterval(function () {
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
            if(min < 10){
                min = "0" + min;
            }
            $("#clock").html(min + ":" + sec);

            document.title = Math.ceil(min) + " minutes left";
        }

    }, 1000);

});