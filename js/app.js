$(document).ready(function(){	
    $('.bg h1').click(function(){
        $('.bg').animate({left: "-350px"},250);
    });

    $('.menu h2').click(function(){
        $('.bg').animate({left: "0px"},250);
    });
    $('.bg p').click(function(){
    	$(this).fadeOut(200);
    	$('#cs').fadeIn(1000);
    });



    $('.fixed-nav-bar h2').click(function(){
        $('.menu').animate({right: "0px"},250);
        $('.fixed-nav-bar').animate({left: "-350px"},250);
        $('.allpic').animate({left: "-350px"},250);
        $('.d').animate({left: "-350px"},250);
    });
    $('.menu h2').click(function(){
        $('.menu').animate({right: "-350px"},250);
        $('.fixed-nav-bar').animate({left: "0px"},250);
        $('.allpic').animate({left: "0px"},250);
         $('.d').animate({left: "0px"},250);
    });

});