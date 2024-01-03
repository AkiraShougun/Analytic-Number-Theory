
window.addEventListener('load', function() {
    const first = document.getElementById("radio1")
    const second = document.getElementById("radio2")
    const third = document.getElementById("radio3")
    const fourth = document.getElementById("radio4")
    const header = document.createElement("h2")
    const parag = document.createElement("p")
    const section = document.querySelector(".radio-sec")
    parag.innerText = "gcd(2024,2023)=1 because 2023 and 2024 are relatively prime. Now applying theorem 1.1 we see that the final answer is 1."



    first.addEventListener('change', function() {
        if(first.checked) {
            header.innerText = "Incorrect"
            header.classList.add("border-header")
            section.appendChild(header)
            section.appendChild(parag)
        }
    });

    second.addEventListener('change', function() {
        if(second.checked) {
            header.innerText = "Correct"
            header.classList.add("border-header")
            section.appendChild(header)
            section.appendChild(parag)
        }
    });

    third.addEventListener('change', function() {
        if(third.checked) {
            header.innerText = "Incorrect"
            header.classList.add("border-header")
            section.appendChild(header)
            section.appendChild(parag)

        }
    });

    fourth.addEventListener('change', function() {
        if(fourth.checked) {
            header.innerText = "Incorrect"
            header.classList.add("border-header")
            section.appendChild(header)
            section.appendChild(parag)
        }
    });
});

