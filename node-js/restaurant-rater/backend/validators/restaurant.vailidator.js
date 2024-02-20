const {body, param} = require('express-validator');

exports.createRestaurantValidator = () => {
    return [
        body('name')
        .notEmpty()
        .withMessage('El nombre del Restaurante es obligatorio'),
        body('address')
        .notEmpty()
        .withMessage('La dirección del Restaurante es obligatoria!')
    ]
}

exports.getRestaurantByIdValidator = () => {
    return [
        param('restaurantId')
        .isUUID()
        .withMessage('El código del restaurante no es válido!')
    ]
}

