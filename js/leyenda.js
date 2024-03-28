// Recuperar la información de LocalStorage
let nombrePersonaje = localStorage.getItem('nombrePersonaje');
let raza = localStorage.getItem('raza');
let clase = localStorage.getItem('clase');
let genero = localStorage.getItem('genero');
let totalInteligencia = localStorage.getItem('totalInteligencia');
let totalFuerza = localStorage.getItem('totalFuerza');
let totalAgilidad = localStorage.getItem('totalAgilidad');


// Imprimir la información recuperada
console.log("Nombre del personaje:", nombrePersonaje);
console.log("Raza:", raza);
console.log("Clase:", clase);
console.log("Género:", genero);
console.log("Total de inteligencia:", totalInteligencia);
console.log("Total de fuerza:", totalFuerza);
console.log("Total de agilidad:", totalAgilidad);


// Mostrar la información en la página //!(Acorde a las ID del html)
document.getElementById("nickPersonaje").textContent =  nombrePersonaje
document.getElementById("origen").textContent =  raza;
document.getElementById("genero").textContent = clase;
document.getElementById("clase").textContent = genero;
document.getElementById("inteligencia").textContent = totalInteligencia;
document.getElementById("fuerza").textContent = totalFuerza;
document.getElementById("agilidad").textContent =  totalAgilidad;



// Alerta borrar personaje
// Obtener el botón que abre el modal
let btnBorrar = document.getElementById("borrarPersonaje");
let modal = document.getElementById("myModal");
let btnCancelar = document.getElementById("cancelarBorrar");

// mostrar
btnBorrar.onclick = function() {
    modal.style.display = "block";
}

// cerrar al cancelar
btnCancelar.onclick = function() {
    modal.style.display = "none";
}

// Cuando el usuario hace clic fuera del modal, cerrar el modal
window.onclick = function(event) {
    if (event.target == modal) {
    modal.style.display = "none";
    }
}

// Obtener el botón de confirmar dentro del modal
let btnConfirmar = document.getElementById("confirmarBorrar");

// Cuando el usuario hace clic en el botón de confirmar, borrar el personaje
btnConfirmar.onclick = function() {
  // Borrar el personaje de localStorage
    localStorage.removeItem('nombrePersonaje');
    localStorage.removeItem('raza');
    localStorage.removeItem('clase');
    localStorage.removeItem('genero');
    localStorage.removeItem('totalInteligencia');
    localStorage.removeItem('totalFuerza');
    localStorage.removeItem('totalAgilidad');

  // Cambiar el fondo del div de información del personaje
    document.querySelector('.info-personaje').style.backgroundImage = `url('./../img/cartas/emptyCard.png')`;

  // Cerrar el modal
    modal.style.display = "none";

  // Recargar la página
    location.reload();
}

//     //borrar el personaje de manera local //!TOMAMOS EL VALOR DE "RECUPERAR LA INFO DE LOCALSTORAGE"
// document.getElementById('borrarPersonaje').addEventListener('click', function() {
    
//     let confirmar = confirm("Se perderá toda la información de su personaje, ¿Estás seguro que desea continuar?");

//     if (confirmar) {
    
//         //localStorage.removeItem('nombreUsuario'); No nos interesa
//         localStorage.removeItem('nombrePersonaje');
//         localStorage.removeItem('raza');
//         localStorage.removeItem('clase');
//         localStorage.removeItem('genero');
//         localStorage.removeItem('totalInteligencia');
//         localStorage.removeItem('totalFuerza');
//         localStorage.removeItem('totalAgilidad');
        
//         document.querySelector('.info-personaje').style.backgroundImage = `url('./../img/cartas/emptyCard.png')`;

//         location.reload();
//     }
// });



// Descargar el personaje
document.getElementById('descargarPersonaje').addEventListener('click', function() {
    
    let personaje = {
        //nombreUsuario: localStorage.getItem('nombreUsuario'), No nos interesa
        nickPersonaje: localStorage.getItem('nombrePersonaje'),
        origen: localStorage.getItem('raza'),
        clase: localStorage.getItem('clase'),
        genero: localStorage.getItem('genero'),
        inteligencia: localStorage.getItem('totalInteligencia'),
        fuerza: localStorage.getItem('totalFuerza'),
        agilidad: localStorage.getItem('totalAgilidad')
    };

    //EL MEME PARA DESCARGAR EL PERSONAJE TANTO FILE PARA BACKUP COMO JPG.
    let zip = new JSZip();

    // agregamos el archivo JSON al ZIP
    let jsonStr = JSON.stringify(personaje);
    zip.file(personaje.nickPersonaje + "-" + personaje.origen + "-" + personaje.clase + "-" + personaje.genero + ".json", jsonStr);

    // usamos la cosa de html2canvas para crear una imagen de la página (Aunque solo elegimos el elemento de la carta)
    let elementoCarta = document.querySelector('.info-personaje');

    html2canvas(elementoCarta).then(function(canvas) {
        let imgData = canvas.toDataURL('image/png');
        let imgData64 = imgData.split(',')[1];

        // agregamos la imagen al ZIP
        zip.file(personaje.nickPersonaje + "-" + personaje.origen + "-" + personaje.clase + "-" + personaje.genero + ".png", imgData64, {base64: true});

        // Generar el archivo ZIP y descargarlo
        zip.generateAsync({type:"blob"}).then(function(content) {
            let link = document.createElement('a');
            link.download = (personaje.nickPersonaje + "-" + personaje.origen + "-" + personaje.clase + "-" + personaje.genero) + ".zip"; //CFG nombre del archivo
            link.href = URL.createObjectURL(content);
            link.click();
        });
    });
});



//Carga de PJ
document.getElementById('cargarPersonaje').addEventListener('click', function() {
    let input = document.createElement('input');
    input.type = 'file';
    input.onchange = e => { 
        let file = e.target.files[0];
        if (file) {
            let reader = new FileReader();
            reader.onload = function(e) {
                let personaje = JSON.parse(e.target.result);

                // Guarda la información del personaje en el almacenamiento local
                //localStorage.setItem('nombreUsuario', personaje.nombreUsuario); No lo usamos.
                localStorage.setItem('nickPersonaje', personaje.nickPersonaje);
                localStorage.setItem('origen', personaje.origen);
                localStorage.setItem('clase', personaje.clase);
                localStorage.setItem('genero', personaje.genero);
                localStorage.setItem('inteligencia', personaje.inteligencia);
                localStorage.setItem('fuerza', personaje.fuerza);
                localStorage.setItem('agilidad', personaje.agilidad);

                // Actualiza la página para reflejar que la información del personaje ha sido cargada
                location.reload();
            };
            reader.readAsText(file);
        }
    }
    input.click();
});





// Convierte la raza, clase y género a formato de nombre de archivo
let razaArchivo = raza ? raza.toLowerCase() : '';
let claseArchivo = clase ? clase.replace(' ', ' ') : '';
let generoArchivo = genero ? (genero === 'Hombre' ? 'Hombre' : 'Mujer') : '';

// Crea el nombre del archivo
let nombreArchivo;
if (razaArchivo && claseArchivo && generoArchivo) {
    nombreArchivo = `${razaArchivo}_${claseArchivo}_${generoArchivo}.png`;
} else {
    nombreArchivo = "cartaVacia.png";
}

// Asigna el fondo al div .info-personaje
document.querySelector('.info-personaje').style.backgroundImage = `url('./../img/cartas/${nombreArchivo}')`;




// // Convierte la raza, clase y género a formato de nombre de archivo
// let origen = localStorage.getItem('origen'); // Recuperar 'origen' de LocalStorage
// let razaArchivo = personaje.origen ? origen.toLowerCase() : '';
// let claseArchivo = personaje.clase ? clase.replace(' ', ' ') : '';
// let generoArchivo = personaje.genero ? (genero === 'Hombre' ? 'Hombre' : 'Mujer') : '';

// // Crea el nombre del archivo
// let nombreArchivo;
// if (razaArchivo && claseArchivo && generoArchivo) {
//     nombreArchivo = `${razaArchivo}_${claseArchivo}_${generoArchivo}.png`;
// } else {
//     nombreArchivo = "cartaVacia.png";
// }

// // Asigna el fondo al div .info-personaje
// document.querySelector('.info-personaje').style.backgroundImage = `url('./../img/cartas/${nombreArchivo}')`;






// // Convierte la raza, clase y género a formato de nombre de archivo
// let origen = localStorage.getItem('origen'); // Recuperar 'origen' de LocalStorage
// let razaArchivo = origen ? origen.toLowerCase() : '';
// let claseArchivo = clase ? clase.replace(' ', ' ') : '';
// let generoArchivo = genero ? (genero === 'Hombre' ? 'Hombre' : 'Mujer') : '';

// // Crea el nombre del archivo
// let nombreArchivo;
// if (razaArchivo && claseArchivo && generoArchivo) {
//     nombreArchivo = `${razaArchivo}_${claseArchivo}_${generoArchivo}.png`;
// } else {
//     nombreArchivo = "cartaVacia.png";
// }

// // Asigna el fondo al div .info-personaje
// document.querySelector('.info-personaje').style.backgroundImage = `url('./../img/cartas/${nombreArchivo}')`;



























// Mostrar la información en la página
//document.getElementById('nombreUsuario').textContent = nombreUsuario; <<<<<<-----   OCULTADO POR EL MOMENTO
//! document.getElementById('nickPersonaje').textContent = nickPersonaje;
//! document.getElementById('origen').textContent = origen;
//! document.getElementById('genero').textContent = genero;
//! document.getElementById('clase').textContent = clase;
//! document.getElementById('inteligencia').textContent = inteligencia;
//! document.getElementById('fuerza').textContent = fuerza;
//! document.getElementById('agilidad').textContent = agilidad;




//!    //borrar el personaje de manera local.
//!document.getElementById('borrarPersonaje').addEventListener('click', function() {
 
//!    let confirmar = confirm("Se perderá toda la información de su personaje, ¿Estás seguro que desea continuar?");

//!     if (confirmar) {
    
//!         localStorage.removeItem('nombreUsuario');
//!         localStorage.removeItem('nickPersonaje');
//!         localStorage.removeItem('origen');
//!         localStorage.removeItem('genero');
//!         localStorage.removeItem('clase');
//!         localStorage.removeItem('inteligencia');
//!         localStorage.removeItem('fuerza');
//!         localStorage.removeItem('agilidad');
        
//!         document.querySelector('.info-personaje').style.backgroundImage = `url('./../img/cartas/emptyCard.png')`;

//!        location.reload();
//!     }
//! });




//!Descargar el personaje 
//! document.getElementById('descargarPersonaje').addEventListener('click', function() {
//!     // Creamos un objeto con la info del personaje guardada en el JS del index.
//!     let personaje = {
//!         nombreUsuario: localStorage.getItem('nombreUsuario'),
//!         nickPersonaje: localStorage.getItem('nombrePersonaje'),
//!         origen: localStorage.getItem('raza'),
//!         genero: localStorage.getItem('genero'),
//!         clase: localStorage.getItem('clase'),
//!         inteligencia: localStorage.getItem('totalInteligencia'),
//!         fuerza: localStorage.getItem('totalFuerza'),
//!         agilidad: localStorage.getItem('totalAgilidad')
//!     };






//!     //EL MEME PARA DESCARGAR EL PERSONAJE TANTO FILE PARA BACKUP COMO JPG. 
//! let zip = new JSZip();

//! // agregamos el archivo JSON al ZIP
//! let jsonStr = JSON.stringify(personaje);
//! zip.file(nickPersonaje + "-" + personaje.origen + "-" + personaje.clase + "-" + personaje.genero + ".json", jsonStr);

//! // usamos la cosa de html2canvas para crear una imagen de la página (Aunque solo elegimos el elemento de la carta)
//! let elementoCarta = document.querySelector('.info-personaje');

//! html2canvas(elementoCarta).then(function(canvas) {
//!     let imgData = canvas.toDataURL('image/png');
//!     let imgData64 = imgData.split(',')[1];

//!     // agregamos la imagen al ZIP
//!     zip.file(nickPersonaje + "-" + personaje.origen + "-" + personaje.clase + "-" + personaje.genero + ".png", imgData64, {base64: true});

//!     // Generar el archivo ZIP y descargarlo
//!     zip.generateAsync({type:"blob"}).then(function(content) {
//!         let link = document.createElement('a');
//!         link.download = nickPersonaje + ".zip";
//!         link.href = URL.createObjectURL(content);
//!         link.click();
//!     });
//! });
//! });