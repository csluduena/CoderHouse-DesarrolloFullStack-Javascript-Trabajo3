

// Boss2 Stats
const boss2 = {
    FirstName: "Avaf G.",
    alias: "The Crazy Tutor",
    ataque: 12,
    vida: 149,
    agilidad: 30,
    debilidad: 'Adicto a las Chipá'
};

const startBattleButton = document.getElementById('startBattle');
const cardsContainer = document.querySelector('.cards');
const cards = document.querySelectorAll('.card');
const cardsPlace = document.querySelector('.cardsPlace');
const battlefield = document.querySelector('.battlefield');
const bossElement = document.querySelector('.boss');
const h3Title = document.querySelectorAll('.h3Title');
const titleSubmain = document.querySelectorAll('.titleSubmain');
const letsGoButton = document.querySelector('.ready');
const preparar = document.querySelector('.prepararHeroes');

startBattleButton.addEventListener('click', () => {
    document.getElementById('boss').style.display = 'block';
    startBattleButton.style.display = 'none';

    cards.forEach((card) => {
        card.style.height = '367.6px';
        card.style.width = '217px';
        card.style.marginTop = '-18%';
        cardsContainer.style.height = '156px';
        cardsContainer.style.gap = '1%';
        card.querySelector('.card-face').style.transform = 'translateY(88px) rotate(0deg)';
    });
});

startBattleButton.addEventListener('click', () => {
    document.getElementById('boss').style.display = 'block'; 

    startBattleButton.style.display = 'none';
});

startBattleButton.addEventListener('click', () => {
    h3Title.forEach((element) => {
        element.style.display = 'none';
    });
    titleSubmain.forEach((element) => {
        element.style.display = 'none';
    });
    preparar.style.display = 'flex';
    letsGoButton.style.display = 'block';
    letsGoButton.disabled = true;

    cardsPlace.style.display = 'flex';
    cardsPlace.style.justifyContent = 'center';
    cardsPlace.style.alignItems = 'center';

    letsGoButton.style.marginTop = '22%';
    cardsPlace.style.marginTop = '7%';

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

letsGoButton.addEventListener('click', () => {
    battlefield.style.display = 'block';
    bossElement.style.display = 'block';

    cardsPlace.style.marginTop = '4%';
    letsGoButton.style.display = 'none';
    preparar.style.display = 'none';

    cards.forEach((card) => {
        card.removeEventListener('click', cardClickHandler);
    });
});