const RestaurantFacility = require('../models')['RestaurantFacility'];
const { Op } = require('sequelize');
const {sequelize} = require('../models');

exports.getFacilities = async (req, res) => {
    try{
        const facilities = await RestaurantFacility.findAll({
            where: {
                [Op.and]: [
                    {restaurant_id: req.params.restaurantId},
                    {status: 1}
                ]
            }
        })

        if(facilities.length === 0) {
            return res.sendErrorResponse('No hay Amenidades para este Restaurante', 202);
        }

        return res.sendSuccessResponse(facilities);

    }catch(error){
        return res.sendErrorResponse(error.message, 500);
    }
}

exports.createFacility = async (req, res) => {
    try {
        const facility = await RestaurantFacility.create({
            description: req.body.description
        });

        if(!facility) {
            return res.sendErrorResponse('Error al crear el facility', 500);
        }

        return res.sendSuccessResponse(facility, 201);

    } catch (error) {
        return res.sendErrorResponse(error.message, 500);
    }
}

exports.massiveCreate = async(req, res) => {
    const t = await sequelize.transaction();
    try{
        const facilities = await RestaurantFacility.bulkCreate(req.body.facilities, {transaction: t});
        await t.commit();

        return res.sendSuccessResponse(facilities, 201);

    }catch(error){
        await t.rollback();
        return res.sendErrorResponse(error.message, 500);
    }
}

exports.putFacility = async (req, res) => {
    try{
        const facility = await RestaurantFacility.findOne({
            where: {
                id: req.params.facilityId
            }
        });

        if(!facility) {
            return res.sendErrorResponse('Esta Amenidad no existe', 404);      
        }

        try {
            await facility.update({...req.body});
            await facility.save();
            return res.sendSuccessResponse(facility);
        } catch (error) {
            return res.sendErrorResponse(error.message, 500);
        }

    }catch(error) {
        return res.sendErrorResponse(error.message, 500);        
    }
}

