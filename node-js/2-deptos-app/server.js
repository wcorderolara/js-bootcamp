const express = require('express');
const app = express();
const PORT = process.env.PORT || 3005;
const routes = require('./routes');
const cors = require('cors');
const swaggerUI = require('swagger-ui-express');
const swaggerJsDoc = require('swagger-jsdoc');
const options = require('./swaggerOptions');
const swaggerSpecs = swaggerJsDoc(options);

app.use(express.json());
app.use(cors());
app.use('/acredicom/censos/v1', routes);
app.use('/acredicom/censos/v1/documentation', swaggerUI.serve, swaggerUI.setup(swaggerSpecs));

app.listen(PORT, () => {
    console.log(`El sever estar corriendo en el puerto ${PORT}`);
})
