var origin = document.getElementById("origin");

var ball = document.getElementById("ball");
var cubeCenter = document.getElementById("cube1");
var intervalId = window.setInterval(Turn, 10);

var rotationValue = 0;

function Turn(){
	origin.style.transform = "rotateY(" + (rotationValue*.1) + "deg)";

	ball.style.transform = "rotateY(" + (rotationValue*-.1) + "deg)";
	cubeCenter.style.transform = "rotateY(" + rotationValue + "deg) rotateX(" + (rotationValue*1.1) + "deg)";
	rotationValue++;
}