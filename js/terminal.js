terminalState = 0;
terminalText = null;
terminalFolderSelect = "0";
loginTime = null;

// State = 0
function TerminalOn() {
    if (terminalState !== 0)
        return;

    buttonLight = document.getElementById("terminalButtonLight");
    buttonLight.style.background      = "none";
    buttonLight.style.backgroundColor = "lime";
    buttonLight.style.boxShadow       = "0 0 10px lime";

    terminalInput = document.getElementById("terminalInput");
    terminalInput.hidden = false;
    terminalInput.value  = "";

    terminalText = document.getElementById("terminalText");

    setTimeout(function () {
        terminalText.innerHTML =
            "░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░<br/>" +
            "░░░░░░░░▒▓▓▓▒░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░▒▓▓▓▒░░░░░░░░░░░<br/>" +
            "░░░░░░░▒▓▓▓▒▓▒░░░░░░░░░░░░░░░░░░░░░░░░░░░░▒▓▓▓▒▓▒░░░░░░░░░░<br/>" +
            "░░░░░░░░▒▓▒▓▒░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░▒▓▒▓▒░░░░░░░░░░░<br/>" +
            "░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░<br/>" +
            "░░░░░░░░░░░░░▒▒▓▓▓▓▓▒▒░░░░░░░░░░░░░▒▒▓▓▓▓▒▒░░░░░░░░░░░░░░░░<br/>" +
            "░░░░░░░░░░░▒▒▓▓▓▓▓▓▓▓▓▓▓▓▓▒▒▒▒▒▓▓▓▓▓▓▓▓▓▓▓▓▒▒░░░░░░░░░░░░░░<br/>" +
            "░░░░░░░░░░▒▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▒░░░░░░░░░░░░░<br/>" +
            "░░░░░░░░░░▒▓▓▓▓▓▓▓▓▒▒░░░░░░░░░░░░░░░░░░░░░░▒▓▒░░░░░░░░░░░░░<br/>" +
            "░░░░░░░░░░░▒▓▓▓▓▒░░░░░░░░░░░░░░░░░░░░░░░░░░░▒▒░░░░░░░░░░░░░<br/>" +
            "░░░░░░░░░░░░▒▓▒░░░░░░░░░░░░░░░░░░░░░░░░░░░░░▒░░░░░░░░░░░░░░<br/>" +
            "░░░░░░░░░░░░░░░▒░░░░░░░░░░░░░░░░░░░░░░░░░░░▒░░░░░░░░░░░░░░░<br/>" +
            "░░░░░░░░░░░░░░░░░░░▒░░░░░░░░░░░░░░░░░░░░░▒░░░░░░░░░░░░░░░░░<br/>" +
            "░░░░░░░░░░░░░░░░░░░░░░░▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒░░░░░░░░░░░░░░░░░░░░░<br/>" +
            "░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░<br/>" +
            "░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░";
        setTimeout(function () {
            terminalText.innerHTML =
                ">> boot LagOS";
            setTimeout(function () {
                terminalText.innerHTML =
                    ">> boot LagOS.....";
                setTimeout(function () {
                    terminalText.innerHTML =
                        ">> boot LagOS............";
                    setTimeout(function () {
                        terminalText.innerHTML =
                            ">> boot LagOS...........................................OK";
                        setTimeout(function () {
                            terminalText.innerHTML =
                                ">> boot LagOS...........................................OK<br/>" +
                                ">> .<br/>";
                            setTimeout(function () {
                                terminalText.innerHTML =
                                    ">> boot LagOS...........................................OK<br/>" +
                                    ">> .<br/>" +
                                    ">> .<br/>";
                                setTimeout(function () {
                                    terminalText.innerHTML =
                                        ">> boot LagOS...........................................OK<br/>" +
                                        ">> .<br/>" +
                                        ">> .<br/>" +
                                        ">> .<br/>";
                                    setTimeout(function () {
                                        terminalText.innerHTML =
                                            ">> boot LagOS...........................................OK<br/>" +
                                            ">> .<br/>" +
                                            ">> .<br/>" +
                                            ">> .<br/>" +
                                            ">> .<br/>";
                                        setTimeout(function () {
                                            terminalText.innerHTML =
                                                ">> boot LagOS...........................................OK<br/>" +
                                                ">> .<br/>" +
                                                ">> .<br/>" +
                                                ">> .<br/>" +
                                                ">> .<br/>" +
                                                ">> Welcom back.<br/>";
                                            setTimeout(function () {
                                                TerminalPasswordScreen();
                                            }, 2000);
                                        }, 500);
                                    }, 100);
                                }, 100);
                            }, 100);
                        }, 100);
                    }, 1000);
                }, 500);
            }, 1000);
        }, 2000);
    }, 1000);
}

// State = 1
function TerminalPasswordScreen() {
    terminalText.innerHTML = "Pwd: _ _ _ _";
    terminalState = 1;
}

// State = 2
function TerminalAccessGranted() {
    terminalText.innerHTML = ">> Access granted";
    terminalState = 2;
    loginTime = Date();
    setTimeout(function () {
        PrintFolderScreen(terminalFolderSelect);
    }, 2000);
}

document.addEventListener('keydown', function(event) {
    if (event.key === "Enter" || event.key === "ArrowRight" || event.key === "Space") {
        if (terminalState === 1)
            CheckCommand(document.getElementById("terminalInput").value);
        if (terminalState === 2){
            if (terminalFolderSelect === "1") {
                terminalState = 2.1;
                terminalFolderSelect = "10";
                PrintFolderScreen(terminalFolderSelect);
            }
        }
    }

    if (event.key === "ArrowUp") {
        if (terminalState === 2){
            if (terminalFolderSelect === "0")
                terminalFolderSelect = "2";
            else if (terminalFolderSelect === "2")
                terminalFolderSelect = "1";
            else
                terminalFolderSelect = "0";
            PrintFolderScreen(terminalFolderSelect);
        }
    }

    if (event.key === "ArrowDown") {
        if (terminalState === 2){
            if (terminalFolderSelect === "2")
                terminalFolderSelect = "0";
            else if (terminalFolderSelect === "0")
                terminalFolderSelect = "1";
            else
                terminalFolderSelect = "2";
            PrintFolderScreen(terminalFolderSelect);
        }
    }

    if (event.key === "Escape" || event.key === "ArrowLeft") {
        if (terminalState === 2.1 && terminalFolderSelect === "10"){
            terminalFolderSelect = "1";
            terminalState = 2;
            PrintFolderScreen(terminalFolderSelect);
        }
    }
});

function CheckCommand(command){
    document.getElementById("terminalInput").value = "";
    if (terminalState === 1 && command === "3722")
        TerminalAccessGranted();
}

// State = 2
function PrintFolderScreen(n) {
    if (n === "0") // Data
        terminalText.innerHTML =
            "user<br/>" +
            " ║<br/>" +
            " ╟─ <span>data</span><br/>" +
            " ║<br/>" +
            " ╟─ tmp<br/>" +
            " ║<br/>" +
            " ╙─ os<br/>";
    else if (n === "1") // Temp
        terminalText.innerHTML =
            "user<br/>" +
            " ║<br/>" +
            " ╟─ data<br/>" +
            " ║<br/>" +
            " ╟─ <span>tmp</span><br/>" +
            " ║<br/>" +
            " ╙─ os<br/>";
    else if (n === "2") // Os
        terminalText.innerHTML =
            "user<br/>" +
            " ║<br/>" +
            " ╟─ data<br/>" +
            " ║<br/>" +
            " ╟─ tmp<br/>" +
            " ║<br/>" +
            " ╙─ <span>os</span><br/>";
    else if (n === "10") // Temp -> file
        terminalText.innerHTML =
            "user<br/>" +
            " ║<br/>" +
            " ╟─ data<br/>" +
            " ║<br/>" +
            " ╟─ tmp ──┐<br/>" +
            " ║        └─ <span>7EGEWlaG6O</span><br/>" +
            " ╙─ os<br/>";
    else if (n === "100"){
        terminalText.innerHTML =
            "user/tmp/<span>7EGEWlaG6O</span><br/>";
    }
}

function Back(){
    window.location.href = "./arm.html";
}