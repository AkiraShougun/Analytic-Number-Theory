window.onload = function(){
    // Elements
    const mobiusElements = document.getElementsByClassName("mobius");
    const totientElements = document.getElementsByClassName("totient");
    const convoElements = document.getElementsByClassName("dirichlet-convolution");
    const mangoldtElements = document.getElementsByClassName("mangoldt-function");
    const multipFuncElements = document.getElementsByClassName("multiplicative-functions");


    //Buttons
    const mobiusButton = mobiusElements[mobiusElements.length - 1];
    const totientButton = totientElements[mobiusElements.length - 1];
    const convoButton = convoElements[mobiusElements.length - 1];
    const mangoldtButton = mangoldtElements[mobiusElements.length - 1];
    const multButton = multipFuncElements[mobiusElements.length - 1];
    
    mobiusButton.onclick = function(){
        window.location.href = "Arithmetical Functions/mobius.html";
    }
    totientButton.onclick = function(){
        window.location.href = "Arithmetical Functions/euler.html";
    }
    convoButton.onclick = function(){
        window.location.href = "Arithmetical Functions/convolution.html";
    }
    mangoldtButton.onclick = function(){
        window.location.href = "Arithmetical Functions/mangoldt.html";
    }
    multButton.onclick = function(){
        window.location.href = "Arithmetical Functions/multipfunc.html";
    }
    
}