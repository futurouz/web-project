function showlogin() {
	document.getElementById("login").style.visibility = "visible";
	document.getElementById("login").style.opacity = 1;
}
function closelogin() {
	document.getElementById("login").style.visibility = "hidden";
	document.getElementById("login").style.opacity = 0;
}
function Show() {
	document.getElementById("mem").style.visibility = "visible";
	document.getElementById("mem").style.opacity = 0.95;
}
function Hide(){
	document.getElementById("mem").style.visibility = "hidden";
	document.getElementById("mem").style.opacity = 0;
}
window.onload = function(){
	setTimeout(function(){
		document.getElementById("abouteat").style.opacity = 1;
		document.getElementById("bt").style.opacity = 1;
		document.getElementById("bt2").style.opacity = 1;
		document.getElementById("bt3").style.opacity = 1;
	},500);
}