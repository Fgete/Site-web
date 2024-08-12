function ExitProjectWithUrl(url, delay) {
    ExitProject();
    setTimeout(function () {
        window.location.href = url;
        EnterProject();
    }, delay);
    console.log(delay);
}

function EnterProject() {
    mainScreen = document.getElementById("mainScreen");
    mainScreen.style.transition = "1s";
    mainScreen.style.width      = "88dvw";
    mainScreen.style.transform  = "translateZ(-1000px) translateX(6dvw) rotateY(7deg)";
    mainScreen.style.pointerEvents = "";
    setTimeout(function () {
        window.scrollTo(0, 150);
    }, 1000);
}

function ExitProject() {
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