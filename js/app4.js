window.onload = function(){
	setTimeout(function(){
		document.getElementById("d").style.opacity = 1;
	},500);
}
function Show() {
	document.getElementById("mem").style.visibility = "visible";
	document.getElementById("mem").style.opacity = 0.95;
}
function Hide(){
	document.getElementById("mem").style.visibility = "hidden";
	document.getElementById("mem").style.opacity = 0;
}
