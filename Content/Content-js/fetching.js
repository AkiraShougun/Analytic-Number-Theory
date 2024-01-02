const pyButton = document.getElementById("python-button")
const jlButton = document.getElementById("julia-button")
const parag = document.getElementById("code-input")

window.onload = function(){
    fetch("../CodeFiles/mobiusfunction.py")
    .then(response => response.text())
    .then(text => {
        parag.textContent = text
    })
}
pyButton.onclick = function(){
    fetch("../CodeFiles/mobiusfunction.py")
    .then(response => response.text())
    .then(text => {
        parag.textContent = text
    })
}

jlButton.onclick = function(){
    fetch("../CodeFiles/mobiusfunction.jl")
    .then(response => response.text())
    .then(text => {
        parag.textContent = text
    })
}


/*
fetch("../CodeFiles/mobiusfunction.py")
        .then(response => response.text())
        .then(text => {
            parag.textContent = text
            pyButton.style.borderBottom="none";
            pyButton.style.borderTop= "solid";
            pyButton.style.borderLeft= "solid";
            pyButton.style.borderBlockColor=rgb(0, 208, 255);
            pyButton.style.borderRight="solid";
            pyButton.style.backgroundColor = "#2b2b2b"
            pyButton.onclick = function(){
                parag.textContent = text
            }
        })
        fetch("../CodeFiles/mobiusfunction.jl")
        .then(response => response.text())
        .then(text => {
            jlButton.onclick = function(){
                parag.textContent = text
            }
        })

*/