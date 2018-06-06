// we are creating a trivia game // there are 8 questions // questions have a timer //
var timeRemaining = 60;
var right = 0;
var wrong = 0;
var unanswered = 0;
var intervalId;

// on button click remove invisible class on game-border // we would also apply invisible class to myborder-2 //
// on button click create timer //
// after timer is finished log results of questions wrong and questions right //

function pageLoad() {
    $(".game-border").hide();
    $(".my-border3").hide();
    $("#startbutton").on("click", startGame);
   
}

function startGame() {
    $(".game-border").show();
    $(".my-border2").show();
    $("#shotclock").text("SHOT CLOCK : 00:" +  timeRemaining);
    run();
}