

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

//! D E C A R A C I O N  RAZA CLASE. (seleccion.raza o seleccion.clase)
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
    console.log("Raza seleccionada:", seleccion.raza)
}

// Manejar eventos de clic en las razas
const razas = document.querySelectorAll('.raza-option');
razas.forEach(raza => {
    raza.addEventListener('click', seleccionarRaza);
});

//!Clases
//! Función para manejar la selección de clase
document.addEventListener("DOMContentLoaded", function() {
    const clases = document.querySelectorAll(".clase-pick .clasesTotal");

    clases.forEach(function(clase) {
        clase.addEventListener("click", function() {
            const claseSeleccionada = this.getAttribute("id");
            const nombreClase = this.querySelector(".claseNombre").textContent;

            console.log("Clase seleccionada:", nombreClase);

            seleccion.clase = nombreClase;
        });
    });
});

// //!Consoleando resultados
// // Función para continuar
// document.getElementById("continuarBtn").addEventListener("click", function() {
//     if (seleccion.raza !== "" && seleccion.clase !== "") {
//         // Aquí puedes realizar acciones adicionales o redireccionar a otra página
//         console.log("Raza seleccionada:", seleccion.raza);
//         console.log("Clase seleccionada:", seleccion.clase);
//     } else {
//         console.log("Por favor, selecciona una raza y una clase antes de continuar.");
//     }
// });


// Función para manejar la selección de clase
document.addEventListener("DOMContentLoaded", function() {
    const clases = document.querySelectorAll(".clase-pick .clasesTotal");

    clases.forEach(function(clase) {
        clase.addEventListener("click", function() {
            const claseSeleccionada = this.getAttribute("id");
            const nombreClase = this.querySelector(".claseNombre").textContent;

            //console.log("Clase seleccionada:", nombreClase);

            // Actualizar la selección de clase
            seleccion.clase = nombreClase;

            // Mostrar el botón de continuar si ambos raza y clase están seleccionados
            if (seleccion.raza !== "" && seleccion.clase !== "") {
                mostrarBotonContinuar();
            }
        });
    });
});

//!Click Continuar y TODO ELECCIÓN DE GENERO.
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

//!CAMBIO DE COLOR PARA EL TEXTO DE HOMBRE
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

//!CAMBIO DE COLOR PARA EL TEXTO DE MUJER
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

//!Declarar Atributos
// Definir los atributos base para cada clase
let atributosBase = {
    "Mago": [8, 1, 5],       //🧙‍♂️
    "Druida": [6, 2, 6],     //🌿
    "Bardo": [10, 1, 7],     //🎵
    "Guerrero": [5, 15, 5],  //⚔️
    "Herrero": [3, 18, 3],   //🔨
    "Paladin": [8, 12, 5],   //🛡️
    "Caballero": [2, 20, 4], //🏇
    "Picaro": [6, 7, 12],    //🗡️
    "Clerigo": [8, 10, 5],   //✨
    "Berserker": [1, 25, 3], //🪓
    "Chaman": [10, 8, 5],    //🔮
    "Cazador": [8, 10, 10],  //🏹
};

//! Clases (con Raza y Atributos)
let clases = {
    "Elfo": {
        1: {
            nombre: "Mago",       //🧙‍♂️
            atributos: [8, 1, 5]  // Atributos: [Inteligencia, Fuerza, Agilidad]
        },
        2: {
            nombre: "Druida",     //🌿
            atributos: [6, 2, 6]  // Atributos: [Inteligencia, Fuerza, Agilidad]
        },
        3: {
            nombre: "Bardo",      //🎵
            atributos: [10, 1, 7] // Atributos: [Inteligencia, Fuerza, Agilidad]
        }
    },
    "Enano": {
        1: {
            nombre: "Guerrero",   //⚔️
            atributos: [5, 15, 5] // Atributos: [Inteligencia, Fuerza, Agilidad]
        },
        2: {
            nombre: "Herrero",    //🔨
            atributos: [3, 18, 3] // Atributos: [Inteligencia, Fuerza, Agilidad]
        },
        3: {
            nombre: "Paladin",    //🛡️
            atributos: [8, 12, 5] // Atributos: [Inteligencia, Fuerza, Agilidad]
        }
    },
    "Humano": {
        1: {
            nombre: "Caballero",  //🏇
            atributos: [2, 20, 4] // Atributos: [Inteligencia, Fuerza, Agilidad]
        },
        2: {
            nombre: "Picaro",     //🗡️
            atributos: [6, 7, 12] // Atributos: [Inteligencia, Fuerza, Agilidad]
        },
        3: {
            nombre: "Clerigo",    //✨
            atributos: [8, 10, 5] // Atributos: [Inteligencia, Fuerza, Agilidad]
        }
    },
    "Orco": {
        1: {
            nombre: "Berserker",  //🪓
            atributos: [1, 25, 3] // Atributos: [Inteligencia, Fuerza, Agilidad]
        },
        2: {
            nombre: "Chaman",      //🔮
            atributos: [10, 8, 5] // Atributos: [Inteligencia, Fuerza, Agilidad]
        },
        3: {
            nombre: "Cazador",     //🏹
            atributos: [8, 10, 10] // Atributos: [Inteligencia, Fuerza, Agilidad]
        }
    }
};

//!Obtener ATRIBUTOS
// Función para obtener los atributos base según la clase seleccionada y la raza
function obtenerAtributosBase() {
    // Obtener la raza y clase seleccionadas
    let razaSeleccionada = seleccion.raza;
    let claseSeleccionada = seleccion.clase;

    // Obtener los atributos base de la clase seleccionada
    let atributos = atributosBase[claseSeleccionada];

    // Mostrar los atributos base en la consola
    console.log("Atributos base para la clase", claseSeleccionada + ":", atributos);

    // Aquí podrías hacer algo más con los atributos base, como asignarlos a una variable global para su posterior uso
}

//!CONTINAR A ATRIBUTOS
// Evento clic para el botón "Continuar" en la sección de género
document.getElementById("continuarBtn2").addEventListener("click", function() {
    if (seleccion.raza !== "" && seleccion.clase !== "") {
        // Ocultar la sección de género
        document.querySelector(".contentGen").style.display = "none";

        // Mostrar la siguiente sección (atributos)
        const atributosTab = document.getElementById("tabAtri");
        const continuarBtn2 = document.getElementById("continuarBtn2");
        const activarResumenParcial = document.getElementById("contenedorParcialId");
        contenedorParcialId.style.display = "flex";
        atributosTab.style.display = "block";
        continuarBtn2.style.display = "none";
    }
});

// Función para seleccionar la clase según la raza
function seleccionarClaseSegunRaza() {
    // Obtener la raza seleccionada
    let razaSeleccionada = seleccion.raza;

    // Obtener las clases disponibles para la raza seleccionada
    let clasesDisponibles = clases[razaSeleccionada];
}

