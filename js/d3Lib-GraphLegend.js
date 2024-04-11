const express = require('express');
const fetch = require('node-fetch');
const app = express();

app.get('/pokeapi', async (req, res) => {
    try {
        const response = await fetch('https://pokeapi.co/api/v2/' + req.query.endpoint);
        const data = await response.json();
        res.json(data);
    } catch (error) {
        console.error('Error:', error);
        res.status(500).json({ error: 'Something went wrong' });
    }
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});

fetch('http://127.0.0.1:5501/pokeapi?endpoint=pokemon')
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error('Error:', error));