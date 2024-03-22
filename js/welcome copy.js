document.getElementById('start-button').addEventListener('click', function() {
// Muestra todo el contenido
document.getElementById('content').style.display = 'flex';


// Oculta el botón de inicio
this.style.display = 'none';

//Alertas Iniciales:
alert("¡Bienvenido/a a Legend Builder!");

alert("Legend Builder - ¡Donde tus personajes cobran vida! Sumérgete en un mundo de fantasía y crea tu propio héroe. Elige su raza, género, clase y atributos. ¡Conviértete en el arquitecto de tu propia leyenda!");

let saludoInicial;
do {
    saludoInicial = prompt("¿Cómo te llamas?");
} while (!saludoInicial || !isNaN(saludoInicial));

if (!saludoInicial || !isNaN(saludoInicial)) {
    alert("Introduzca un nombre por favor!");
}

alert("Bienvenido/a " + saludoInicial + "! Vamos a crear a tu propio héroe legendario. Prepárate para dar vida a un personaje único en Legend Builder!");

let nickName;
do {
    nickName = prompt("Vamos a ponerle un nick a tu leyenda!");
} while (!nickName || !isNaN(nickName));

if (!nickName || !isNaN(nickName)) {
    alert("Introduzca un nick para identificar a su personaje por favor!");
}
    
function maquinaDeEscribir(mensaje, elementoID) {
        for (let i = 0; i < mensaje.length; i++) {
            setTimeout(function() {
                document.getElementById(elementoID).innerHTML += mensaje.charAt(i);
            }, i * 15);
        }
    }

    //Elegir Raza y Clase.
    let personaje = {
        1: "Elfo",
        2: "Enano",
        3: "Humano",
        4: "Orco",
    };

let raza;
do {
    raza = prompt("Elige una Raza:\n1:🧝Elfos: Son conocidos por su gracia y conexión con la naturaleza.\n2:🧔🏾Enanos: Son famosos por su resistencia y habilidades de artesanía.\n3:🦸🏻‍♂️Humanos: Son versátiles y ambiciosos, con una gran diversidad de habilidades.\n4:🧟‍♀️Orcos: Son conocidos por su fuerza bruta y su ferocidad en el combate.");
    if (!personaje[raza]) {
        alert("Vuelva a intentar con números del 1 al 4.");
    }
} while (!personaje[raza]);

alert(`Ahora perteneces al mundo del ${personaje[raza]}. ¡Buena elección ` + saludoInicial + "!");

let genero;
do {
    genero = prompt("¿Cuál es el género de " + nickName + "?\n1: Hombre\n2: Mujer");
    if (genero !== "1" && genero !== "2") {
        alert("Por favor, elige 1 para Hombre o 2 para Mujer.");
    }
} while (genero !== "1" && genero !== "2");

let generoTexto = genero === "1" ? "Hombre" : "Mujer";

maquinaDeEscribir(saludoInicial, "userName");
maquinaDeEscribir(nickName, "nick");
maquinaDeEscribir(personaje[raza], "personaje"); 
maquinaDeEscribir(generoTexto, "genero");

//Clases de Personaje
let clases = {
    "Elfo": {
        1: "Mago", //🧙‍♂️
        2: "Druida", //🌿
        3: "Bardo" //🎵
    },
    "Enano": {
        1: "Guerrero", //⚔️
        2: "Herrero", //🔨
        3: "Paladin" //🛡️
    },
    "Humano": {
        1: "Caballero", //🏇
        2: "Picaro", //🗡️
        3: "Clerigo" //✨
    },
    "Orco": {
        1: "Berserker", //🪓
        2: "Chaman", //🔮
        3: "Cazador" //🏹
    }
};

// Descripciones de las clases para cada raza
let descripcionesClases = {
    "Elfo": {
        1: "Usuarios de magia poderosa y destructiva.",
        2: "Capaces de manipular la magia de la naturaleza.",
        3: "Artistas talentosos con habilidades mágicas únicas."
    },
    "Enano": {
        1: "Combatientes fuertes y resistentes.",
        2: "Maestros de la creación y mejora de armas y armaduras.",
        3: "Defensores valientes con habilidades de curación."
    },
    "Humano": {
        1: "Protectores leales con una gran habilidad en el combate cuerpo a cuerpo.",
        2: "Maestros del sigilo y la astucia, expertos en trampas y robos.",
        3: "Sanadores y protectores con habilidades mágicas divinas."
    },
    "Orco": {
        1: "Combatientes salvajes que entran en frenesí en la batalla.",
        2: "Conectados con los espíritus y capaces de usar magia elemental.",
        3: "Expertos en rastreo y combate a distancia."
    }
};

alert("Es momento de elegir la clase que definirá tu estilo por completo!");

let clase;
do {
    clase = prompt(`Elige una Clase:\n1: ${clases[personaje[raza]][1]}: ${descripcionesClases[personaje[raza]][1]}\n2: ${clases[personaje[raza]][2]}: ${descripcionesClases[personaje[raza]][2]}\n3: ${clases[personaje[raza]][3]}: ${descripcionesClases[personaje[raza]][3]}`);
    if (!clases[personaje[raza]][clase]) {
        alert("Vuelva a intentar con números del 1 al 3.");
    }
} while (!clases[personaje[raza]][clase]);

alert(`Ahora eres un ${clases[personaje[raza]][clase]}! ¡Buena elección ` + saludoInicial + "!");

maquinaDeEscribir(clases[personaje[raza]][clase], "clase");

//Array con los atributos base
let atributosBase = {
    "Mago": [8, 1, 5], //🧙‍♂️
    "Druida": [6, 2, 6], //🌿
    "Bardo": [10, 1, 7], //🎵
    "Guerrero": [5, 15, 5], //⚔️
    "Herrero": [3, 18, 3], //🔨
    "Paladin": [8, 12, 5], //🛡️
    "Caballero": [2, 20, 4], //🏇
    "Picaro": [6, 7, 12], //🗡️
    "Clerigo": [8, 10, 5], //✨
    "Berserker": [1, 25, 3], //🪓
    "Chaman": [10, 8, 5], //🔮
    "Cazador": [8, 10, 10], //🏹
}

let atributoClase = atributosBase[clases[personaje[raza]][clase]];

alert("Ok, " + saludoInicial + "!\nEste es tu personaje:\nSu nombre es " + nickName + " y es un " + clases[personaje[raza]][clase] + " - " + personaje[raza] + ";\nEstos son sus atributos base:\n🧠Inteligencia: " + atributoClase[0] + "\n💪Fuerza: " + atributoClase[1] + "\n🤸🏻‍♀️Agilidad: " + atributoClase[2]);

maquinaDeEscribir(atributoClase[0].toString(), "Inteligencia");
maquinaDeEscribir(atributoClase[1].toString(), "Fuerza");
maquinaDeEscribir(atributoClase[2].toString(), "Agilidad");

let mensajePostPj = "¡Excelente " + saludoInicial + "!\nYa tenemos listo a " + nickName + " para la aventura.\nNos queda un paso, a continuación tirarás 2 dados por cada atributo base que tiene " + nickName +  "! 'Mucha suerte con la suerte!'😆";

let mensajeElemento = document.getElementById("mensajePostPj");

mensajeElemento.textContent = mensajePostPj;

let tiempoMensaje = mensajePostPj.length * 5;
setTimeout(function() {
    let boton = document.createElement("button");
    boton.innerHTML = "Continuar";

    boton.style.position = "absolute";
    boton.style.left = "50%";
    boton.style.transform = "translateX(-50%)";
    boton.style.width = "200px";
    boton.style.height = "50px";
    boton.style.backgroundColor = "#080325";
    boton.style.border = "1px solid #7407cd";
    boton.style.color = "#00ffff";
    boton.style.textAlign = "center";
    boton.style.cursor = "pointer";
    boton.style.marginTop = "2rem";
    boton.style.marginLeft = "1.1rem";
    boton.style.borderRadius = "5px"; 
    boton.style.padding = "3px 3px"

    boton.addEventListener("mouseover", function() {
        boton.style.color = "#7407cd";
        boton.style.backgroundColor = "#00ffff";
    });

    boton.addEventListener("mouseout", function() {
        boton.style.color = "#00ffff";
        boton.style.backgroundColor = "#080325";
    });

    boton.addEventListener('click', lanzarDados);

    function lanzarDados() {
        let atributos = ["Inteligencia", "Fuerza", "Agilidad"];
        for (let i = 0; i < atributos.length; i++) {
            let valorOriginal = atributoClase[i];
            let dado1 = Math.floor(Math.random() * 6) + 1;
            let dado2 = Math.floor(Math.random() * 6) + 1;
            let totalDados = dado1 + dado2;
            atributoClase[i] += totalDados;
            
            alert(`La suerte, proviene en forma de 2 dados de 6 caras, y al arrojarlos te devuelve un total de ${totalDados}.\nAhora tu atributo de ${atributos[i]} tiene un valor de: ${atributoClase[i]}`);
            
            let nuevoTexto = "(Base) + 🎲" + totalDados + " = " + atributoClase[i] + "(Total)";
    
            maquinaDeEscribir(nuevoTexto, atributos[i]);
        }
    }
    
    boton.addEventListener('click', function() {
    setTimeout(function() {
        boton.style.display = "none";
        setTimeout(function() {
            let botonNuevo = document.createElement("button");
            botonNuevo.innerHTML = "Conozcamos a tu personaje";

            botonNuevo.style.position = "absolute";
            botonNuevo.style.left = "50%";
            botonNuevo.style.transform = "translateX(-50%)";
            botonNuevo.style.width = "200px";
            botonNuevo.style.height = "50px";
            botonNuevo.style.backgroundColor = "#080325";
            botonNuevo.style.border = "1px solid #7407cd";
            botonNuevo.style.color = "#00ffff";
            botonNuevo.style.textAlign = "center";
            botonNuevo.style.cursor = "pointer";
            botonNuevo.style.marginTop = "2rem";
            botonNuevo.style.marginLeft = "1.1rem";
            botonNuevo.style.borderRadius = "5px"; 
            botonNuevo.style.padding = "3px 3px"
            botonNuevo.style.width = "200px";
            botonNuevo.style.height = "50px";

            botonNuevo.addEventListener("mouseover", function() {
                botonNuevo.style.color = "#7407cd";
                botonNuevo.style.backgroundColor = "#00ffff";
            });

            botonNuevo.addEventListener("mouseout", function() {
                botonNuevo.style.color = "#00ffff";
                botonNuevo.style.backgroundColor = "#080325";
            });

            //Guardamos la info localmente antes de hacer click para ir a la siguiente pagina.
            localStorage.setItem('nombreUsuario', saludoInicial);
            localStorage.setItem('nickPersonaje', nickName);
            localStorage.setItem('origen', personaje[raza]);
            localStorage.setItem('genero', generoTexto);
            localStorage.setItem('clase', clases[personaje[raza]][clase]);
            localStorage.setItem('inteligencia', atributoClase[0]);
            localStorage.setItem('fuerza', atributoClase[1]);
            localStorage.setItem('agilidad', atributoClase[2]);

            botonNuevo.addEventListener('click', function() {
                window.location.href = "pages/personaje.html";
            });

            let botonGlow = false;

            setInterval(function() {
                if (botonGlow) {
                    botonNuevo.style.boxShadow = "0 0 10px #ffffff, 0 0 15px #ffffff, 0 0 20px #ffffff, 0 0 25px #ffffff, 0 0 30px #ffffff";
                } else {
                    botonNuevo.style.boxShadow = "none";
                }
                botonGlow = !botonGlow;
            }, 250);

            document.body.appendChild(botonNuevo);
        }, 250);
    }, 250);
});

    document.body.appendChild(boton);
}, tiempoMensaje);

});