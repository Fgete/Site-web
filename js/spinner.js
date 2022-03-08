// --- TILE INDEX ---
let index = 0;

// --- TILE TRANSFORM SETTER ---
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
        tiles[i].style.transform       = tileTransforms[positions[n][i]];
        tiles[i].style.opacity         = tileOpacities[positions[n][i]];
        tiles[i].style.borderLeft      = "none";
        tileOrigins[i].style.zIndex    = 6-positions[n][i];
        tiles[i].style.filter          = tileBlurs[positions[n][i]];
    }
    tiles[n].style.borderLeft          = "solid 2px var(--color_Main)";
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
});

document.addEventListener('keydown', function(event) {
    if (event.key === "ArrowDown")
        ChangeIndex(-1);
    if (event.key === "ArrowUp")
        ChangeIndex(1);
});