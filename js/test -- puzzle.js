var origin = document.getElementById("origin");

var cube0 = document.getElementById("cube0");
var intervalId = window.setInterval(Turn, 10);

var rotationValue = 0;

function Turn(){
	// origin.style.transform = "rotateY(" + (rotationValue*.1) + "deg) rotateX(-60deg)";
	cube0.style.setProperty('--posY', "calc(var(--groundWidth)/-6 - " + (1+Math.sin(rotationValue/25))*20 + "px)");

	rotationValue++;
}

function SetCubeAt (x, z){
	cube0.style.setProperty('--posX', x);
	cube0.style.setProperty('--posZ', z);
}