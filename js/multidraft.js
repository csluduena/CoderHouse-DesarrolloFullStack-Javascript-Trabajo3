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

    // Recuperar datos del almacenamiento local
    const data = JSON.parse(localStorage.getItem('data'));

    console.log(data);
    //console.log(data.raza.Elfo.descripcion); // Acceder a la descripción de los Elfos
    //console.log(data.raza.Elfo.clases.Mago.descripcion); // Acceder a la descripción de la clase Mago para los Elfos

    if (window.location.pathname.includes("/multidraft.html")) {
        //? Paso 1: Obtener una muestra aleatoria de 6 cartas
        const razas = Object.keys(data.raza);
        const contenedorCartas = document.querySelectorAll('.carta-personaje.carta');

        while (cartasAleatorias.length < 6) {
            const razaAleatoria = razas[Math.floor(Math.random() * razas.length)];
            cartasAleatorias.push({ raza: razaAleatoria });
        }

        //? Paso 2: Asignar una clase aleatoria para cada carta
        cartasAleatorias.forEach(carta => {
            const clasesRaza = Object.keys(data.raza[carta.raza].clases);
            const claseAleatoria = clasesRaza[Math.floor(Math.random() * clasesRaza.length)];
            carta.clase = claseAleatoria;
        });

        //? Paso 3: Asignar un género aleatorio para cada carta
        const generos = ["Hombre", "Mujer"];

        cartasAleatorias.forEach(carta => {
            const generoAleatorio = generos[Math.floor(Math.random() * generos.length)];
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

            carta.atributos = atributosAleatorios;
        });

        console.log("Cartas con razas, clases, géneros y atributos base asignados:", cartasAleatorias);

        if (contenedorCartas.length >= 6) {
            contenedorCartas.forEach((div, index) => {
                const carta = cartasAleatorias[index];
                carta.id = `carta${index + 1}`;
                if (carta.genero === "Hombre") {
                    carta.nombre = "SebaHero";
                } else if (carta.genero === "Mujer") {
                    carta.nombre = "RossWenn";
                }

                //!Convierte la raza, clase y género a formato de nombre de archivo
                const razaArchivo = carta.raza ? carta.raza.toLowerCase() : "";
                const nombreArchivo = `${razaArchivo}_${carta.clase}_${carta.genero}.png`;
                div.style.backgroundImage = `url('./../img/cartas/${nombreArchivo}')`;
                const infoCarta = `
                    <p class="spaceEntreInfoMulti, colorTitulosMulti">Nombre: ${carta.nombre}</p>
                    <p class="spaceEntreInfoMulti, colorTitulosMulti">Origen: ${carta.raza}</p>
                    <p class="spaceEntreInfoMulti, colorTitulosMulti">Género: ${carta.genero}</p>
                    <p class="spaceEntreInfoMulti, colorTitulosMulti">Clase: ${carta.clase}</p>
                    <p class="spaceEntreInfoMulti, colorTituloAtrMulti"></p>
                    <div class="centrarAtributosMulti">
                        <p class="spaceEntreInfoMulti, colorAtr1">INT <br><span class="txtSize" style="color: cornflowerblue; font-size: 18px;">${carta.atributos.inteligencia}</span></p>
                        &nbsp;&nbsp;<p class="spaceEntreInfoMulti, colorAtr2">STR <br><span class="txtSize" style="color: red; font-size: 18px;">${carta.atributos.fuerza}</span></p>
                        &nbsp;&nbsp;<p class="spaceInfoBotMulti, colorAtr3">AGI <br><span class="txtSize" style="color: green; font-size: 18px;">${carta.atributos.agilidad}</span></p>
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

window.addEventListener('keydown', (event) => {
    let key = event.key;
    if (key >= '1' && key <= '6') {
        thecards[key - 1].classList.add('hover-effect');
    }
});

window.addEventListener('keyup', (event) => {
    let key = event.key;
    if (key >= '1' && key <= '6') {
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

// calcular el daño de una carta
function calcularDanio(carta) {
    let inteligencia = carta.atributos.inteligencia;
    let fuerza = carta.atributos.fuerza;
    let agilidad = carta.atributos.agilidad;

    return inteligencia + fuerza + agilidad; //daño basado en la suma de los atributos
}

// Iniciar la batalla
function iniciarBatalla() {
    let cartasRestantes = cartasAleatorias.length;

    for (let i = 0; i < cartasAleatorias.length; i++) {
        setTimeout(function () {
            realizarAtaque(cartasAleatorias[i], boss1);

            cartasRestantes--;

            if (cartasRestantes === 0 && boss1.vida <= 0) {
                console.log('RIP BOSS');
            }
        }, i * 3000);
    }
}

// Función para mostrar el modal con información de daño
function mostrarModal(vidaInicial, danio, vidaRestante) {
    let modal = document.createElement('div');
    modal.classList.add('modal-damage-battle');
    modal.textContent = `${vidaInicial} Salud - ${danio} daño = ${vidaRestante} Puntos de salud`;

    document.body.appendChild(modal);

    setTimeout(function () {
        document.body.removeChild(modal);
    }, 3000);
}

function actualizarYMostrarDanoVida(vidaInicial, danio, vidaRestante, nombreBoss) {
    // Mostrar el modal con la información de daño
    mostrarModal(vidaInicial, danio, vidaRestante);

    // Mostrar la información de daño en la interfaz de usuario
    let infoDanoVida = document.getElementById('infoDanoVida') || document.createElement('div');
    infoDanoVida.id = 'infoDanoVida';
    infoDanoVida.textContent = `${nombreBoss} recibe ${danio} de daño | Vida Restante: ${vidaRestante}`;

    infoDanoVida.style.position = 'absolute';
    infoDanoVida.style.left = '50%';
    infoDanoVida.style.transform = 'translateX(-50%)';
    infoDanoVida.style.backgroundColor = 'rgba(0, 0, 0, 0.7)';
    infoDanoVida.style.color = 'white';
    infoDanoVida.style.padding = '5px';
    infoDanoVida.style.borderRadius = '5px';

    document.body.appendChild(infoDanoVida);
}

let bossDerrotado = false;

function realizarAtaque(carta, boss) {
    if (bossDerrotado) return;

    const cartaElement = document.querySelector(`#${carta.id}`);

    if (cartaElement && boss.vida > 0) {
        cartaElement.classList.add('card-attacking');

        const danio = calcularDanio(carta);
        const damageContainer = document.getElementById(`damage-${carta.id}`);
        damageContainer.textContent = `Daño: ${danio}`;

        let vidaInicial = boss.vida;
        let vidaRestante = vidaInicial - danio;

        vidaRestante = vidaRestante < 0 ? 0 : vidaRestante;
        boss.vida = vidaRestante;

        mostrarModal(vidaInicial, danio, vidaRestante);

        console.log(`${carta.nombre} ha hecho ${danio} de daño.`);
        console.log(`Vida del jefe después del ataque de ${carta.nombre}: ${boss.vida}`);

        actualizarYMostrarDanoVida(vidaInicial, danio, vidaRestante, boss.FirstName);

        if (boss.vida <= 0) {
            bossDerrotado = true;
            mostrarMensajeVictoria(boss.FirstName);
            return;
        }

        setTimeout(() => {
            damageContainer.textContent = '';
        }, 3000);

        setTimeout(() => {
            cartaElement.classList.remove('card-attacking');
        }, 3000);
    } else {
        console.log(`No se encontró el elemento HTML para la carta ${carta.nombre}`);
    }
}

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
        window.location.href = '../pages/credits.html';
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