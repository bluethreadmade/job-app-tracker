// import parts of sequelize library
const { Model, DataTypes } = require('sequelize');
// import database connection from config.js
const sequelize = require('../config/connection');
// import bcrypt
const bcrypt = require('bcrypt');

// initialize User model by extending sequelize Model class
class User extends Model {
    checkPassword(loginPw) {
        return bcrypt.compare(loginPw, this.password);
    }
}

// fields and rules for User model
User.init(
    {
        //define columns
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
            validate: {
                isEmail: true,
            },
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [6, 14],
                isAlphanumeric: true,
            },
        },
    },
    {
        hooks: {
            beforeCreate: async (newUserData) => {
                newUserData.password = await bcrypt.hash(
                    newUserData.password,
                    10
                );
                return newUserData;
            },
            beforeUpdate: async (updatedUserData) => {
                if (updatedUserData.is_changed('password')) {
                    updatedUserData.password = await bcrypt.hash(
                        updatedUserData.password,
                        10
                    );
                }
                return updatedUserData;
            },
        },
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'user',
    }
);

module.exports = User;
