const { DataTypes } = require('sequelize');
const sequelize = require('../config/db.config');

const Land = sequelize.define('Land', {
    area: {
        type: DataTypes.FLOAT,
        allowNull: false,
    },
    soilQuality: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    waterAvailability: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    climate: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    description: {
        type: DataTypes.TEXT,
    },
    imageUrl: { // NEW FIELD
        type: DataTypes.STRING,
        allowNull: true, // Allow null in case an image isn't uploaded
    },
});

module.exports = Land;
