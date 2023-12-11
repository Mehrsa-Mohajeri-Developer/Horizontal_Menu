let x = "o"
function button() {
    if (x == "o") {
        document.getElementById("menu").style.opacity = "1"
        document.getElementById("icon").style.rotate = "90deg"
        document.getElementById("icon").style.color = "#0ca7b0"
        x = "c"
    }
    else if (x == "c") {
        document.getElementById("menu").style.opacity = "0"
        document.getElementById("icon").style.rotate = "0deg"
        document.getElementById("icon").style.color = "black"
        x = "o"
    }
}