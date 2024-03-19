const jwt = require('jsonwebtoken');

function authenticateToken(req, res, next) {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];

    if(token == null) {
        return res.sendErrorResponse('El Usuario no esta autenticado', 401);
    }

    jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
        if(err) {
            return res.sendErrorResponse('Error al autenticar', 403);
        }
        req.user = user;
        next();
    });
}

module.exports = authenticateToken;
