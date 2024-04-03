const User = require("../models")["User"];
const crypto = require('crypto');
const jwt = require('jsonwebtoken');

exports.createUser = async (req, res) => {
    try {
        const {username, email, password} = req.body
        const salt = crypto.randomBytes(16).toString('hex');
        const hash = crypto.pbkdf2Sync(password, salt, 1000, 64, 'sha512').toString('hex');

        const user = await User.create({
            username,
            email,
            salt,
            hash
        });

        if(user) {
            const token = jwt.sign({userId: user.id, role: user.role}, process.env.JWT_SECRET, {expiresIn: '1d'});
            res.sendSuccessResponse({token, user: {username: user.username, role: user.role, id: user.id, email: user.email}}, 201);
        }

    } catch (error) {
        let message
        if(error.parent.code == 'ER_DUP_ENTRY' && error.errors[0].path == 'email') {
            message = "El correo electronico ya tiene una cuenta creada"
        } else {
            message = error.message;
        }
        console.log(message);
        res.sendErrorResponse(message, 500);
    }
};

exports.loginUser = async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await  User.findOne({ where: { email }});
        
        if(!user) {
            return res.sendErrorResponse('El usuario no existe', 404);
        }
        
        const hash = crypto.pbkdf2Sync(password, user.salt, 1000, 64, 'sha512').toString('hex');
        if(user.hash !== hash) {
            return res.sendErrorResponse('La contraseña no es correcta', 401);
        }

        if (user) {
            const token = jwt.sign({userId: user.id, role: user.role}, process.env.JWT_SECRET, {expiresIn: '1d'});
            const refreshToken = jwt.sign({userId: user.id, role: user.role}, process.env.JWT_REFRESH_TOKEN, {expiresIn: '7d'});

            user.refreshToken = refreshToken;
            await user.save();
            return res.sendSuccessResponse({token, user: {username: user.username, role: user.role, id: user.id, email: user.email}});
        }

    } catch (error) {
        res.sendErrorResponse(error.message, 500);
    }
};

exports.token = async(req, res) => {
    const { refreshToken } = req.body;

    if(refreshToken == null) {
        return res.sendErrorResponse('No tiene refresh Token', 401);
    }

    const user = await User.findOne({where: { refreshToken }});

    if(!user) {
        return res.sendErrorResponse('Refresh Token Invalido', 403);
    }

    jwt.verify(refreshToken, process.env.JWT_REFRESH_TOKEN, (err, user) => {
        if (err) {
            return res.sendErrorResponse('Refresh Token invalido', 403);
        }
        const token = jwt.sign({userId: user.id, role: user.role}, process.env.JWT_SECRET, {expiresIn: '5m'});
        return res.sendSuccessResponse({token});
    })
}

exports.logout = async(req, res) => {
    const {refreshToken} = req.body;
    const user = await User.findOne({where: {refreshToken}});
    if(user) {
        user.refreshToken = null;
        await user.save();
    }
    res.sendStatus(204);
}


