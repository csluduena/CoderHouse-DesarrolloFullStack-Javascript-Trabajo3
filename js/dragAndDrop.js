areaArrastre.addEventListener("dragover", function (e) {
  e.preventDefault();
});

areaArrastre.addEventListener("drop", function (e) {
  e.preventDefault();

  let archivo = e.dataTransfer.files[0];

  if (archivo && archivo.name.endsWith(".zip")) {
    let lector = new FileReader();
    lector.onload = function (evento) {
      let zipData = evento.target.result;

      JSZip.loadAsync(zipData).then(function (zip) {
        let nickPersonaje,
          origen,
          clase,
          genero,
          inteligencia,
          fuerza,
          agilidad;

        let imgData = null;

        zip.forEach((nombre, archivo) => {
          if (nombre.endsWith(".json")) {
            archivo.async("text").then(function (text) {
              let personaje = JSON.parse(text);

              nickPersonaje = personaje.nickPersonaje;
              origen = personaje.origen;
              clase = personaje.clase;
              genero = personaje.genero;
              inteligencia = personaje.inteligencia;
              fuerza = personaje.fuerza;
              agilidad = personaje.agilidad;

              document.getElementById("nickPersonaje").textContent =
                nickPersonaje;
              document.getElementById("origen").textContent = origen;
              document.getElementById("clase").textContent = clase;
              document.getElementById("genero").textContent = genero;
              document.getElementById("inteligencia").textContent =
                inteligencia;
              document.getElementById("fuerza").textContent = fuerza;
              document.getElementById("agilidad").textContent = agilidad;

              console.log("Nombre del personaje:", nickPersonaje);
              console.log("Raza:", origen);
              console.log("Clase:", clase);
              console.log("Género:", genero);
              console.log("Total de inteligencia:", inteligencia);
              console.log("Total de fuerza:", fuerza);
              console.log("Total de agilidad:", agilidad);
            });
          } else if (nombre.endsWith(".png")) {
            imgData = archivo;
          }
        });

        if (imgData) {
          imgData.async("blob").then(function (blob) {
            let imgUrl = URL.createObjectURL(blob);

            let infoPersonajeElement =
              document.querySelector(".info-personaje");
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