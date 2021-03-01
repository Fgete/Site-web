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
	var loadingParaText1 = document.createTextNode("Veuillez opérer quelques instants, le Site va vous répondre...");
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

function LoadingScreen(){
	if (sessionStorage.getItem('loadingClosed') != 1){
		loadingTitle = document.getElementById("loadingTitle");
		loadingClose = document.getElementById("loadingClose");
		loadingPara1 = document.getElementsByClassName("loadingPara")[0];

		loadingTitle.innerHTML = "LOADING... OK";
		loadingPara1.innerHTML = "Le <span class='game'>Site</span> est prêt à vous accueillir."
		loadingTitle.style.color = "#00FF00";
		loadingClose.style.opacity = "100%";
		loadingClose.style.pointerEvents = "auto";
		loadingClose.innerHTML = "►";
	}
}

function LoadingClose(){
	loadingBack = document.getElementById("loadingBack");
	loadingScreen = document.getElementById("loadingScreen");
	loadingBack.parentNode.removeChild(loadingBack);
	loadingScreen.parentNode.removeChild(loadingScreen);
	sessionStorage.setItem('loadingClosed', 1);
}