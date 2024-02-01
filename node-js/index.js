// CommonJS Modules
// Importando un core module de Node.js
const http = require('https');

const url = 'https://jsonplaceholder.typicode.com/posts';

const request = http.get(url, (response) => {
    let data = '';

    response.on('data', (chunk) => {
        data += chunk;
    })

    response.on('end', () => {
        const jsonData = JSON.parse(data);
        console.log('Datos obtenidos desde la API', jsonData);
    })
});

request.on('error', (error) => {
    console.error('Error: ', error.message);
})


