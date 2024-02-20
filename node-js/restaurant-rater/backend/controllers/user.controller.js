const User = require("../models")["User"];
const models = require("../models");

exports.getUserReviews = async (req, res) => {
  try {
    const user = await User.findOne({
      where: {
        id: req.params.userId,
      },
    });

    if (!user) {
      return res.sendErrorResponse("El Usuario no Existe", 404);
    }

    try {
      const userReviews = await user.getRestaurantReviews({
        include: [
          {
            model: models.Restaurant,
            attributes: ["id", "name"],
          },
        ],
      });

      if (userReviews.length === 0) {
        return res.sendErrorResponse("El Usuario no ha realizado ningun review", 404);
      }

      return res.sendSuccessResponse({reviews: userReviews, user: user});

    } catch (error) {
        return res.sendErrorResponse(error.message, 500);
    }
  } catch (error) {
    return res.sendErrorResponse(error.message, 500);
  }
};

exports.getUsers = async (req, res) => {
  try {
    const users = await User.findAll({
      where: {
        status: 1,
      },
    });

    if (users.length === 0) {
      return res.sendErrorResponse("No hay Usuarios registrados", 202);
    }

    return res.sendSuccessResponse(users);

  } catch (error) {
    return res.sendErrorResponse(error.message, 500);
  }
};

exports.updateUser = async (req, res) => {
  try {
    const user = await User.findOne({
      where: {
        id: req.params.userId,
      },
    });

    if (!user) {
      return res.sendErrorResponse("El Usuario no Existe", 404);
    }

    try {
        await user.update({ ...req.body });
        await user.save();

        return res.sendSuccessResponse(user);

    } catch (error) {
        
    }
  } catch (error) {
    return res.sendErrorResponse(error.message, 500);
  }
};
