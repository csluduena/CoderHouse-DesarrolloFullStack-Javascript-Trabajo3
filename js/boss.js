const boss1 = {
    FirstName: "Notsag",
    alias: "BadTutor",
    type: "Boss",
    ataque: 1,
    vida: 1000,
    agilidad: 500

};


document.getElementById('startBattle').addEventListener('click', function() {
    document.getElementById('boss').style.display = 'block'; // Mostrar al boss al hacer clic en el botón
    const chauBoton = document.getElementById('startBattle')

    chauBoton.style.display = 'none';
})



// document.getElementById('startBattle').addEventListener('click', function() {
//     // Muestra al boss al hacer clic en el botón
//     document.getElementById('boss').style.display = 'block'; 

//     // Oculta el botón
//     const chauBoton = document.getElementById('startBattle');
//     chauBoton.style.display = 'none';

//     // Selecciona todas las cartas
//     let cards = document.querySelectorAll('.card');

//     // Aplica los cambios a cada carta
//     cards.forEach((card) => {
//         card.style.height = '367.6px';
//         card.style.width = '217px';
//         card.style.marginTop = '-22%';
//             card.querySelector('.card-face').style.transform = 'translateY(88px) rotate(0deg)';
//         });
//     });

// document.getElementById('startBattle').addEventListener('click', function() {
//     // Muestra al boss al hacer clic en el botón
//     document.getElementById('boss').style.display = 'block'; 

//     // Oculta el botón
//     const chauBoton = document.getElementById('startBattle');
//     chauBoton.style.display = 'none';

//     // Selecciona el contenedor de las cartas
//     let cardsContainer = document.querySelector('.cards');

//     // Aplica los estilos al contenedor de las cartas
//     cardsContainer.style.display = 'flex';
//     cardsContainer.style.flexDirection = 'row';
//     cardsContainer.style.flexWrap = 'nowrap';
//     cardsContainer.style.justifyContent = 'space-evenly';

//     // Selecciona todas las cartas
//     let cards = document.querySelectorAll('.card');

//     // Aplica los cambios a cada carta
//     cards.forEach((card) => {
//         card.style.height = '367.6px';
//         card.style.width = '217px';
//         card.style.marginTop = '-22%';
//         card.querySelector('.card-face').style.transform = 'translateY(88px) rotate(0deg)';
//     });
// });

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
        card.style.marginTop = '-22%';
        cardsContainer.style.height = '156px';
        cardsContainer.style.gap = '4%';
        card.querySelector('.card-face').style.transform = 'translateY(88px) rotate(0deg)';
    });
});
