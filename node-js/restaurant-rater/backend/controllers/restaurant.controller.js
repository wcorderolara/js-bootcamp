/**
 * CRUD = Create Read Update Delete
 */
const Restaurant = require('../models')['Restaurant'];
const {sequelize} = require('../models');

exports.getRestaurants = async(req, res) => {
    try {
        const restaurants = await Restaurant.findAll({
            where: {
                status: 1
            }
        });

        if(restaurants.length === 0) {
            return res.sendSuccessResponse([], 204);
        }

        return res.sendSuccessResponse(restaurants, 200);

    } catch (error) {
        return res.sendErrorResponse(error.message, 500);
    }
}

exports.createRestaurant = async(req, res) => {
    try {
        const restaurantItem = await Restaurant.create({
            name: req.body.name,
            address: req.body.address
        })

        if(!restaurantItem) {
            return res.sendErrorResponse('Error al crear el Restaurant', 500);
        }

        return res.sendSuccessResponse(restaurantItem, 201);

    } catch (error) {
        return res.sendErrorResponse(error.message, 500);
    }
}

exports.massiveCreate = async(req, res) => {
    const t =  await sequelize.transaction();
    try {
        const restaurantItems =  await Restaurant.bulkCreate(req.body.restaurants, {transaction: t});
        await t.commit();

        return res.sendSuccessResponse(restaurantItems, 201);

    } catch (error) {
        await t.rollback();
        return res.sendErrorResponse(error.message, 500);
    }
}

exports.getRestaurantById = async(req, res) => {
    try {
        const restaurantItem = await Restaurant.findOne({
            where: {
                id: req.params.restaurantId
            }
        });

        if(!restaurantItem) {
            return res.sendErrorResponse('El Restaurante solicitado no existe', 404);
        }

        return res.sendSuccessResponse(restaurantItem);

    } catch (error) {
        return res.sendErrorResponse(error.message, 500);
    }
}

exports.putRestaurant = async(req, res) => {
    try {
        const restaurantItem = await Restaurant.findOne({
            where: {
                id: req.params.restaurantId
            }
        });

        if(!restaurantItem) {
            return res.sendErrorResponse('El Restaurante solicitado no existe', 404);
        }

        try {
            await restaurantItem.update({...req.body});
            await restaurantItem.save();
            return res.sendSuccessResponse(restaurantItem);
        } catch (error) {
            return res.sendErrorResponse(error.message, 500);
        }

    } catch (error) {
        return res.sendErrorResponse(error.message, 500);
    }
}

