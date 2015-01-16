
$(document).ready(function(){
	
	/*--- Display information modal box ---*/
  	$(".what").click(function(){
    	$(".overlay").fadeIn(1000);

  	});

  	/*--- Hide information modal box ---*/
  	$("a.close").click(function(){
  		$(".overlay").fadeOut(1000);
  	});


	function randomIntFromInterval(min,max){
	    return Math.floor(Math.random()*(max-min+1)+min);
	}

  	var min = 1,
  		max = 100;
	var secretnumber = randomIntFromInterval(min,max);
	console.log(secretnumber);
});



