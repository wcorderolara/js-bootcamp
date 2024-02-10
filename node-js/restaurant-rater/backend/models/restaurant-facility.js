'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class RestaurantFacility extends Model {
    static associate(models) {
      RestaurantFacility.belongsTo(
        models.Restaurant,
        {
          foreignKey: {
            name: 'restaurant_id',
            allowNull: false
          }
        }
      )
    }
  }
  RestaurantFacility.init({
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
      allowNull: false,
      field: 'facility_id'
    },
    description: {
      type: DataTypes.STRING(45),
      allowNull: false,
    },
    status: {
      type: DataTypes.BOOLEAN,
      defaultValue: true
    }
  }, {
    sequelize,
    modelName: 'RestaurantFacility',
    tableName: 'restaurant_facility',
    freezeTableName: true,
    underscored: true
  });
  return RestaurantFacility;
};