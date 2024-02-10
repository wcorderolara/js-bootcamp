require('dotenv').config();
const express = require('express');
const app = express();
const PORT = process.env.PORT || 4001;
const cors = require('cors');
const db = require('./models');

app.use(express.json());
app.use(cors());

db.sequelize.sync().then( () => {
    app.listen(PORT, () => {
        console.log(`Aplicacion corriendo en el puerto ${PORT}`);
    })
})