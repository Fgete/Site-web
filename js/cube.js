var cubeRotation = 10;
var xAxis;
var yAxis;
var zAxis;
var cube;

function refreshInfo(){
	
	document.getElementById('cubeRotation').value = cubeRotation;

	xAxis = document.getElementById('xAxis').value;
	yAxis = document.getElementById('yAxis').value;
	zAxis = document.getElementById('zAxis').value;

	cube = document.getElementById('cube');

	cube.style.transform = 'rotate3d('+xAxis+','+yAxis+','+zAxis+','+cubeRotation+'deg)';
}

function left(){
	cubeRotation -= 10;
	if (cubeRotation < 0) {
		cubeRotation += 360;
	}
	refreshInfo();
}

function right(){
	cubeRotation += 10;
	if (cubeRotation >= 360) {
		cubeRotation -= 360;
	}
	refreshInfo();
}

document.addEventListener('keydown', function(keyDown) {
    if(keyDown.keyCode == 37) {
        left();
    }
    if(keyDown.keyCode == 39) {
        right();
    }
});