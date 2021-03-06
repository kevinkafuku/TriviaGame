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

function startGame (){
    $(".game-border").show();
    $(".my-border2").hide();
    $("#shotclock").html("Shot Clock : "+ timeRemaining);   
    run();
}

function run(){
    clearInterval(intervalId);
    intervalId = setInterval(decrement, 1000);
}

function decrement() {
    timeRemaining--;
    $("#shotclock").html("Shot Clock : 00:"+ timeRemaining);   
    
    if (timeRemaining === 0) {
      stop();
      endGame();
    }
  }

  function stop() {
    clearInterval(intervalId);
  }

  function endGame(){

    $(".game-border").hide();
    $(".my-border3").show();

    var Q1 = $('input:radio[name="Q1"]:checked').val();
	var Q2 = $('input:radio[name="Q2"]:checked').val();
	var Q3 = $('input:radio[name="Q3"]:checked').val();
	var Q4 = $('input:radio[name="Q4"]:checked').val();
	var Q5 = $('input:radio[name="Q5"]:checked').val();
    var Q6 = $('input:radio[name="Q6"]:checked').val();
    var Q7 = $('input:radio[name="Q7"]:checked').val();
    var Q8 = $('input:radio[name="Q8"]:checked').val();

    function checkAnswers(questionName, answer){
      if(questionName == undefined){
        unanswered++;
      }
      else if(questionName == answer){
        right++;
      }
      else{
        wrong++;
      }
  
    }

    checkAnswers(Q1, "Bill Russell");
    checkAnswers(Q2, "1994-95' Houston Rockets");
    checkAnswers(Q3, "Kareem-Abdul Jabbar");
    checkAnswers(Q4, "John Stockton");
    checkAnswers(Q5, "1978-1979.");
    checkAnswers(Q6, "2015-16' Golden State Warriors");
    checkAnswers(Q7, "Mark Eaton");
    checkAnswers(Q8, "Charlotte Hornets");
    

    $("#right").text("Answered Right: " + right);
    $("#wrong").text("Answered Wrong: " + wrong);
    $("#unanswered").text("Unanswered: " + unanswered);
    $(".my-border3").show();

    
  }

Document.onload = pageLoad();