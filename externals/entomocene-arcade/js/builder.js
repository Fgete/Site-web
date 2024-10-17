function BuildMap(origin, data){
	// BUILD OFFSETS
	xOffset = (data.length * 100) / 2;
	yOffset = (data[0].length * 100) / 2;

	// BUILD WALLS
	for (i = 0; i < data.length; i++) {
		for (j = 0; j < data[0].length; j++) {
			coordX = j * 100 - xOffset;
			coordY = i * 100 - yOffset;
			switch (data[i][j]){
			case '-': break;
			case '+': BuildGroundAndRoof(coordX, coordY, origin); break;
			case 'W': BuildWall(coordX, coordY, origin); break;
			case 'G': BuildGround(coordX, coordY, origin); break;
			case 'B': BuildBarrel(coordX, coordY, origin); break;
			case 'S': BuildSpider(coordX, coordY, origin); break;
			case 'Z': BuildBoss(coordX, coordY, origin); break;
			default : break;
			}
		}
	}
}

function BuildWall(coordX, coordY, parent){
	coordZ = "0";

	for (k = 0; k < 4; k++) {
		wall = document.createElement("div");
		wall.setAttribute("class", "element wall");
		wall.setAttribute("coordX", coordX);
		wall.setAttribute("coordY", coordY);
		wall.setAttribute("coordZ", coordZ);
		wall.setAttribute("type", "wall");

		ov = [ 50, 0, -50, 0 ];
		oh = [ 0, 50, 0, -50 ];
		wall.style.transform = "translate3d(" + (coordX + oh[k]) + "px, 0, " + (coordY + ov[k]) + "px) rotateY(" + k * 90 + "deg)";
		
		parent.appendChild(wall);
	}
}

function BuildGroundAndRoof(coordX, coordY, parent){
	BuildGround(coordX, coordY, parent);
	BuildRoof(coordX, coordY, parent);
}

function BuildRoof(coordX, coordY, parent){
	roof = document.createElement("div");
	roof.setAttribute("class", "element roof");
	roof.style.transform = "translate3d(" + coordX + "px, -50px, " + coordY + "px) rotateX(90deg)";
	
	parent.appendChild(roof);
}

function BuildGround(coordX, coordY, parent){
	ground = document.createElement("div");
	ground.setAttribute("class", "element ground");
	ground.style.transform   = "translate3d(" + coordX + "px,  50px, " + coordY + "px) rotateX(90deg)";

	parent.appendChild(ground);
}

function BuildBarrel(coordX, coordY, parent){
	coordZ = "0";
	barrel = document.createElement("div");
	barrel.setAttribute("class", "element obj barrel enemy");
	barrel.setAttribute("coordX", coordX);
	barrel.setAttribute("coordY", coordY);
	barrel.setAttribute("coordZ", coordZ);
	barrel.setAttribute("type", "barrel");
	barrel.style.transform   = "translate3d(" + coordX + "px,  0px, " + coordY + "px)";

	parent.appendChild(barrel);
}

function BuildSpider(coordX, coordY, parent){
	coordZ = "20";
	spider = document.createElement("div");
	spider.setAttribute("class", "element obj enemy spider flex-column justify-center");
	spider.setAttribute("coordX", coordX);
	spider.setAttribute("coordY", coordY);
	spider.setAttribute("coordZ", coordZ);
	spider.setAttribute("type", "spider");
	spider.setAttribute("life", "2");
	spider.style.transform = "translate3d(" + coordX + "px, " + coordZ + "px, " + coordY + "px)";

	parent.appendChild(spider);
}

function BuildBoss(coordX, coordY, parent){
	coordZ = "-20";
	boss = document.createElement("div");
	boss.setAttribute("class", "element obj enemy boss flex-column justify-center");
	boss.setAttribute("coordX", coordX);
	boss.setAttribute("coordY", coordY);
	boss.setAttribute("coordZ", coordZ);
	boss.setAttribute("type", "boss");
	boss.setAttribute("life", "3");
	boss.style.width     = "200px";
	boss.style.height    = "200px";
	boss.style.transform = "translate3d(" + coordX + "px, " + coordZ + "px, " + coordY + "px)";

	parent.appendChild(boss);
}

function BuildParticle(parent){
	particle = document.createElement("div");
	particle.setAttribute("class", "particle width-100 height-100");

	parent.appendChild(particle);
	return particle;
}