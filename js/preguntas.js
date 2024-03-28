// // //!Funcion para el focus en los inputs
// // window.onload = function() {
// //     document.getElementById("saludoInicialInput").focus();
// // };




// //!PREGUNTAS 1 y 2.
// //almacenar nombre de usuario
// let nombreUsuario = '';

// //!activar pregunta Uno
// document.addEventListener('DOMContentLoaded', function() {
//     // Agrega el código para manejar el evento click en el botón comenzarBtn
//     const comenzarBtn = document.querySelector('.comenzarBtn');
//     const preguntaUno = document.querySelector('.preguntaUno');

//     comenzarBtn.addEventListener('click', function() {
//         comenzarBtn.style.display = 'none'; // Oculta el botón
//         preguntaUno.style.display = 'block'; // Muestra el text box de la segunda pregunta
//     });
// });

//     const buttonSend1 = document.getElementById('buttonSend1');
//     const saludoInicialInput = document.getElementById('saludoInicialInput');
//     const preguntaUno = document.querySelector('.preguntaUno');
//     const preguntaDos = document.querySelector('.preguntaDos');

//     buttonSend1.addEventListener('click', function() {
//         // Almacena el nombre del usuario en la variable nombreUsuario
//         nombreUsuario = saludoInicialInput.value;
//         console.log('Nombre del usuario:', nombreUsuario);

//     // Oculta la preguntaUno y muestra la preguntaDos
//     preguntaUno.style.display = 'none';
//     preguntaDos.style.display = 'block';
// });

// //!Config Boton Siguiente con Enter, Espacio y focus.



// //TODO OCULTAR PREGUNTA DOS Y MOSTRAR PREGUNTA TRES (ELEGIR RAZA)
// // Almacena el nombre del personaje ingresado por el usuario
// let nombrePersonaje = '';

// document.addEventListener('DOMContentLoaded', function() {
//     // Obtén referencia a los elementos relevantes
//     const buttonSend2 = document.getElementById('buttonSend2');
//     const preguntaDos = document.querySelector('.preguntaDos');
//     const botonElegirRaza = document.querySelector('.botonElegirRaza');
//     const nickNameInput = document.getElementById('nickNameInput');

//     // Agrega un event listener para el botón de "Siguiente" en la pregunta dos
//     buttonSend2.addEventListener('click', function() {
//         // Almacena el nombre del personaje ingresado por el usuario
//         nombrePersonaje = nickNameInput.value;
//         console.log('Nombre del personaje:', nombrePersonaje);

//         // Oculta la pregunta dos y muestra la pregunta tres (elegir raza)
//         preguntaDos.style.display = 'none';
//         botonElegirRaza.style.display = 'block';

//         // Guardar el nombre del personaje en la variable seleccion.nick
//         seleccion.nick = nombrePersonaje;
//     });
// });


















document.addEventListener('DOMContentLoaded', function() {
    // Agrega el código para manejar el evento click en el botón comenzarBtn
    const comenzarBtn = document.querySelector('.comenzarBtn');
    const preguntaUno = document.querySelector('.preguntaUno');
    const saludoInicialInput = document.getElementById('saludoInicialInput');

    comenzarBtn.addEventListener('click', function() {
        comenzarBtn.style.display = 'none'; // Oculta el botón
        preguntaUno.style.display = 'block'; // Muestra la primera pregunta
        saludoInicialInput.focus(); // Coloca el foco en el campo de entrada de texto
    });

    // Agrega un controlador de evento de teclado para el primer input text (saludoInicialInput)
    saludoInicialInput.addEventListener('keydown', function(event) {
        if (event.keyCode === 13) { // Verifica si la tecla presionada es Enter
            event.preventDefault(); // Evita el comportamiento predeterminado del Enter (enviar el formulario)
            buttonSend1.click(); // Simula hacer clic en el botón "Enviar" para pasar a la siguiente pregunta
        }
    });

    // Obtén referencia a los elementos relevantes en la segunda pregunta
    const buttonSend1 = document.getElementById('buttonSend1');
    const preguntaDos = document.querySelector('.preguntaDos');
    const nickNameInput = document.getElementById('nickNameInput');

    // Agrega un controlador de evento de teclado para el segundo input text (nickNameInput)
    nickNameInput.addEventListener('keydown', function(event) {
        if (event.keyCode === 13) { // Verifica si la tecla presionada es Enter
            event.preventDefault(); // Evita el comportamiento predeterminado del Enter (enviar el formulario)
            buttonSend2.click(); // Simula hacer clic en el botón "Enviar" para pasar a la siguiente pregunta
        }
    });

    // Agrega un event listener para el botón de "Siguiente" en la pregunta uno
    buttonSend1.addEventListener('click', function() {
        // Almacena el nombre del usuario en la variable nombreUsuario
        nombreUsuario = saludoInicialInput.value;
        console.log('Nombre del usuario:', nombreUsuario);

        // Oculta la preguntaUno y muestra la preguntaDos
        preguntaUno.style.display = 'none';
        preguntaDos.style.display = 'block';
        nickNameInput.focus(); // Coloca el foco en el campo de entrada de texto de la segunda pregunta
    });

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
