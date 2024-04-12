document.getElementById("start-button").addEventListener("click", function () {
    document
        .querySelectorAll(".start-button, .start-buttonCFG, .start-buttonCFGImg")
        .forEach((button) => {
            button.style.display = "none";
        });

    document.getElementById("content").style.display = "flex";

    //?filtro de desenfoque a img
    const images = document.querySelectorAll(".bodyIndex img");
    images.forEach((img) => {
        img.style.filter = "blur(5px) brightness(40%) opacity(1) contrast(100%)";
    });
});

//!Utilización de Spread.
document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("content").style.display = "none";

    const botonStart = document.getElementById("botonStart");

    botonStart.addEventListener("click", function () {
        // Oculta los elementos de bienvenida, texto solapa y HR usando spread
        const elementosOcultar = document.querySelectorAll(".bienvenida, .textSolapa, hr");
        elementosOcultar.forEach((elemento) => {
            elemento.style.display = "none";
        });
    });
});


// Obtener el botón de inicio
const startButton = document.getElementById('start-button');

// Obtener el contenedor de la clase pokePapi
const pokePapiContainer = document.querySelector('.pokePapi');
const getPokemonBtn = document.getElementById('getPokemonBtn');
const borrarrr = document.getElementById('borrarrr');



// Agregar un event listener para el clic en el botón de inicio
startButton.addEventListener('click', () => {
    // Ocultar completamente el contenido de la clase pokePapi al hacer clic en el botón de inicio
    pokePapiContainer.style.display = 'none';
    getPokemonBtn.style.display = 'none';
    borrarrr.style.display = 'none';
});