

window.onload = function(){
    const pyButton = document.getElementById("python-button")
    const jlButton = document.getElementById("julia-button")
    const parag = document.getElementById("code-input")
    pyButton.classList.add("change")
    fetch("../CodeFiles/mobiusfunction.py")
    .then(response => response.text())
    .then(text => {
        parag.textContent = text
    })

    pyButton.onclick = async function(){
        jlButton.classList.remove("change")
        pyButton.classList.add("change")
        fetch("../CodeFiles/mobiusfunction.py")
        .then(response => response.text())
        .then(text => {
            parag.textContent = text
        })
    }
    
    jlButton.onclick = function(){
        pyButton.classList.remove("change")
        jlButton.classList.add("change")
        fetch("../CodeFiles/mobiusfunction.jl")
        .then(response => response.text())
        .then(text => {
            parag.textContent = text
        })
    }        
}
