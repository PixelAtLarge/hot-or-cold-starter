
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

	var guess;

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
		  displayGuess();
		  if (newCount == 1){
		  	guessFeedback();
		  } else {
		  	prevGuess();
		  }
		  $("#userGuess").val("");
	  }
	});

	/*--- List out guess ---*/
	function displayGuess () {
		guess = $("<li>" + $("#userGuess").val() + "</li>");
		$("#guessList").prepend(guess);
		newCount++;
		$("#count").text(newCount);
		console.log(newCount);
	}

	/*--- Compare to previous guess ---*/
	function prevGuess(){
		var previousGuess = $("#guessList").find("li").first().next();
		previousGuess = $(previousGuess[0]).text();
		// console.log("your previous guess is" + previousGuess);
		guess = $("#guessList").children().first().text();
		if (guess == secretnumber) {
			$("#feedback").text("You guessed the correct number!");
		} else if (previousGuess == guess) {
				$("#feedback").text("Your most recent and previous guesses are the same number and distance from the secret number");
		} else if (guess > secretnumber && previousGuess > secretnumber && guess > previousGuess) {
			$("#feedback").text("You're getting colder!");
		} else if (guess > secretnumber && previousGuess > secretnumber && guess < previousGuess) {
			$("#feedback").text("You're getting hotter!");
		} else if (guess > secretnumber && previousGuess < secretnumber) {
			var differencePrevious = secretnumber - previousGuess;
			var differenceRecent = guess - secretnumber;
			if (differencePrevious < differenceRecent) {
				$("#feedback").text("You're getting colder!");
			} else if (differencePrevious > differenceRecent) {
				$("#feedback").text("You're getting hotter!");
			} else {
				$("#feedback").text("Your most recent and previous guesses are the same distance from the secret number");
			}
		} else if (guess < secretnumber && previousGuess > secretnumber) {
			var differencePrevious = previousGuess - secretnumber;
			var differenceRecent = secretnumber - guess;
			if (differencePrevious < differenceRecent) {
				$("#feedback").text("You're getting colder!");
			}
			else if (differencePrevious > differenceRecent) {
				$("#feedback").text("You're getting hotter!");
			}
			else {
				$("#feedback").text("Your most recent and previous guesses are the same distance from the secret number");
			}
		} else if (guess < secretnumber && previousGuess < secretnumber && guess > previousGuess) {
			$("#feedback").text("You're getting hotter!");
		} else if (guess < secretnumber && previousGuess < secretnumber && guess < previousGuess) {
			$("#feedback").text("You're getting colder!");
		}
	}

	/*--- Feedback on guess ---*/
	function guessFeedback(){
		guess = $("#guessList").children().first().text();
		console.log("secretnumber:" + secretnumber + " guess:" + guess);
		if (guess == secretnumber) {
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

