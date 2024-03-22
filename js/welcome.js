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
    img.style.filter = "blur(5px)";
    });
});

//TODO - DOM SECTION - //
document.addEventListener('DOMContentLoaded', function() {
    let buttonSend = document.getElementById('buttonSend');

        buttonSend.addEventListener('click', function() {
    
            //! Obtener los valores de campo ↓↓↓
        let saludoInicial = document.getElementById('saludoInicialInput').value;
        let nickName = document.getElementById('nickNameInput').value;

        console.log('Respuesta:', saludoInicial);
        console.log('Nick:', nickName);
        // podemos seguir codeando con la variable saludoInicial
    });
});
