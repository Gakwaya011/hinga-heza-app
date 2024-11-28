const { DataTypes } = require('sequelize');
const sequelize = require('../config/db.config');  // Ensure proper connection import

const Land = sequelize.define('Land', {
  area: {
    type: DataTypes.FLOAT,
    allowNull: false,
    validate: {
      min: 0, // Ensures the area is a positive number
    }
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
  imageUrl: {
    type: DataTypes.STRING,
    allowNull: true,  // Allow null in case an image isn't uploaded
  },
}, {
  timestamps: false, // Optional: Disable automatic timestamps
});

module.exports = Land;
