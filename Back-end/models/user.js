const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../config/db.config');  // Ensure proper connection import

const User = sequelize.define('User', {
  email: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  role: {
    type: DataTypes.ENUM('buyer', 'seller', 'admin'),
    defaultValue: 'buyer',
  },
}, {
  timestamps: true,
  tableName: 'users',  // Explicitly specify table name
});

module.exports = User;
