const tete = document.getElementById("buttonSend3");
const tiradaDeDados = document.getElementById("dadosTirada");
const contenedorInfoPj = document.getElementById("contenedorParcialId");

tete.addEventListener("click", function () {
    tete.style.display = "none";
    tiradaDeDados.style.display = "block";
    contenedorInfoPj.style.display = "none";
});

//!Animación y código Dados
window.addEventListener(
    "DOMContentLoaded",
    function () {
        const buttonRoolDice = document.querySelector(".dice-roll");

        function rollDice() {
            const diceSide1 = document.getElementById("dice-side-1");
            const diceSide2 = document.getElementById("dice-side-2");

            const side1 = Math.floor(Math.random() * 6) + 1;
            const side2 = Math.floor(Math.random() * 6) + 1;
            const diceTotal = side1 + side2;
        }

        buttonRoolDice.addEventListener("click", rollDice, false);
    },
    false
);

let totalInteligencia;
let totalFuerza;
let totalAgilidad;

window.addEventListener("DOMContentLoaded", function () {
    const diceRollButton = document.getElementById("buttonDice");
    const continueButton = document.getElementById("buttonContinue");
    const resultado1 = document.getElementById("resultado1");
    const resultado2 = document.getElementById("resultado2");
    const resultado3 = document.getElementById("resultado3");

    parseInt(inteligenciaBase.textContent);

    let tiradasRealizadas = 0;

    diceRollButton.addEventListener("click", function () {
        if (tiradasRealizadas < 3) {
            tiradasRealizadas++;

            const result1 = rollDice("dice-side-1");
            const result2 = rollDice("dice-side-2");

            //console.log("Resultado del primer dado:", result1);
            //console.log("Resultado del segundo dado:", result2);
            //console.log("Resultado total:", result1 + result2);

            if (tiradasRealizadas === 1) {
                totalInteligencia =
                    result1 +
                    result2 +
                    parseInt(inteligenciaBase.textContent.replace(/\D/g, ""));
                resultado1.textContent =
                    "Tu bonus para Inteligencia es: " +
                    (result1 + result2) +
                    " 🎲 + " +
                    parseInt(inteligenciaBase.textContent.replace(/\D/g, "")) +
                    " atributo base = " +
                    totalInteligencia;
            } else if (tiradasRealizadas === 2) {
                totalFuerza =
                    result1 +
                    result2 +
                    parseInt(fuerzaBase.textContent.replace(/\D/g, ""));
                resultado2.textContent =
                    "Tu bonus para Fuerza es: " +
                    (result1 + result2) +
                    " 🎲 + " +
                    parseInt(fuerzaBase.textContent.replace(/\D/g, "")) +
                    " atributo base = " +
                    totalFuerza;
            } else if (tiradasRealizadas === 3) {
                totalAgilidad =
                    result1 +
                    result2 +
                    parseInt(agilidadBase.textContent.replace(/\D/g, ""));
                resultado3.textContent =
                    "Tu bonus para Agilidad es: " +
                    (result1 + result2) +
                    " 🎲 + " +
                    parseInt(agilidadBase.textContent.replace(/\D/g, "")) +
                    " atributo base = " +
                    totalAgilidad;
            }
        }
        if (tiradasRealizadas === 3) {
            diceRollButton.style.display = "none";
            continueButton.style.display = "block";
        }
    });

    function rollDice(diceId) {
        const dice = document.getElementById(diceId);
        const result = Math.floor(Math.random() * 6) + 1;

        // Declaramos las imagenes para cada CarpiDado
        const diceImages = {
            1: "img/dado1.png",
            2: "img/dado2.png",
            3: "img/dado3.png",
            4: "img/dado4.png",
            5: "img/dado5.png",
            6: "img/dado6.png",
        };

        const diceImage = diceImages[result];

        dice.style.backgroundImage = `url('${diceImage}')`;

        dice.style.animation = "rotate 0.6s ease-in-out";

        setTimeout(function () {
            dice.style.animation = "";
        }, 600);

        return result;
    }
});

const buttonContinue = document.getElementById("buttonContinue");
const contenedorFinal = document.getElementById("contenedorFinalIdF");
const dadosTirada = document.getElementById("dadosTirada");
const botonFinalIndex = document.getElementById("continuarBtn3");

buttonContinue.addEventListener("click", function () {
    buttonContinue.style.display = "none";
    dadosTirada.style.display = "none";

    contenedorFinal.style.display = "block";
    botonFinalIndex.style.display = "block";
});