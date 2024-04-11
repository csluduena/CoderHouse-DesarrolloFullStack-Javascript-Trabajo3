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

//! Creamos la variable global 'atributos' para almacenar la información de los atributos
const atributos = {
    inteligencia: inteligencia,
    fuerza: fuerza,
    agilidad: agilidad
};

console.log("Atributos:", atributos);

//!Mostramos la info en la página
document.getElementById("nickPersonaje").textContent = nombrePersonaje;
document.getElementById("origen").textContent = raza;
document.getElementById("genero").textContent = genero;
document.getElementById("clase").textContent = clase;
document.getElementById("inteligencia").textContent = inteligencia;
document.getElementById("fuerza").textContent = fuerza;
document.getElementById("agilidad").textContent = agilidad;

//!guardamos los atributos en una variable global



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











// let ctx = document.getElementById('myChart').getContext('2d');
// let myRadarChart = new Chart(ctx, {
//     type: 'radar',
//     data: {
//         labels: ['Inteligencia', 'Fuerza', 'Agilidad'],
//         datasets: [{
//             borderWidth: 2,
//             label: 'Stats',
//             data: [atributos.inteligencia, atributos.fuerza, atributos.agilidad],
//             backgroundColor: '#64ecbaa4',
//             borderColor: 'rgba(4, 4, 4, 0.579)',
//             pointBackgroundColor: ['#178fff', '#b00b0b', '#10b00b'],

//         }]
//     },
//     options: {
//         scale: {
//             ticks: {
//                 beginAtZero: true,  // Cambia a false para permitir valores negativos
//                 min: -1,  // Establece el valor mínimo de los ticks
//                 max: 1,  // Establece el valor máximo de los ticks
//                 stepSize: 1,  // Establece el incremento de los ticks
//                 color: '#0003bc',
//                 backdropColor: '#b00b0b'
//             },
//             LineElement: {
//                 size: 15,
//             },
//             grid: {
//                 color: '#bca900',
//                 backgroundColor: '#9a0404',
//             },
//             font: {
//                 size: 10,
//                 // weight:'bold',
//                 // color: '#000000',
//                 backgroundColor: '#ffffff00',
//             },
//             pointLabels: {
//                 color: '#0003bc',
//             },
//             angleLines: {
//                 color: '#0003bc',
//             },
//             backgroundColor: '#007abc'
//         }
//     }
// });







// // Tus datos
// let atributosGraph = {
//     "Inteligencia": atributos.inteligencia,
//     "fuerza": atributos.fuerza,
//     "agilidad": atributos.agilidad
// };

// var data = Object.keys(atributosGraph).map(function(key) {
//     return {axis: key, value: atributosGraph[key]};
// });

// // Configurar el gráfico
// var width = 300,
//     height = 300,
//     radius = Math.min(width, height) / 2;

// var color = d3.scaleOrdinal()
//     .domain(['inteligencia', 'fuerza', 'agilidad'])
//     .range(["#178fff", "#b00b0b", "#10b00b"]);

// var radarChart = d3.select("#myChart").append("svg")
//     .attr("width", width)
//     .attr("height", height)
//     .append("g")
//     .attr("transform", "translate(" + width / 2 + "," + height / 2 + ")");

// // Crear el gráfico de araña
// var radarLine = d3.lineRadial()
//     .radius(function(d) { return radius * d.value; })
//     .angle(function(d, i) { return i * 2 * Math.PI / data.length; });

// radarChart.selectAll(".radarLine")
//     .data([data])
//     .enter().append("path")
//     .attr("class", "radarLine")
//     .attr("d", radarLine)
//     .style("stroke", function(d) { return color(d.axis); })
//     .style("fill", "none");

// // Dibujar los ejes
// var gr = radarChart.append("g")
//     .attr("class", "r axis")
//     .selectAll(".line")
//     .data(data)
//     .enter().append("g");

// var angleSlice = 2 * Math.PI / data.length; // Define el ángulo de cada sector

// gr.append("line")
//     .attr("x2", function(d, i) { return -radius * d.value * Math.cos(angleSlice * i - Math.PI / 2); })
//     .attr("y2", function(d, i) { return -radius * d.value * Math.sin(angleSlice * i - Math.PI / 2); })
//     .attr("class", "line")
//     .style("stroke", "lightgrey")
//     .style("stroke-width", "1px");

// gr.append("text")
//     .attr("class", "axis-label") // Cambiamos el nombre de la clase
//     .text(function(d) { return d.axis; })
//     .attr("text-anchor", "middle")
//     .attr("dy", "0.35em")
//     .attr("x", function(d, i) { return radius * Math.cos(angleSlice * i - Math.PI / 2); })
//     .attr("y", function(d, i) { return radius * Math.sin(angleSlice * i - Math.PI / 2); });

// --------------------------------------------------------------------------------------------------------------------------------
// Datos para el gráfico
// let atributosGraph = {
//     "Inteligencia": Number(atributos.inteligencia),
//     "Fuerza": Number(atributos.fuerza),
//     "Agilidad": Number(atributos.agilidad)
// };

// // Convertir los valores a un rango de 0 a 1
// let maxVal = Math.max(...Object.values(atributosGraph));
// let data = Object.keys(atributosGraph).map(key => {
//     return { label: key, value: atributosGraph[key] / maxVal };
// });

// // Configurar el gráfico triangular
// let chart = new TriangularChart({
//     container: document.getElementById('myChart'),
//     data: data
// });

// // Renderizar el gráfico
// chart.render();


// Supongamos que estos son tus datos
// let atributos = {
//     inteligencia: 50,
//     fuerza: 75,
//     agilidad: 65
// };


// Obtén una referencia al botón
let btnMostrarStats = document.getElementById("graphStats");

// Función para mostrar u ocultar el gráfico
function toggleChartVisibility() {
    var chartContainer = document.getElementById("containerChart");
    chartContainer.style.display = chartContainer.style.display === "none" ? "block" : "none";
}

// Mostrar u ocultar el gráfico al hacer clic en el botón "Estadísticas"
document.getElementById("graphStats").addEventListener("click", function () {
    toggleChartVisibility();
});

// Ocultar el gráfico al hacer clic fuera del mismo
document.addEventListener("click", function (event) {
    var chartContainer = document.getElementById("containerChart");
    var button = document.getElementById("graphStats");
    if (event.target !== chartContainer && event.target !== button && !chartContainer.contains(event.target)) {
        chartContainer.style.display = "none";
    }
});



// Función para hacer que el gráfico sea draggable sin cambiar su tamaño
function makeChartDraggableWithoutResizing() {
    var chartContainer = document.getElementById("containerChart");
    var offsetX, offsetY;
    var isDragging = false;

    chartContainer.addEventListener("mousedown", function (e) {
        e.preventDefault();
        isDragging = true;
        offsetX = e.clientX - chartContainer.getBoundingClientRect().left;
        offsetY = e.clientY - chartContainer.getBoundingClientRect().top;
    });

    document.addEventListener("mousemove", function (e) {
        if (isDragging) {
            var newX = e.clientX - offsetX;
            var newY = e.clientY - offsetY;

            // Ajustar las posiciones para mantener el gráfico dentro del contenedor
            var containerRect = document.getElementById("containerChartContainer").getBoundingClientRect();
            var maxLeft = containerRect.width - chartContainer.offsetWidth;
            var maxTop = containerRect.height - chartContainer.offsetHeight;

            newX = Math.max(0, Math.min(newX, maxLeft));
            newY = Math.max(0, Math.min(newY, maxTop));

            chartContainer.style.left = newX + "px";
            chartContainer.style.top = newY + "px";
        }
    });

    document.addEventListener("mouseup", function (e) {
        isDragging = false;
    });
}

// Llamar a la función para hacer que el gráfico sea draggable sin cambiar su tamaño
makeChartDraggableWithoutResizing();








// Tus atributos
//! Obtener Atributos desde localStorage
function obtenerAtributosBaseDesdeLocalStorage() {
    let atributosBaseDesdeLocalStorage = localStorage.getItem('atributosBase');
    if (atributosBaseDesdeLocalStorage) {
        return JSON.parse(atributosBaseDesdeLocalStorage);
    } else {
        console.log('No se encontraron atributos base en localStorage.');
        return null;
    }
}

// Llama a la función para obtener los atributos base desde localStorage
let atributosBaseObtenidos = obtenerAtributosBaseDesdeLocalStorage();
console.log('Atributos base obtenidos desde localStorage:', atributosBaseObtenidos);


let atributosGraph = {
    Inteligencia: Number(inteligencia),
    Fuerza: Number(fuerza),
    Agilidad: Number(agilidad)
};

// Obtener los valores base de la clase seleccionada
let claseSeleccionada = localStorage.getItem('clase');
let atributosBaseClase = atributosBaseObtenidos[claseSeleccionada];

// Crear los datos para la serie "Stats Base"
let dataStatsBase = [
    atributosBaseClase[0], // Inteligencia
    atributosBaseClase[1], // Fuerza
    atributosBaseClase[2]  // Agilidad
];

// Crear los nombres de las categorías
let categorias = ['Inteligencia', 'Fuerza', 'Agilidad'];

// Crear los datos de la serie "Stats Base"
let dataSerieStatsBase = categorias.map((categoria, index) => {
    return {
        name: categoria + ' Base',
        y: dataStatsBase[index]
    };
});

Highcharts.chart('containerChart', {
    chart: {
        polar: true,
        type: 'line',
        backgroundColor: '#6e70d4b1'
    },
    title: {
        text: 'ESTADISTICAS DE LA LEYENDA',
        x: -80
    },
    subtitle: {
        text: 'Raza: ' + raza + ' | Clase: ' + clase,
        x: -80,
        style: {
            fontWeight: 'bold'
        }
    },
    pane: {
        size: '80%'
    },
    xAxis: {
        categories: Object.keys(atributosGraph),
        tickmarkPlacement: 'on',
        lineWidth: 0
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
        name: 'Atributos Final de ' + raza + " " + clase,
        data: [{
            name: 'Inteligencia',
            y: atributosGraph.Inteligencia,
            color: '#178fff'
        }, {
            name: 'Fuerza',
            y: atributosGraph.Fuerza,
            color: '#b00b0b'
        }, {
            name: 'Agilidad',
            y: atributosGraph.Agilidad,
            color: '#10b00b'
        }],
        pointPlacement: 'on',
        marker: {
            symbol: 'circle',
            radius: 5
        }
    }, {
        name: 'Atributos Base de ' + raza + " " + clase,
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
                    size: '70%'
                }
            }
        }]
    }
});
