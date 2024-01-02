window.addEventListener('load', function() {
    const pyButton = document.getElementById("python-button")
    const jlButton = document.getElementById("julia-button")
    const parag = document.getElementById("code-input")

    pyButton.classList.add("changer")
        fetch("../CodeFiles/mobiusfunction.py")
        .then(response => response.text())
        .then(text => {
            parag.textContent = text
        })
        
    pyButton.onclick = function(){
        jlButton.classList.remove("changer")
        pyButton.classList.add("changer")
        fetch("../CodeFiles/mobiusfunction.py")
        .then(response => response.text())
        .then(text => {
            parag.textContent = text
        })
    }

    jlButton.onclick = function(){
        pyButton.classList.remove("changer")
        jlButton.classList.add("changer")
        fetch("../CodeFiles/mobiusfunction.jl")
        .then(response => response.text())
        .then(text => {
            parag.textContent = text
        })
    }        
});
