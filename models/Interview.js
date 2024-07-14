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
    time: {
      type: DataTypes.TIME,
      allowNull: false,
    },
    address: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    video_link: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    interviewer: {
        type: DataTypes.STRING,      
        allowNull: true,
    },
    notes: {
        type: DataTypes.STRING,      
        allowNull: true,
    },
    application_id: {
        type: DataTypes.INTEGER,
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

