var nSlide = 0;
var slideTime = 5000;
var slides = document.getElementById("slides");
var dots = document.getElementsByClassName("dot");

var timerDiapo = setInterval(NextSlide, slideTime);

function NextSlide(){
	if (nSlide < 4){
		nSlide++;
	}else{
		nSlide = 0;
	}
	UpdateSlide();
}

function PreviewSlide(){
	if (nSlide > 0){
		nSlide--;
	}else{
		nSlide = 4;
	}
	UpdateSlide();
}

function ForceSlide(x){
	nSlide = x;
	UpdateSlide();
}

function UpdateSlide(){
	slides.style.right = nSlide * 100 + "%";

	for (var i = 0; i < dots.length; i++)
		dots[i].style.opacity = "50%";
	dots[nSlide].style.opacity = "100%";
}