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
    } else {
        console.error("El elemento con ID 'buttonContinue' no fue encontrado.\n\nAcerca de: 'storage.js:43';\n\nBásicamente omitir este mensaje, porque al código se la pela si mi intención es que un botón esté hidde a posta en cierto momento que requiero, entonces, le tratas de explicar que no joda, y sigue jodiendo, tratas de cargar las cosas antes de que se ejecuten eventos DOM etc, y sigue jodiendo, no dar bola a este mensaje sin mas.");
    }

    // Ir a la página Personaje.HTML
    const continueButton = document.getElementById("continuarBtn3");

    continueButton.addEventListener("click", function () {
        window.location.href = "./pages/personaje.html";
    });
});

// // Creación y declaración de todo el juego. 
// let juegoInfo = {
//     razas: {
//         Elfo: {
//             descripcion: "Seres de gracia y conexión con la naturaleza.",
//             clases: {
//                 Mago: {
//                     descripcion: "Usuarios de magia poderosa y destructiva.",
//                     atributos: {
//                         fuerza: 8,
//                         inteligencia: 1,
//                         agilidad: 5
//                     }
//                 },
//                 Druida: {
//                     descripcion: "Capaces de manipular la magia de la naturaleza.",
//                     atributos: {
//                         fuerza: 6,
//                         inteligencia: 2,
//                         agilidad: 6
//                     }
//                 },
//                 Bardo: {
//                     descripcion: "Artistas talentosos con habilidades mágicas únicas.",
//                     atributos: {
//                         fuerza: 10,
//                         inteligencia: 1,
//                         agilidad: 7
//                     }
//                 }
//             }
//         },
//         Enano: {
//             descripcion: "Gran resistencia y habilidades de artesanía.",
//             clases: {
//                 Guerrero: {
//                     descripcion: "Combatientes fuertes y resistentes.",
//                     atributos: {
//                         fuerza: 5,
//                         inteligencia: 15,
//                         agilidad: 5
//                     }
//                 },
//                 Herrero: {
//                     descripcion: "Maestros de la creación y mejora de armas y armaduras.",
//                     atributos: {
//                         fuerza: 3,
//                         inteligencia: 18,
//                         agilidad: 3
//                     }
//                 },
//                 Paladin: {
//                     descripcion: "Defensores valientes con habilidades de curación.",
//                     atributos: {
//                         fuerza: 8,
//                         inteligencia: 12,
//                         agilidad: 5
//                     }
//                 }
//             }
//         },
//         Humanos: {
//             descripcion: "Ambiciosos, gran diversidad de habilidades.",
//             clases: {
//                 Caballero: {
//                     descripcion: "Protectores leales, habilidosos en combate cuerpo a cuerpo.",
//                     atributos: {
//                         fuerza: 2,
//                         inteligencia: 20,
//                         agilidad: 4
//                     }
//                 },
//                 Picaro: {
//                     descripcion: "Descripcion",
//                     atributos: {
//                         fuerza: 6,
//                         inteligencia: 7,
//                         agilidad: 12
//                     }
//                 },
//                 Clerigo: {
//                     descripcion: "Descripcion",
//                     atributos: {
//                         fuerza: 8,
//                         inteligencia: 10,
//                         agilidad: 5
//                     }
//                 }
//             }
//         },
//         Orcos: {
//             descripcion: "Descripcion",
//             clases: {
//                 Berserker: {
//                     descripcion: "Descripcion",
//                     atributos: {
//                         fuerza: 1,
//                         inteligencia: 25,
//                         agilidad: 3
//                     }
//                 },
//                 Chaman: {
//                     descripcion: "Descripcion",
//                     atributos: {
//                         fuerza: 10,
//                         inteligencia: 8,
//                         agilidad: 5
//                     }
//                 },
//                 Cazador: {
//                     descripcion: "Descripcion",
//                     atributos: {
//                         fuerza: 8,
//                         inteligencia: 10,
//                         agilidad: 10
//                     }
//                 }
//             }
//         }
//     }
// };

// // Almacenar juegoInfo en localStorage con un nombre diferente
// localStorage.setItem('informacionJuego', JSON.stringify(juegoInfo));







//! Descripción Técnica del código: 

//?     Tenemos un objeto JavaScript anidado. Rescripción de la estructura:

//!?    "juegoInfo" es un objeto principal.

//!?    "juegoInfo.razas" es un objeto que contiene las diferentes razas como propiedades. Cada propiedad es a su vez un objeto que representa //!? una raza.

//!?    Dentro de cada objeto de raza ("juegoInfo.razas.Elfo", "juegoInfo.razas.Enano", etc.), hay una propiedad llamada clases, que es otro 

//!?    objeto. Este objeto contiene las diferentes clases disponibles para esa raza.

//!?    Dentro de cada objeto de clase (juegoInfo.razas.Elfo.clases.Mago, juegoInfo.razas.Elfo.clases.Druida, etc.), hay una propiedad llamada 
