//? ********************************************************************************
//TODO Vamos a dividir el siguiente proceso en pasos para facilitar la implementación:

//TODO    1- Obtener una muestra aleatoria de 6 cartas.
//TODO    2- Para cada carta, seleccionar aleatoriamente una raza.
//TODO    3- Una vez seleccionada la raza, seleccionar aleatoriamente una clase de esa raza.
//TODO    4- Seleccionar aleatoriamente un género para la carta.
//TODO    5- Asignar el atributo base correspondiente a la clase seleccionada.
//TODO    6- Mostrar la información de las 6 cartas generadas en la consola.
//? ********************************************************************************


let cartasAleatorias = []; // Declarar cartasAleatorias globalmente
document.addEventListener("DOMContentLoaded", function () {

    // Recuperar los datos del almacenamiento local
    const data = JSON.parse(localStorage.getItem('data'));

    // Ahora puedes acceder a los datos como lo harías normalmente con un objeto JavaScript
    console.log(data);
    //console.log(data.raza.Elfo.descripcion); // Acceder a la descripción de los Elfos
    //console.log(data.raza.Elfo.clases.Mago.descripcion); // Acceder a la descripción de la clase Mago para los Elfos



    if (window.location.pathname.includes("/multidraft.html")) {
        //? Paso 1: Obtener una muestra aleatoria de 6 cartas
        const razas = Object.keys(data.raza); // Obtener todas las razas disponibles
        const contenedorCartas = document.querySelectorAll('.carta-personaje.carta');


        while (cartasAleatorias.length < 6) {
            const razaAleatoria = razas[Math.floor(Math.random() * razas.length)]; // Seleccionar una raza aleatoria
            cartasAleatorias.push({ raza: razaAleatoria });
        }

        //? Paso 2: Asignar una clase aleatoria para cada carta
        cartasAleatorias.forEach(carta => {
            const clasesRaza = Object.keys(data.raza[carta.raza].clases); // Obtener todas las clases disponibles para la raza
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
            const atributosBase = data.raza[carta.raza].clases[carta.clase].atributos;

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


//! Fight Logic.

// Obtén el botón con la clase 'start'
let botonStart = document.querySelector('.start');

// Añade un event listener al botón para el evento de clic
botonStart.addEventListener('click', function() {
    // Aquí va la lógica de la pelea

    // Función para calcular el daño de una carta
    function calcularDanio(carta) {
        let inteligencia = carta.atributos.inteligencia;
        let fuerza = carta.atributos.fuerza;
        let agilidad = carta.atributos.agilidad;

        return inteligencia + fuerza + agilidad; // Devuelve la suma de los atributos
    }

    // Iterar sobre las cartas aleatorias y calcular el daño para cada una
    for (let i = 0; i < cartasAleatorias.length; i++) {
        // Calcular el daño de la carta actual
        const danio = calcularDanio(cartasAleatorias[i]);
        console.log(`El daño de ${cartasAleatorias[i].nombre} es: ${danio}`);
    }
});

//!Boss Stats
// En main.js

let boss1Ataque = boss1.ataque; 
let boss1Vida = boss1.vida; 

console.log(`Vida del jefe: ${boss1Ataque}`);
console.log(`Daño del jefe: ${boss1Vida}`);

document.getElementById('boss-name').textContent = 'Nombre: ' + boss1.FirstName;
document.getElementById('boss-alias').textContent = 'Alias: ' + boss1.alias;
document.getElementById('boss-life').textContent = 'Vida: ' + boss1Vida;
document.getElementById('boss-attack').textContent = 'Ataque: ' + boss1Ataque;
document.getElementById('boss-agility').textContent = 'Agilidad: ' + boss1.agilidad;


// Calcular la vida y el daño del jefe utilizando las cartas aleatorias
































// function calcularDanio(carta) {
//     let inteligencia = carta.atributos.inteligencia;
//     let fuerza = carta.atributos.fuerza;
//     let agilidad = carta.atributos.agilidad;

//     console.log(inteligencia + fuerza + agilidad); // Imprime la suma de los atributos
// }

// // Iterar sobre las cartas aleatorias y calcular el daño para cada una
// cartasAleatorias.forEach(carta => {
//     // Calcular el daño de la carta actual
//     const danio = calcularDanio(carta);
//     console.log(`El daño de ${carta.nombre} es: ${danio}`);
// });
// calcularDanio(carta);

// // Ejemplo de cómo utilizar la función para calcular el daño de una carta específica:
// // Suponiendo que quieres calcular el daño de la primera carta en el arreglo
// const primerCarta = cartasAleatorias[0];
// const danioPrimerCarta = calcularDanio(primerCarta);
// console.log(`El daño de ${primerCarta.nombre} es: ${danioPrimerCarta}`);


// function atacarBoss(carta, boss) {
//     let danio = calcularDanio(carta);
//     boss.vida -= danio;





// document.getElementById('startBattle').addEventListener('click', function() {
//     // Aquí asumimos que 'cartas' es un array con tus objetos de cartas
//     for (let carta of cartas) {
//         atacarBoss(carta, boss1);
//     }
// });



//     // Comprueba si el boss ha sido derrotado
//     if (boss.vida <= 0) {
//         console.log('¡El boss ha sido derrotado!');
//     } else {
//         console.log(`El boss tiene ${boss.vida} puntos de vida restantes.`);
//     }
// }






















































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