const rotationSpeed      = 3;
const movementSpeed      = 5;
const spawnCoord         = [ 900, 600 ];
const angleThreshold     = 7;
const shotCooldown       = 1000;
const footstepCooldown   = 300;

yRotation                = 0;
position                 = [ 0, 25, 0];
inputs                   = [ 0, 0, 0, 0, 0, 0 ];
isShooting               = false;
isFootsteping            = false;
isMusicPlaying           = false;

SpawnCharacter();

// Called each frame
function Update(){
	CharacterTransform();
	RotateObjectsToCamera(objs);
	MoveSky();
}

// Init character position
function SpawnCharacter(){
	position[0] = spawnCoord[0];
	position[2] = spawnCoord[1];
}

// Apply transform modifications from input to character
function CharacterTransform(){
	// camera orientation
	yRotation += (inputs[1] - inputs[0]) * rotationSpeed;
	if (yRotation > 180) yRotation -= 360;
	if (yRotation < -180) yRotation += 360;
	// camera position
	horizontaleVector = inputs[4] - inputs[5];
	verticaleVector = inputs[3] - inputs[2];
	AddVectorByAngle(yRotation + 90, horizontaleVector * movementSpeed);
	AddVectorByAngle(yRotation, verticaleVector * movementSpeed);
	// update display
	map.style.transform = "translate3d(0, 0, 300px) rotateY(" + (yRotation + 90) + "deg) " +
	"translate3d(" + position[0] + "px, " + position[1] + "px, " + position[2] + "px)";
	// footstep sound
	if (Math.abs(horizontaleVector + verticaleVector) > 0) Footstep();
}

// Takes the character angle and the input magnitude to apply coordinates modification to the character.
function AddVectorByAngle(angle, magnitude) {
	position[0] += magnitude * Math.cos(angle * Math.PI / 180);
	position[2] += magnitude * Math.sin(angle * Math.PI / 180);
}

// Straf sky by rotation
function MoveSky() {
	screen.style.backgroundPosition = (yRotation * .4) + "% 50%";
}

// Orientate objects to camera position
function RotateObjectsToCamera(objs) {
	for (i = 0; i < objs.length; i++) {
		x = objs[i].getAttribute("coordX") * 1;
		y = objs[i].getAttribute("coordY") * 1;
		z = objs[i].getAttribute("coordZ") * 1;
		phi = (Math.atan((x + position[0]) / (y + position[2])) * 180) / Math.PI;
		objs[i].style.transform = "translate3d(" + x + "px, " + z + "px, " + y + "px) rotateY(" + phi + "deg)";
	}
}

// Do a shot
function Shot() {
	if (isShooting) return;
	else isShooting = true;
	PlaySound("audioShot");

	for (i = 0; i < enemies.length; i++) {
		enemy = enemies[i];
		enemyX = enemy.getAttribute("coordX")*1 + position[0];
		enemyY = enemy.getAttribute("coordY")*1 + position[2];
		// Hypotenuse
		h = Math.pow(Math.pow(enemyX, 2) + Math.pow(enemyY, 2), .5);
		// Angle between forward and enemy
		theta = (Math.acos(enemyX / h) / Math.PI * 180);
		if (enemyY < 0) theta *= -1;
		theta -= yRotation;
		theta = Math.abs(theta);
		// If enemy is in angleThreshold
		if (theta <= angleThreshold || theta >= 360 - angleThreshold)
			TargetBulletReaction(enemy);
	}

	ShotAnimation();
	Sleep(shotCooldown).then(() => { isShooting = false; });
}

function ShotAnimation() {
	overlay.style.backgroundImage = "url('./images/shotgun1.png')";
	Sleep(100).then(() => {
		overlay.style.backgroundImage = "url('./images/shotgun2.png')";
		Sleep(100).then(() => {
			overlay.style.backgroundImage = "url('./images/shotgun3.png')";
			Sleep(200).then(() => {
				overlay.style.backgroundImage = "url('./images/shotgun0.png')";
			});
		});
	});
}

// Play footsteps (and trigger music)
function Footstep() {
	if (isFootsteping) return;
	else isFootsteping = true;
	PlaySound("audioFootstep");
	PlaySound("audioMusic");
	Sleep(footstepCooldown).then(() => { isFootsteping = false; });
}

// Do target bullet reaction
function TargetBulletReaction(target) {
	switch (target.getAttribute("type")) {
		case "barrel": Barrel(target); break;
		case "spider": Spider(target); break;
		case "boss":   Boss(target);   break;
		default: break;
	}
}

function Barrel(target) {
	target.style.backgroundImage = "url('./images/explosion0.gif')";
	PlaySound("audioExplosion");
	Sleep(500).then(() => { target.remove(); });
}

function Spider(target) {
	target.setAttribute("life", target.getAttribute("life")*1 - 1);
	if (target.getAttribute("life")*1 < 1) {
		target.style.backgroundImage = "url('./images/explosion1.gif')";
		PlaySound("audioEnemyDeath");
		Sleep(500).then(() => { target.remove(); });
		return;
	}
	PlaySound("audioEnemyHit");
	Particle(target);
}

function Boss(target) {
	target.setAttribute("life", target.getAttribute("life")*1 - 1);
	if (target.getAttribute("life")*1 < 1) {
		target.style.backgroundImage = "url('./images/explosion1.gif')";
		PlaySound("audioEnemyDeath");
		Sleep(500).then(() => { target.remove(); });
		return;
	}
	PlaySound("audioEnemyHit");
	Particle(target);
}

function Particle(parent){
	particle = BuildParticle(parent);
	Sleep(500).then(() => { particle.remove(); });
}

document.addEventListener('keydown', function(event) {
    if (event.keyCode == 37) inputs[0] = 1; // LEFT
    if (event.keyCode == 39) inputs[1] = 1; // RIGHT
    if (event.keyCode == 90) inputs[2] = 1; // Z
    if (event.keyCode == 83) inputs[3] = 1; // S
    if (event.keyCode == 81) inputs[4] = 1; // Q
    if (event.keyCode == 68) inputs[5] = 1; // D
    if (event.keyCode == 32) Shot();        // SPACE
});

document.addEventListener('keyup', function(event) {
    if (event.keyCode == 37) inputs[0] = 0;
    if (event.keyCode == 39) inputs[1] = 0;
    if (event.keyCode == 90) inputs[2] = 0;
    if (event.keyCode == 83) inputs[3] = 0;
    if (event.keyCode == 81) inputs[4] = 0;
    if (event.keyCode == 68) inputs[5] = 0;
});

function Sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}