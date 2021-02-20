// --- STORAGE ---
// We use Session Storage in order to show the loading
// screen only once per user session

// --- LOADING BUILDING ---

// If the loading screen has never been closed, build it
if (sessionStorage.getItem('loadingClosed') != 1){
	// Loading background
	var loadingBack = document.createElement("div");
	loadingBack.setAttribute("id", "loadingBack");
	document.body.appendChild(loadingBack);

	// Loading screen
	var loadingScreen = document.createElement("div");
	loadingScreen.setAttribute("id", "loadingScreen");
	document.body.appendChild(loadingScreen);

	// Loading title
	var loadingTitle = document.createElement("h2");
	loadingTitle.setAttribute("id", "loadingTitle");
	var loadingTitleText = document.createTextNode("LOADING...");
	loadingTitle.appendChild(loadingTitleText);
	loadingScreen.appendChild(loadingTitle);

	// Loading para 1
	var loadingPara1 = document.createElement("p");
	loadingPara1.setAttribute("class", "loadingPara");
	var loadingParaText1 = document.createTextNode("Veuillez opérer quelques instants, le <span class='game'>Site</span> va vous répondre...");
	loadingPara1.appendChild(loadingParaText1);
	loadingScreen.appendChild(loadingPara1);

	// Loading para 2
	var loadingPara2 = document.createElement("p");
	loadingPara2.setAttribute("class", "loadingPara");
	var loadingParaText2 = document.createTextNode("Faites défiler les éléments avec la molette ou utilisez les flèches (↑ ↓) de votre clavier. Cliquez pour sélectionner et déselectionner un élément ou utilisez les flèches (← →) de votre clavier.");
	loadingPara2.appendChild(loadingParaText2);
	loadingScreen.appendChild(loadingPara2);

	// Loading close
	var loadingClose = document.createElement("p");
	loadingClose.setAttribute("id", "loadingClose");
	loadingClose.setAttribute("onclick", "LoadingClose()");
	var loadingCloseText = document.createTextNode("₪");
	loadingClose.appendChild(loadingCloseText);
	loadingScreen.appendChild(loadingClose);
}

// --- TILES BUILDING ---

// [Title, Tile background, URL, Body background, Description title]

var tileCollection = [
	["L A G", "./images/profil.jpg", "", "", "Qui suis-je?"],
	["VJing", "./images/articles/vjing.png", "./html/vjing.html", "./images/index/wallpaper_vjing.png", "Projet VJing"],
	["A.R.M.", "./images/articles/arm.png", "./html/arm.html", "./images/index/wallpaper_arm.png", "Projet de jeu d'horreur"]
];

var tileDescription = [
	["Bienvenue! Je m'appelle François GETE et je suis étudiant dans le jeu vidéo à <a href='https://ludus-academie.fr/' target='blank'>Ludus Académie</a>. Vous trouverez sur ce site mes différentes créations. Je vous invite donc à l'<span class='game' onclick='BeginGame()'>explorer</span>."],
	["Le 'projet VJing' est un projet audio-visuel ayant pour but de lier le son et l'image dans une performance live. La particularité de celui-ci, est l'utilisation du son au service de la 3D."],
	["Dans ce jeu, vous entrez dans la peau d'un employé de la ARM. Cette entreprise à pour but de répertorier et de classifier les objets considérés comme anormaux."]
];

// Scroller
var scroller = document.createElement("div");
scroller.setAttribute("id", "scroller");
document.body.appendChild(scroller);

for (var i = 0; i < tileCollection.length; i++){

	// Tile
	var tile = document.createElement("div");
	tile.setAttribute("onclick", "Selection()");
	tile.setAttribute("id", "t" + (i + 1));
	tile.setAttribute("class", "tile");
	var title = document.createTextNode(tileCollection[i][0]);
	tile.appendChild(title);
	scroller.appendChild(tile);

	// Set tile background
	tile.style.backgroundImage = 'url("' + tileCollection[i][1] + '")';

	// Create associated background
	if (i > 0){
		var background = document.createElement("div");
		background.setAttribute("class", "background");
		background.setAttribute("style", "background-image: url('" + tileCollection[i][3] + "')");

		document.body.appendChild(background);
	}
}

// --- DESCRIPTION BUILDING ---

var description = document.createElement("div");
description.setAttribute("id", "description");

var descriptionTitle = document.createElement("h1");

var descriptionPara = document.createElement("p");

var descriptionLink = document.createElement("a");
descriptionLink.setAttribute("id", "seeMore");

description.appendChild(descriptionTitle);
description.appendChild(descriptionPara);
description.appendChild(descriptionLink);

body.appendChild(description);