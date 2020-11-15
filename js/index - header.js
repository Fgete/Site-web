// GET HEADER
var header = document.querySelector("header");

// CREATE BD-LOGO
var logo = document.createElement("div");
logo.setAttribute("id", "bd-logo");
logo.setAttribute("class", "bandeau");
header.appendChild(logo);

var image = document.createElement("img");
image.setAttribute("src", "./images/profil.jpg");
image.setAttribute("id", "logo");
logo.appendChild(image);

// CREATE BD-CHAPTER
var chapter = document.createElement("div");
chapter.setAttribute("id", "bd-chapter");
chapter.setAttribute("class", "bandeau");
header.appendChild(chapter);

var listChapters = ["accueil", "jeux", "3D", "autres"];

for (var i = 0; i < listChapters.length; i++){
	var chap = document.createElement("div");
	chap.setAttribute("id", "chap" + i);
	chap.setAttribute("class", "chapter clickable");
	chap.setAttribute("onclick", "OpenPage(" + i + ")");
	
	var chapText = document.createTextNode(listChapters[i]);
	chap.appendChild(chapText);

	chapter.appendChild(chap);
}

// CREATE NIGHTMODE
var nightMode = document.createElement("div");
nightMode.setAttribute("id", "nightMode");
nightMode.setAttribute("class", "bandeau clickable");
nightMode.setAttribute("onclick", "ToggleNightMode()");
header.appendChild(nightMode);

var nightModeLune = document.createElement("div");
nightModeLune.setAttribute("id", "nightModeLune");
nightMode.appendChild(nightModeLune);

var nightModeLune2 = document.createElement("div");
nightModeLune2.setAttribute("id", "nightModeLune2");
nightModeLune.appendChild(nightModeLune2);

var nightModeCapsule = document.createElement("div");
nightModeCapsule.setAttribute("id", "nightModeCapsule");
nightMode.appendChild(nightModeCapsule);

var nightModeSlider = document.createElement("div");
nightModeSlider.setAttribute("id", "nightModeSlider");
nightModeSlider.setAttribute("class", "anime");
nightModeCapsule.appendChild(nightModeSlider);

var nightModeSliderColor = document.createElement("div");
nightModeSliderColor.setAttribute("id", "nightModeSliderColor");
nightModeSlider.appendChild(nightModeSliderColor);