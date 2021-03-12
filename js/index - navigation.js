// PROPERTIES
/*
export default {
	data() {
		return {
	    	sounds: {
	    		audioTic: new Audio("./sounds/tic.mp3")
	    		// , anotherSound: new Audio("")
	    	}
		}
	}
}*/

// VARIABLES
var index = 1;
var isSelected = 0;

// POSITION
var offsetX = 3; // vw
var offsetY = 20; // vh
var posX = 65; // vw
var posY = 35; // vh
var fade = 15; // %
var blur = 5; // px
var grayscale = 0;

// DOCUMENT NODES
root = document.documentElement;
body = document.body;
faders = document.getElementsByClassName("background");

// SOUND
// var audioTic = new Audio("./sounds/tic.mp3");
// audioTic.preload = "auto";
// console.log(audioTic.preload);

// Read wheel inputs
document.addEventListener('wheel', function(wheel){
    // Set index
    if(wheel.deltaY > 0) {
        isSelected = 0;
        if (index < faders.length + 1)
        	index++;
        AudioTic();
    }
    if(wheel.deltaY < 0) {
        isSelected = 0;
        if (index > 1)
        	index--;
        AudioTic();
    }

    // Set background
    for (var i = 0; i < faders.length; i++)
    	faders[i].style.opacity = "0";
    if (faders[index - 2] != null)
    	faders[index - 2].style.opacity = "100%";

    // Tiles position
    tiles = document.getElementsByClassName("tile");

    TilePosition();
    Description();
});

// read keyboard inputs
document.addEventListener('keydown', function(event){
    // Set index
    if(event.key == "ArrowDown") {
        isSelected = 0;
        if (index < faders.length + 1)
        	index++;
        AudioTic();
    }
    if(event.key == "ArrowUp") {
        isSelected = 0;
        if (index > 1)
        	index--;
        AudioTic();
    }
    if(event.key == "ArrowLeft" || event.key == "ArrowRight" || event.key == "Enter") {
    	Selection();
    }

    // Set background
    for (var i = 0; i < faders.length; i++)
    	faders[i].style.opacity = "0";
    if (faders[index - 2] != null)
    	faders[index - 2].style.opacity = "100%";

    // Tiles position
    tiles = document.getElementsByClassName("tile");

    TilePosition();
    Description();
});

// Play "tic" sound when scrolling
function AudioTic(){
	// audioTic.pause();
    // audioTic.currentTime = 0;
    // audioTic.play();
    
    // this.playSound("audioTic");
    // console.log("AUDIO START !");
}

// Places tiles
function TilePosition(){
	// Modify position in function of isSelected
	if (isSelected == 1){
		offsetX = 1;
		posX = 75;
		grayscale = .5;
	}else{
		offsetX = 3;
		posX = 65;
		grayscale = 0;
	}

	// Get node collection
	tiles = document.getElementsByClassName("tile");

	// Position collection
    for (var i = 0; i < tiles.length; i++){
    	tiles[i].style.right = ((index - (i + 1)) * (index - (i + 1)) * offsetX + posX) + "vw";
    	tiles[i].style.top = ((index - (i + 1)) * offsetY + posY) + "vh";
    	tiles[i].style.opacity = (100 - (index - (i + 1)) * (index - (i + 1)) * fade) + "%";
    	tiles[i].style.zIndex = (10 - (index - (i + 1)) * (index - (i + 1)));
    	var fBlur = "blur(" + ((index - (i + 1)) * (index - (i +1)) * blur) + "px)";
    	var fGrayscale = "grayscale(" + (index - (i + 1)) * (index - (i + 1)) + grayscale + ")";
    	tiles[i].style.filter = fBlur + " " + fGrayscale;

    	// Set pointer events
    	if ((i + 1) == index)
    		tiles[i].style.pointerEvents = "auto";
    	else
    		tiles[i].style.pointerEvents = "none";
    }
}

// Shows the description and update inner informations
function Description(){

	description = document.getElementById("description");
	dTitle = description.getElementsByTagName("h1")[0];
	dLink = document.getElementById("seeMore");
	dPara = description.getElementsByTagName("p")[0];

	// Modify description content
	dTitle.innerHTML = tileCollection[index - 1][4];
	dLink.href = tileCollection[index - 1][2];
	dPara.innerHTML = tileDescription[index - 1];

	// Show the link if there is one
	if (tileCollection[index - 1][2] != "")
		dLink.innerHTML = "En savoir plus ►";
	else
		dLink.innerHTML = "";

	// Show description
	if (isSelected == 0){
		description.style.opacity = "0";
		description.style.marginLeft = "23vw";
	}else{
		description.style.opacity = "100%";
		description.style.marginLeft = "25vw";
	}

}

// Toggle selection and update tiles position and description associated
function Selection(){
	if (isSelected == 0)
		isSelected = 1;
	else
		isSelected = 0;
	TilePosition();
	Description();
}