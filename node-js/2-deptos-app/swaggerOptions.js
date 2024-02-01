
const options = {
    definition: {
        openapi: "3.0.3",
        info: {
            title: "API de prueba",
            version: "1.0.0",
            description: "API de Censos"
        },
        servers: [
            {
                url: "http://localhost:3005/acredicom/censos/v1/"
            }
        ]
    },
    apis: ["./routes/*.js"] 
}

module.exports = options;