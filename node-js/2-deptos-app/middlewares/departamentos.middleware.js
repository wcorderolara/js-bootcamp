exports.valiateDeptoId = (req, res, next) => {
    if(isNaN(parseInt(req.params.deptoId, 10))) {
        res.status(400).json({
            status: 400,
            message: "El parametro debe ser numero entero positivo"
        })
    }else {
        next();
    }
}
