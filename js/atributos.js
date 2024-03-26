// Función para mostrar los datos del personaje elegido
function mostrarDatosPersonaje() {
    // Obtener los elementos HTML donde se mostrarán los datos del personaje y sus atributos
    const nickElegido = document.getElementById("eleccionNick");
    const razaElegida = document.getElementById("eleccionRaza");
    const claseElegida = document.getElementById("eleccionClase");
    const generoElegido = document.getElementById("eleccionGenero");
    const inteligenciaBase = document.getElementById("inteligenciaBase");
    const fuerzaBase = document.getElementById("fuerzaBase");
    const agilidadBase = document.getElementById("agilidadBase");

    // Actualizar el contenido de los elementos con los datos elegidos por el usuario
    nickElegido.textContent = "Nick: " + seleccion.nick;
    razaElegida.textContent = "Raza: " + seleccion.raza;
    claseElegida.textContent = "Clase: " + seleccion.clase;
    generoElegido.textContent = "Género: " + seleccionGenero;

    // Obtener los atributos de la clase seleccionada por el usuario
    const atributosClase = atributosBase[seleccion.clase];

    // Mostrar los atributos de la clase seleccionada
    inteligenciaBase.textContent = "Inteligencia: " + atributosClase[0];
    fuerzaBase.textContent = "Fuerza: " + atributosClase[1];
    agilidadBase.textContent = "Agilidad: " + atributosClase[2];
}

// Llama a la función para mostrar los datos del personaje al hacer clic en el botón "Continuar" en la sección de género
document.getElementById("continuarBtn2").addEventListener("click", function() {
    if (seleccion.raza !== "" && seleccion.clase !== "") {
        // Ocultar la sección de género
        document.querySelector(".contentGen").style.display = "none";

        // Mostrar la siguiente sección (atributos)
        const atributosTab = document.getElementById("tabAtri");
        const continuarBtn2 = document.getElementById("continuarBtn2");
        atributosTab.style.display = "block";
        continuarBtn2.style.display = "none";

        // Obtener y mostrar los atributos base
        obtenerAtributosBase();

        // Llamar a la función para mostrar los datos del personaje
        mostrarDatosPersonaje();
    }
});
