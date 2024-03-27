// Almacena la información en el Local Storage
localStorage.setItem('nombrePersonaje', nombrePersonaje);
localStorage.setItem('razaSeleccionada', seleccion.raza);
localStorage.setItem('claseSeleccionada', seleccion.clase);
localStorage.setItem('generoSeleccionado', seleccionGenero);
localStorage.setItem('totalInteligencia', totalInteligencia);
localStorage.setItem('totalFuerza', totalFuerza);
localStorage.setItem('totalAgilidad', totalAgilidad);

//!Recuperar el nombre del personaje del Local Storage
//const nombrePersonaje = localStorage.getItem('nombrePersonaje');



// Imprimir la información en la consola
console.log("Nombre del personaje:", nombrePersonaje);
console.log("Raza seleccionada:", seleccion.raza);
console.log("Clase seleccionada:", seleccion.clase);
console.log("Género seleccionado:", seleccionGenero);
console.log("Total de inteligencia:", totalInteligencia);
console.log("Total de fuerza:", totalFuerza);
console.log("Total de agilidad:", totalAgilidad);













































//! Ir a la página Personaje.HTML

const continueButton = document.getElementById('continuarBtn3');

continueButton.addEventListener('click', function() {
    window.location.href = '../pages/personaje.html';
});

