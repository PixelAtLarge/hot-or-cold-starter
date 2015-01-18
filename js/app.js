
$(document).ready(function(){
	
	/*--- Display information modal box ---*/
  $(".what").click(function(){
    $(".overlay").fadeIn(1000);
  });

	/*--- Hide information modal box ---*/
	$("a.close").click(function(){
		$(".overlay").fadeOut(1000);
	});

	var newCount = 0;

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
	  if ( $("#userGuess").val().length == 0 || $("#userGuess").val() < 0 || $("#userGuess").val() > 100){
	  	$("#feedback").text("Enter a guess between 0 and 100");
	  	$("#userGuess").val("");
	  } else {
		  // var newCount;
		  postGuess();
		  guessFeedback();
		  $("#userGuess").val("");
	  }
	});

	/*--- List out guess ---*/
	function postGuess () {
		var guess = $("<li>" + $("#userGuess").val() + "</li>");
		$("#guessList").prepend(guess);
		newCount++;
		$("#count").text(newCount);
		console.log(newCount);
	}

	/*--- Feedback on guess ---*/
	function guessFeedback(){
		var guess = $("#guessList").children().first().text();
		console.log("secretnumber:" + secretnumber + " guess:" + guess);
		if (guess == secretnumber) {
			// console.log("you got it right");
			$("#feedback").text("You guessed the correct number!");
		} else if (guess > secretnumber) {
			if (guess - secretnumber > 0 && guess - secretnumber < 11) {
				$("#feedback").text("Your guess is very hot");
			} else if (guess - secretnumber > 10 && guess - secretnumber < 21) {
				$("#feedback").text("Your guess is hot");
			} else if (guess - secretnumber > 20 && guess - secretnumber < 31) {
				$("#feedback").text("Your guess is warm");
			} else if (guess - secretnumber > 30 && guess - secretnumber < 51) {
				$("#feedback").text("Your guess is cold");
			} else {
				$("#feedback").text("Your guess is ice cold");
			}							
		} else {
			if (secretnumber - guess > 0 && secretnumber - guess < 11) {
				$("#feedback").text("Your guess is very hot");
			} else if (secretnumber - guess > 10 && secretnumber - guess < 21) {
				$("#feedback").text("Your guess is hot");
			} else if (secretnumber - guess > 20 && secretnumber - guess < 31) {
				$("#feedback").text("Your guess is warm");
			} else if (secretnumber - guess > 30 && secretnumber - guess < 51) {
				$("#feedback").text("Your guess is cold");
			} else {
				$("#feedback").text("Your guess is ice cold");
			}
		}		
	}

	function randomIntFromInterval(min,max){
	  return Math.floor(Math.random()*(max-min+1)+min);
	}

	function newGame () {
		location.reload();
	}

});

