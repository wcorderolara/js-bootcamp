const RestaurantReview = require("../models")["RestaurantReview"];
const models = require("../models");

exports.createRestaurantReview = async (req, res) => {
  try {
    const review = await RestaurantReview.create({ ...req.body });

    if (!review) {
      return res.sendErrorResponse("Error al agregar reseña", 500);
    }

    return res.sendSuccessResponse(review, 201);
  } catch (error) {
    return res.sendErrorResponse(error.message, 500);
  }
};

exports.getReviewsByRestaurant = async (req, res) => {
  try {
    const reviews = await RestaurantReview.findAll({
      where: {
        restaurant_id: req.params.restaurantId,
      },
      include: [
        {
          model: models.User,
          attributes: ["id", "username"],
        },
      ],
    });

    if (reviews.length === 0) {
      return res.sendErrorResponse("No hay Reseñas para este Restaurante", 202);
    }

    return res.sendSuccessResponse(reviews);
  } catch (error) {
    return res.sendErrorResponse(error.message, 500);
  }
};

exports.putRestaruantReview = async (req, res) => {
  try {
    const review = await RestaurantReview.findOne({
      where: {
        id: req.params.reviewId,
      },
    });

    if (!review) {
      return sendResponse(res, 404, {
        message: "La reseña solicitada no existe",
      });
    }

    try {
      await review.update({ ...req.body });
      await review.save();

      return sendResponse(res, 200, { data: review });

    } catch (error) {
      return res.sendErrorResponse(error.message, 500);
    }
  } catch (error) {
    return res.sendErrorResponse(error.message, 500);
  }
};
