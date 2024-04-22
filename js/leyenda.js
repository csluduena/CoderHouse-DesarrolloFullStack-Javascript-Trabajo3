//! recuperamos la info en LocalStorage
const {
    nombrePersonaje,
    raza,
    clase,
    genero,
    totalInteligencia: inteligencia,
    totalFuerza: fuerza,
    totalAgilidad: agilidad
} = localStorage;

// console.log("Nombre del personaje:", nombrePersonaje);
// console.log("Raza:", raza);
// console.log("Clase:", clase);
// console.log("Género:", genero);
// console.log("Total de inteligencia:", inteligencia);
// console.log("Total de fuerza:", fuerza);
// console.log("Total de agilidad:", agilidad);

//! Creamos la variable global 'atributos' para almacenar la información de los atributos
const atributos = {
    inteligencia,
    fuerza,
    agilidad
};

// console.log("Atributos:", atributos);

//! Mostramos la info en la página
document.getElementById("nickPersonaje").textContent = nombrePersonaje;
document.getElementById("origen").textContent = raza;
document.getElementById("genero").textContent = genero;
document.getElementById("clase").textContent = clase;
document.getElementById("inteligencia").textContent = inteligencia;
document.getElementById("fuerza").textContent = fuerza;
document.getElementById("agilidad").textContent = agilidad;

//! guardamos los atributos en una variable global
//! Alerta borrar personaje
const btnBorrar = document.getElementById("borrarPersonaje");
const modal = document.getElementById("myModal");
const btnCancelar = document.getElementById("cancelarBorrar");

btnBorrar.onclick = function () {
    modal.style.display = "block";
};

btnCancelar.onclick = function () {
    modal.style.display = "none";
};

//! Cerrar ventana al hacer clic fuera
window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
};

const btnConfirmar = document.getElementById("confirmarBorrar");

btnConfirmar.onclick = function () {
    localStorage.clear();

    document.querySelector(
        ".info-personaje"
    ).style.backgroundImage = `url('./../img/cartas/emptyCard.png')`;

    modal.style.display = "none";

    location.reload();
};

//! Descargar el personaje
document
    .getElementById("descargarPersonaje")
    .addEventListener("click", function () {
        const personaje = {
            nickPersonaje: nombrePersonaje,
            origen: raza,
            clase,
            genero,
            inteligencia,
            fuerza,
            agilidad,
        };

        //TODO CARGA DE PJ DRAG AND DROP
        const zip = new JSZip();

        //? agregamos el archivo JSON al ZIP
        const jsonStr = JSON.stringify(personaje);
        zip.file(
            `${personaje.nickPersonaje}-${personaje.origen}-${personaje.clase}-${personaje.genero}.json`,
            jsonStr
        );

        //? Usamos la cosa de html2canvas para crear una imagen de la página (Aunque solo elegimos el elemento de la carta)
        const elementoCarta = document.querySelector(".info-personaje");

        html2canvas(elementoCarta).then(function (canvas) {
            const imgData = canvas.toDataURL("image/png");
            const imgData64 = imgData.split(",")[1];

            //? agregamos la imagen al ZIP
            zip.file(
                `${personaje.nickPersonaje}-${personaje.origen}-${personaje.clase}-${personaje.genero}.png`,
                imgData64,
                { base64: true }
            );

            //?  Generar el archivo ZIP y descargarlo
            zip.generateAsync({ type: "blob" }).then(function (content) {
                const link = document.createElement("a");
                link.download = `${personaje.nickPersonaje}-${personaje.origen}-${personaje.clase}-${personaje.genero}.zip`; //CFG nombre del archivo
                link.href = URL.createObjectURL(content);
                link.click();
            });
        });
    });

//! Carga de PJ DRAG AND DROP
document
    .getElementById("cargarPersonaje")
    .addEventListener("click", function () {
        const input = document.createElement("input");
        input.type = "file";
        input.onchange = (e) => {
            const file = e.target.files[0];
            if (file) {
                const reader = new FileReader();
                reader.onload = function (e) {
                    const personaje = JSON.parse(e.target.result);

                    for (const key in personaje) {
                        localStorage.setItem(key, personaje[key]);
                    }

                    location.reload();
                };
                reader.readAsText(file);
            }
        };
        input.click();
    });

const razaArchivo = raza ? raza.toLowerCase() : "";
const claseArchivo = clase ? clase.replace(" ", " ") : "";
const generoArchivo = genero ? (genero === "Hombre" ? "Hombre" : "Mujer") : "";

let nombreArchivo;
if (razaArchivo && claseArchivo && generoArchivo) {
    nombreArchivo = `${razaArchivo}_${claseArchivo}_${generoArchivo}.png`;
} else {
    nombreArchivo = "cartaVacia.png";
}

//! Asignación de carta acorde al PJ.
document.querySelector(
    ".info-personaje"
).style.backgroundImage = `url('./../img/cartas/${nombreArchivo}')`;


//! COMIENZO CÓDIGO DEL CHART TRIANGULAR.

const btnMostrarStats = document.getElementById("graphStats");

function toggleChartVisibility() {
    const chartContainer = document.getElementById("containerChart");
    chartContainer.style.display = chartContainer.style.display === "none" ? "block" : "none";
}

document.getElementById("graphStats").addEventListener("click", function () {
    toggleChartVisibility();
});

document.addEventListener("click", function (event) {
    const chartContainer = document.getElementById("containerChart");
    const button = document.getElementById("graphStats");
    if (event.target !== chartContainer && event.target !== button && !chartContainer.contains(event.target)) {
        chartContainer.style.display = "none";
    }
});

//  Atributos
//! Obtener Atributos desde localStorage
function obtenerAtributosBaseDesdeLocalStorage() {
    const atributosBaseDesdeLocalStorage = localStorage.getItem('atributosBase');
    if (atributosBaseDesdeLocalStorage) {
        return JSON.parse(atributosBaseDesdeLocalStorage);
    } else {
        //console.log('No se encontraron atributos base en localStorage.');
        return null;
    }
}

const atributosBaseObtenidos = obtenerAtributosBaseDesdeLocalStorage();
//console.log('Atributos base obtenidos desde localStorage:', atributosBaseObtenidos);


const atributosGraph = {
    Inteligencia: Number(inteligencia),
    Fuerza: Number(fuerza),
    Agilidad: Number(agilidad)
};


const claseSeleccionada = localStorage.getItem('clase');
const atributosBaseClase = atributosBaseObtenidos ? atributosBaseObtenidos[claseSeleccionada] : null;


let dataStatsBase;
let dataSerieStatsBase;
if (atributosBaseClase) {
    dataStatsBase = [
        atributosBaseClase[0], // Inteligencia
        atributosBaseClase[1], // Fuerza
        atributosBaseClase[2]  // Agilidad
    ];

    const categorias = ['Inteligencia', 'Fuerza', 'Agilidad'];

    dataSerieStatsBase = categorias.map((categoria, index) => {
        return {
            name: categoria + ' Base',
            y: dataStatsBase[index]
        };
    });
} else {
    //console.log('No se encontraron atributos base para la clase seleccionada');
    dataStatsBase = [];
    dataSerieStatsBase = [];
}

Highcharts.chart('containerChart', {
    chart: {
        polar: true,
        type: 'line',
        backgroundColor: '#000000af',
        borderRadius: '25px',
        marginTop: 115
    },
    title: {
        text: 'ESTADISTICAS DE LA LEYENDA',
        x: 0,
        align: 'center',
        textAlign: 'center',
        style: {
            color: '#FFFFFF',
            fontSize: '21px'
        }
    },
    subtitle: {
        align: 'center',
        textAlign: 'center',
        text: `Raza: ${raza} | Clase: ${clase}`,
        x: 0,
        style: {
            fontWeight: 'bold'
        },
        style: {
            color: '#9ef7ff',
            fontSize: '18px'
        }
    },
    pane: {
        size: '80%'
    },
    xAxis: {
        categories: Object.keys(atributosGraph),
        tickmarkPlacement: 'on',
        lineWidth: 0,
        labels: {
            style: {
                fontSize: '20px' // Tamaño de fuente para el texto del eje X
            },
            formatter: function () {
                switch (this.value) {
                    case 'Inteligencia':
                        return '<span style="color: #178fff;">' + this.value + '</span>';
                    case 'Fuerza':
                        return '<span style="color: #b00b0b;">' + this.value + '</span>';
                    case 'Agilidad':
                        return '<span style="color: #10b00b;">' + this.value + '</span>';
                    default:
                        return this.value;
                }
            }
        }
    },

    yAxis: {
        gridLineInterpolation: 'polygon',
        lineWidth: 0,
        min: 0
    },
    tooltip: {
        formatter: function () {
            let color;
            switch (this.point.category) {
                case 'Inteligencia':
                    color = '#178fff';
                    break;
                case 'Fuerza':
                    color = '#b00b0b';
                    break;
                case 'Agilidad':
                    color = '#10b00b';
                    break;
                default:
                    color = this.series.color;
                    break;
            }
            return '<span style="color:' + color + '"><b>' + this.point.category + ': ' + this.point.y.toFixed(0) + '</b></span>';
        }
    },
    legend: {
        align: 'right',
        verticalAlign: 'middle',
        layout: 'vertical'
    },
    series: [{
        name: `<span style="color: white;">Atributos Final de ${raza} ${clase}</span>`,
        data: [{
            name: '<span style="color: white;">Inteligencia</span>',
            y: atributosGraph.Inteligencia,
            color: '#178fff'
        }, {
            name: '<span style="color: white;">Fuerza</span>',
            y: atributosGraph.Fuerza,
            color: '#b00b0b'
        }, {
            name: '<span style="color: white;">Agilidad</span>',
            y: atributosGraph.Agilidad,
            color: '#10b00b'
        }],
        pointPlacement: 'on',
        marker: {
            symbol: 'circle',
            radius: 5
        }
    }, {
        name: `<span style="color: white;">Atributos Base de ${raza} ${clase}</span>`,
        data: dataSerieStatsBase,
        pointPlacement: 'on',
        marker: {
            symbol: 'circle',
            radius: 3
        },
        color: 'rgba(255,0,0,0.5)' // Color de la serie para los stats base
    }],
    responsive: {
        rules: [{
            condition: {
                maxWidth: 500
            },
            chartOptions: {
                legend: {
                    align: 'center',
                    verticalAlign: 'bottom',
                    layout: 'horizontal'
                },
                pane: {
                    size: '100%'
                },
                title: {
                    style: {
                        fontSize: '18px' // Tamaño de fuente para el título
                    }
                },
                subtitle: {
                    style: {
                        fontSize: '14px' // Tamaño de fuente para el subtítulo
                    }
                },
                xAxis: {
                    labels: {
                        style: {
                            fontSize: '14px' // Tamaño de fuente para el eje X
                        }
                    }
                },
                yAxis: {
                    labels: {
                        style: {
                            fontSize: '14px' // Tamaño de fuente para el eje Y
                        }
                    }
                }
            }
        }]
    }
});