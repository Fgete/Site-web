var link = document.getElementById('adaptative-stylesheet');
// Open fullscreen
function openFullscreen() {
	var gameWindow = document.getElementById('main');

  if (gameWindow.requestFullscreen) {
    gameWindow.requestFullscreen();
  } else if (gameWindow.mozRequestFullScreen) { /* Firefox */
    gameWindow.mozRequestFullScreen();
  } else if (gameWindow.webkitRequestFullscreen) { /* Chrome, Safari and Opera */
    gameWindow.webkitRequestFullscreen();
  } else if (gameWindow.msRequestFullscreen) { /* IE/Edge */
    gameWindow.msRequestFullscreen();
  }
  link.setAttribute('href', '../../css/doom/doom-fullscreen.css');
}

// Close fullscreen
function closeFullscreen() {
  if (document.exitFullscreen) {
    document.exitFullscreen();
  } else if (document.mozCancelFullScreen) { /* Firefox */
    document.mozCancelFullScreen();
  } else if (document.webkitExitFullscreen) { /* Chrome, Safari and Opera */
    document.webkitExitFullscreen();
  } else if (document.msExitFullscreen) { /* IE/Edge */
    document.msExitFullscreen();
  }
    link.setAttribute('href', '../../css/doom/doom.css');
}

document.addEventListener('keydown', function(keyDown) {
    if(keyDown.keyCode == 27) {
    	closeFullscreen();
    }
});

function changeNormalStyle(){
    link.setAttribute('href', '../../css/doom/doom.css');
}