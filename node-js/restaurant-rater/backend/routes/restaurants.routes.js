const express = require('express');
const router = express.Router();
const {getRestaurants, createRestaurant, massiveCreate, getRestaurantById, putRestaurant} = require('../controllers/restaurant.controller');

// GET /restaurants
router.get('/', getRestaurants);
// GET /restaurants/:restaurantId
router.get('/:restaurantId', getRestaurantById)
// POST /restaurants
router.post('/', createRestaurant);
// POST /restaurants/bulk
router.post('/bulk', massiveCreate);
// PUT /restaurants/:restaurantId
router.put('/:restaurantId', putRestaurant)


module.exports = router;
