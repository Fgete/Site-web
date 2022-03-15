// --- TILE INDEX ---
let index = 0;
let selected = false;

// --- TILE TRANSFORM SETTER & PANEL UPDATE ---
function SetTilesPosition(n){
    const positions = [
        [0, 1, 2, 3, 4, 5],
        [5, 0, 1, 2, 3, 4],
        [4, 5, 0, 1, 2, 3],
        [3, 4, 5, 0, 1, 2],
        [2, 3, 4, 5, 0, 1],
        [1, 2, 3, 4, 5, 0]
    ]
    let tileOrigins = document.getElementsByClassName("tileOrigin");
    let tiles       = document.getElementsByClassName("tile");
    const tileOriginTransforms = [
        "translateX(500px) rotateY(20deg)",
        "translateX(500px) rotateY(0deg)",
        "translateX(500px) rotateY(-20deg)",
        "translateX(500px) rotateY(-40deg)",
        "translateX(500px) rotateY(-60deg)",
        "translateX(500px) rotateY(-80deg)"
    ];
    const tileTransforms = [
        "translateX(-1000px) translateY(-50px) rotateZ(10deg)",
        "translateX(-1000px) translateY(-50px) rotateZ(0deg)",
        "translateX(-1000px) translateY(-50px) rotateZ(-10deg)",
        "translateX(-1000px) translateY(-50px) rotateZ(-20deg)",
        "translateX(-1000px) translateY(-50px) rotateZ(-30deg)",
        "translateX(-1000px) translateY(-50px) rotateZ(-40deg)"
    ];
    const tileBlurs = [
        "blur(0)",
        "blur(2px)",
        "blur(4px)",
        "blur(6px)",
        "blur(8px)",
        "blur(10px)"
    ];
    const tileOpacities = ["100%", "80%", "60%", "40%", "20%", "10%"];
    for (let i = 0; i < tileOrigins.length; i++){
        tileOrigins[i].style.transform = tileOriginTransforms[positions[n][i]];
        tileOrigins[i].style.zIndex    = 6-positions[n][i];
        tiles[i].style.transform       = tileTransforms[positions[n][i]];
        tiles[i].style.opacity         = tileOpacities[positions[n][i]];
        tiles[i].style.borderLeft      = "none";
        tiles[i].style.filter          = tileBlurs[positions[n][i]];
        tiles[i].style.pointerEvents   = "none";
    }
    tiles[n].style.borderLeft          = "solid 2px var(--color_Main)";
    tiles[n].style.pointerEvents       = "";
    PanelsUpdate();
}

// --- INDEX CHANGER ---
function ChangeIndex(n){
    if (n < 0 && index === 0)
        index = 5;
    else if (n > 0 && index === 5)
        index = 0;
    else
        index += n;
    SetTilesPosition(index);
}

// --- MOUSE WHEEL LISTENER ---
window.addEventListener("wheel", event => {
    const delta = Math.sign(event.deltaY);
    ChangeIndex(delta);
    SetSelected(false);
});

document.addEventListener('keydown', function(event) {
    if (event.key === "ArrowRight" || event.key === "ArrowLeft")
        ToggleSelected();
});

// --- UPDATE PANELS POSITIONS ---
function PanelsUpdate() {
    let panels   = document.getElementsByClassName("panel");
    let bigTitle = document.getElementById("bigTitle");

    // Default positions
    for (let i = 0; i < panels.length; i++)
        panels[i].style.right     = "-70vw";

    // Set current panel position
    if (selected){
        panels[index].style.right = "5vw";
        bigTitle.style.right      = "-70%";
    }
    else{
        panels[index].style.right = "-70vw";
        bigTitle.style.right      = "2%";
    }

    // Update spinner position
    SpinnerUpdate();
}

// --- UPDATE SPINNER POSITION ---
function SpinnerUpdate() {
    let spinner = document.getElementById("spinnerOrigin");
    if (selected)
        spinner.style.left = "0";
    else
        spinner.style.left = "50vw";
}

// --- TOGGLE SELECTED AND UPDATE PANELS POSITIONS ---
function ToggleSelected() {
    selected = !selected;
    PanelsUpdate();
}

// --- SET SELECTED AND UPDATE PANELS POSITIONS ---
function SetSelected(newSelected){
    selected = newSelected;
    PanelsUpdate();
}