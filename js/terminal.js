terminalState = 0;
terminalText = null;
terminalFolderSelect = 0;

function TerminalOn() {
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

function TerminalPasswordScreen() {
    terminalText.innerHTML = "Pwd: _ _ _ _";
    terminalState = 1;
}

function TerminalAccessGranted() {
    terminalText.innerHTML = ">> Access granted";
    terminalState = 2;
    setTimeout(function () {
        PrintFolderScreen(terminalFolderSelect);
    }, 2000);
}

document.addEventListener('keydown', function(event) {
    if (event.key === "Enter") {
        CheckCommand(document.getElementById("terminalInput").value);
    }

    if (event.key === "ArrowUp") {
        if (terminalState === 2){
            if (terminalFolderSelect === 0)
                terminalFolderSelect = 2;
            else
                terminalFolderSelect--;
            PrintFolderScreen(terminalFolderSelect);
        }
    }

    if (event.key === "ArrowDown") {
        if (terminalState === 2){
            if (terminalFolderSelect === 2)
                terminalFolderSelect = 0;
            else
                terminalFolderSelect++;
            PrintFolderScreen(terminalFolderSelect);
        }
    }
});

function CheckCommand(command){
    document.getElementById("terminalInput").value = "";
    if (terminalState === 1 && command === "3722")
        TerminalAccessGranted();
}

function PrintFolderScreen(n) {
    if (n === 0)
        terminalText.innerHTML =
            "user<br/>" +
            "&nbsp║<br/>" +
            "&nbsp╟─ <span>data</span><br/>" +
            "&nbsp║<br/>" +
            "&nbsp╟─ tmp<br/>" +
            "&nbsp║<br/>" +
            "&nbsp╙─ os<br/>";
    else if (n === 1)
        terminalText.innerHTML =
            "user<br/>" +
            "&nbsp║<br/>" +
            "&nbsp╟─ data<br/>" +
            "&nbsp║<br/>" +
            "&nbsp╟─ <span>tmp</span><br/>" +
            "&nbsp║<br/>" +
            "&nbsp╙─ os<br/>";
    else if (n === 2)
        terminalText.innerHTML =
            "user<br/>" +
            "&nbsp║<br/>" +
            "&nbsp╟─ data<br/>" +
            "&nbsp║<br/>" +
            "&nbsp╟─ tmp<br/>" +
            "&nbsp║<br/>" +
            "&nbsp╙─ <span>os</span><br/>";
}