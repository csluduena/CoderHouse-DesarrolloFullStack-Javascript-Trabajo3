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
        //console.log("Nombre del usuario:", nombreUsuario);

        preguntaUno.style.display = "none";
        preguntaDos.style.display = "block";
        nickNameInput.focus(); //foco en Input Text
    });

    buttonSend2.addEventListener("click", function () {
        nombrePersonaje = nickNameInput.value;
        //console.log("Nombre del personaje:", nombrePersonaje);

        preguntaDos.style.display = "none";
        botonElegirRaza.style.display = "block";

        seleccion.nick = nombrePersonaje;
    });
});

const botonStart = document.getElementById('botonStart');

const multiDraftBotones = document.querySelectorAll('.multiDraftBoton');

botonStart.addEventListener('click', () => {
    multiDraftBotones.forEach(boton => {
        boton.style.display = 'none';
    });
});

multiDraftBotones.forEach(boton => {
    boton.addEventListener('click', () => {
        multiDraftBotones.forEach(boton => {
            boton.style.display = 'none';
        });
    });
});