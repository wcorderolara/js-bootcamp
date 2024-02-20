require('dotenv').config();
const express = require('express');
const app = express();
const PORT = process.env.PORT || 4001;
const cors = require('cors');
const db = require('./models');
const routes = require('./routes/index');
const authRoutes = require('./routes/auth.routes');
const responseHandler = require('./utils/responseHandler');

app.use(express.json());
app.use(cors());
app.use(responseHandler);

app.use('/restaurant-rater-app/v1', routes);
app.use('/restaurant-rater-app/v1/auth', authRoutes);

db.sequelize.sync().then( () => {
    app.listen(PORT, () => {
        console.log(`Aplicacion corriendo en el puerto ${PORT}`);
    })
})