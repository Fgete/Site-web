var stateMenu = false;

function clickMenu(){
	var menu = document.getElementById("menu");

	if (stateMenu) {
		closeMenu(menu);
	}else{
		openMenu(menu);
	}
	console.log("Menu : " + stateMenu);
}

function openMenu(element){
	var chaps = document.getElementsByClassName("chapitre");
	for (var i = 0; i < 3; i++) {
		chaps[i].style.width = '20%';
		chaps[i].style.height = '10vw';
	}

	document.getElementById("chap1").style.marginTop = '1%';
	document.getElementById("chap3").style.marginTop = '1%';

	document.getElementById("chap1").style.marginLeft = '6.5%';
	document.getElementById("chap2").style.marginLeft = '40%';
	document.getElementById("chap3").style.marginLeft = '73.6%';

	stateMenu = true;
}

function closeMenu(element){
	var chaps = document.getElementsByClassName("chapitre");
	for (var i = 0; i < 3; i++) {
		chaps[i].style.width = '3%';
		chaps[i].style.height = '0.7%';
	}

	document.getElementById("chap1").style.marginTop = '0%';
	document.getElementById("chap3").style.marginTop = '2%';

	document.getElementById("chap1").style.marginLeft = '48.5%';
	document.getElementById("chap2").style.marginLeft = '48.5%';
	document.getElementById("chap3").style.marginLeft = '48.5%';
	stateMenu = false;
}