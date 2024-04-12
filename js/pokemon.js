document.getElementById('pokemon-input').addEventListener('input', async (event) => {
    try {
        const inputText = event.target.value.toLowerCase();
        if (inputText.length === 0) {
            document.getElementById('pokemon-suggestions').innerHTML = '';
            return;
        }
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=5&offset=0&${inputText}`);
        const data = await response.json();
        mostrarSugerencias(data.results);
    } catch (error) {
        console.error('Error:', error);
    }
});

function mostrarSugerencias(sugerencias) {
    const suggestionsDiv = document.getElementById('pokemon-suggestions');
    suggestionsDiv.innerHTML = '';
    sugerencias.forEach(pokemon => {
        const suggestion = document.createElement('div');
        suggestion.textContent = pokemon.name;
        suggestion.classList.add('suggestion');
        suggestion.addEventListener('click', () => {
            document.getElementById('pokemon-input').value = pokemon.name;
            suggestionsDiv.innerHTML = '';
            buscarPokemon();
        });
        suggestionsDiv.appendChild(suggestion);
    });
}

document.getElementById('getPokemonBtn').addEventListener('click', async () => {
    try {
        const response = await fetch('https://pokeapi.co/api/v2/pokemon/1'); // Cambia "1" por el número del Pokémon que desees obtener
        const data = await response.json();
        mostrarImagen(data.sprites.front_default);
    } catch (error) {
        console.error('Error:', error);
        document.getElementById('pokemon-info').textContent = 'Ocurrió un error al obtener el Pokémon.';
    }
});

function buscarPokemon() {
    var nombrePokemon = document.getElementById("pokemon-input").value.toLowerCase();
    var url = "https://pokeapi.co/api/v2/pokemon/" + nombrePokemon;

    fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error("No se encontró el Pokémon");
            }
            return response.json();
        })
        .then(data => {
            mostrarImagen(data.sprites.front_default);
            mostrarInfoPokemon(data);
        })
        .catch(error => {
            document.getElementById("pokemon-info").innerText = error.message;
        });
}

function mostrarImagen(url) {
    var infoDiv = document.getElementById("pokemon-info");
    infoDiv.innerHTML = `<img src="${url}" alt="Imagen del Pokémon">`;
}

function mostrarInfoPokemon(pokemon) {
    var infoDiv = document.getElementById("pokemon-info");
    infoDiv.innerHTML += `
        <h2>${pokemon.name.toUpperCase()}</h2>
        <p>ID: ${pokemon.id}</p>
        <p>Altura: ${pokemon.height}</p>
        <p>Peso: ${pokemon.weight}</p>
        <p>Tipos:</p>
        <ul>
            ${pokemon.types.map(type => `<li>${type.type.name}</li>`).join('')}
        </ul>
    `;
}
