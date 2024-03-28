//!PREGUNTAS 1 y 2.
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

//!Config Boton Siguiente con Enter, Espacio y focus.
// document.addEventListener("DOMContentLoaded", function() {
//     var inputs = document.querySelectorAll('input[type="text"]'); // Obtener todos los campos de entrada de tipo texto
//     var buttons = document.querySelectorAll('button[type="button"]'); // Obtener todos los botones de tipo botón

//     inputs.forEach(function(input, index) {
//         input.addEventListener("keydown", function(event) {
//             if (event.key === "Enter") {
//                 event.preventDefault(); // Evitar el comportamiento predeterminado del Enter (como enviar un formulario)
//                 var nextButton = buttons[index]; // Obtener el siguiente botón correspondiente al índice del campo de entrada
//                 nextButton.click(); // Simular un clic en el siguiente botón
//             }
//         });
//     });

//     // Establecer el foco en el primer campo de entrada cuando la página se carga
//     if (inputs.length > 0) {
//         inputs[0].focus();
//     }
// });

// Puedes acceder a la variable nombreUsuario desde cualquier parte del código
//console.log('Nombre del usuario:', nombreUsuario);


//TODO OCULTAR PREGUNTA DOS Y MOSTRAR PREGUNTA TRES (ELEGIR RAZA)
// Almacena el nombre del personaje ingresado por el usuario
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

        // Guardar el nombre del personaje en la variable seleccion.nick
        seleccion.nick = nombrePersonaje;
    });
});


