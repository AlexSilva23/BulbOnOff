
function LampOnOff() {
    if (document.getElementById("LampImage").src == "https://i.postimg.cc/6QyTynzr/bulb-on.png") {
        document.getElementById("LampImage").src = "https://i.postimg.cc/KjK1wL3c/bulb-off.png";
        document.getElementById("ButtonOnOff").textContent = "Ligar";
        //document.getElementById("main").classList.add("lightoff");
        //document.getElementById("main").classList.remove("lighton");
        document.body.style.backgroundColor = "#000";
    } else {
        document.getElementById("LampImage").src = "https://i.postimg.cc/6QyTynzr/bulb-on.png";
        document.getElementById("ButtonOnOff").textContent = "Desligar";
        //document.getElementById("main").classList.remove("lightoff");
        //document.getElementById("main").classList.add("lighton");
        document.body.style.backgroundColor = "#FFF";
    }
}