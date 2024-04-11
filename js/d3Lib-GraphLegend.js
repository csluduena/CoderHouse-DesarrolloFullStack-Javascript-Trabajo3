document.getElementById('getPokemonBtn').addEventListener('click', async () => {
    try {
        const response = await fetch('https://pokeapi.co/api/v2/pokemon/1'); // Cambia "1" por el número del Pokémon que desees obtener
        const data = await response.json();
        document.getElementById('pokemonInfo').textContent = JSON.stringify(data, null, 2);
    } catch (error) {
        console.error('Error:', error);
        document.getElementById('pokemonInfo').textContent = 'Ocurrió un error al obtener el Pokémon.';
    }
});