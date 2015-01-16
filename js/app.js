
$(document).ready(function(){
	
	/*--- Display information modal box ---*/
  $(".what").click(function(){
    $(".overlay").fadeIn(1000);
  });

	/*--- Hide information modal box ---*/
	$("a.close").click(function(){
		$(".overlay").fadeOut(1000);
	});

	/*--- Save random number as the secret number ---*/
  var min = 1,
  		max = 100;
	var secretnumber = randomIntFromInterval(min,max);
	console.log(secretnumber);

  /*--- Start a new game ---*/
	$('a.new').click(function(){
	  newGame();
	}); 

	/*--- Submit a guess ---*/
	$('#guessButton').click(function(e){
	  e.preventDefault();
	  postGuess();
	  // updateCount();
	  var newCount = $("#guessList > li").length;
		$("#count").replaceWith(newCount);
	  guessFeedback();
	});

	/*--- List out guess ---*/
	function postGuess () {
		var guess = $("<li>" + $("#userGuess").val() + "</li>");
		$("#guessList").prepend(guess);
	}

	/*--- Feedback on guess ---*/
	function guessFeedback(){
		var guess = $("#guessList").children().first();
		if (guess == secretnumber) {
			$("#feedback").replaceWith("You guessed the number!")
		} else{};
			$("#feedback").replaceWith("You did NOT guess the number!")
	}

	function randomIntFromInterval(min,max){
	  return Math.floor(Math.random()*(max-min+1)+min);
	}

	function newGame () {
		location.reload();
	}

	// function updateCount () {
	// 	var newCount = $("#guessList > li").length;
	// 	$("#count").replaceWith(newCount);
	// }

});

