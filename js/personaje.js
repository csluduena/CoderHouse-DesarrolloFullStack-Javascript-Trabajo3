// //!Aplicamos Desestructuración para recuperar los datos del personaje por medio de LocalStorage al cambiar de página de la web.

// const {
//     nombreUsuario,
//     nickPersonaje,
//     origen,
//     genero,
//     clase,
//     inteligencia,
//     fuerza,
//     agilidad
//   } = localStorage;
  
//   // Usamos el operador lógico OR (||) 
//   const {
//     nombreUsuario: nombreUsuarioValor,
//     nickPersonaje: nickPersonajeValor,
//     origen: origenValor = "",
//     genero: generoValor,
//     clase: claseValor = "",
//     inteligencia: inteligenciaValor,
//     fuerza: fuerzaValor,
//     agilidad: agilidadValor
//   } = localStorage;
  
//   // Actualizamos los valores en el almacenamiento local
//   localStorage.setItem("nombrePersonaje", nickPersonajeValor);
//   localStorage.setItem("razaSeleccionada", seleccion.raza);
//   localStorage.setItem("claseSeleccionada", seleccion.clase);
//   localStorage.setItem("generoSeleccionado", seleccionGenero);
//   localStorage.setItem("totalInteligencia", inteligenciaValor);
//   localStorage.setItem("totalFuerza", fuerzaValor);
//   localStorage.setItem("totalAgilidad", agilidadValor);
  
//   // Actualizamos los elementos en el HTML
//   document.getElementById("nickPersonaje").textContent = nickPersonajeValor;
//   document.getElementById("origen").textContent = origenValor;
//   document.getElementById("genero").textContent = generoValor;
//   document.getElementById("clase").textContent = claseValor;
//   document.getElementById("inteligencia").textContent = inteligenciaValor;
//   document.getElementById("fuerza").textContent = fuerzaValor;
//   document.getElementById("agilidad").textContent = agilidadValor;
  
//   //!Deletear el personaje de manera local.
//   document.getElementById("borrarPersonaje").addEventListener("click", function () {
//     let confirmar = confirm(
//       "Se perderá toda la información de su personaje, ¿Estás seguro que desea continuar?"
//     );
  
//     if (confirmar) {
//       localStorage.removeItem("nombreUsuario");
//       localStorage.removeItem("nickPersonaje");
//       localStorage.removeItem("origen");
//       localStorage.removeItem("genero");
//       localStorage.removeItem("clase");
//       localStorage.removeItem("inteligencia");
//       localStorage.removeItem("fuerza");
//       localStorage.removeItem("agilidad");
  
//       document.querySelector(
//         ".info-personaje"
//       ).style.backgroundImage = `url('./../img/cartas/emptyCard.png')`;
  
//       location.reload();
//     }
//   });
  
//   document.getElementById("descargarPersonaje").addEventListener("click", function () {
//     let personaje = {
//       nombreUsuario,
//       nickPersonaje,
//       origen,
//       genero,
//       clase,
//       inteligencia,
//       fuerza,
//       agilidad
//     };
  
//     // Aquí puedes utilizar 'personaje' para realizar alguna acción, como descargarlo
//   });

//     //TODO EL MEME PARA DESCARGAR EL PERSONAJE TANTO FILE PARA BACKUP COMO JPG DE MANERA CONVENCIONAL
//     let zip = new JSZip();

//     // agregamos el archivo JSON al ZIP
//     let jsonStr = JSON.stringify(personaje);
//     zip.file(
//       nickPersonaje +
//         "-" +
//         personaje.origen +
//         "-" +
//         personaje.clase +
//         "-" +
//         personaje.genero +
//         ".json",
//       jsonStr
//     );

//     let elementoCarta = document.querySelector(".info-personaje");

//     html2canvas(elementoCarta).then(function (canvas) {
//       let imgData = canvas.toDataURL("image/png");
//       let imgData64 = imgData.split(",")[1];

//       // agregamos la imagen al ZIP
//       zip.file(
//         nickPersonaje +
//           "-" +
//           personaje.origen +
//           "-" +
//           personaje.clase +
//           "-" +
//           personaje.genero +
//           ".png",
//         imgData64,
//         { base64: true }
//       );

//     // Generar el archivo ZIP y descargarlo
//     zip.generateAsync({ type: "blob" }).then(function (content) {
//     let link = document.createElement("a");
//     link.download = nickPersonaje + ".zip";
//     link.href = URL.createObjectURL(content);
//     link.click();
//     });
// });

// //!Carga de PJ CONVENCIONAL
// document
//   .getElementById("cargarPersonaje")
//   .addEventListener("click", function () {
//     let input = document.createElement("input");
//     input.type = "file";
//     input.onchange = (e) => {
//       let file = e.target.files[0];
//       if (file) {
//         let reader = new FileReader();
//         reader.onload = function (e) {
//           let personaje = JSON.parse(e.target.result);

//           localStorage.setItem("nombreUsuario", personaje.nombreUsuario);
//           localStorage.setItem("nickPersonaje", personaje.nickPersonaje);
//           localStorage.setItem("origen", personaje.origen);
//           localStorage.setItem("genero", personaje.genero);
//           localStorage.setItem("clase", personaje.clase);
//           localStorage.setItem("inteligencia", personaje.inteligencia);
//           localStorage.setItem("fuerza", personaje.fuerza);
//           localStorage.setItem("agilidad", personaje.agilidad);

//           location.reload();
//         };
//         reader.readAsText(file);
//       }
//     };
//     input.click();
//   });

// //!Convierte la raza, clase y género a formato de nombre de archivo
// let razaArchivo = origen ? origen.toLowerCase() : "";
// let claseArchivo = clase ? clase.replace(" ", " ") : "";
// let generoArchivo = genero ? (genero === "Hombre" ? "Hombre" : "Mujer") : "";

// //!Generamos el nombre del archivo
// let nombreArchivo;
// if (razaArchivo && claseArchivo && generoArchivo) {
//   nombreArchivo = `${razaArchivo}_${claseArchivo}_${generoArchivo}.png`;
// } else {
//   nombreArchivo = "cartaVacia.png";
// }

// //!Asigna el fondo al div .info-personaje
// document.querySelector(
//   ".info-personaje"
// ).style.backgroundImage = `url('./../img/cartas/${nombreArchivo}')`;


//!Aplicamos Desestructuración para recuperar los datos del personaje por medio de LocalStorage al cambiar de página de la web.
const {
    nombreUsuario,
    nickPersonaje,
    origen,
    genero,
    clase,
    inteligencia,
    fuerza,
    agilidad
  } = localStorage;
  
  // Usamos el operador lógico OR (||) para asignar valores por defecto en caso de que no haya datos en el LocalStorage
  const {
    nombreUsuario: nombreUsuarioValor,
    nickPersonaje: nickPersonajeValor,
    origen: origenValor = "",
    genero: generoValor,
    clase: claseValor = "",
    inteligencia: inteligenciaValor,
    fuerza: fuerzaValor,
    agilidad: agilidadValor
  } = localStorage;
  
  // Eliminamos la asignación condicional de los atributos base y las asignaciones de valores en el LocalStorage
  // Utilizamos la desestructuración para obtener directamente los valores de selección de raza y clase
  const { raza, clase: claseSeleccionada } = seleccion;
  
  //TODO EL MEME PARA DESCARGAR EL PERSONAJE TANTO FILE PARA BACKUP COMO JPG DE MANERA CONVENCIONAL
  let zip = new JSZip();
  
  // Agregamos el archivo JSON al ZIP
  zip.file(
    `${nickPersonaje}-${origen}-${clase}-${genero}.json`,
    JSON.stringify({ nombreUsuario, nickPersonaje, origen, genero, clase, inteligencia, fuerza, agilidad })
  );
  
  let elementoCarta = document.querySelector(".info-personaje");
  
  html2canvas(elementoCarta).then(function (canvas) {
    let imgData = canvas.toDataURL("image/png");
    let imgData64 = imgData.split(",")[1];
  
    // Agregamos la imagen al ZIP
    zip.file(
      `${nickPersonaje}-${origen}-${clase}-${genero}.png`,
      imgData64,
      { base64: true }
    );
  
    // Generar el archivo ZIP y descargarlo
    zip.generateAsync({ type: "blob" }).then(function (content) {
      let link = document.createElement("a");
      link.download = `${nickPersonaje}.zip`;
      link.href = URL.createObjectURL(content);
      link.click();
    });
  });
  
  //!Carga de PJ CONVENCIONAL
  document.getElementById("cargarPersonaje").addEventListener("click", function () {
    let input = document.createElement("input");
    input.type = "file";
    input.onchange = (e) => {
      let file = e.target.files[0];
      if (file) {
        let reader = new FileReader();
        reader.onload = function (e) {
          let personaje = JSON.parse(e.target.result);
  
          // Utilizamos la desestructuración para asignar los valores del personaje cargado del archivo
          const { nombreUsuario, nickPersonaje, origen, genero, clase, inteligencia, fuerza, agilidad } = personaje;
  
          // Almacenamos los valores en el LocalStorage
          localStorage.setItem("nombreUsuario", nombreUsuario);
          localStorage.setItem("nickPersonaje", nickPersonaje);
          localStorage.setItem("origen", origen);
          localStorage.setItem("genero", genero);
          localStorage.setItem("clase", clase);
          localStorage.setItem("inteligencia", inteligencia);
          localStorage.setItem("fuerza", fuerza);
          localStorage.setItem("agilidad", agilidad);
  
          location.reload();
        };
        reader.readAsText(file);
      }
    };
    input.click();
  });
  
  //!Convierte la raza, clase y género a formato de nombre de archivo
  const razaArchivo = origen ? origen.toLowerCase() : "";
  const claseArchivo = clase ? clase.replace(" ", " ") : "";
  const generoArchivo = genero ? (genero === "Hombre" ? "Hombre" : "Mujer") : "";
  
  //!Generamos el nombre del archivo
  const nombreArchivo = razaArchivo && claseArchivo && generoArchivo ? `${razaArchivo}_${claseArchivo}_${generoArchivo}.png` : "cartaVacia.png";
  
  // Asignamos el fondo al div .info-personaje
  document.querySelector(".info-personaje").style.backgroundImage = `url('./../img/cartas/${nombreArchivo}')`;
  