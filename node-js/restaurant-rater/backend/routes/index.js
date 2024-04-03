const express = require('express');
const router = express.Router();
const restaurantsRoutes = require('./restaurants.routes');
const restaurantSchedule = require('./restaurant-schedule.routes');

router.use('/restaurants', restaurantsRoutes);
router.use('/schedules', restaurantSchedule);

module.exports = router;
