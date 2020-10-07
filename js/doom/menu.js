function blur(){
	var menuScreen = document.getElementById('menu');
	var blurElements = document.getElementsByClassName('blur');
	
	if (menuScreen.style.display != 'none') {
		blurElements[0].style.webkitFilter = 'blur(1.5rem)';
	}else{
		blurElements[0].style.webkitFilter = 'blur(0rem)';
	}
}

function showMenu(){
	var menuScreen = document.getElementById('menu');
	var menuPages = document.getElementsByClassName('pageMenu');

	if (menuScreen.style.display === 'none') {
		for (var i = 0; i < menuPages.length; i++) {
			menuPages[i].style.display = 'none';
		}
		menuScreen.style.display = 'flex';
	}else{
		for (var i = 0; i < menuPages.length; i++) {
			menuPages[i].style.display = 'none';
		}
		menuScreen.style.display ='none';
	}
	blur();
}

function openPage(page){
	var menuScreen = document.getElementById('menu');
	var pageToOpen = document.getElementById(page);

	pageToOpen.style.display = 'flex';
	menuScreen.style.display ='none';
	
}