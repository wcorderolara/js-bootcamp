const Schedule = require('../models')['RestaurantSchedule'];
const {sequelize} = require('../models');

exports.createRestaurantSchedule = async (req, res) => {
    try {
        const schedule = await Schedule.create({
            ...req.body
        });

        if(!schedule) {
            return res.sendErrorResponse('Error al crear el horario para el restaurante', 500);
        }

        return res.sendSuccessResponse(schedule, 201);

    } catch (error) {
        return res.sendErrorResponse(error.message, 500);
    }
}

exports.bulkRestaurantSchedule = async(req, res) => {
    const t = await sequelize.transaction();
    try {
        const schedules = await Schedule.bulkCreate(req.body.schedules, {transaction: t});
        await t.commit();

        return res.sendSuccessResponse(schedules, 201);

    } catch (error) {
        await t.rollback();
        return res.sendErrorResponse(error.message, 500);
    }
}

exports.getRestaurantSchedule = async(req, res) => {
    try {
        const schedules = await Schedule.findAll({
            where: {
                restaurant_id: req.params.restaurantId
            }
        });

        if(schedules.length === 0) {
            return res.sendErrorResponse('No hay horarios para este restaurante', 202);
        }

        return res.sendSuccessResponse(schedules);
    } catch (error) {
        return res.sendErrorResponse(error.message, 500);
    }
}
