const express = require('express');
const router = express.Router();
const RestaurantFacilityController = require('../controllers/restaurant-facility.controller');

/**
 * @swagger
 *  components:
 *      schemas:
 *          RestaurantFacility:
 *              type: object
 *              properties:
 *                  id:
 *                      type: number
 *                      description: representa el ID de la Amenidad del Restaurant
 *                  restaurant_id:
 *                      type: number
 *                      description: Identificador del Restaurant Asociado
 *                  description:
 *                      type: string
 *                      description: Descripcion o nombre de la Amenidad
 *                  status:
 *                      type: boolean
 *                      description: Describe el estado de la Amenidad del Restaurant
 *              required:
 *                  - restaurant_id
 *                  - description
*/

/**
 * @swagger
 * /facilities/{restaurantId}:
 *  get:
 *      summary: Obtiene las Amenidades de los Restaurants consultados
 *      tags: [RestaurantFacility]
 *      parameters:
 *          -   name: restaurantId
 *              in: path
 *              schema:
 *                  type: integer
 *              required: true
 *      responses:
 *          '200':
 *              description: Listado de Amenidades del Restaurante
 *              content:
 *                  application/json:
 *                      schema:
 *                          type: object
 *                          properties:
 *                              records:
 *                                  type: array
 *                                  items:
 *                                      $ref: '#/components/schemas/RestaurantFacility'                              
 */

router.get(
    '/:restaurantId',
    RestaurantFacilityController.getFacilities
)

/**
 * @swagger
 * /facilities:
 *  post:
 *      summary: Crea un nuevo Horario para el Restaurante
 *      tags: [RestaurantFacility]
 *      requestBody:
 *          content:
 *              application/json:
 *                  schema:
 *                      type: object
 *                      properties:
 *                          facilities:
 *                              type: array
 *                              items:
 *                                  $ref: '#/components/schemas/RestaurantFacility'
 *      responses:
 *          '201':
 *              description: Horrio para el Restaurante Creado
 *              content:
 *                  application/json:
 *                      schema:
 *                         $ref: '#/components/schemas/RestaurantFacility'                
 */
router.post(
    '/',
    RestaurantFacilityController.createFacility
)

/**
 * @swagger
 * /facilities/{restaurantId}:
 *  put:
 *      summary: Actualiza la información de una Amenidad, incluyendo el estado de Activo o Inactivo
 *      tags: [RestaurantFacility]
 *      parameters:
 *          -   name: restaurantId
 *              in: path
 *              schema:
 *                  type: integer
 *              required: true
 *      requestBody:
 *          content:
 *              application/json:
 *                  schema:
 *                      $ref: '#/components/schemas/RestaurantFacility'
 *      responses:
 *          '200':
 *              description: Document Type Updated
 *              content:
 *                  application/json:
 *                      schema:
 *                          $ref: '#/components/schemas/RestaurantFacility'
 *                                  
 */
router.put(
    '/:facilityId',
    RestaurantFacilityController.putFacility
)

module.exports = router;
