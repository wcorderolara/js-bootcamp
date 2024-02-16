"use strict"
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
    class RestaurantSchedule extends Model {
        static associate(models) {
            RestaurantSchedule.belongsTo(models.Restaurant, {
                foreignKey: {
                    name: 'restaurant_id',
                    allowNull: false
                }
            })
        }
    }

    RestaurantSchedule.init (
        {
            id: {
                type: DataTypes.UUID,
                defaultValue: DataTypes.UUIDV4,
                primaryKey: true,
                allowNull: false,
                field: 'schedule_id',
            },
            days: {
                type: DataTypes.STRING,
                allowNull: false
            },
            schedule: {
                type: DataTypes.STRING,
                allowNull: false
            },
            status: {
                type: DataTypes.BOOLEAN,
                defaultValue: true
            }
        },{
            sequelize,
            modelName: "RestaurantSchedule",
            tableName: "restaurant_schedule",
            underscored: true,
            freezeTableName: true
        }
    );
    return RestaurantSchedule;
}
