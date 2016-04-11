window.onload = function(){
	setTimeout(function(){
		document.getElementById("d").style.opacity = 1;
	},500);
}
function color() {
	document.getElementById('form').style.backgroundColor = "#F2784B";
	document.getElementById('form2').style.backgroundColor = "#e7e7e7";
	document.getElementById('form3').style.backgroundColor = "#e7e7e7";
	document.getElementById('form4').style.backgroundColor = "#e7e7e7";
}
function color2() {
	document.getElementById('form2').style.backgroundColor = "#F2784B";
	document.getElementById('form').style.backgroundColor = "#e7e7e7";
	document.getElementById('form3').style.backgroundColor = "#e7e7e7";
	document.getElementById('form4').style.backgroundColor = "#e7e7e7";
}
function color3() {
	document.getElementById('form3').style.backgroundColor = "#F2784B";
	document.getElementById('form').style.backgroundColor = "#e7e7e7";
	document.getElementById('form2').style.backgroundColor = "#e7e7e7";
	document.getElementById('form4').style.backgroundColor = "#e7e7e7";
}
function color4() {
	document.getElementById('form4').style.backgroundColor = "#F2784B";
	document.getElementById('form3').style.backgroundColor = "#e7e7e7";
	document.getElementById('form2').style.backgroundColor = "#e7e7e7";
	document.getElementById('form').style.backgroundColor = "#e7e7e7";
} 
function Show() {
	document.getElementById("mem").style.visibility = "visible";
	document.getElementById("mem").style.opacity = 0.95;
}
function Hide(){
	document.getElementById("mem").style.visibility = "hidden";
	document.getElementById("mem").style.opacity = 0;
}
