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
    
    
    
    //TODO MOSTRAR PREGUNTA UNO
    document.addEventListener('DOMContentLoaded', function() {
        // Aquí va tu código existente
    
        // Agrega el código para manejar el evento click en el botón comenzarBtn
        const comenzarBtn = document.querySelector('.comenzarBtn');
        const preguntaUno = document.querySelector('.preguntaUno');
    
        comenzarBtn.addEventListener('click', function() {
            comenzarBtn.style.display = 'none'; // Oculta el botón
            preguntaUno.style.display = 'block'; // Muestra el text box de la segunda pregunta
        });
    });
        //TODO MOSTRAR PREGUNTA DOS
    document.addEventListener('DOMContentLoaded', function() {
        // Aquí va tu código existente
    
        // Agrega el código para manejar el evento click en el botón buttonSend1
        const buttonSend1 = document.getElementById('buttonSend1');
        const preguntaUno = document.querySelector('.preguntaUno');
        const preguntaDos = document.querySelector('.preguntaDos');
    
        buttonSend1.addEventListener('click', function() {
            preguntaUno.style.display = 'none'; // Oculta la preguntaUno
            preguntaDos.style.display = 'block'; // Muestra la preguntaDos
        });
    });
    //TODO MOSTRAR PREGUNTA TRES (ELEGIR RAZA)
    document.addEventListener('DOMContentLoaded', function() {
        // Aquí va tu código existente
    
        // Agrega el código para manejar el evento click en el botón buttonSend2
        const buttonSend2 = document.getElementById('buttonSend2');
        const preguntaDos = document.querySelector('.preguntaDos');
        const botonElegirRaza = document.querySelector('.botonElegirRaza');
    
        buttonSend2.addEventListener('click', function() {
            preguntaDos.style.display = 'none'; // Oculta la preguntaDos
            botonElegirRaza.style.display = 'block'; // Muestra botonElegirRaza
        });
    });
    //TODO MOSTRAR PREGUNTA TRES (ELEGIR RAZA)
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
document.addEventListener('DOMContentLoaded', function() {
    // Variables para almacenar la elección del usuario
    let eleccionUsuario = '';

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

//! Boton Elejir Clase
document.addEventListener('DOMContentLoaded', function() {
    const buttonSend3 = document.getElementById('buttonSend3');
    const opcionGenero = document.querySelector('.opcionGenero');
    const elijeTuClase = document.querySelector('.elijeTuClase');

    buttonSend3.addEventListener('click', function() {
        opcionGenero.style.display = 'none'; // Oculta la sección de opción de género
        elijeTuClase.style.display = 'flex'; // Muestra la sección para elegir la clase
    });
});

//! ELEGIR CLASE

//Animación
document.addEventListener('DOMContentLoaded', function() {
    const buttonSend3 = document.getElementById('buttonSend3');elijeTuClase
    const opcionGenero = document.querySelector('.opcionGenero');
    const elijeTuClase = document.querySelector('.elijeTuClase');

    buttonSend3.addEventListener('click', function() {
        opcionGenero.style.display = 'none'; // Oculta la sección de opción de género
        elijeTuClase.style.display = 'flex'; // Muestra la sección para elegir la clase
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const enviar4Btn = document.getElementById('enviar4');
    const elijeTuClase = document.querySelector('.elijeTuClase');
    const elegirClase = document.getElementById('eleccionClase');

    enviar4Btn.addEventListener('click', function() {
        elijeTuClase.style.display = 'none'; // Oculta elijeTuClase
        elegirClase.style.display = 'flex'; // Muestra elegirClase
    });
});





document.addEventListener('DOMContentLoaded', function() {
    const buttonSend4 = document.getElementById('buttonSend4');
    const elegirClase = document.getElementById('eleccionClase');

    buttonSend4.addEventListener('click', function() {
        // Oculta el botón Enviar
        buttonSend4.style.display = 'none';
        // Muestra el contenedor de clases
        elegirClase.style.display = 'flex';
    });
});
















// //TODO - DOM SECTION - RETORNO DE INFO
// document.addEventListener('DOMContentLoaded', function() {
//     let buttonSend = document.getElementById('buttonSend');

//         buttonSend.addEventListener('click', function() {
    
//             //! Obtener los valores de campo ↓↓↓
//         let saludoInicial = document.getElementById('saludoInicialInput').value;
//         let nickName = document.getElementById('nickNameInput').value;

//         console.log('Respuesta:', saludoInicial);
//         console.log('Nick:', nickName);
//         // podemos seguir codeando con la variable saludoInicial
//     });
// });





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

// // Descripciones de las clases para cada raza
// let descripcionesClases = {
//     "Elfo": {
//         1: "Usuarios de magia poderosa y destructiva.",
//         2: "Capaces de manipular la magia de la naturaleza.",
//         3: "Artistas talentosos con habilidades mágicas únicas."
//     },
//     "Enano": {
//         1: "Combatientes fuertes y resistentes.",
//         2: "Maestros de la creación y mejora de armas y armaduras.",
//         3: "Defensores valientes con habilidades de curación."
//     },
//     "Humano": {
//         1: "Protectores leales con una gran habilidad en el combate cuerpo a cuerpo.",
//         2: "Maestros del sigilo y la astucia, expertos en trampas y robos.",
//         3: "Sanadores y protectores con habilidades mágicas divinas."
//     },
//     "Orco": {
//         1: "Combatientes salvajes que entran en frenesí en la batalla.",
//         2: "Conectados con los espíritus y capaces de usar magia elemental.",
//         3: "Expertos en rastreo y combate a distancia."
//     }
// };

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
