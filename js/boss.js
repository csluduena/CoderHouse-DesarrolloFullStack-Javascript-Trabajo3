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