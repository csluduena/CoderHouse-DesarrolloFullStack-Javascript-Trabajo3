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