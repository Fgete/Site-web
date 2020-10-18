var nightMode = false;

// NIGHT MODE
function ToggleNightMode(){
	nightMode = !nightMode;

	// NIGHT MODE
	slider = document.getElementById("nightModeSlider");
	capsule = document.getElementById("nightModeCapsule");
	lune = document.getElementById("nightModeLune");

	// BODY BACKGROUND
	body = document.getElementById("body");

	// FONTS
	darkFont = document.getElementsByClassName("darkFont");
	lightFont = document.getElementsByClassName("lightFont");

	margin = slider.style.marginRight;
	color = capsule.style.backgroundColor;
	bodyColor = body.style.backgroundColor;
	darkFontColor = "var(--color_MainBlack)";
	lightFontColor = "var(--color_MainWhite)";

	if (nightMode){
		margin = "1.5em";
		color = "var(--color_MainOrange)";
		bodyColor = "var(--color_MainBlack)";
		darkFontColor = "var(--color_MainWhite)";
		lightFontColor = "var(--color_MainOrange)";
	}else{
		margin = "0";
		color = "var(--color_MainWhite)";
		bodyColor = "var(--color_MainWhite)";
		darkFontColor = "var(--color_MainBlack)";
		lightFontColor = "var(--color_MainWhite)";
	}

	slider.style.marginRight = margin;
	capsule.style.backgroundColor = color;
	lune.style.backgroundColor = color;
	body.style.backgroundColor = bodyColor;
	for (var i = 0; i < darkFont.length; i++)
		darkFont[i].style.color = darkFontColor;
	for (var i = 0; i < lightFont.length; i++)
		lightFont[i].style.color = lightFontColor;
}