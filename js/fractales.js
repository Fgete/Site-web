var canvas;
var ctx;

function setup(){
	canvas = document.getElementById('canvas');
	ctx = canvas.getContext("2d");
	console.log(canvas.id, "ready !");

	ctx.fillStyle = "grey";
	ctx.fillRect(0, 0, canvas.width, canvas.height);

	draw();
}

function draw(){
	var center = canvas.width/2;
	var len = 10;

	console.log("Center canvas :", center);

	// stroke(255);
	line(center, canvas.height, center, canvas.height-len);
}