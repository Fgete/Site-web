// GET FOOTER
var footer = document.querySelector("footer");

// CREATE RESEAU
var reseau = document.createElement("div");
reseau.setAttribute("id", "reseau");
footer.appendChild(reseau);

var listUrl = ["https://www.facebook.com/pages/category/Visual-Arts/Lag-Production-106201717429277/", "https://www.instagram.com/wargh_lag/?hl=fr", "https://www.youtube.com/channel/UCLDG2sF3vIVgSYq4q3aWzUw"];
var listLiens = ["Facebook", "Instagram", "Youtube"];
var listImages = ["facebook.png", "instagram.png", "youtube.png"];

for (var i = 0; i < 3; i++){
	lien = document.createElement("a");
	lien.setAttribute("href", listUrl[i]);
	lien.setAttribute("target", "blank");
	lien.setAttribute("title", listLiens[i]);

	image = document.createElement("img");
	image.setAttribute("src", "./images/logos/" + listImages[i]);
	image.setAttribute("class", "logoReseau anime");

	lien.appendChild(image);
	reseau.appendChild(lien);
}