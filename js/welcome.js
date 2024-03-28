document.getElementById('start-button').addEventListener('click', function() {
    // Oculta los botones de inicio
    document.querySelectorAll('.start-button, .start-buttonCFG, .start-buttonCFGImg').forEach(button => {
        button.style.display = 'none';
    });

    // Muestra el contenido
    document.getElementById('content').style.display = 'flex';

    // Aplica filtros de desenfoque a las imágenes
    const images = document.querySelectorAll('.bodyIndex img');
    images.forEach(img => {
        img.style.filter = 'blur(5px) brightness(40%) opacity(1) contrast(100%)';
    });
});

document.addEventListener('DOMContentLoaded', function() {
    // Oculta el contenido al cargar la página
    document.getElementById('content').style.display = 'none';

    // Obtén el elemento del botón de inicio
    const botonStart = document.getElementById('botonStart');

    // Agrega un evento de clic al botón de inicio
    botonStart.addEventListener('click', function() {
        // Oculta los elementos de bienvenida, texto solapa y HR
        document.querySelector('.bienvenida').style.display = 'none';
        document.querySelector('.textSolapa').style.display = 'none';
        document.querySelectorAll('hr').forEach(hr => {
            hr.style.display = 'none';
        });
    });
});














// document.addEventListener('DOMContentLoaded', function() {
//     const comenzarBtn = document.querySelector('.comenzarBtn');
//     const preguntaUno = document.querySelector('.preguntaUno');
//     const preguntaDos = document.querySelector('.preguntaDos');
//     const botonElegirRaza = document.querySelector('.botonElegirRaza');
//     const saludoInicialInput = document.getElementById('saludoInicialInput');
//     const nickNameInput = document.getElementById('nickNameInput');
//     let nombreUsuario = '';
//     let nombrePersonaje = '';

//     // Evento para mostrar la primera pregunta
//     comenzarBtn.addEventListener('click', function() {
//         comenzarBtn.style.display = 'none';
//         preguntaUno.style.display = 'block';
//         saludoInicialInput.focus(); // Enfoca el input automáticamente
//     });

//     // Evento para el botón "Siguiente" de la primera pregunta
//     document.getElementById('buttonSend1').addEventListener('click', function() {
//         nombreUsuario = saludoInicialInput.value;
//         console.log('Nombre del usuario:', nombreUsuario);
//         preguntaUno.style.display = 'none';
//         preguntaDos.style.display = 'block';
//         nickNameInput.focus(); // Enfoca el siguiente input automáticamente
//     });

//     // Evento para el botón "Siguiente" de la segunda pregunta
//     document.getElementById('buttonSend2').addEventListener('click', function() {
//         nombrePersonaje = nickNameInput.value;
//         console.log('Nombre del personaje:', nombrePersonaje);
//         preguntaDos.style.display = 'none';
//         botonElegirRaza.style.display = 'block';
//     });

//     // Evento para avanzar con Enter en la primera pregunta
//     saludoInicialInput.addEventListener('keypress', function(event) {
//         if (event.key === 'Enter') {
//             nombreUsuario = saludoInicialInput.value;
//             console.log('Nombre del usuario:', nombreUsuario);
//             preguntaUno.style.display = 'none';
//             preguntaDos.style.display = 'block';
//             nickNameInput.focus();
//         }
//     });

//     // Evento para avanzar con Enter en la segunda pregunta
//     nickNameInput.addEventListener('keypress', function(event) {
//         if (event.key === 'Enter') {
//             nombrePersonaje = nickNameInput.value;
//             console.log('Nombre del personaje:', nombrePersonaje);
//             preguntaDos.style.display = 'none';
//             botonElegirRaza.style.display = 'block';
//         }
//     });
// });