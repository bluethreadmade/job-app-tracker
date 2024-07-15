const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Interview extends Model {}

Interview.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        date: {
            type: DataTypes.DATE,
            allowNull: false,
        },
        address: {
            type: DataTypes.STRING,
        },
        video_link: {
            type: DataTypes.STRING,
        },
        interviewer: {
            type: DataTypes.STRING,
        },
        notes: {
            type: DataTypes.STRING,
        },
        application_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            unique: false,
            references: {
                model: 'application',
                key: 'id',
            },
        },
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'interview',
    }
);

module.exports = Interview;
