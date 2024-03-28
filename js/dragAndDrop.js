// Agregar el controlador de evento drop para manejar la caída de archivos
areaArrastre.addEventListener('dragover', function(e) {
    e.preventDefault(); // Prevenir el comportamiento predeterminado del navegador
});


// Agregar el controlador de evento drop para manejar la caída de archivos
areaArrastre.addEventListener('drop', function(e) {
    e.preventDefault();

    // Obtener el archivo soltado
    let archivo = e.dataTransfer.files[0];

    // Verificar si se soltó un archivo
    if (archivo && archivo.name.endsWith('.zip')) {
        // Crear un lector de archivos para leer el contenido del ZIP
        let lector = new FileReader();
        lector.onload = function(evento) {
            // Obtener los datos del ZIP
            let zipData = evento.target.result;

            // Descomprimir el ZIP usando la biblioteca JSZip
            JSZip.loadAsync(zipData).then(function(zip) {
                // Variables para almacenar los datos del personaje
                let nickPersonaje, origen, clase, genero, inteligencia, fuerza, agilidad;

                // Variables para almacenar los datos de la imagen del personaje
                let imgData = null;

                // Buscar cualquier archivo JSON dentro del ZIP
                zip.forEach((nombre, archivo) => {
                    if (nombre.endsWith('.json')) {
                        // Leer los datos del archivo JSON como texto
                        archivo.async('text').then(function(text) {
                            // Parsear el contenido del archivo JSON
                            let personaje = JSON.parse(text);

                            // Asignar los datos del personaje a las variables correspondientes
                            nickPersonaje = personaje.nickPersonaje;
                            origen = personaje.origen;
                            clase = personaje.clase;
                            genero = personaje.genero;
                            inteligencia = personaje.inteligencia;
                            fuerza = personaje.fuerza;
                            agilidad = personaje.agilidad;

                            // Guardar la información del personaje en el almacenamiento local o usarla según sea necesario
                            document.getElementById('nickPersonaje').textContent = nickPersonaje;
                            document.getElementById('origen').textContent = origen;
                            document.getElementById('clase').textContent = clase;
                            document.getElementById('genero').textContent = genero;
                            document.getElementById('inteligencia').textContent = inteligencia;
                            document.getElementById('fuerza').textContent = fuerza;
                            document.getElementById('agilidad').textContent = agilidad;

                            // Aquí puedes realizar otras acciones con los datos del personaje, como mostrarlos en la página
                            console.log("Nombre del personaje:", nickPersonaje);
                            console.log("Raza:", origen);
                            console.log("Clase:", clase);
                            console.log("Género:", genero);
                            console.log("Total de inteligencia:", inteligencia);
                            console.log("Total de fuerza:", fuerza);
                            console.log("Total de agilidad:", agilidad);
                        });
                    } else if (nombre.endsWith('.png')) {
                        // Almacenar el archivo de imagen
                        imgData = archivo;
                    }
                });

                // Verificar si se encontró el archivo de imagen PNG
                if (imgData) {
                    // Leer los datos de la imagen como un Blob
                    imgData.async('blob').then(function(blob) {
                        // Crear una URL del objeto Blob para la imagen
                        let imgUrl = URL.createObjectURL(blob);

                        // Mostrar la imagen como fondo del elemento HTML con la clase info-personaje
                        let infoPersonajeElement = document.querySelector('.info-personaje');
                        infoPersonajeElement.style.backgroundImage = `url(${imgUrl})`;
                    });
                } else {
                    console.error('No se encontró la imagen en el ZIP.');
                }
            });
        };

        // Leer el contenido del archivo ZIP como un ArrayBuffer
        lector.readAsArrayBuffer(archivo);
    } else {
        console.error('El archivo soltado no es un archivo ZIP.');
    }
});