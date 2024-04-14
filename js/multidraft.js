//! Recuperar los datos del JSON desde localStorage
const info = JSON.parse(localStorage.getItem('info'));
console.log('Datos cargados:', info);

/* Ejemplo para revisar info en la consola:

console.log(info.raza.Enano.clases.Herrero.atributos);
 */

//! Declarar la variable cartasAleatorias fuera del bloque condicional
let cartasAleatorias;

//? ****************************************************************
//TODO Vamos a dividir el siguiente proceso en pasos para facilitar la implementación:

//TODO    1- Obtener una muestra aleatoria de 6 cartas.
//TODO    2- Para cada carta, seleccionar aleatoriamente una raza.
//TODO    3- Una vez seleccionada la raza, seleccionar aleatoriamente una clase de esa raza.
//TODO    4- Seleccionar aleatoriamente un género para la carta.
//TODO    5- Asignar el atributo base correspondiente a la clase seleccionada.
//TODO    6- Mostrar la información de las 6 cartas generadas en la consola.
//? ****************************************************************

document.addEventListener("DOMContentLoaded", function() {
    if (window.location.pathname.includes("/multidraft.html")) {
    //? Paso 1: Obtener una muestra aleatoria de 6 cartas
    const razas = Object.keys(info.raza); // Obtener todas las razas disponibles
    cartasAleatorias = [];

    while (cartasAleatorias.length < 6) {
        const razaAleatoria = razas[Math.floor(Math.random() * razas.length)]; // Seleccionar una raza aleatoria
        cartasAleatorias.push({ raza: razaAleatoria });
    }

//*console.log("Muestra aleatoria de 6 cartas con razas asignadas:", cartasAleatorias); 
//Silencio el print de la consola porque se upgradea por cada agregado posterior, dejaremos solo el último como activo, pero no borraré del código el código, lo dejaré comentado.



//? Paso 2: Asignar una clase aleatoria para cada carta
cartasAleatorias.forEach(carta => {
    const clasesRaza = Object.keys(info.raza[carta.raza].clases); // Obtener todas las clases disponibles para la raza
    const claseAleatoria = clasesRaza[Math.floor(Math.random() * clasesRaza.length)]; // Seleccionar una clase aleatoria
    carta.clase = claseAleatoria;
});
//*console.log("Cartas con razas y clases asignadas:", cartasAleatorias);
//Silencio el print de la consola porque se upgradea por cada agregado posterior, dejaremos solo el último como activo, pero no borraré del código el código, lo dejaré comentado.


//? Paso 3: Asignar un género aleatorio para cada carta
const generos = ["Hombre", "Mujer"];

cartasAleatorias.forEach(carta => {
    const generoAleatorio = generos[Math.floor(Math.random() * generos.length)]; // Seleccionar un género aleatorio
    carta.genero = generoAleatorio;
});
//*console.log("Cartas con razas, clases y géneros asignados:", cartasAleatorias);
//Silencio el print de la consola porque se upgradea por cada agregado posterior, dejaremos solo el último como activo, pero no borraré del código el código, lo dejaré comentado.


//? Paso 4: Asignar atributos base aleatorios para cada carta
cartasAleatorias.forEach(carta => {
    const atributosBase = info.raza[carta.raza].clases[carta.clase].atributos;

    // Aplicar una ligera variación aleatoria a cada atributo base
    const atributosAleatorios = {
        fuerza: atributosBase.fuerza + Math.floor(Math.random() * 3) - 1, // Variación de -1 a +1
        inteligencia: atributosBase.inteligencia + Math.floor(Math.random() * 3) - 1, // Variación de -1 a +1
        agilidad: atributosBase.agilidad + Math.floor(Math.random() * 3) - 1 // Variación de -1 a +1
    };
    
    // Asignar los atributos aleatorios a la carta
    carta.atributos = atributosAleatorios;
});
    console.log("Cartas con razas, clases, géneros y atributos base asignados:", cartasAleatorias);


    // Asignar las cartas al código:
    const contenedorCartas = document.getElementById('organizarCartas');
    // Iterar sobre cada carta generada
    cartasAleatorias.forEach((carta, index) => {
        // Crear un nuevo elemento div para la carta
        const nuevaCarta = document.createElement('div');
        nuevaCarta.classList.add('carta-personaje', 'carta');
        nuevaCarta.id = `carta${index + 1}`;

        // Generar el nombre del archivo de la carta
        const nombreArchivo = `${carta.raza}_${carta.clase}_${carta.genero}.png`;

        // Asignar el fondo de la imagen de la carta
        nuevaCarta.style.backgroundImage = `url('./../img/cartas/${nombreArchivo}')`;

        // Formatear la información de la carta como texto
        const infoCarta = `
            <p class="spaceInfoTop, colorTitulos">Nombre: ${carta.raza} ${carta.clase}</p>
            <p class="spaceEntreInfo, colorTitulos">Origen: ${carta.raza}</p>
            <p class="spaceEntreInfo, colorTitulos">Género: ${carta.genero}</p>
            <p class="spaceEntreInfo, colorTitulos">Clase: ${carta.clase}</p>
            <p class="spaceEntreInfo, colorTituloAtr"></p>
            <div class="centrarAtributos">
                <p class="spaceEntreInfo, colorAtr">INT ${carta.atributos.inteligencia}</p>
                &nbsp;&nbsp;<p class="spaceEntreInfo, colorAtr">STR ${carta.atributos.fuerza}</p>
                &nbsp;&nbsp;<p class="spaceInfoBot, colorAtr">AGI ${carta.atributos.agilidad}</p>
            </div>
        `;

        // Insertar la información de la carta en el elemento HTML
        nuevaCarta.innerHTML = infoCarta;

        // Agregar la nueva carta al contenedor de cartas en el HTML
        contenedorCartas.appendChild(nuevaCarta);
    });
    }
});