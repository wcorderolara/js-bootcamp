const http = require('http');
const url = require('url');
const https = require('https');

const hostname = "127.0.0.1";
const PORT = 3002;

// Funcion encargada de manejar las solicitudes al servidor
const handleRequest = (request, response) => {
    // Obtener la informacion de la URL
    const parsedUrl = url.parse(request.url, true);
    const path = parsedUrl.pathname

    response.setHeader('Content-Type', 'text/plain');

    if(path === '/') {
        response.end('Bienvenido a Node.js!!!!');
    } else if(path === '/about'){
        response.end('Aca encontraras informacion sobre Node.js!!!');
    } else if(path === '/contact') {
        response.end('Aca encontraras formas de contactarnos');
    } else if(path.startsWith('/users')) {
        const userId = path.split('/')[2];
        const externalUrl = 'https://jsonplaceholder.typicode.com/users/';
        response.setHeader('Content-Type', 'application/json');

        https.get(externalUrl+userId, (externalRes) => {
            let data = '';

            externalRes.on('data', (chunk) => {
                data += chunk;
            })

            externalRes.on('end', () => {
                const jsonData = JSON.parse(data);
                response.end(`Datos obtenidos: ${JSON.stringify(jsonData)}`)
            })
        }).on('error', (error) => {
            console.error(error.message);
            response.end('Hubo un error al momento de hacer la peticion');
        })
    } else {
        response.end('Ruta No Encontrada!!!');
    }
}

const server = http.createServer(handleRequest);

server.listen(PORT, hostname, () => {
    console.log(`Servidor corriendo en http://${hostname}:${PORT}`);
})

