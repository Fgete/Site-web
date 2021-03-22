// --- STORAGE ---
// We use Session Storage in order to show the loading
// screen only once per user session

// --- TILES BUILDING ---

// [Title, Tile background, URL, Body background, Description title]

var tileCollection = [
	["L A G", "./images/profil.jpg", "./html/contact.html", "", "Qui suis-je?"],
	["Galerie", "./images/articles/galerie.png", "./html/galery.html", "", "J'etez-y un œil."],
	["VJing", "./images/articles/vjing.png", "./html/vjing.html", "./images/index/wallpaper_vjing.png", "Projet VJing"],
	["A.R.M.", "./images/articles/arm.png", "./html/arm.html", "./images/index/wallpaper_arm.png", "Projet de jeu d'horreur"],
	["B.M. Remake", "./images/articles/BMRemake.png", "./html/blackMesaRemake.html", "./images/index/wallpaper_entomo.png", "Remake d'un Demake"],
	["Entomocene", "./images/articles/egout.png", "", "./images/index/wallpaper_entomo.png", "Projet de Rogue Like"]
];

var tileDescription = [
	["Bienvenue! Je m'appelle François GETE et je suis étudiant dans le jeu vidéo à <a href='https://ludus-academie.fr/' target='blank'>Ludus Académie</a>. Vous trouverez sur ce site mes différentes créations. Je vous invite donc à l'<span class='game' onclick='BeginGame()'>explorer</span>."],
	["Par ce lien, vous trouverez une galerie dans laquelle j'y mets mes créations qui ne sont pas présenté dans un article."],
	["Le 'projet VJing' est un projet audio-visuel ayant pour but de lier le son et l'image dans une performance live. La particularité de celui-ci, est l'utilisation du son au service de la 3D."],
	["Dans ce jeu, vous entrez dans la peau d'un employé de la ARM. Cette entreprise à pour but de répertorier et de classifier les objets considérés comme anormaux."],
	["Il s'agit d'un exercice où nous avons fait un remake du jeu Black Mesa. Vous y trouverez toute les techniques utilisés lors de sa création."],
	["Le <span class='game'>Site</span> n'est pas terminé pour le moment, veuillez nous en excuser."]
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