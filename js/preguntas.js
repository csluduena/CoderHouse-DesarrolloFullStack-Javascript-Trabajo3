document.addEventListener("DOMContentLoaded", function () {
    const comenzarBtn = document.querySelector(".comenzarBtn");
    const preguntaUno = document.querySelector(".preguntaUno");
    const saludoInicialInput = document.getElementById("saludoInicialInput");

    

    comenzarBtn.addEventListener("click", function () {
        comenzarBtn.style.display = "none";
        preguntaUno.style.display = "block";
        saludoInicialInput.focus();
    });

    saludoInicialInput.addEventListener("keydown", function (event) {
        if (event.keyCode === 13) {
            event.preventDefault();
            buttonSend1.click();
        }
    });

    const buttonSend1 = document.getElementById("buttonSend1");
    const preguntaDos = document.querySelector(".preguntaDos");
    const nickNameInput = document.getElementById("nickNameInput");

    nickNameInput.addEventListener("keydown", function (event) {
        if (event.keyCode === 13) {
            event.preventDefault();
            buttonSend2.click();
        }
    });

    buttonSend1.addEventListener("click", function () {
        nombreUsuario = saludoInicialInput.value;
        console.log("Nombre del usuario:", nombreUsuario);

        preguntaUno.style.display = "none";
        preguntaDos.style.display = "block";
        nickNameInput.focus(); //foco en Input Text
    });

    buttonSend2.addEventListener("click", function () {
        nombrePersonaje = nickNameInput.value;
        console.log("Nombre del personaje:", nombrePersonaje);

        preguntaDos.style.display = "none";
        botonElegirRaza.style.display = "block";

        seleccion.nick = nombrePersonaje;
    });
});


// Obtener el botón de inicio
const botonStart = document.getElementById('botonStart');

// Obtener todos los elementos con la clase "multiDraftBoton"
const multiDraftBotones = document.querySelectorAll('.multiDraftBoton');

// Agregar un event listener para el clic en el botón de inicio
botonStart.addEventListener('click', () => {
    // Ocultar los elementos con la clase "multiDraftBoton"
    multiDraftBotones.forEach(boton => {
        boton.style.display = 'none';
    });
});

// Agregar event listeners para el clic en cada elemento con la clase "multiDraftBoton"
multiDraftBotones.forEach(boton => {
    boton.addEventListener('click', () => {
        // Ocultar los elementos con la clase "multiDraftBoton"
        multiDraftBotones.forEach(boton => {
            boton.style.display = 'none';
        });
    });
});





