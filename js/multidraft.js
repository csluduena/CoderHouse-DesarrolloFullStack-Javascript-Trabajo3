const boss1 = {
    FirstName: "Carpisaurio",
    alias: "TheProfe",
    type: "Boss",
    ataque: 26,
    vida: 99,
    agilidad: 10,
    debilidad: 'Una de Soda Stereo'
};

let cartasAleatorias = []; // Declarar cartasAleatorias globalmente
let cartasOrdenadas = [];
let nombreBoss = boss1.FirstName;
document.addEventListener("DOMContentLoaded", function () {

    // Recuperar datos del almacenamiento local
    const data = JSON.parse(localStorage.getItem('data'));

    //console.log(data);
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
                inteligencia: atributosBase.inteligencia, // Asignar inteligencia correctamente
                fuerza: atributosBase.fuerza, // Asignar fuerza correctamente
                agilidad: atributosBase.agilidad // Asignar agilidad correctamente
            };

            carta.atributos = atributosAleatorios;
        });

        //console.log("Cartas con razas, clases, géneros y atributos base asignados:", cartasAleatorias);

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

//console.log(`Vida del jefe: ${boss1Vida}`);
//console.log(`Dano del jefe: ${boss1Ataque}`);

const bossElements = [
    { id: 'boss-name', textContent: 'Nombre: ' + boss1.FirstName },
    { id: 'boss-alias', textContent: 'Alias: ' + boss1.alias },
    { id: 'boss-life', textContent: 'Vida: ' + boss1Vida },
    { id: 'boss-attack', textContent: 'Ataque: ' + boss1Ataque },
    { id: 'boss-agility', textContent: 'Agilidad: ' + boss1.agilidad },
    { id: 'boss-debilidad', innerHTML: 'Debilidad: <br>' + boss1.debilidad }
];

for (const bossElement of bossElements) {
    const element = document.getElementById(bossElement.id);
    if (element !== null) {
        if ('textContent' in bossElement) {
            element.textContent = bossElement.textContent;
        }
        if ('innerHTML' in bossElement) {
            element.innerHTML = bossElement.innerHTML;
        }
    }
}


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
                //console.log('RIP BOSS');
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

        //console.log(`${carta.nombre} ha hecho ${danio} de daño.`);
        //console.log(`Vida del jefe después del ataque de ${carta.nombre}: ${boss.vida}`);

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
        //console.log(`No se encontró el elemento HTML para la carta ${carta.nombre}`);
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
if (botonReady !== null) {
    botonReady.addEventListener('click', iniciarBatalla);
}