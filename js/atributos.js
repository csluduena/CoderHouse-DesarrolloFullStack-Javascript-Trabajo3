const nickElegido = document.getElementById("eleccionNick");
const razaElegida = document.getElementById("eleccionRaza");
const claseElegida = document.getElementById("eleccionClase");
const generoElegido = document.getElementById("eleccionGenero");
const inteligenciaBase = document.getElementById("inteligenciaBase");
const fuerzaBase = document.getElementById("fuerzaBase");
const agilidadBase = document.getElementById("agilidadBase");

//!Mostrar los datos del personaje elegido
function mostrarDatosPersonaje() {
    const nickElegido = document.getElementById("eleccionNick");
    const razaElegida = document.getElementById("eleccionRaza");
    const claseElegida = document.getElementById("eleccionClase");
    const generoElegido = document.getElementById("eleccionGenero");
    const inteligenciaBase = document.getElementById("inteligenciaBase");
    const fuerzaBase = document.getElementById("fuerzaBase");
    const agilidadBase = document.getElementById("agilidadBase");

    //!Obtenemos la info acorde a lo ingresado por el user
    nickElegido.innerHTML =
        "Nick: <span class='valor' style='color: white'>" +
        seleccion.nick +
        "</span>";
    razaElegida.innerHTML =
        "Raza: <span class='valor' style='color: white'>" +
        seleccion.raza +
        "</span>";
    claseElegida.innerHTML =
        "Clase: <span class='valor' style='color: white'>" +
        seleccion.clase +
        "</span>";
    generoElegido.innerHTML =
        "Género: <span class='valor' style='color: white'>" +
        seleccionGenero +
        "</span>";

    const atributosClase = atributosBase[seleccion.clase];

    inteligenciaBase.innerHTML =
        "Inteligencia: <span class='valor' style='color: white'>" +
        atributosClase[0] +
        "</span>";
    fuerzaBase.innerHTML =
        "Fuerza: <span class='valor' style='color: white'>" +
        atributosClase[1] +
        "</span>";
    agilidadBase.innerHTML =
        "Agilidad: <span class='valor' style='color: white'>" +
        atributosClase[2] +
        "</span>";
}

//! En la sección de "Género", al "Continuar" mostramos los datos del personaje
document.getElementById("continuarBtn2").addEventListener("click", function () {
    if (seleccion.raza !== "" && seleccion.clase !== "") {
        document.querySelector(".contentGen").style.display = "none";

        const atributosTab = document.getElementById("tabAtri");
        const continuarBtn2 = document.getElementById("continuarBtn2");
        const textoDone = document.getElementById("textDoneBase");
        const botoncito = document.getElementById("buttonSend3");

        atributosTab.style.display = "block";
        continuarBtn2.style.display = "none";
        textoDone.style.display = "flex";
        botoncito.style.display = "block";

        obtenerAtributosBase();

        mostrarDatosPersonaje();
    }
});
