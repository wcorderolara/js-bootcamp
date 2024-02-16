'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
    class User extends Model {
        static associate(models) {
            User.hasMany(models.RestaurantReview, {
                foreignKey: {
                    name: 'user_id',
                    allowNull: false
                }
            })
        }
    }

    User.init(
        {
            id: {
                type: DataTypes.UUID,
                defaultValue: DataTypes.UUIDV4,
                primaryKey: true,
                allowNull: false,
                field: 'user_id'
            },
            username: {
                type: DataTypes.STRING(50),
                allowNull: false,
                unique: true
            },
            email: {
                type: DataTypes.STRING(75),
                allowNull: false,
                validate: {
                    isEmail: true
                },
                unique: true
            },
            salt: {
                type: DataTypes.STRING,
                allowNull: true
            },
            hash: {
                type: DataTypes.STRING,
                allowNull: true
            },
            role: {
                type: DataTypes.STRING,
                allowNull: true,
                defaultValue: 'visitor'
            },
            status: {
                type: DataTypes.BOOLEAN,
                defaultValue: true
            }
        }, {
            sequelize,
            modelName: 'User',
            tableName: 'user',
            underscored: true,
            freezeTableName: true
        }
    );

    return User;
};
