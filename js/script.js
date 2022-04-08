const formBtn = document.getElementById("form-btn");
console.log(formBtn);
formBtn.addEventListener("click", 
    function() {
        // Prelevo gli input dell'utente
        const userName = document.getElementById("user-name").value;
        console.log(userName);

        const kmUser = document.getElementById("km-user").value;
        console.log(kmUser);

        const userAge = document.getElementById("user-age").value;
        console.log(userAge);

        let basePrice = kmNumber * 0.21;

        //logica
        let finalPrice;

        if (userAge < 18) {
            // prezzo base - 20%
            sconto = (basePrice / 100) * 20;
            finalPrice = basePrice - sconto;
        } else if (userAge > 65) {
            // prezzo base - 40%
            sconto = (basePrice / 100) * 40;
            finalPrice = basePrice - sconto;
        } else {
            finalPrice = basePrice;
        }

        // Visualizzo nella pagina le risposte dell'utente
        // - inserire le risposte negli elementi corrispondenti
        const greetingResponse = document.querySelector(".result h2");
        console.log(greetingResponse);
        greetingResponse.innerHTML = `IL TUO BIGLIETTO ${userName}`;

        const colorResponse = document.querySelector(".result p");
        console.log(colorResponse);
        colorResponse.innerHTML = `Hai scelto il colore ${userColor}`

        // - far vedere il blocco delle risposte
        const resultContainer = document.querySelector(".result");
        console.log(resultContainer);
        resultContainer.classList.remove("d-none");
    }
);

const formClearBtn = document.getElementById("form-clear-btn");
console.log(formClearBtn);

formClearBtn.addEventListener("click", 
    function() {
        
        // Nascondo result container
        const resultContainer = document.querySelector(".result");
        resultContainer.classList.add("d-none");

        // Ripulsco i campi
        const userName = document.getElementById("user-name");
        console.log(userName);
        userName.value = "";

        const userColor = document.getElementById("user-color");
        userColor.value = "";
    }
);