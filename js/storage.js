document.addEventListener("DOMContentLoaded", function() {
    // Verificar si el botón existe antes de agregarle el event listener
    const buttonContinue = document.getElementById("buttonContinue");
    if (buttonContinue) {
        buttonContinue.addEventListener("click", function () {
            // Verificar si una variable es una cadena de texto
            function esCadena(variable) {
                return typeof variable === 'string' || variable instanceof String;
            }

            // Convertir una variable a cadena de texto si no lo es
            function convertirACadena(variable) {
                if (!esCadena(variable)) {
                    return variable.toString();
                }
                return variable;
            }

            localStorage.setItem("nombrePersonaje", convertirACadena(nombrePersonaje));
            localStorage.setItem("raza", convertirACadena(seleccion.raza));
            localStorage.setItem("clase", convertirACadena(seleccion.clase));
            localStorage.setItem("genero", convertirACadena(seleccionGenero));
            localStorage.setItem("totalInteligencia", convertirACadena(totalInteligencia));
            localStorage.setItem("totalFuerza", convertirACadena(totalFuerza));
            localStorage.setItem("totalAgilidad", convertirACadena(totalAgilidad));

            console.log("Información almacenada en LocalStorage:");
            console.log("Nombre del personaje:", nombrePersonaje);
            console.log("Raza:", seleccion.raza);
            console.log("Clase:", seleccion.clase);
            console.log("Género:", seleccionGenero);
            console.log("Total de inteligencia:", totalInteligencia);
            console.log("Total de fuerza:", totalFuerza);
            console.log("Total de agilidad:", totalAgilidad);
        });
    }

    // Ir a la página Personaje.HTML
    const continueButton = document.getElementById("continuarBtn3");

    continueButton && continueButton.addEventListener("click", function () {
        window.location.href = "./pages/personaje.html";
    });
});

//! Descripción Técnica del código: 

//?     Tenemos un objeto JavaScript anidado. Rescripción de la estructura:

//!?    "juegoInfo" es un objeto principal.

//!?    "juegoInfo.razas" es un objeto que contiene las diferentes razas como propiedades. Cada propiedad es a su vez un objeto que representa //!? una raza.

//!?    Dentro de cada objeto de raza ("juegoInfo.razas.Elfo", "juegoInfo.razas.Enano", etc.), hay una propiedad llamada clases, que es otro 

//!?    objeto. Este objeto contiene las diferentes clases disponibles para esa raza.

//!?    Dentro de cada objeto de clase (juegoInfo.razas.Elfo.clases.Mago, juegoInfo.razas.Elfo.clases.Druida, etc.), hay una propiedad llamada 
