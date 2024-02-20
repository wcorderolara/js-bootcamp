const express = require('express');
const router = express.Router();
const RestaurantReviewController = require('../controllers/restaurant-review.controller');

/**
 * @swagger
 *  components:
 *      schemas:
 *          RestaurantReview:
 *              type: object
 *              properties:
 *                  id:
 *                      type: number
 *                      description: Representa el ID del comentario
 *                  rating:
 *                      type: number
 *                      description: Valorizacion que el usuario dara al restaurante, por defecto es 1
 *                  reviewText:
 *                      type: string
 *                      description: Comentario que el Usuario proporciona para el Restaurante
 *                  restaurant_id:
 *                      type: number
 *                      description: Identificador del Restaurante Asociado al Comentario
 *                  user_id:
 *                      type: number
 *                      description: Identificador del Usuario que ha realizado el Comentario
 *              required:
 *                  - reviewText
 *                  - restaurant_id
 *                  - user_id
 */

/**
 * @swagger
 * /reviews/{restaurantId}:
 *  get:
 *      summary: Obtiene el listado de los comentarios por medio del identificador del Restaurnt
 *      tags: [RestaurantReview]
 *      parameters:
 *          -   name: restaurantId
 *              in: path
 *              schema:
 *                  type: integer
 *              required: true
 *      responses:
 *          '200':
 *              description: Listado de los Comentarios por Restaurant
 *              content:
 *                  application/json:
 *                      schema:
 *                          type: object
 *                          properties:
 *                              records:
 *                                  type: array
 *                                  items:
 *                                      #ref: '#/components/schemas/RestaurantReview'
 */
router.get(
    '/:restaurantId',
    getReviewsByRestaurantValidator(),
    handleValidationError,
    RestaurantReviewController.getReviewsByRestaurant
)

/**
 * @swagger
 * /reviews:
 *  post:
 *      summary: Permite crear un nuevo comentario de los usuarios
 *      tags: [RestaurantReview]
 *      requestBody:
 *          content:
 *              application/json:
 *                  schema:
 *                      $ref: '#/components/schemas/RestaurantReview'
 *      responses:
 *          '201':
 *              description: Comentario Creado exitosamente
 *              content:
 *                  application/json:
 *                      schema:
 *                         $ref: '#/components/schemas/RestaurantReview'                               
 */
router.post(
    '/',
    createRestaurantReviewValidator(),
    handleValidationError,
    RestaurantReviewController.createRestaurantReview
)

/**
 * @swagger
 * /reviews/{reviewId}:
 *  put:
 *      summary: Actualiza la reseña proporcionada por un Usuario
 *      tags: [RestaurantReview]
 *      parameters:
 *          -   name: reviewId
 *              in: path
 *              schema:
 *                  type: integer
 *              required: true
 *      requestBody:
 *          content:
 *              application/json:
 *                  schema:
 *                      $ref: '#/components/schemas/RestaurantReview'
 *      responses:
 *          '200':
 *              description: Document Type Updated
 *              content:
 *                  application/json:
 *                      schema:
 *                          $ref: '#/components/schemas/RestaurantReview'
 *                                  
 */
router.put(
    '/:reviewId',
    putRestaruantReviewValidator(),
    handleValidationError,
    RestaurantReviewController.putRestaruantReview
)

module.exports = router;
