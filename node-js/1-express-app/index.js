const express = require('express');
const app = express();
const axios = require('axios');
const PORT = 3004;
const externalUrl = 'https://jsonplaceholder.typicode.com/users/';

app.get('/', (req, res) => {
    res.send('Bienvenido a Node.js!!!!');
})

app.get('/about', (req, res) => {
    res.send('Aca encontraras informacion sobre Node.js!!!');
})

app.get('/contact', (req, res) => {
    res.send('Aca encontraras formas de contactarnos');
})

app.get('/users/:userId', async (req, res) => {
    try {
        const id = req.params.userId;
        const response = await axios.get(externalUrl+id);
        res.json(response.data);
    } catch (error) {
        console.error(error.message);
        res.send('Hubo un error al momento de hacer la peticion');
    }
})

app.get('*', (req, res) => {
    res.send('Ruta No Encontrada!!!');
})

app.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto ${PORT}`);
})