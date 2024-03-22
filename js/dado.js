//TODO CÓDIGO JS DADOS
let elDiceOne = document.getElementById('dice1');
let elDiceTwo = document.getElementById('dice2');
let elComeOut = document.getElementById('roll');

elComeOut.onclick = function () {
    rollDice();
};

function rollDice() {
    // Elimina las clases de mostrar del elemento de los dados
    elDiceOne.classList.remove('show-1', 'show-2', 'show-3', 'show-4', 'show-5', 'show-6');
    elDiceTwo.classList.remove('show-1', 'show-2', 'show-3', 'show-4', 'show-5', 'show-6');

    // Genera números aleatorios para los dados
    let diceOne = Math.floor((Math.random() * 6) + 1);
    let diceTwo = Math.floor((Math.random() * 6) + 1);

    // Muestra los dados girando durante un tiempo antes de mostrar el resultado
    setTimeout(function() {
        // Muestra el resultado de los dados
        elDiceOne.classList.add('show-' + diceOne);
        elDiceTwo.classList.add('show-' + diceTwo);
    }, 500);
}

//! FUNCION PARA QUITAR EL DISPLAY NONE Y MOSTRAR LOS DADOS.
// function lanzarDados() {
//     document.getElementById("ocultarDados").style.display = "block";

//     let atributos = ["Inteligencia", "Fuerza", "Agilidad"];
    
    
    
    
    
    
    
    
    // for (let i = 0; i < atributos.length; i++) {
    //     let valorOriginal = atributoClase[i];
    //     let dado1 = Math.floor(Math.random() * 6) + 1;
    //     let dado2 = Math.floor(Math.random() * 6) + 1;
    //     let totalDados = dado1 + dado2;
    //     atributoClase[i] += totalDados;
        
    //     alert(`La suerte, proviene en forma de 2 dados de 6 caras, y al arrojarlos te devuelve un total de ${totalDados}.\nAhora tu atributo de ${atributos[i]} tiene un valor de: ${atributoClase[i]}`);
        
    //     let nuevoTexto = "(Base) + 🎲" + totalDados + " = " + atributoClase[i] + "(Total)";

//         maquinaDeEscribir(nuevoTexto, atributos[i]);
//     }
// }