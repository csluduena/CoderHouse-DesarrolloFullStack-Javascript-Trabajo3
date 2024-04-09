//!recuperamos la info en LocalStorage
let nombrePersonaje = localStorage.getItem("nombrePersonaje");
let raza = localStorage.getItem("raza");
let clase = localStorage.getItem("clase");
let genero = localStorage.getItem("genero");
let inteligencia = localStorage.getItem("totalInteligencia");
let fuerza = localStorage.getItem("totalFuerza");
let agilidad = localStorage.getItem("totalAgilidad");

console.log("Nombre del personaje:", nombrePersonaje);
console.log("Raza:", raza);
console.log("Clase:", clase);
console.log("Género:", genero);
console.log("Total de inteligencia:", inteligencia);
console.log("Total de fuerza:", fuerza);
console.log("Total de agilidad:", agilidad);

//!Mostramos la info en la página
document.getElementById("nickPersonaje").textContent = nombrePersonaje;
document.getElementById("origen").textContent = raza;
document.getElementById("genero").textContent = genero;
document.getElementById("clase").textContent = clase;
document.getElementById("inteligencia").textContent = inteligencia;
document.getElementById("fuerza").textContent = fuerza;
document.getElementById("agilidad").textContent = agilidad;

//!Alerta borrar personaje
let btnBorrar = document.getElementById("borrarPersonaje");
let modal = document.getElementById("myModal");
let btnCancelar = document.getElementById("cancelarBorrar");

btnBorrar.onclick = function () {
    modal.style.display = "block";
};

btnCancelar.onclick = function () {
    modal.style.display = "none";
};

//!Cerrar ventana al hacer clic fuera
window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
};

let btnConfirmar = document.getElementById("confirmarBorrar");

btnConfirmar.onclick = function () {
    localStorage.removeItem("nombrePersonaje");
    localStorage.removeItem("raza");
    localStorage.removeItem("clase");
    localStorage.removeItem("genero");
    localStorage.removeItem("totalInteligencia");
    localStorage.removeItem("totalFuerza");
    localStorage.removeItem("totalAgilidad");

    document.querySelector(
        ".info-personaje"
    ).style.backgroundImage = `url('./../img/cartas/emptyCard.png')`;

    modal.style.display = "none";

    location.reload();
};

//!Descargar el personaje
document
    .getElementById("descargarPersonaje")
    .addEventListener("click", function () {
        let personaje = {
            nickPersonaje: nombrePersonaje,
            origen: raza,
            clase: clase,
            genero: genero,
            inteligencia: inteligencia,
            fuerza: fuerza,
            agilidad: agilidad,
        };

        //TODO CARGA DE PJ DRAG AND DROP
        let zip = new JSZip();

        //? agregamos el archivo JSON al ZIP
        let jsonStr = JSON.stringify(personaje);
        zip.file(
            personaje.nickPersonaje +
            "-" +
            personaje.origen +
            "-" +
            personaje.clase +
            "-" +
            personaje.genero +
            ".json",
            jsonStr
        );

        //? Usamos la cosa de html2canvas para crear una imagen de la página (Aunque solo elegimos el elemento de la carta)
        let elementoCarta = document.querySelector(".info-personaje");

        html2canvas(elementoCarta).then(function (canvas) {
            let imgData = canvas.toDataURL("image/png");
            let imgData64 = imgData.split(",")[1];

            //? agregamos la imagen al ZIP
            zip.file(
                personaje.nickPersonaje +
                "-" +
                personaje.origen +
                "-" +
                personaje.clase +
                "-" +
                personaje.genero +
                ".png",
                imgData64,
                { base64: true }
            );

            //?  Generar el archivo ZIP y descargarlo
            zip.generateAsync({ type: "blob" }).then(function (content) {
                let link = document.createElement("a");
                link.download =
                    personaje.nickPersonaje +
                    "-" +
                    personaje.origen +
                    "-" +
                    personaje.clase +
                    "-" +
                    personaje.genero +
                    ".zip"; //CFG nombre del archivo
                link.href = URL.createObjectURL(content);
                link.click();
            });
        });
    });

//! Carga de PJ DRAG AND DROP
document
    .getElementById("cargarPersonaje")
    .addEventListener("click", function () {
        let input = document.createElement("input");
        input.type = "file";
        input.onchange = (e) => {
            let file = e.target.files[0];
            if (file) {
                let reader = new FileReader();
                reader.onload = function (e) {
                    let personaje = JSON.parse(e.target.result);

                    localStorage.setItem("nombrePersonaje", personaje.nickPersonaje);
                    localStorage.setItem("raza", personaje.origen);
                    localStorage.setItem("clase", personaje.clase);
                    localStorage.setItem("genero", personaje.genero);
                    localStorage.setItem("totalInteligencia", personaje.inteligencia);
                    localStorage.setItem("totalFuerza", personaje.fuerza);
                    localStorage.setItem("totalAgilidad", personaje.agilidad);

                    location.reload();
                };
                reader.readAsText(file);
            }
        };
        input.click();
    });

let razaArchivo = raza ? raza.toLowerCase() : "";
let claseArchivo = clase ? clase.replace(" ", " ") : "";
let generoArchivo = genero ? (genero === "Hombre" ? "Hombre" : "Mujer") : "";

let nombreArchivo;
if (razaArchivo && claseArchivo && generoArchivo) {
    nombreArchivo = `${razaArchivo}_${claseArchivo}_${generoArchivo}.png`;
} else {
    nombreArchivo = "cartaVacia.png";
}

//!Asignación de carta acorde al PJ.
document.querySelector(
    ".info-personaje"
).style.backgroundImage = `url('./../img/cartas/${nombreArchivo}')`;
