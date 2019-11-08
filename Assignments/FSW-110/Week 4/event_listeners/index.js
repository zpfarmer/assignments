var box = document.getElementById("box")
box.style.backgroundColor = "purple"

function changeBlue() {
    box.style.backgroundColor = "blue"
}
box.addEventListener("mouseover", changeBlue)

function changeRed() {
    box.style.backgroundColor = "red"
}
box.addEventListener("mousedown", changeRed)

function changeYellow() {
    box.style.backgroundColor = "yellow"
}
box.addEventListener("mouseup", changeYellow)

function changeGreen(){
    box.style.backgroundColor = "green"
}
box.addEventListener("dblclick", changeGreen)

function changeOrange() {
    document.body.style.backgroundColor = "orange"
}
document.body.addEventListener("wheel", changeOrange)

const input = document.querySelector('div');
const log = document.getElementById('box');

box.onkeypress = function(){
    var keyCode = window.event ? window.event.keyCode : event.which;
}

function changeColor (keyCode){
    if (keyCode == 66){
        box.style.backgroundColor = "blue"
    } else if (keyCode == 82) {
        document.box.style.backgroundColor = "red"
    } else if (keyCode == 89) {
        document.box.style.backgroundColor = "yellow"
    } else if (keyCode == 71) {
        document.box.style.backgroundColor = "green"
    } else if (keyCode == 79) {
        document.box.style.backgroundColor = "orange"
    }
}

