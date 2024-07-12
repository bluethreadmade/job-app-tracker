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
        validate: {
            isIn: [['Applied', 'Interview Scheduled', 'Interviewed', 'On Hold', 'Offer Received', 'Offer Accepted', 'Offer Rejected', 'Application Rejected']],
        }
    },
    location: {
        type: DataTypes.STRING,      
        allowNull: false,
    },
    interest_level: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            isIn: [['1', '2', '4', '4', '5']],
        }
    },
    notes: {
        type: DataTypes.TEXT,
        allowNull: true,
    },
    response_received_date: {
        type: DataTypes.DATE,      
        allowNull: true,
        validate: {
            isDate: true,
        }
    },
    application_submitted_date: {
        type: DataTypes.DATE,      
        allowNull: false,
        validate: {
            isDate: true,
        }
    },
    // // calculate time between application_submitted_date and response_received_date
    // weeks_between_app_res: {
    //     type: DataTypes.STRING,      
    //     allowNull: false,

    // },
    work_site: {
        type: DataTypes.STRING,      
        allowNull: false,
        validate: {
            isIn: [['On-Site', 'Hybrid', 'Remote']],
        }
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
