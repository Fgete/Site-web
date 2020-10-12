var nightMode = false;

// NIGHT MODE
function toggleNightMode(){
	nightMode = !nightMode;

	slider = document.getElementById("nightModeSlider");
	capsule = document.getElementById("nightModeCapsule");
	lune = document.getElementById("nightModeLune");
	body = document.getElementById("body");
	chest = document.getElementsByClassName("chest");

	margin = slider.style.marginRight;
	color = capsule.style.backgroundColor;
	bodyColor = body.style.backgroundColor;
	bodyFontColor = chest[0].style.color;

	if (nightMode){
		margin = "1.5em";
		color = "var(--color_MainOrange)";
		bodyColor = "var(--color_MainBlack)";
		bodyFontColor = "var(--color_MainWhite)";
	}else{
		margin = "0";
		color = "var(--color_MainWhite)";
		bodyColor = "var(--color_MainWhite)";
		bodyFontColor = "var(--color_MainBlack)";
	}

	slider.style.marginRight = margin;
	capsule.style.backgroundColor = color;
	lune.style.backgroundColor = color;
	body.style.backgroundColor = bodyColor;
	for (var i = 0; i < chest.length; i++) {
		chest[i].style.color = bodyFontColor;
	}
}