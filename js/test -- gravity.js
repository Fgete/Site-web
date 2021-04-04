var BALL = document.getElementById("ball");

// BALL SIZE
var sBallX = 20;
var sBallY = 20;

// GRAVITY
const G = 9.81;
var ballPositionY = 0;
var ballFallTime = 0;
var ballVelocity = 0;

// SET BALL SIZE
BALL.style.width = sBallX + "px";
BALL.style.heigth = sBallY + "px";

// UPDATE ON MOUSE MOVES
// document.onmousemove = BallToMouse;
document.onclick = OnMouseClick;

// UPDATE EACH S <--- event issue
// var intervalId = window.setInterval(OnMouseClick, 1000);
var intervalId = window.setInterval(Gravity, 1);

// SET BALL POSITION TO CURSOR POSITION
function BallToMouse(event){
	var mPosX = event.clientX;
	var mPosY = event.clientY;

	ballFallTime = 0;
	ballVelocity = 0;
	ballPositionY = event.clientY;
	BALL.style.left = (mPosX - (sBallX / 2)) + "px";
	BALL.style.top = (mPosY - (sBallY / 2)) + "px";

	// console.log(event.buttons);
}

// ON MOUSE CLICK DO
function OnMouseClick(event){
	BallToMouse(event);
}

// GRAVITY FUNCTION
function Gravity(){
	ballFallTime++;
	ballVelocity = G * (ballFallTime / 10) * (ballFallTime / 10);

	var newPosY = ballPositionY * 1 + ballVelocity;

	BALL.style.top = Math.floor(newPosY) + "px";
}