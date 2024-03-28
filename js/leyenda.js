// Recuperar la información de LocalStorage
let nombrePersonaje = localStorage.getItem('nombrePersonaje');
let raza = localStorage.getItem('raza');
let clase = localStorage.getItem('clase');
let genero = localStorage.getItem('genero');
let inteligencia = localStorage.getItem('totalInteligencia');
let fuerza = localStorage.getItem('totalFuerza');
let agilidad = localStorage.getItem('totalAgilidad');

// Imprimir la información recuperada
console.log("Nombre del personaje:", nombrePersonaje);
console.log("Raza:", raza);
console.log("Clase:", clase);
console.log("Género:", genero);
console.log("Total de inteligencia:", inteligencia);
console.log("Total de fuerza:", fuerza);
console.log("Total de agilidad:", agilidad);

// Mostrar la información en la página
document.getElementById("nickPersonaje").textContent =  nombrePersonaje
document.getElementById("origen").textContent =  raza;
document.getElementById("genero").textContent = genero;
document.getElementById("clase").textContent = clase;
document.getElementById("inteligencia").textContent = inteligencia;
document.getElementById("fuerza").textContent = fuerza;
document.getElementById("agilidad").textContent = agilidad;

// Alerta borrar personaje
// Obtener el botón que abre el modal
let btnBorrar = document.getElementById("borrarPersonaje");
let modal = document.getElementById("myModal");
let btnCancelar = document.getElementById("cancelarBorrar");

// Mostrar
btnBorrar.onclick = function() {
    modal.style.display = "block";
}

// Cerrar al cancelar
btnCancelar.onclick = function() {
    modal.style.display = "none";
}

// Cerrar el modal al hacer clic fuera de él
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

// Obtener el botón de confirmar dentro del modal
let btnConfirmar = document.getElementById("confirmarBorrar");

// Borrar el personaje cuando se confirma
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

// Descargar el personaje
document.getElementById('descargarPersonaje').addEventListener('click', function() {
    let personaje = {
        nickPersonaje: nombrePersonaje,
        origen: raza,
        clase: clase,
        genero: genero,
        inteligencia: inteligencia,
        fuerza: fuerza,
        agilidad: agilidad
    };

    // Código para descargar el personaje (no se muestra aquí para mayor claridad)
});

// Descargar el personaje
document.getElementById('descargarPersonaje').addEventListener('click', function() {
    
    let personaje = {
        nickPersonaje: nombrePersonaje,
        origen: raza,
        clase: clase,
        genero: genero,
        inteligencia: inteligencia,
        fuerza: fuerza,
        agilidad: agilidad
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


// Carga de PJ
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
                localStorage.setItem('nombrePersonaje', personaje.nickPersonaje);
                localStorage.setItem('raza', personaje.origen);
                localStorage.setItem('clase', personaje.clase);
                localStorage.setItem('genero', personaje.genero);
                localStorage.setItem('totalInteligencia', personaje.inteligencia);
                localStorage.setItem('totalFuerza', personaje.fuerza);
                localStorage.setItem('totalAgilidad', personaje.agilidad);

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