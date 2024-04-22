
//TODO Single Mode
fetch('./../info.json')
    .then(response => response.json())
    .then(data => {
        localStorage.setItem('info', JSON.stringify(data));
        //console.log('Datos cargados:', data);
    })
    .catch(error => console.error('Error al cargar los datos:', error));


//TODO MultiDraft
fetch('./../data.json')
    .then(response => response.json())
    .then(data => {
        // Almacenar los datos en localStorage
        localStorage.setItem('data', JSON.stringify(data));
    })
    .catch(error => console.error('Error al cargar los datos:', error));