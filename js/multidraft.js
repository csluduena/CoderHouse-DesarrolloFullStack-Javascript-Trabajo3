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
let cartasOrdenadas = [];
let nombreBoss = boss1.FirstName;
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

        // Verificar si se encontraron suficientes divs
        if (contenedorCartas.length >= 6) {
            // Iterar sobre cada div y asignar la información de las cartas generadas
            contenedorCartas.forEach((div, index) => {
                const carta = cartasAleatorias[index]; // Obtener la carta correspondiente
                // Asignar un identificador único basado en el índice de la carta
                carta.id = `carta${index + 1}`;
                // Asignar un nombre temporal basado en el género de la carta
                if (carta.genero === "Hombre") {
                    carta.nombre = "SebaHero";
                } else if (carta.genero === "Mujer") {
                    carta.nombre = "RossWenn";
                }
                // Generar el nombre del archivo de la carta
                //!Convierte la raza, clase y género a formato de nombre de archivo
                const razaArchivo = carta.raza ? carta.raza.toLowerCase() : "";
                const nombreArchivo = `${razaArchivo}_${carta.clase}_${carta.genero}.png`;
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
                div.innerHTML = infoCarta;
                div.addEventListener('click', () => {
                    cartasOrdenadas.push(carta);
                });
            });
        } else {
            console.log("No se encontraron suficientes divs para mostrar las cartas.");
        }
    }
});

//! Presionar y mantener 1 al 6 PARA HOVER DE CARTAS.

let thecards = document.querySelectorAll('.card');

// Anade un controlador de eventos para cuando se presiona una tecla
window.addEventListener('keydown', (event) => {
    // Comprueba si la tecla presionada es un número entre 1 y 6
    let key = event.key;
    if (key >= '1' && key <= '6') {
        // Anade la clase 'hover-effect' al elemento correspondiente
        thecards[key - 1].classList.add('hover-effect');
    }
});

window.addEventListener('keyup', (event) => {
    // Comprueba si la tecla soltada es un número entre 1 y 6
    let key = event.key;
    if (key >= '1' && key <= '6') {
        // Elimina la clase 'hover-effect' del elemento correspondiente
        thecards[key - 1].classList.remove('hover-effect');
    }
});

//!Boss Stats
let boss1Ataque = boss1.ataque;
let boss1Vida = boss1.vida;

console.log(`Vida del jefe: ${boss1Vida}`);
console.log(`Dano del jefe: ${boss1Ataque}`);

document.getElementById('boss-name').textContent = 'Nombre: ' + boss1.FirstName;
document.getElementById('boss-alias').textContent = 'Alias: ' + boss1.alias;
document.getElementById('boss-life').textContent = 'Vida: ' + boss1Vida;
document.getElementById('boss-attack').textContent = 'Ataque: ' + boss1Ataque;
document.getElementById('boss-agility').textContent = 'Agilidad: ' + boss1.agilidad;
document.getElementById('boss-debilidad').innerHTML = 'Debilidad: <br>' + boss1.debilidad;

// Función para calcular el daño de una carta
function calcularDanio(carta) {
    let inteligencia = carta.atributos.inteligencia;
    let fuerza = carta.atributos.fuerza;
    let agilidad = carta.atributos.agilidad;

    return inteligencia + fuerza + agilidad; // Daño basado en la suma de los atributos
}

// Función para iniciar la batalla
function iniciarBatalla() {
    for (let i = 0; i < cartasAleatorias.length; i++) {
        setTimeout(function () {
            realizarAtaque(cartasAleatorias[i], boss1);

            // Si la vida del jefe es 0 o menos, imprime "RIP BOSS"
            if (boss1.vida <= 0) {
                console.log('RIP BOSS');
            }
        }, i * 3000);
    }
}

function mostrarModal(vidaInicial, danio, vidaRestante) {
    let modal = document.createElement('div');
    modal.classList.add('modal-damage-battle');
    modal.textContent = `${vidaInicial} Salud - ${danio} dano = ${vidaRestante} Puntos de salud`;

    document.body.appendChild(modal);

    setTimeout(function () {
        document.body.removeChild(modal);
    }, 3000);
}

function actualizarYMostrarDanoVida(boss, dano) {
    // Calcula la vida restante después del daño
    boss.vida -= dano;

    let infoDanoVida = document.getElementById('infoDanoVida') || document.createElement('div');
    infoDanoVida.id = 'infoDanoVida';
    infoDanoVida.textContent = `${nombreBoss} recibe ${dano} de daño | Vida Restante: ${boss.vida}`;

    infoDanoVida.style.position = 'absolute';
    infoDanoVida.style.bottom = '10px';
    infoDanoVida.style.left = '50%';
    infoDanoVida.style.transform = 'translateX(-50%)';
    infoDanoVida.style.backgroundColor = 'rgba(0, 0, 0, 0.7)';
    infoDanoVida.style.color = 'white';
    infoDanoVida.style.padding = '5px';
    infoDanoVida.style.borderRadius = '5px';

    battlefield.appendChild(infoDanoVida);
}

function realizarAtaque(carta, boss) {
    const cartaElement = document.querySelector(`#${carta.id}`);

    if (cartaElement && boss.vida > 0) { // Verifica que el boss aún tenga vida
        cartaElement.classList.add('card-attacking');

        const danio = calcularDanio(carta);
        let vidaInicial = boss.vida;
        let vidaRestante = vidaInicial - danio;

        vidaRestante = vidaRestante < 0 ? 0 : vidaRestante;
        boss.vida = vidaRestante;

        mostrarModal(vidaInicial, danio, vidaRestante);

        console.log(`Vida del jefe después del ataque de ${carta.nombre}: ${boss.vida}`);

        // Llama a la función para actualizar y mostrar el daño y la vida restante
        actualizarYMostrarDanoVida(boss, danio);

        // Si la vida del boss llega a 0, muestra el mensaje de victoria y detiene los ataques
        if (boss.vida <= 0) {
            mostrarMensajeVictoria(boss.FirstName);
            return;
        }

        setTimeout(function () {
            cartaElement.classList.remove('card-attacking');
        }, 3000);
    } else {
        console.log(`No se encontró el elemento HTML para la carta ${carta.nombre}`);
    }
}

// Mostrar el mensaje de victoria
function mostrarMensajeVictoria(nombreBoss) {
    let modalVictoria = document.createElement('div');
    modalVictoria.classList.add('modal-victoria');
    modalVictoria.innerHTML = `
        <p>Felicidades, tus héroes han derrotado a ${nombreBoss}</p>
        <button id="bossContinue">Continuar</button>
    `;

    modalVictoria.style.position = 'fixed';
    modalVictoria.style.top = '50%';
    modalVictoria.style.left = '50%';
    modalVictoria.style.transform = 'translate(-50%, -50%)';
    modalVictoria.style.backgroundColor = 'white';
    modalVictoria.style.padding = '20px';
    modalVictoria.style.borderRadius = '10px';
    modalVictoria.style.zIndex = '1001';

    document.body.appendChild(modalVictoria);

    document.getElementById('bossContinue').addEventListener('click', function () {
        window.location.href = './credits.html';
    });
}

let botonReady = document.querySelector('.ready');

botonReady.addEventListener('click', iniciarBatalla);




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

//     // Anade un controlador de eventos para cuando se presiona una tecla
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

//     // Anade un controlador de eventos para cuando se suelta una tecla
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


//     // Anade un controlador de eventos para cuando se suelta una tecla
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