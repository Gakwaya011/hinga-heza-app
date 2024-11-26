const Sequelize = require('sequelize');
const sequelize = require('../config/db.config');

// Import models
const User = require('./user');
const Land = require('./land');

// Export models
module.exports = {
    User,
    Land,
    sequelize,
};
