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

    document.addEventListener('DOMContentLoaded', function() {
        // Obtén el elemento del botón de inicio
        const botonStart = document.getElementById('botonStart');
        
        // Agrega un evento de clic al botón de inicio
        botonStart.addEventListener('click', function() {
            // Oculta los elementos "bienvenida", "textSolapa" y los HR
            document.querySelector('.bienvenida').style.display = 'none';
            document.querySelector('.textSolapa').style.display = 'none';
            document.querySelectorAll('hr').forEach(hr => {
                hr.style.display = 'none';
            });
        });
    });