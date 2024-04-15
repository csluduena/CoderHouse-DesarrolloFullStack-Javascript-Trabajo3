// Obtener el objeto 'info' desde localStorage y convertirlo a objeto JavaScript
const info = JSON.parse(localStorage.getItem('info'));

//TODO CONTINUAMOS CON EL CÓDIGO.
// Convertir todo el código relacionado con 'info' a cadena de texto
const codigoString = `
// Obtener el objeto 'info' desde localStorage y convertirlo a objeto JavaScript
const info = ${JSON.stringify(info, null, 2)};

// Aquí va el resto del código relacionado con 'info'...

`;

// Imprimir el código como cadena de texto en la consola
//console.log(codigoString);

// Editar el código en cadena
let codigoEditado = codigoString.replace(/Humanos/g, 'Humano').replace(/Orcos/g, 'Orco');

// Imprimir el código editado en la consola
//console.log(codigoEditado);

// Convertir el código editado nuevamente a JSON (temporal)
let infoEditado;
try {
    infoEditado = JSON.parse(codigoEditado.match(/(?<=const info = )\{[\s\S]*\}/)[0]);
    console.log("Todo está OK Seba.");
} catch (error) {
    console.log("Lo siento, se rompió acá");
}


/* Ejemplo para revisar info en la consola:

console.log(info.raza.Enano.clases.Herrero.atributos);
 */


//? ********************************************************************************
//TODO Vamos a dividir el siguiente proceso en pasos para facilitar la implementación:

//TODO    1- Obtener una muestra aleatoria de 6 cartas.
//TODO    2- Para cada carta, seleccionar aleatoriamente una raza.
//TODO    3- Una vez seleccionada la raza, seleccionar aleatoriamente una clase de esa raza.
//TODO    4- Seleccionar aleatoriamente un género para la carta.
//TODO    5- Asignar el atributo base correspondiente a la clase seleccionada.
//TODO    6- Mostrar la información de las 6 cartas generadas en la consola.
//? ********************************************************************************



document.addEventListener("DOMContentLoaded", function () {
    if (window.location.pathname.includes("/multidraft.html")) {
        //? Paso 1: Obtener una muestra aleatoria de 6 cartas
        const razas = Object.keys(infoEditado.raza); // Obtener todas las razas disponibles
        const contenedorCartas = document.querySelectorAll('.carta-personaje.carta');
        let cartasAleatorias = [];

        while (cartasAleatorias.length < 6) {
            const razaAleatoria = razas[Math.floor(Math.random() * razas.length)]; // Seleccionar una raza aleatoria
            cartasAleatorias.push({ raza: razaAleatoria });
        }

        //? Paso 2: Asignar una clase aleatoria para cada carta
        cartasAleatorias.forEach(carta => {
            const clasesRaza = Object.keys(infoEditado.raza[carta.raza].clases); // Obtener todas las clases disponibles para la raza
            const claseAleatoria = clasesRaza[Math.floor(Math.random() * clasesRaza.length)]; // Seleccionar una clase aleatoria
            carta.clase = claseAleatoria;
        });

        //? Paso 3: Asignar un género aleatorio para cada carta
        const generos = ["Hombre", "Mujer"];

        cartasAleatorias.forEach(carta => {
            const generoAleatorio = generos[Math.floor(Math.random() * generos.length)]; // Seleccionar un género aleatorio
            carta.genero = generoAleatorio;
        });

        //? Paso 4: Asignar atributos base aleatorios para cada carta
        cartasAleatorias.forEach(carta => {
            const atributosBase = infoEditado.raza[carta.raza].clases[carta.clase].atributos;

            // Aplicar una ligera variación aleatoria a cada atributo base
            const atributosAleatorios = {
                inteligencia: atributosBase.fuerza,// + Math.floor(Math.random() * 3) - 1,  Variación de -1 a +1
                fuerza: atributosBase.inteligencia, //+ Math.floor(Math.random() * 3) - 1, // Variación de -1 a +1
                agilidad: atributosBase.agilidad //+ Math.floor(Math.random() * 3) - 1 // Variación de -1 a +1
            };

            // Asignar los atributos aleatorios a la carta
            carta.atributos = atributosAleatorios;
        });

        console.log("Cartas con razas, clases, géneros y atributos base asignados:", cartasAleatorias);

        // Asignar las cartas al código:
        // Verificar si se encontraron suficientes divs
        if (contenedorCartas.length >= 6) {
            // Iterar sobre cada div y asignar la información de las cartas generadas
            contenedorCartas.forEach((div, index) => {
                const carta = cartasAleatorias[index]; // Obtener la carta correspondiente
                // Asignar un nombre basado en el género de la carta
                if (carta.genero === "Hombre") {
                    carta.nombre = "SebaHero";
                } else if (carta.genero === "Mujer") {
                    carta.nombre = "RossWenn";
                }
                // Generar el nombre del archivo de la carta
                const nombreArchivo = `${carta.raza}_${carta.clase}_${carta.genero}.png`;
                // Asignar el fondo de la imagen de la carta
                div.style.backgroundImage = `url('./../img/cartas/${nombreArchivo}')`;
                // Formatear la información de la carta como texto
                const infoCarta = `
                    <p class="spaceEntreInfoMulti, colorTitulosMulti">Nombre: ${carta.nombre}</p>
                    <p class="spaceEntreInfoMulti, colorTitulosMulti">Origen: ${carta.raza}</p>
                    <p class="spaceEntreInfoMulti, colorTitulosMulti">Género: ${carta.genero}</p>
                    <p class="spaceEntreInfoMulti, colorTitulosMulti">Clase: ${carta.clase}</p>
                    <p class="spaceEntreInfoMulti, colorTituloAtrMulti"></p>
                    <div class="centrarAtributosMulti">
                        <p class="spaceEntreInfoMulti, colorAtr1">INT <br><span style="color: cornflowerblue; font-size: 18px;">${carta.atributos.inteligencia}</span></p>
                        &nbsp;&nbsp;<p class="spaceEntreInfoMulti, colorAtr2">STR <br><span style="color: red; font-size: 18px;">${carta.atributos.fuerza}</span></p>
                        &nbsp;&nbsp;<p class="spaceInfoBotMulti, colorAtr3">AGI <br><span style="color: green; font-size: 18px;">${carta.atributos.agilidad}</span></p>
                    </div>
                `;
                // Insertar la información de la carta en el elemento HTML
                div.innerHTML = infoCarta;
            });
        } else {
            console.log("No se encontraron suficientes divs para mostrar las cartas.");
        }
    }
});

//! Presionar y mantener 1 al 6 PARA HOVER DE CARTAS.

// Selecciona todos los elementos con la clase 'card'
let thecards = document.querySelectorAll('.card');

// Añade un controlador de eventos para cuando se presiona una tecla
window.addEventListener('keydown', (event) => {
    // Comprueba si la tecla presionada es un número entre 1 y 6
    let key = event.key;
    if (key >= '1' && key <= '6') {
        // Añade la clase 'hover-effect' al elemento correspondiente
        thecards[key - 1].classList.add('hover-effect');
    }
});

// Añade un controlador de eventos para cuando se suelta una tecla
window.addEventListener('keyup', (event) => {
    // Comprueba si la tecla soltada es un número entre 1 y 6
    let key = event.key;
    if (key >= '1' && key <= '6') {
        // Elimina la clase 'hover-effect' del elemento correspondiente
        thecards[key - 1].classList.remove('hover-effect');
    }
});







//TODO LO SIGUIENTE NO SALIÓ , SERÁ PARA LA PRÓXIMA VEZ.

// // Crea un objeto con los tonos y sus correspondientes frecuencias
// let tones = {
//     '1': 261.63, // Frecuencia de C
//     '2': 293.66, // Frecuencia de D
//     '3': 329.63, // Frecuencia de E
//     '4': 349.23, // Frecuencia de F
//     '5': 392.00, // Frecuencia de G
//     '6': 440.00  // Frecuencia de A
// };

// // Crea un objeto para almacenar los osciladores
// let oscillators = {};

// // Muestra el modal al cargar la página
// window.addEventListener('DOMContentLoaded', (event) => {
//     document.getElementById('audioPermissionModal').style.display = 'block';
// });

// // Maneja el clic en el botón "Aceptar"
// document.getElementById('acceptButton').addEventListener('click', () => {
//     // Crea un contexto de audio
//     let audioContext = new (window.AudioContext || window.webkitAudioContext)();

//     // Añade un controlador de eventos para cuando se presiona una tecla
//     window.addEventListener('keydown', (event) => {
//         // Comprueba si se ha presionado la tecla Shift y una tecla numérica
//         if (event.shiftKey && tones[event.key]) {
//             // Crea un oscilador con la frecuencia correspondiente
//             let oscillator = audioContext.createOscillator();
//             oscillator.frequency.value = tones[event.key];
//             oscillator.connect(audioContext.destination);
//             oscillator.start();
//             // Almacena el oscilador
//             oscillators[event.key] = oscillator;
//         }
//     });

//     // Añade un controlador de eventos para cuando se suelta una tecla
// window.addEventListener('keyup', (event) => {
//     // Comprueba si se ha soltado la tecla Shift y una tecla numérica
//     if (event.shiftKey && tones[event.key]) {
//         // Comprueba si existe un oscilador para esta tecla
//         if (oscillators[event.key]) {
//             // Detiene el oscilador correspondiente
//             oscillators[event.key].stop();
//             // Elimina el oscilador
//             delete oscillators[event.key];
//         }
//     }
// });


//     // Añade un controlador de eventos para cuando se suelta una tecla
//     window.addEventListener('keyup', (event) => {
//         // Comprueba si se ha soltado la tecla Shift y una tecla numérica
//         if (event.ctrlKey && tones[event.key]) {
//             // Detiene el oscilador correspondiente
//             oscillators[event.key].stop();
//             // Elimina el oscilador
//             delete oscillators[event.key];
//         }
//     });

//     // Oculta el modal
//     document.getElementById('audioPermissionModal').style.display = 'none';
// });

// // Maneja el clic en el botón "Rechazar"
// document.getElementById('declineButton').addEventListener('click', () => {
//     // Aquí puedes desactivar la reproducción de sonido
//     // ...

//     // Oculta el modal
//     document.getElementById('audioPermissionModal').style.display = 'none';
// });