const { validationResult } = require('express-validator');

exports.handleValidationResult = (req, res, next) => {
    const errors = validationResult(req);
    if(!errors.isEmpty()) {
        return res.sendErrorResponse(errors.array()[0].msg, 400);
    }

    next();
}
