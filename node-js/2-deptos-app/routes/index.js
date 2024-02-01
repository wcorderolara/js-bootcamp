const express = require('express');
const router = express.Router();
const rootRoutes = require('./root.routes');
const departamentosRoutes = require('./departamentos.routes');

router.use('/', rootRoutes);
router.use('/departamentos', departamentosRoutes);

module.exports =router;
