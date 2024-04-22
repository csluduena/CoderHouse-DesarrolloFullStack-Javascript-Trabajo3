
//TODO Single Mode
fetch('./CoderHouse-DesarrolloFullStack-Javascript-Trabajo3/info.json')
    .then(response => response.json())
    .then(data => {
        localStorage.setItem('info', JSON.stringify(data));
        //console.log('Datos cargados:', data);
    })
    .catch(error => console.error('Error al cargar los datos:', error));


//TODO MultiDraft
fetch('./CoderHouse-DesarrolloFullStack-Javascript-Trabajo3/data.json')
    .then(response => response.json())
    .then(data => {
        // Almacenar los datos en localStorage
        localStorage.setItem('data', JSON.stringify(data));
    })
    .catch(error => console.error('Error al cargar los datos:', error));