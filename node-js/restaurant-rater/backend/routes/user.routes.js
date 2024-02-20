const express = require('express');
const router = express.Router();
const UserController = require('../controllers/user.controller');

/**
 * @swagger
 *  components:
 *      schemas:
 *          User:
 *              type: object
 *              properties:
 *                  id:
 *                      type: number
 *                      description: representa el ID del Usuario
 *                  username:
 *                      type: string
 *                      description: Identifica el nombre del usuario dentro de la plataforma
 *                  email:
 *                      type: string
 *                      description: Correo electrónico del usuario
 *                  status:
 *                      type: boolean
 *                      description: Describe el estado del Usuario
 *              required:
 *                  - restaurant_id
 *                  - description
 *          UserReviews:
 *              type: object
 *              properties:
 *                  user:
 *                      $ref: '#/components/schemas/User'
 *                  reviews:
 *                      type: array
 *                      items:
 *                          $ref: '#/components/schemas/RestaurantReview'
*/

/**
 * @swagger
 * /users:
 *  get:
 *      summary: Obtiene los usuarios de la plataforma
 *      tags: [User]
 *      responses:
 *          '200':
 *              description: Listado de Usuarios Activos
 *              content:
 *                  application/json:
 *                      schema:
 *                          type: object
 *                          properties:
 *                              records:
 *                                  type: array
 *                                  items:
 *                                      $ref: '#/components/schemas/User'                              
 */
router.get('/', UserController.getUsers);

/**
 * @swagger
 * /users/{userId}/reviews:
 *  get:
 *      summary: Obtiene los reviews de un usuario basado en su identificador
 *      tags: [UserReviews]
 *      parameters:
 *          -   name: userId
 *              in: path
 *              schema:
 *                  type: integer
 *              required: true
 *      responses:
 *          '200':
 *              description: Listado de Reviews del Usuario
 *              content:
 *                  application/json:
 *                      schema:
 *                          type: object
 *                          properties:
 *                              records:
 *                                  $ref: '#/components/schemas/UserReviews'                              
 */
router.get(
    '/:userId/reviews',
    UserController.getUserReviews
)

/**
 * @swagger
 * /users:
 *  post:
 *      summary: Permite crear usuarios para interactuar con la plataforma
 *      tags: [User]
 *      requestBody:
 *          content:
 *              application/json:
 *                  schema:
 *                      $ref: '#/components/schemas/User'
 *      responses:
 *          '201':
 *              description: Usuario Creado exitosamente
 *              content:
 *                  application/json:
 *                      schema:
 *                         $ref: '#/components/schemas/User'                               
 */
router.post(
    '/',
    UserController.createUser
)

router.post(
    '/login',
    UserController.loginUser
)


/**
 * @swagger
 * /users/{userId}:
 *  put:
 *      summary: Actualiza la información de un Usuario proporcionando el identificador del mismo
 *      tags: [User]
 *      parameters:
 *          -   name: userId
 *              in: path
 *              schema:
 *                  type: integer
 *              required: true
 *      requestBody:
 *          content:
 *              application/json:
 *                  schema:
 *                      $ref: '#/components/schemas/User'
 *      responses:
 *          '200':
 *              description: Document Type Updated
 *              content:
 *                  application/json:
 *                      schema:
 *                          $ref: '#/components/schemas/User'
 *                                  
 */
router.put(
    '/:userId',
    UserController.updateUser
)

module.exports = router;
