const express = require('express');
const router = express.Router();
const {getRestaurants, createRestaurant, massiveCreate, getRestaurantById, putRestaurant} = require('../controllers/restaurant.controller');
const { createRestaurantValidator, getRestaurantByIdValidator } = require('../validators/restaurant.vailidator');
const { handleValidationResult } = require('../validators/middleware.validator');
/**
 * @swagger
 *  components:
 *      schemas:
 *          Restaurant:
 *              type: object
 *              properties:
 *                  id:
 *                      type: number
 *                      description: representa el ID del restaurant
 *                  name:
 *                      type: string
 *                      description: describe el nombre del Restaurante
 *                  logo:
 *                      type: string
 *                      description: Logo del Restaurante
 *                  address:
 *                      type: string
 *                      description: Direccion del restaurante a evaluar o visitar
 *                  status:
 *                      type: boolean
 *                      description: Describe el stado del Restaurant
 *              required:
 *                  - name
 *                  - address
 *          RestaurantInfo:
 *              type: object
 *              properties:
 *                  restaurant:
 *                      $ref: '#/components/schemas/Restaurant'
 *                  reviews:
 *                      type: array
 *                      items:
 *                          $ref: '#/components/schemas/RestaurantReview'
 *                  schedules:
 *                      type: array
 *                      items:
 *                          $ref: '#/components/schemas/RestaurantSchedule'
 *                  facilities:
 *                      type: array
 *                      items:
 *                          $ref: '#/components/schemas/RestaurantFacility'              
*/

/**
 * @swagger
 * /restaurants:
 *  get:
 *      summary: Obtiene el listado de Restaurantes Activos en la Plataforma
 *      tags: [Restaurant]
 *      requestBody:
 *          content:
 *              application/json:
 *                  schema:
 *                      $ref: '#/components/schemas/Restaurant'
 *      responses:
 *          '201':
 *              description: El Restaurante ha sido creado exitosamente
 *              content:
 *                  application/json:
 *                      schema:
 *                         $ref: '#/components/schemas/Restaurant'   
 */
router.get('/', getRestaurants);

/**
 * @swagger
 * /restaurants/{restaurantId}:
 *  get:
 *      summary: Obtiene la informacion del Restaurantes, incluyendo los Reviews y Horarios.
 *      tags: [RestaurantInfo]
 *      parameters:
 *          -   name: restaurantId
 *              in: path
 *              schema:
 *                  type: integer
 *              required: true
 *      responses:
 *          '200':
 *              description: Document Type Updated
 *              content:
 *                  application/json:
 *                      schema:
 *                          type: object
 *                          properties:
 *                              records:
 *                                  $ref: '#/components/schemas/RestaurantInfo'                              
 */
router.get('/:restaurantId', getRestaurantByIdValidator(), handleValidationResult, getRestaurantById)

/**
 * @swagger
 * /restaurants:
 *  post:
 *      summary: Crea un nuevo Restaurante para la plataforma
 *      tags: [Restaurant]
 *      requestBody:
 *          content:
 *              application/json:
 *                  schema:
 *                      $ref: '#/components/schemas/Restaurant'
 *      responses:
 *          '201':
 *              description: Restaurante Creado
 *              content:
 *                  application/json:
 *                      schema:
 *                         $ref: '#/components/schemas/Restaurant'                
 */
router.post('/', createRestaurantValidator(), handleValidationResult, createRestaurant);

// POST /restaurants/bulk
router.post('/bulk', massiveCreate);
// PUT /restaurants/:restaurantId
router.put('/:restaurantId', putRestaurant)


module.exports = router;
