// Obtener el objeto 'info' desde localStorage y convertirlo a objeto JavaScript
const info = JSON.parse(localStorage.getItem('info'));

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
        const razas = Object.keys(infoEditado.raza); // Obtener todas las razas disponibles
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

            // Asignar un nombre basado en el género de la carta
            if (carta.genero === "Hombre") {
                carta.nombre = "SebaHero";
            } else if (carta.genero === "Mujer") {
                carta.nombre = "RossWenn";
            }

            // Generar el nombre del archivo de la carta
            const nombreArchivo = `${carta.raza}_${carta.clase}_${carta.genero}.png`;

            // Asignar el fondo de la imagen de la carta
            nuevaCarta.style.backgroundImage = `url('./../img/cartas/${nombreArchivo}')`;

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
            nuevaCarta.innerHTML = infoCarta;

            // Agregar la nueva carta al contenedor de cartas en el HTML
            contenedorCartas.appendChild(nuevaCarta);
        });
    }
});