function LoadingScreen(){
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

function LoadingClose(){
	loadingBack = document.getElementById("loadingBack");
	loadingScreen = document.getElementById("loadingScreen");
	loadingBack.parentNode.removeChild(loadingBack);
	loadingScreen.parentNode.removeChild(loadingScreen);
	sessionStorage.setItem('loadingClosed', 1);
}