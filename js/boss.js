let boss1 = {
    FirstName: "Notsag",
    alias: "BadTutor",
    type: "Boss",
    ataque: 26,
    vida: 99,
    agilidad: 10
};


document.getElementById('startBattle').addEventListener('click', function() {
    document.getElementById('boss').style.display = 'block'; // Mostrar al boss al hacer clic en el botón
    const chauBoton = document.getElementById('startBattle')

    chauBoton.style.display = 'none';
})

// Selecciona el contenedor de las cartas
let cardsContainer = document.querySelector('.cards');

// Aplica los estilos al contenedor de las cartas
cardsContainer.style.display = 'flex';
cardsContainer.style.height = '150px';
cardsContainer.style.padding = '0 50px';
cardsContainer.style.justifyContent = 'center';
cardsContainer.style.position = 'fixed';
cardsContainer.style.left = '0';
cardsContainer.style.right = '0';

document.getElementById('startBattle').addEventListener('click', function() {
    // Muestra al boss al hacer clic en el botón
    document.getElementById('boss').style.display = 'block'; 

    // Oculta el botón
    const chauBoton = document.getElementById('startBattle');
    chauBoton.style.display = 'none';

    // Selecciona todas las cartas
    let cards = document.querySelectorAll('.card');

    // Aplica los cambios a cada carta
    cards.forEach((card) => {
        card.style.height = '367.6px';
        card.style.width = '217px';
        card.style.marginTop = '-18%';
        cardsContainer.style.height = '156px';
        cardsContainer.style.gap = '1%';
        card.querySelector('.card-face').style.transform = 'translateY(88px) rotate(0deg)';
    });
});


//TODO Drag And Drop de cartas frente al boss.
// Selecciona todas las cartas
let cards = document.querySelectorAll('.card');

// Selecciona el lugar de las cartas
let cardsPlace = document.querySelector('.cardsPlace');

// Selecciona el campo de batalla
let battlefield = document.querySelector('.battlefield');

// Selecciona el boss
let boss = document.querySelector('.boss');

// Selecciona los elementos con las clases .h3Title y .titleSubmain
let h3Title = document.querySelectorAll('.h3Title');
let titleSubmain = document.querySelectorAll('.titleSubmain');

// Selecciona el botón de inicio de batalla
let startBattleButton = document.querySelector('#startBattle');

// Selecciona el botón ¡Lets Go!
let letsGoButton = document.querySelector('.ready');

// Inicialmente, oculta el campo de batalla y el boss
battlefield.style.display = 'none';
boss.style.display = 'none';

// Añade un controlador de eventos al botón de inicio de batalla
startBattleButton.addEventListener('click', () => {
    // Oculta los elementos con las clases .h3Title y .titleSubmain
    h3Title.forEach((element) => {
        element.style.display = 'none';
    });
    titleSubmain.forEach((element) => {
        element.style.display = 'none';
    });

    // Muestra el botón ¡Lets Go! y deshabilítalo inicialmente
    letsGoButton.style.display = 'block';
    letsGoButton.disabled = true;

    // Configura el lugar de las cartas para usar Flexbox
    cardsPlace.style.display = 'flex';
    cardsPlace.style.justifyContent = 'center';
    cardsPlace.style.alignItems = 'center';

    letsGoButton.style.marginTop = '22%';
    cardsPlace.style.marginTop = '7%';
    // Añade un controlador de eventos de clic a cada carta
    cards.forEach((card) => {
        card.addEventListener('click', () => {
            // Mueve la carta al lugar de las cartas
            cardsPlace.appendChild(card);

            // Asegúrate de que las cartas se posicionen de izquierda a derecha
            card.style.display = 'inline-block';

            // Aplica un margin-top de -43% a la carta
            card.style.marginTop = '-43%';

            // Si todas las cartas están en el lugar de las cartas, habilita el botón ¡Lets Go!
            if (cardsPlace.childElementCount === 6) {
                letsGoButton.disabled = false;
            }
        });
    });
});

// Añade un controlador de eventos al botón ¡Lets Go!
letsGoButton.addEventListener('click', () => {
    // Muestra el campo de batalla y el boss
    battlefield.style.display = 'block';
    boss.style.display = 'block';

    cardsPlace.style.marginTop = '6%';
    letsGoButton.style.display = 'none';
    // Aquí puedes agregar el código para iniciar la batalla
});
