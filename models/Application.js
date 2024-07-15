// import parts of sequelize library
const { Model, DataTypes } = require('sequelize');
// import database connection from config.js
const sequelize = require('../config/connection');

// initialize User model by extending sequelize Model class
class Application extends Model {}

const APPLICATION_STATUS = {
    APPLIED: 1,
    INTERVIEW_SCHEDULED: 2,
    INTERVIEWED: 3,
    ON_HOLD: 4,
    OFFER_RECEIVED: 5,
    OFFER_ACCEPTED: 6,
    OFFER_REJECTED: 7,
    APPLICATION_REJECTED: 8,
};

const WORK_SITE = {
    ON_SITE: 1,
    HYBRID: 2,
    REMOTE: 3,
};

// fields and rules for User model
Application.init(
    {
        //define columns
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        company: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        position: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        link_to_posting: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        status: {
            type: DataTypes.INTEGER,
            allowNull: false,
            validate: {
                min: 1,
                // Use the application status object as an enum
                max: Object.keys(APPLICATION_STATUS).length,
            },
        },
        location: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        interest_level: {
            type: DataTypes.INTEGER,
            validate: {
                min: 1,
                max: 5,
            },
        },
        notes: {
            type: DataTypes.TEXT,
        },
        response_received_date: {
            type: DataTypes.DATE,
            validate: { isDate: true },
        },
        application_submitted_date: {
            type: DataTypes.DATE,
            allowNull: false,
            validate: { isDate: true },
        },
        work_site: {
            type: DataTypes.INTEGER,
            allowNull: false,
            validate: {
                min: 1,
                max: Object.keys(WORK_SITE).length,
            },
        },
        user_id: {
            type: DataTypes.INTEGER,
            unique: false,
            allowNull: false,
            references: {
                model: 'user',
                key: 'id',
            },
        },
    },
    {
        freezeTableName: true,
        modelName: 'application',
        timestamps: true,
        underscored: true,
        sequelize,
        // Keep track of when the post was created and updated
        createdAt: true,
        updatedAt: true,
    }
);

module.exports = {
    Application,
    APPLICATION_STATUS,
    WORK_SITE,
};
