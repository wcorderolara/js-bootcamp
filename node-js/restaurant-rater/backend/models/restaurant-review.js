"use strinct";

const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
    class RestaurantReview extends Model {
        static associate(models) {
            RestaurantReview.belongsTo( models.Restaurant, {
                foreignKey: {
                    name: 'restaurant_id',
                    allowNull: false
                }
            });
            RestaurantReview.belongsTo(models.User, {
                foreignKey: {
                    name: 'user_id',
                    allowNull: false
                }
            })
        }
    }

    RestaurantReview.init(
        {
            id: {
                type: DataTypes.UUID,
                defaultValue: DataTypes.UUIDV4,
                primaryKey: true,
                allowNull: false,
                field: 'review_id',
            },
            rating: {
                type: DataTypes.INTEGER,
                defaultValue: 1
            },
            textReview: {
                type: DataTypes.STRING(500),
                allowNull: false,
                field: 'text_review'
            }
        }, {
            sequelize,
            modelName: 'RestaurantReview',
            tableName: 'restaurant_review',
            freezeTableName: true,
            underscored: true,
        }
    )
    
    return RestaurantReview;
}
