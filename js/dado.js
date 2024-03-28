// Obtener el botón y el elemento a mostrar
const tete = document.getElementById("buttonSend3");
const tiradaDeDados = document.getElementById("dadosTirada");
const contenedorInfoPj = document.getElementById("contenedorParcialId");

// Agregar un evento de clic al botón
buttonSend3.addEventListener("click", function() {
    // Mostrar el elemento de la tirada de dados cambiando su estilo de visualización
    tete.style.display = "none";
    tiradaDeDados.style.display = "block";
    contenedorInfoPj.style.display = "none";
});



//!Animación y código Dados
window.addEventListener( 'DOMContentLoaded', function () {
	
    const buttonRoolDice = document.querySelector( '.dice-roll' );

function rollDice () {

    const diceSide1 = document.getElementById( 'dice-side-1' );
    const diceSide2 = document.getElementById( 'dice-side-2' );
    //const status = document.getElementById( 'status' );

    const side1 = Math.floor( Math.random() * 6 ) + 1;
    const side2 = Math.floor( Math.random() * 6 ) + 1;
    const diceTotal = side1 + side2;
    }

buttonRoolDice.addEventListener( 'click', rollDice, false );

}, false);


let totalInteligencia;
let totalFuerza;
let totalAgilidad;


window.addEventListener('DOMContentLoaded', function() {
    const diceRollButton = document.getElementById('buttonDice');
    const continueButton = document.getElementById('buttonContinue');
    const resultado1 = document.getElementById("resultado1");
    const resultado2 = document.getElementById("resultado2");
    const resultado3 = document.getElementById("resultado3");
    
    parseInt(inteligenciaBase.textContent);

    let tiradasRealizadas = 0;

    diceRollButton.addEventListener('click', function() {
        if (tiradasRealizadas < 3) { // Verificar si aún se pueden realizar más tiradas
            tiradasRealizadas++; // Incrementar el contador de tiradas realizadas

            const result1 = rollDice('dice-side-1');
            const result2 = rollDice('dice-side-2');

            // Mostrar los resultados en la consola
            console.log('Resultado del primer dado:', result1);
            console.log('Resultado del segundo dado:', result2);
            console.log('Resultado total:', result1 + result2);

            // Almacenar los resultados en las variables correspondientes
            if (tiradasRealizadas === 1) {
                totalInteligencia = result1 + result2 + parseInt(inteligenciaBase.textContent.replace(/\D/g,''));
                resultado1.textContent = 'Tu bonus para Inteligencia es: ' + (result1 + result2) + ' 🎲 + ' + parseInt(inteligenciaBase.textContent.replace(/\D/g,'')) + ' atributo base = ' + totalInteligencia;
            } else if (tiradasRealizadas === 2) {
                totalFuerza = result1 + result2 + parseInt(fuerzaBase.textContent.replace(/\D/g,''));
                resultado2.textContent = 'Tu bonus para Fuerza es: ' + (result1 + result2) + ' 🎲 + ' + parseInt(fuerzaBase.textContent.replace(/\D/g,'')) + ' atributo base = ' + totalFuerza;
            } else if (tiradasRealizadas === 3) {
                totalAgilidad = result1 + result2 + parseInt(agilidadBase.textContent.replace(/\D/g,''));
                resultado3.textContent = 'Tu bonus para Agilidad es: ' + (result1 + result2) + ' 🎲 + ' + parseInt(agilidadBase.textContent.replace(/\D/g,'')) + ' atributo base = ' + totalAgilidad;
            }
        }  
        if (tiradasRealizadas === 3) {
            diceRollButton.style.display = 'none'; // Ocultar el botón de "Lanzar dados"
            continueButton.style.display = 'block'; // Mostrar el botón de "Continuar"
        }
    });
    

    function rollDice(diceId) {
        const dice = document.getElementById(diceId);
        const result = Math.floor(Math.random() * 6) + 1;

        // Declara las imágenes para cada cara del dado
        const diceImages = {
            1: "img/dado1.png",
            2: "img/dado2.png",
            3: "img/dado3.png",
            4: "img/dado4.png",
            5: "img/dado5.png",
            6: "img/dado6.png"
        };

        // Obtiene la imagen correspondiente al resultado
        const diceImage = diceImages[result];

        // Aplica la imagen al dado
        dice.style.backgroundImage = "url('" + diceImage + "')";

        dice.style.animation = 'rotate 0.6s ease-in-out';

        setTimeout(function() {
            dice.style.animation = '';
        }, 600);

        return result;
    }
});

    const buttonContinue = document.getElementById('buttonContinue');
    const contenedorFinal = document.getElementById('contenedorFinalIdF');
    const dadosTirada = document.getElementById('dadosTirada');
    const botonFinalIndex = document.getElementById('continuarBtn3')

    buttonContinue.addEventListener('click', function() {
        // Ocultar el botón Continuar y el contenedor dadosTirada
        buttonContinue.style.display = 'none';
        dadosTirada.style.display = 'none';
        
        
        // Mostrar el contenedor final
        contenedorFinal.style.display = 'block';
        botonFinalIndex.style.display = 'block';
    });
































// //TODO CÓDIGO JS DADOS
// let elDiceOne = document.getElementById('dice1');
// let elDiceTwo = document.getElementById('dice2');
// let elComeOut = document.getElementById('roll');

// elComeOut.onclick = function () {
//     rollDice();
// };

// function rollDice() {
//     // Elimina las clases de mostrar del elemento de los dados
//     elDiceOne.classList.remove('show-1', 'show-2', 'show-3', 'show-4', 'show-5', 'show-6');
//     elDiceTwo.classList.remove('show-1', 'show-2', 'show-3', 'show-4', 'show-5', 'show-6');

//     // Genera números aleatorios para los dados
//     let diceOne = Math.floor((Math.random() * 6) + 1);
//     let diceTwo = Math.floor((Math.random() * 6) + 1);

//     // Muestra los dados girando durante un tiempo antes de mostrar el resultado
//     setTimeout(function() {
//         // Muestra el resultado de los dados
//         elDiceOne.classList.add('show-' + diceOne);
//         elDiceTwo.classList.add('show-' + diceTwo);
//     }, 500);
// }

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