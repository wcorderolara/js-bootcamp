module.exports = (req, res, next) => {
    res.sendSuccessResponse = (data, status = 200) => {
        res.status(status).json({
            status,
            data
        });
    };

    res.sendErrorResponse = (message, status = 400) => {
        res.status(status).json({
            status,
            message
        });
    };

    next();
}
