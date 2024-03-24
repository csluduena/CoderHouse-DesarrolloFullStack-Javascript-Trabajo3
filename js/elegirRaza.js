document.getElementById('start-button').addEventListener('click', function() {
    // Muestra todo el contenido
    document.getElementById('content').style.display = 'flex';
    
    
    // Oculta el botón de inicio
    this.style.display = 'none';
    
    })
    
    // Obtén el elemento con la clase "start-buttonCFG"
    const startButton = document.querySelector(".start-buttonCFG");
    
    startButton.addEventListener("click", () => {
        const images = document.querySelectorAll(".bodyIndex img");
    
      // Aplica el filtro de desenfoque a cada imagen
        images.forEach((img) => {
        img.style.filter = "blur(5px) brightness(40%) opacity(1) contrast(100%)";
        });
    });
    
    
    
    //almacenar nombre de usuario
    let nombreUsuario = '';

    //!activar pregunta Uno
    document.addEventListener('DOMContentLoaded', function() {
        // Agrega el código para manejar el evento click en el botón comenzarBtn
        const comenzarBtn = document.querySelector('.comenzarBtn');
        const preguntaUno = document.querySelector('.preguntaUno');

        comenzarBtn.addEventListener('click', function() {
            comenzarBtn.style.display = 'none'; // Oculta el botón
            preguntaUno.style.display = 'block'; // Muestra el text box de la segunda pregunta
        });
    });

        const buttonSend1 = document.getElementById('buttonSend1');
        const saludoInicialInput = document.getElementById('saludoInicialInput');
        const preguntaUno = document.querySelector('.preguntaUno');
        const preguntaDos = document.querySelector('.preguntaDos');

        buttonSend1.addEventListener('click', function() {
            // Almacena el nombre del usuario en la variable nombreUsuario
            nombreUsuario = saludoInicialInput.value;
            console.log('Nombre del usuario:', nombreUsuario);

        // Oculta la preguntaUno y muestra la preguntaDos
        preguntaUno.style.display = 'none';
        preguntaDos.style.display = 'block';
    });

// Puedes acceder a la variable nombreUsuario desde cualquier parte del código
console.log('Nombre del usuario:', nombreUsuario);


    //TODO OCULTAR PREGUNTA DOS Y MOSTRAR PREGUNTA TRES (ELEGIR RAZA)
    let nombrePersonaje = '';

    document.addEventListener('DOMContentLoaded', function() {
        // Obtén referencia a los elementos relevantes
        const buttonSend2 = document.getElementById('buttonSend2');
        const preguntaDos = document.querySelector('.preguntaDos');
        const botonElegirRaza = document.querySelector('.botonElegirRaza');
        const nickNameInput = document.getElementById('nickNameInput');

        // Agrega un event listener para el botón de "Siguiente" en la pregunta dos
        buttonSend2.addEventListener('click', function() {
            // Almacena el nombre del personaje ingresado por el usuario
            nombrePersonaje = nickNameInput.value;
            console.log('Nombre del personaje:', nombrePersonaje);

            // Oculta la pregunta dos y muestra la pregunta tres (elegir raza)
            preguntaDos.style.display = 'none';
            botonElegirRaza.style.display = 'block';
        });
    });
    //TODO ESTILOS BOTON PREGUNTA TRES (ELEGIR RAZA)
    document.addEventListener('DOMContentLoaded', function() {
        
        let botonElegirRaza = document.querySelector('.botonElegirRaza');
        
        let elegirRazas = document.getElementById('elegirRazas');

        elegirRazas.style.display = 'none';
        botonElegirRaza.addEventListener('click', function() {
            //Estilos:
            elegirRazas.style.display = 'flex';
            elegirRazas.style.position = "absolute";
            elegirRazas.style.top = "50%";
            elegirRazas.style.left = "50%";
            elegirRazas.style.transform = "translate(-50%, -50%)";

            // let bodyContent = document.querySelectorAll('body > *:not(#elegirRazas)');
            // bodyContent.forEach(function(element) {
            //     element.style.filter = 'blur(5px)';
            // });
        });
    });

//! PICK RAZA

let eleccionUsuario = '';

document.addEventListener('DOMContentLoaded', function() {
    // Variables para almacenar la elección del usuario


    // Obtener el contenedor de opciones
    const elegirRazas = document.getElementById('elegirRazas');
    const botonElegirRaza = document.querySelector('.botonElegirRaza');
    const opcionGenero = document.querySelector('.opcionGenero');

    // Obtener las cuatro opciones
    const elfosOption = document.getElementById('elfosOption');
    const enanosOption = document.getElementById('enanosOption');
    const humanosOption = document.getElementById('humanosOption');
    const orcosOption = document.getElementById('orcosOption');

    // Agregar controladores de eventos clic a cada opción
    elfosOption.addEventListener('click', function() {
        eleccionUsuario = 'Elfos';
        console.log('Elección del usuario:', eleccionUsuario);
        elegirRazas.style.display = 'none'; // Ocultar el contenedor de opciones
        botonElegirRaza.style.display = 'none'; // Ocultar el botón de elegir raza
        opcionGenero.style.display = 'block'; // Mostrar el botón de opción de género
    });

    enanosOption.addEventListener('click', function() {
        eleccionUsuario = 'Enanos';
        console.log('Elección del usuario:', eleccionUsuario);
        elegirRazas.style.display = 'none'; // Ocultar el contenedor de opciones
        botonElegirRaza.style.display = 'none'; // Ocultar el botón de elegir raza
        opcionGenero.style.display = 'block'; // Mostrar el botón de opción de género
    });

    humanosOption.addEventListener('click', function() {
        eleccionUsuario = 'Humanos';
        console.log('Elección del usuario:', eleccionUsuario);
        elegirRazas.style.display = 'none'; // Ocultar el contenedor de opciones
        botonElegirRaza.style.display = 'none'; // Ocultar el botón de elegir raza
        opcionGenero.style.display = 'block'; // Mostrar el botón de opción de género
    });

    orcosOption.addEventListener('click', function() {
        eleccionUsuario = 'Orcos';
        console.log('Elección del usuario:', eleccionUsuario);
        elegirRazas.style.display = 'none'; // Ocultar el contenedor de opciones
        botonElegirRaza.style.display = 'none'; // Ocultar el botón de elegir raza
        opcionGenero.style.display = 'block'; // Mostrar el botón de opción de género
    });
});


//! Boton Elejir genero
document.addEventListener('DOMContentLoaded', function() {
    const buttonSend3 = document.getElementById('buttonSend3');
    const opcionGenero = document.querySelector('.opcionGenero');
    const elijeTuClase = document.querySelector('.elijeTuClase');

    buttonSend3.addEventListener('click', function() {
        opcionGenero.style.display = 'none'; // Oculta la sección de opción de género
        elijeTuClase.style.display = 'flex'; // Muestra la sección para elegir la clase
    });
});

//! Animación CLASES (mostrar Elegir Clase)
document.addEventListener('DOMContentLoaded', function() {
    const enviar4Btn = document.getElementById('enviar4');
    const elijeTuClase = document.querySelector('.elijeTuClase');
    const elegirClase = document.getElementById('eleccionClase');

    enviar4Btn.addEventListener('click', function() {
        elijeTuClase.style.display = 'none'; // Oculta elijeTuClase
        elegirClase.style.display = 'flex'; // Muestra elegirClase
    });
});






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
