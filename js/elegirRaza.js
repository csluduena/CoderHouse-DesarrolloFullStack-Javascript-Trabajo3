    //TODO ESTILOS BOTON PREGUNTA TRES (ELEGIR RAZA)
    document.addEventListener('DOMContentLoaded', function() {
        
        let botonElegirRaza = document.querySelector('.botonElegirRaza');
        
        let elegirRazas = document.getElementById('elegirRazas');

        elegirRazas.style.display = 'none';
        botonElegirRaza.addEventListener('click', function() {
            //Estilos:
            elegirRazas.style.display = 'flex';
            elegirRazas.style.position = "absolute";
            elegirRazas.style.top = "7rem";
            elegirRazas.style.left = "50%";
        });
    });

    //mostrar clase correspondiente a raza seleccionada
    document.addEventListener("DOMContentLoaded", function() {
        const razas = document.querySelectorAll(".raza-option");

        razas.forEach(function(raza) {
            raza.addEventListener("click", function() {
                const razaSeleccionada = this.id.replace("Option", ""); // Obtenemos la raza seleccionada
                const clases = document.querySelectorAll(".clase-pick");

                // Ocultar todas las clases
                clases.forEach(function(clase) {
                    clase.style.display = "none";
                });

                // Mostrar las clases correspondientes a la raza seleccionada
                document.getElementById(razaSeleccionada + "ClasesPick").style.display = "block";
            });
        });
    });

//Ocultar botón Razas
    const botonElegirRaza = document.querySelector('.botonElegirRaza');
    
        document.addEventListener('DOMContentLoaded', function() {
        
        const botonElegirRaza = document.querySelector('.botonElegirRaza');

        botonElegirRaza.addEventListener('click', function() {
            botonElegirRaza.style.display = 'none'
        });
    });

//!ShadowBox para eleccion de raza
document.addEventListener('DOMContentLoaded', function() {
    // ShadowBox para eleccion de raza
    let opciones = document.querySelectorAll('.raza-option');

    // Luego, iteramos sobre cada opción
    opciones.forEach((opcion) => {
        // Agregamos un evento de clic a cada opción
        opcion.addEventListener('click', (event) => {
            // Eliminamos el resaltado de todas las opciones
            opciones.forEach((opt) => {
                opt.style.boxShadow = '';
            });
            // Agregamos el resaltado a la opción clickeada
            event.currentTarget.style.boxShadow = '0 0 7px 5px #7f0afb';  // Puedes cambiar el color y el tamaño del resaltado aquí
        });
    });
});


//!ShadowBox para eleccion de Clase
let opcionesClases = document.querySelectorAll('.clasesTotal');

// Luego, iteramos sobre cada opción
opcionesClases.forEach((opcion) => {
  // Agregamos un evento de clic a cada opción
    opcion.addEventListener('click', (event) => {
    // Eliminamos el resaltado de todas las opciones
    opcionesClases.forEach((opt) => {
        opt.style.boxShadow = '';
    });

    // Agregamos el resaltado a la opción clickeada
    event.currentTarget.style.boxShadow = '0 0 7px 5px #7f0afb';  // Puedes cambiar el color y el tamaño del resaltado aquí
    });
});

//!Elección de raza y clase.

// Almacena la selección de raza y clase
let seleccion = {
    raza: "",
    clase: ""
};

// Función para mostrar el botón "Continuar"
function mostrarBotonContinuar() {
    document.getElementById("continuarBtn").style.display = "block";
}

//!Razas
// Función para manejar la selección de raza
function seleccionarRaza(event) {
    // Buscamos el elemento con la clase 'razaNombre' dentro de la opción clickeada
    const razaNombreElemento = event.currentTarget.querySelector('.razaNombre');
    
    // Si encontramos el elemento, usamos su texto como el nombre de la raza
    if (razaNombreElemento) {
        const razaSeleccionada = razaNombreElemento.textContent.trim();
        seleccion.raza = razaSeleccionada;
    }
}

// Manejar eventos de clic en las razas
const razas = document.querySelectorAll('.raza-option');
razas.forEach(raza => {
    raza.addEventListener('click', seleccionarRaza);
});

//!Clases
// Función para manejar la selección de clase
function seleccionarClase(event) {
    // Buscamos el elemento con la clase 'claseNombre' dentro de la opción clickeada
    const claseNombreElemento = event.currentTarget.querySelector('.claseNombre');
    
    // Si encontramos el elemento, usamos su texto como el nombre de la clase
    if (claseNombreElemento) {
        const claseSeleccionada = claseNombreElemento.textContent.trim();
        seleccion.clase = claseSeleccionada;
        mostrarBotonContinuar();
    }
}

// Manejar eventos de clic en las clases
const clases = document.querySelectorAll('.clase-pick');
clases.forEach(clase => {
    clase.addEventListener('click', seleccionarClase);
});

//!continuar
// Función para continuar
document.getElementById("continuarBtn").addEventListener("click", function() {
    if (seleccion.raza !== "" && seleccion.clase !== "") {
        // Aquí puedes realizar acciones adicionales o redireccionar a otra página
        console.log("Raza seleccionada:", seleccion.raza);
        console.log("Clase seleccionada:", seleccion.clase);
    } else {
        console.log("Por favor, selecciona una raza y una clase antes de continuar.");
    }
});

//!Click Continuar y TODO GENERO.
// Función para continuar
document.getElementById("continuarBtn").addEventListener("click", function() {
    if (seleccion.raza !== "" && seleccion.clase !== "") {
        // Ocultar razas y clases
        document.getElementById("elegirRazas").style.display = "none";
        document.getElementById("clases").style.display = "none";
        document.getElementById("continuarBtn").style.display = "none";
        
        // Mostrar la opción de género
        const opcionGenero = document.getElementById("generosOpcion");
        const textogenerin = document.getElementById("textGCfg");
        const tituloGenero = document.getElementById("textoGeneroTitulo");

        opcionGenero.style.display = "flex";
        textogenerin.style.display = "flex";
        tituloGenero.style.display = "block";

    } else {
        console.log("Por favor, selecciona género antes de continuar.");
    }
});


//!ShadowBox para eleccion de genero
// Variables para almacenar la selección de género
let seleccionGenero = "";

// Obtenemos los elementos
const hombre = document.getElementById("hombre");
const mujer = document.getElementById("mujer");
const continuarBtn = document.getElementById("continuarBtn2");

// Función para activar el botón "Continuar"
function activarContinuar() {
    if (seleccionGenero !== "") {
        continuarBtn.style.display = "block"; // Mostramos el botón "Continuar"
    } else {
        continuarBtn.style.display = "none"; // Ocultamos el botón "Continuar"
    }
}

// Evento clic para Hombre
hombre.addEventListener("click", function() {
    // Cambiamos el color de texto para Hombre
    document.querySelector(".hLeft").style.color = "#0015ff"; // Color azul de texto
    // Resetamos el color de texto para Mujer
    document.querySelector(".mRight").style.color = "white"; // Color blanco de texto
    // Almacenamos la selección de género
    seleccionGenero = "Hombre";
    // Mostramos el género elegido en la consola
    console.log("Género seleccionado:", seleccionGenero);
    // Activamos el botón "Continuar"
    activarContinuar();
});

// Evento clic para Mujer
mujer.addEventListener("click", function() {
    // Cambiamos el color de texto para Mujer
    document.querySelector(".mRight").style.color = "#d500ff"; // Color rosa de texto
    // Resetamos el color de texto para Hombre
    document.querySelector(".hLeft").style.color = "white"; // Color blanco de texto
    // Almacenamos la selección de género
    seleccionGenero = "Mujer";
    // Mostramos el género elegido en la consola
    console.log("Género seleccionado:", seleccionGenero);
    // Activamos el botón "Continuar"
    activarContinuar();
});

// Evento clic para el botón "Continuar"
continuarBtn.addEventListener("click", function() {
    // Aquí puedes realizar acciones adicionales o redireccionar a otra página
    console.log("Continuar");
});






// color: #0015ff; /* Color para Hombre */
// }

// .mRight {
//     color: #d500ff; /* Color para Mujer */




    




// //! Boton Elejir genero
// document.addEventListener('DOMContentLoaded', function() {
//     const buttonSend3 = document.getElementById('buttonSend3');
//     const opcionGenero = document.querySelector('.opcionGenero');
//     const elijeTuClase = document.querySelector('.elijeTuClase');

//     buttonSend3.addEventListener('click', function() {
//         opcionGenero.style.display = 'none'; // Oculta la sección de opción de género
//         elijeTuClase.style.display = 'flex'; // Muestra la sección para elegir la clase
//     });
// });



// let clases = {
//     "Elfo": {
//         1: "Mago", //🧙‍♂️
//         2: "Druida", //🌿
//         3: "Bardo" //🎵
//     },
//     "Enano": {
//         1: "Guerrero", //⚔️
//         2: "Herrero", //🔨
//         3: "Paladin" //🛡️
//     },
//     "Humano": {
//         1: "Caballero", //🏇
//         2: "Picaro", //🗡️
//         3: "Clerigo" //✨
//     },
//     "Orco": {
//         1: "Berserker", //🪓
//         2: "Chaman", //🔮
//         3: "Cazador" //🏹
//     }
// };





//! Elección de Clase y mostrar parcialmente todo lo elegido



// //Array con los atributos base
// let atributosBase = {
//     "Mago": [8, 1, 5], //🧙‍♂️
//     "Druida": [6, 2, 6], //🌿
//     "Bardo": [10, 1, 7], //🎵
//     "Guerrero": [5, 15, 5], //⚔️
//     "Herrero": [3, 18, 3], //🔨
//     "Paladin": [8, 12, 5], //🛡️
//     "Caballero": [2, 20, 4], //🏇
//     "Picaro": [6, 7, 12], //🗡️
//     "Clerigo": [8, 10, 5], //✨
//     "Berserker": [1, 25, 3], //🪓
//     "Chaman": [10, 8, 5], //🔮
//     "Cazador": [8, 10, 10], //🏹
// }
