function showReg(){
	document.getElementById("reg").style.visibility = "visible";
	document.getElementById("reg").style.opacity = 1;
	document.getElementById("fade").style.visibility = "visible";
	document.getElementById("fade").style.opacity = 0.7;
}

function closeReg() {
	document.getElementById("reg").style.visibility = "hidden";
	document.getElementById("reg").style.opacity = 0;
	document.getElementById("fade").style.visibility = "hidden";
	document.getElementById("fade").style.opacity = 0;
}

function showlogin() {
	document.getElementById("login").style.visibility = "visible";
	document.getElementById("login").style.opacity = 1;
	document.getElementById("fade").style.visibility = "visible";
	document.getElementById("fade").style.opacity = 0.7;
}
function closelogin() {
	document.getElementById("login").style.visibility = "hidden";
	document.getElementById("login").style.opacity = 0;
	document.getElementById("fade").style.visibility = "hidden";
	document.getElementById("fade").style.opacity = 0;
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
	},500);
}