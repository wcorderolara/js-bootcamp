const User = require("../../models")["User"];
const roles = require('../roles');

const checkRole = (requiredRoles) => async (req, res, next) => {
    const userId = req.body.userId || req.query.userId
    try {
        const user = await User.findByPk(userId);
        if(!user) {
            return res.sendErrorResponse('Usuario no identificado', 401);
        }

        const userRoles = roles[user.role];
        const isAllowed = requiredRoles.some( role => userRoles.includes(role));

        if(!isAllowed) {
            return res.sendErrorResponse('Usted no tiene permisos para esta acci[on', 403);
        }

        next();
    } catch (error) {
        console.error('Error en verificacion de roles', error.message);
        return res.sendErrorResponse(error.message, 500);
    }
}

module.exports = checkRole;
