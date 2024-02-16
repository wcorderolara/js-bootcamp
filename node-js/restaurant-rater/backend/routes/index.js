const express = require('express');
const router = express.Router();
const restaurantsRoutes = require('./restaurants.routes');

router.use('/restaurants', restaurantsRoutes);

module.exports = router;
