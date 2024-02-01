const express = require('express');
const router = express.Router();
const {getAllDepartamentos, getDepartamentoById, createDepartamento} = require('../controllers/departamentos.controller');
const {valiateDeptoId} = require('../middlewares/departamentos.middleware');

/**
 * @swagger
 *  components:
 *      schemas:
 *          Departamento:
 *              type: object
 *              properties:
 *                  id:
 *                      type: number
 *                      description: representa el ID  del departamento
 *                  ciudad:
 *                      type: string
 *                      description: nombre del departamento
 *                  fechaPrimerCenso:
 *                      type: number
 *                      description: año del primer censo
 *                  poblacionPrimerCenso:
 *                      type: number
 *                      description: poblacion en el primer censo
 *                  fechaUltimoCenso:
 *                      type: number
 *                      description: año del ultimo censo
 *                  poblacionUltimoCenso:
 *                      type: number
 *                      description: poblacion en el ultimo censo
 *                  srcImg:
 *                      type: string
 *                      description: url de imagen del departamento
 *          Error:
 *              type: object
 *              properties:
 *                  status:
 *                      type: number
 *                  level:
 *                      type: string
 *                      description: The level could be ERROR o INFO
 *                  description:
 *                      type: string
 *                  error:
 *                      type: array
 *                      items:
 *                          type: object
 *                          properties:
 *                              value:
 *                                  type: string
 *                              msg:
 *                                  type: string
 *                              param:
 *                                  type: string
 *                              location:
 *                                  type: string
 */

/**
* @swagger
* /departamentos:
*  get:
*      summary: Servicio que lista todos los departamentos que existen en la data
*      tags: [Departamento]
*      responses:
*          '200':
*              description: Listado de Departamentos
*              content:
*                  application/json:
*                      schema:
*                          type: object
*                          properties:
*                              status:
*                                  type: integer
*                              records:
*                                  type: array
*                                  items:
*                                      $ref: '#/components/schemas/Departamento'
*          '204':
*              description: Request success but no data
*              content:
*                  application/json:
*                      schema:
*                          $ref: '#/components/schemas/Error'                                  
*/
router.get('/', getAllDepartamentos);
router.get('/:deptoId', valiateDeptoId, getDepartamentoById);
router.post('/', createDepartamento);

module.exports = router;
