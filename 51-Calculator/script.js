let lightTheme = "./light.css";
let darkTheme = "./dark.css";

function clearScreen() {
    document.getElementById("result").value = "";
}

function liveScreen(value) {
    let res = document.getElementById("result");
    if (res.value == "undefined") {
        res.value = "";
    }
    res.value += value;
}

function changeTheme() {
    let darkMode = document.getElementById("dark-mode");
    let theme = document.getElementById("theme");
    if (theme.getAttribute("href") == lightTheme) {
        theme.href = darkTheme;
        darkMode.innerHTML = "Light Mode 🌞";
    } else {
        theme.href = lightTheme;
        darkMode.innerHTML = "Dark Mode 🌙";
    }
}