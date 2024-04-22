areaArrastre.addEventListener("dragover", (e) => {
    e.preventDefault();
});

areaArrastre.addEventListener("drop", (e) => {
    e.preventDefault();

    const archivo = e.dataTransfer.files[0];

    if (archivo && archivo.name.endsWith(".zip")) {
        const lector = new FileReader();
        lector.onload = (evento) => {
            const zipData = evento.target.result;

            JSZip.loadAsync(zipData).then((zip) => {
                let nickPersonaje, origen, clase, genero, inteligencia, fuerza, agilidad;

                let imgData = null;

                zip.forEach((nombre, archivo) => {
                    if (nombre.endsWith(".json")) {
                        archivo.async("text").then((text) => {
                            const personaje = JSON.parse(text);

                            ({ nickPersonaje, origen, clase, genero, inteligencia, fuerza, agilidad } = personaje);

                            document.getElementById("nickPersonaje").textContent = nickPersonaje;
                            document.getElementById("origen").textContent = origen;
                            document.getElementById("clase").textContent = clase;
                            document.getElementById("genero").textContent = genero;
                            document.getElementById("inteligencia").textContent = inteligencia;
                            document.getElementById("fuerza").textContent = fuerza;
                            document.getElementById("agilidad").textContent = agilidad;
                        });
                    } else if (nombre.endsWith(".png")) {
                        imgData = archivo;
                    }
                });

                if (imgData) {
                    imgData.async("blob").then((blob) => {
                        const imgUrl = URL.createObjectURL(blob);

                        const infoPersonajeElement = document.querySelector(".info-personaje");
                        infoPersonajeElement.style.backgroundImage = `url(${imgUrl})`;
                    });
                } else {
                    console.error("No se encontró la imagen en el ZIP.");
                }
            });
        };

        lector.readAsArrayBuffer(archivo);
    } else {
        console.error("El archivo soltado no es un archivo ZIP.");
    }
});