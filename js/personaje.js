// Recupera la información del almacenamiento local
let nombreUsuario = localStorage.getItem('nombreUsuario');
let nickPersonaje = localStorage.getItem('nickPersonaje');
let origen = localStorage.getItem('origen') || '';
let genero = localStorage.getItem('genero');
let clase = localStorage.getItem('clase') || '';
let inteligencia = localStorage.getItem('inteligencia');
let fuerza = localStorage.getItem('fuerza');
let agilidad = localStorage.getItem('agilidad');

// Mostrar la información en la página
//document.getElementById('nombreUsuario').textContent = nombreUsuario; <<<<<<-----   OCULTADO POR EL MOMENTO
document.getElementById('nickPersonaje').textContent = nickPersonaje;
document.getElementById('origen').textContent = origen;
document.getElementById('genero').textContent = genero;
document.getElementById('clase').textContent = clase;
document.getElementById('inteligencia').textContent = inteligencia;
document.getElementById('fuerza').textContent = fuerza;
document.getElementById('agilidad').textContent = agilidad;

    //borrar el personaje de manera local.
document.getElementById('borrarPersonaje').addEventListener('click', function() {
    
    let confirmar = confirm("Se perderá toda la información de su personaje, ¿Estás seguro que desea continuar?");

    if (confirmar) {
    
        localStorage.removeItem('nombreUsuario');
        localStorage.removeItem('nickPersonaje');
        localStorage.removeItem('origen');
        localStorage.removeItem('genero');
        localStorage.removeItem('clase');
        localStorage.removeItem('inteligencia');
        localStorage.removeItem('fuerza');
        localStorage.removeItem('agilidad');
        
        document.querySelector('.info-personaje').style.backgroundImage = `url('./../img/cartas/emptyCard.png')`;

        location.reload();
    }
});

document.getElementById('descargarPersonaje').addEventListener('click', function() {
    // Creamos un objeto con la info del personaje guardada en el JS del index.
    let personaje = {
        nombreUsuario: localStorage.getItem('nombreUsuario'),
        nickPersonaje: localStorage.getItem('nickPersonaje'),
        origen: localStorage.getItem('origen'),
        genero: localStorage.getItem('genero'),
        clase: localStorage.getItem('clase'),
        inteligencia: localStorage.getItem('inteligencia'),
        fuerza: localStorage.getItem('fuerza'),
        agilidad: localStorage.getItem('agilidad')
    };

//TODO EL MEME PARA DESCARGAR EL PERSONAJE TANTO FILE PARA BACKUP COMO JPG. 
    let zip = new JSZip();

    // agregamos el archivo JSON al ZIP
    let jsonStr = JSON.stringify(personaje);
    zip.file(nickPersonaje + "-" + personaje.origen + "-" + personaje.clase + "-" + personaje.genero + ".json", jsonStr);

    // usamos la cosa de html2canvas para crear una imagen de la página (Aunque solo elegimos el elemento de la carta)
    let elementoCarta = document.querySelector('.info-personaje');

    html2canvas(elementoCarta).then(function(canvas) {
        let imgData = canvas.toDataURL('image/png');
        let imgData64 = imgData.split(',')[1];

        // agregamos la imagen al ZIP
        zip.file(nickPersonaje + "-" + personaje.origen + "-" + personaje.clase + "-" + personaje.genero + ".png", imgData64, {base64: true});

        // Generar el archivo ZIP y descargarlo
        zip.generateAsync({type:"blob"}).then(function(content) {
            let link = document.createElement('a');
            link.download = nickPersonaje + ".zip";
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
                localStorage.setItem('nombreUsuario', personaje.nombreUsuario);
                localStorage.setItem('nickPersonaje', personaje.nickPersonaje);
                localStorage.setItem('origen', personaje.origen);
                localStorage.setItem('genero', personaje.genero);
                localStorage.setItem('clase', personaje.clase);
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
let razaArchivo = origen ? origen.toLowerCase() : '';
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