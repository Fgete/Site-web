var listChapter = document.getElementsByClassName("chapter");
var listPage = document.getElementsByClassName("chest");
var baseColor = "var(--color_MainWhite)";
var displayMode = "flex";


// Show selected page
function OpenPage(x){
	for (var i = 0; i < listPage.length; i++){
		listChapter[i].style.color = baseColor;
		listPage[i].style.display = "none";
	}
	listChapter[x].style.color = "var(--color_MainOrange)";
	listPage[x].style.display = displayMode;
}

// Setup
function Setup(x){
	OpenPage(x);
	dots[nSlide].style.opacity = "100%";
}