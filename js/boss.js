let boss1 = {
    FirstName: "Carpisaurio",
    alias: "TheProfe",
    type: "Boss",
    ataque: 26,
    vida: 99,
    agilidad: 10,
    debilidad: 'Una de Soda Stereo'
};

// Boss2 Stats
let boss2 = {
    FirstName: "Avaf G.",
    alias: "The Crazy Tutor",
    ataque: 12,
    vida: 149,
    agilidad: 30,
    debilidad: 'Adicto a las Chipá'
};



document.getElementById('startBattle').addEventListener('click', function() {
    document.getElementById('boss').style.display = 'block';
    const chauBoton = document.getElementById('startBattle')

    chauBoton.style.display = 'none';
})

let cardsContainer = document.querySelector('.cards');

cardsContainer.style.display = 'flex';
cardsContainer.style.height = '150px';
cardsContainer.style.padding = '0 50px';
cardsContainer.style.justifyContent = 'center';
cardsContainer.style.position = 'fixed';
cardsContainer.style.left = '0';
cardsContainer.style.right = '0';

document.getElementById('startBattle').addEventListener('click', function() {

    document.getElementById('boss').style.display = 'block'; 

    const chauBoton = document.getElementById('startBattle');
    chauBoton.style.display = 'none';

    let cards = document.querySelectorAll('.card');

    cards.forEach((card) => {
        card.style.height = '367.6px';
        card.style.width = '217px';
        card.style.marginTop = '-18%';
        cardsContainer.style.height = '156px';
        cardsContainer.style.gap = '1%';
        card.querySelector('.card-face').style.transform = 'translateY(88px) rotate(0deg)';
    });
});

let cards = document.querySelectorAll('.card');

let cardsPlace = document.querySelector('.cardsPlace');

let battlefield = document.querySelector('.battlefield');

let boss = document.querySelector('.boss');

let h3Title = document.querySelectorAll('.h3Title');
let titleSubmain = document.querySelectorAll('.titleSubmain');

let startBattleButton = document.querySelector('#startBattle');

let letsGoButton = document.querySelector('.ready');

battlefield.style.display = 'none';
boss.style.display = 'none';

startBattleButton.addEventListener('click', () => {
    h3Title.forEach((element) => {
        element.style.display = 'none';
    });
    titleSubmain.forEach((element) => {
        element.style.display = 'none';
    });

    letsGoButton.style.display = 'block';
    letsGoButton.disabled = true;

    cardsPlace.style.display = 'flex';
    cardsPlace.style.justifyContent = 'center';
    cardsPlace.style.alignItems = 'center';

    letsGoButton.style.marginTop = '22%';
    cardsPlace.style.marginTop = '7%';

    // Aquí se activa la posibilidad de hacer clic en las cartas
    cards.forEach((card) => {
        card.addEventListener('click', cardClickHandler);
    });
});

function cardClickHandler() {
    cardsPlace.appendChild(this);
    this.style.display = 'inline-block';
    this.style.marginTop = '-43%';

    if (cardsPlace.childElementCount === 6) {
        letsGoButton.disabled = false;
    }
}

// Añade un controlador de eventos al botón '¡Lets Go!'
letsGoButton.addEventListener('click', () => {
    battlefield.style.display = 'block';
    boss.style.display = 'block';

    cardsPlace.style.marginTop = '4%';
    letsGoButton.style.display = 'none';

    // Aquí se desactiva la posibilidad de hacer clic en las cartas
    cards.forEach((card) => {
        card.removeEventListener('click', cardClickHandler);
    });
});
