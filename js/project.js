function ExitProjectWithUrl(url){
    ExitProject();
    setTimeout(function () {
        window.location.href = url;
        EnterProject();
    }, 1000);
}

function EnterProject(){
    mainScreen = document.getElementById("mainScreen");
    mainScreen.style.transition = "2.5s";
    mainScreen.style.width      = "88%";
    mainScreen.style.transform  = "translateZ(-1000px) translateX(105px) rotateY(10deg)";
    mainScreen.style.pointerEvents = "";
    setTimeout(function () {
        window.scrollTo(0, 120);
    }, 1000);
}

function ExitProject(){
    mainScreen = document.getElementById("mainScreen");
    mainScreen.style.transition = ".5s";
    mainScreen.style.width      = "100%";
    mainScreen.style.transform  = "none";
    mainScreen.style.pointerEvents = "none";
}

function GoUp() {
    console.log("ScrollUp");
    window.scrollTo(0, 0);
}