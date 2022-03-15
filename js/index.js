function ExitScreenWithUrl(url){
    ExitScreen();
    setTimeout(function () {
        window.location.href = url;
        EnterScreen();
    }, 1000);
}

function EnterScreen(){
    screenOff = document.getElementById("screenOff");
    screenOff.style.opacity = "0";
}

function ExitScreen(){
    screenOff = document.getElementById("screenOff");
    screenOff.style.opacity = "100%";
}