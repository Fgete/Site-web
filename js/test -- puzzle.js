// --- CONST ---
const VELOCITY = .1;

// --- VARIABLES ---
var rotationValue = 0;
var posX = 0;
var posZ = 0;
var targetX = 0;
var targetZ = 0;

// --- ELEMENTS ---
// Origin
var origin = document.getElementById("origin");
// Cube
var cube0 = document.getElementById("cube0");

// --- UPDATE ---
var intervalId = window.setInterval(Update, 10);


function Update(){
	// origin.style.transform = "rotateY(" + (rotationValue*.1) + "deg) rotateX(-60deg)";
	cube0.style.setProperty('--posY', "calc(var(--groundWidth)/-6 - " + (1+Math.sin(rotationValue/25))*20 + "px)");

	SetCubeAt(targetX - (targetX-posX)/(1+VELOCITY) , targetZ - (targetZ-posZ)/(1+VELOCITY));

	rotationValue++; // ITERATION
}

// Set element (cube) to x & z coordonates
function SetCubeAt (newX, newZ){
	posX = newX;
	posZ = newZ;
	cube0.style.setProperty('--posX', "calc(var(--groundWidth)/3 * " + posX + ")");
	cube0.style.setProperty('--posZ', "calc(var(--groundWidth)/3 * " + posZ + ")");
}

function GoToXZ (newX, newZ){
	targetX = newX;
	targetZ = newZ;
}