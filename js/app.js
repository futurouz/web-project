$(document).ready(function() {
	$('h1').fadeIn(800);
	$('.bg p').click(function(){
		$('.bg').animate({left: "-285px" }, 500)
	});
	$('.list p').click(function(){
		$('.bg').animate({left: "0px" }, 500)
	});

});