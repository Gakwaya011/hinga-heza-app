const {DataTypes} = require('sequelize');
const sequelize = require('../config/db.config');


const Land = sequelize.define(Land, {
    area: {
        type:DataTypes.FLOAT,
        allowNull:false,
    },
    soilQality: {
        type:DataTypes.STRING,
        allowNull:false,
    },
    waterAvailability:{
        type:DataTypes.STRING,
        allowNull:false,
    },
    climate:{
        type:DataTypes.STRING,
        allowNull:false,
    },
    description:{
        type: DataTypes.TEXT,
    },
} );
module.exports = Land;