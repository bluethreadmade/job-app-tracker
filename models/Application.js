// import parts of sequelize library
const { Model, DataTypes } = require('sequelize');
// import database connection from config.js
const sequelize = require('../config/connection');

// initialize User model by extending sequelize Model class
class Application extends Model {}

// fields and rules for User model
Application.init(
  {
    //define columns
    id: {
      type: Datatypes.INTEGER,
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
        type: DataTypes.STRING,
        allowNull: false,


    },
    location: {
        type: DataTypes.STRING,      
        allowNull: false,


    },
    interest_level: {
        type: DataTypes.STRING,
        allowNull: false,


    },
    notes: {
        type: DataTypes.TEXT,
        allowNull: false,


    },
    response_received_date: {
        type: DataTypes.STRING,      
        allowNull: false,


    },
    applicaiton_submitted_date: {
        type: DataTypes.DATE,      
        allowNull: false,


    },
    weeks_between_app_res: {
        type: DataTypes.STRING,      
        allowNull: false,


    },
    work_site: {
        type: DataTypes.STRING,      
        allowNull: false,


    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'application',
  }
);
