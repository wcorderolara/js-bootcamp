"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Restaurant extends Model {
    static associate(models) {
      Restaurant.hasMany(models.RestaurantFacility, {
        foreignKey: {
          name: "restaurant_id",
          allowNull: false,
        },
      });

      Restaurant.hasMany(models.RestaurantSchedule, {
        foreignKey: {
          name: 'restaurant_id',
          allowNull: false
        }
      });

      Restaurant.hasMany(models.RestaurantReview, {
        foreignKey: {
          name: 'restaurant_id',
          allowNull: false
        }
      })
    }
  }
  Restaurant.init(
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
        allowNull: false,
        field: "restaurant_id",
      },
      name: {
        type: DataTypes.STRING(80),
        allowNull: false,
        field: "restaurant_name",
      },
      logo: {
        type: DataTypes.STRING(185),
        allowNull: true,
        field: "restaurant_logo",
      },
      address: {
        type: DataTypes.STRING,
        allowNull: false,
        field: "restaurant_address",
      },
      status: {
        type: DataTypes.BOOLEAN,
        defaultValue: true,
      },
    },
    {
      sequelize,
      modelName: "Restaurant",
      tableName: "restaurant",
      freezeTableName: true,
      underscored: true,
    }
  );
  return Restaurant;
};
