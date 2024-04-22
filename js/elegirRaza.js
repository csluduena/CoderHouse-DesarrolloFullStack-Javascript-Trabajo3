// TODO ESTILOS BOTON PREGUNTA TRES (ELEGIR RAZA)
document.addEventListener("DOMContentLoaded", () => {
    const botonElegirRaza = document.querySelector(".botonElegirRaza");
    const elegirRazas = document.getElementById("elegirRazas");

    elegirRazas.style.display = "none";
    botonElegirRaza.addEventListener("click", () => {
        // Estilos:
        elegirRazas.style.display = "flex";
    });
});

document.addEventListener("DOMContentLoaded", () => {
    const razas = document.querySelectorAll(".raza-option");

    razas.forEach((raza) => {
        raza.addEventListener("click", () => {
            const razaSeleccionada = raza.id.replace("Option", "");
            const clases = document.querySelectorAll(".clase-pick");

            clases.forEach((clase) => {
                clase.style.display = "none";
            });

            document.getElementById(razaSeleccionada + "ClasesPick").style.display = "block";
        });
    });
});

const botonElegirRaza = document.querySelector(".botonElegirRaza");

document.addEventListener("DOMContentLoaded", () => {
    botonElegirRaza.addEventListener("click", () => {
        botonElegirRaza.style.display = "none";
    });
});

//! ShadowBox para eleccion de raza
document.addEventListener("DOMContentLoaded", () => {
    const opciones = document.querySelectorAll(".raza-option");

    opciones.forEach((opcion) => {
        opcion.addEventListener("click", (event) => {
            opciones.forEach((opt) => {
                opt.style.boxShadow = "";
            });

            event.currentTarget.style.boxShadow = "0 0 7px 5px #7f0afb";
        });
    });
});

//! ShadowBox para eleccion de Clase
const opcionesClases = document.querySelectorAll(".clasesTotal");

opcionesClases.forEach((opcion) => {
    opcion.addEventListener("click", (event) => {
        opcionesClases.forEach((opt) => {
            opt.style.boxShadow = "";
        });

        event.currentTarget.style.boxShadow = "0 0 7px 5px #7f0afb";
    });
});

//! Elección de raza y clase.
//! D E C L A R A C I O N   R A Z A   C L A S E. (seleccion.raza o seleccion.clase)
const seleccion = {
    raza: "",
    clase: "",
};

function mostrarBotonContinuar() {
    document.getElementById("continuarBtn").style.display = "block";
}

//! Razas
function seleccionarRaza(event) {
    const razaNombreElemento = event.currentTarget.querySelector(".razaNombre");

    if (razaNombreElemento) {
        const razaSeleccionada = razaNombreElemento.textContent.trim();
        seleccion.raza = razaSeleccionada;
    }
    // console.log("Raza seleccionada:", seleccion.raza);
}

const razas = document.querySelectorAll(".raza-option");
razas.forEach((raza) => {
    raza.addEventListener("click", seleccionarRaza);
});

//! Clases
//! Manejar la selección de clase y Consoleando las elecciones.
document.addEventListener("DOMContentLoaded", () => {
    const clases = document.querySelectorAll(".clase-pick .clasesTotal");

    clases.forEach((clase) => {
        clase.addEventListener("click", () => {
            const claseSeleccionada = clase.getAttribute("id");
            const nombreClase = clase.querySelector(".claseNombre").textContent;

            // console.log("Clase seleccionada:", nombreClase);

            seleccion.clase = nombreClase;

            if (seleccion.raza !== "" && seleccion.clase !== "") {
                mostrarBotonContinuar();
            }
        });
    });
});

//! Click Continuar y TODO ELECCIÓN DE GENERO.
document.getElementById("continuarBtn").addEventListener("click", () => {
    if (seleccion.raza !== "" && seleccion.clase !== "") {
        document.getElementById("elegirRazas").style.display = "none";
        document.getElementById("clases").style.display = "none";
        document.getElementById("continuarBtn").style.display = "none";

        const opcionGenero = document.getElementById("generosOpcion");
        const textogenerin = document.getElementById("textGCfg");
        const tituloGenero = document.getElementById("textoGeneroTitulo");

        opcionGenero.style.display = "flex";
        textogenerin.style.display = "flex";
        tituloGenero.style.display = "block";
    } else {
        // console.log("Por favor, selecciona género antes de continuar.");
    }
});

//! ShadowBox para eleccion de genero
let seleccionGenero = "";

const hombre = document.getElementById("hombre");
const mujer = document.getElementById("mujer");
const continuarBtn = document.getElementById("continuarBtn2");

function activarContinuar() {
    continuarBtn.style.display = seleccionGenero !== "" ? "block" : "none";
}

//! CAMBIO DE COLOR PARA EL TEXTO DE HOMBRE
hombre.addEventListener("click", () => {
    document.querySelector(".hLeft").style.color = "#0015ff";

    document.querySelector(".mRight").style.color = "white";
    seleccionGenero = "Hombre";
    // console.log("Género seleccionado:", seleccionGenero);
    activarContinuar();
});

//! CAMBIO DE COLOR PARA EL TEXTO DE MUJER
mujer.addEventListener("click", () => {
    document.querySelector(".mRight").style.color = "#d500ff";
    document.querySelector(".hLeft").style.color = "white";
    seleccionGenero = "Mujer";
    // console.log("Género seleccionado:", seleccionGenero);
    activarContinuar();
});

//! Declarar Atributos
// Definir los atributos base para cada clase
const atributosBase = {
    Mago: [8, 1, 5], // 🧙‍♂️
    Druida: [6, 2, 6], // 🌿
    Bardo: [10, 1, 7], // 🎵
    Guerrero: [5, 15, 5], // ⚔️
    Herrero: [3, 18, 3], // 🔨
    Paladin: [8, 12, 5], // 🛡️
    Caballero: [2, 20, 4], // 🏇
    Picaro: [6, 7, 12], // 🗡️
    Clerigo: [8, 10, 5], // ✨
    Berserker: [1, 25, 3], // 🪓
    Chaman: [10, 8, 5], // 🔮
    Cazador: [8, 10, 10], // 🏹
};

//! Obtener ATRIBUTOS
function obtenerAtributosBase() {
    const razaSeleccionada = seleccion.raza;
    const claseSeleccionada = seleccion.clase;

    const atributos = atributosBase[claseSeleccionada];

    // console.log("Atributos base para la clase", claseSeleccionada + ":", atributos);
}

//! CONTINUAR A ATRIBUTOS
document.getElementById("continuarBtn2").addEventListener("click", () => {
    if (seleccion.raza !== "" && seleccion.clase !== "") {
        document.querySelector(".contentGen").style.display = "none";

        const atributosTab = document.getElementById("tabAtri");
        const continuarBtn2 = document.getElementById("continuarBtn2");
        const activarResumenParcial = document.getElementById("contenedorParcialId");

        contenedorParcialId.style.display = "flex";
        atributosTab.style.display = "block";
        continuarBtn2.style.display = "none";
    }
});

//! Almacenar Atributos en localStorage
function almacenarAtributosBase() {
    localStorage.setItem("atributosBase", JSON.stringify(atributosBase));
}

//! Obtener Atributos desde localStorage
function obtenerAtributosBaseDesdeLocalStorage() {
    const atributosBaseDesdeLocalStorage = localStorage.getItem("atributosBase");
    if (atributosBaseDesdeLocalStorage) {
        return JSON.parse(atributosBaseDesdeLocalStorage);
    } else {
        // console.log("No se encontraron atributos base en localStorage.");
        return null;
    }
}

almacenarAtributosBase();

const atributosBaseObtenidos = obtenerAtributosBaseDesdeLocalStorage();
// console.log("Atributos base obtenidos desde localStorage:", atributosBaseObtenidos);

