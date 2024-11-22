const { DataTypes } = require('sequelize');
const sequelize = require('../config/db.config');
const Land = require('./land');

const LandListing = sequelize.define('LandListing', {
    price: {
        type: DataTypes.FLOAT,
        allowNull: false,
    },
    status: {
        type: DataTypes.ENUM('available', 'sold', 'pending'),
        defaultValue: 'available',
    },
    dateListed: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW,
    },
});

// Associations
LandListing.belongsTo(Land, {
    foreignKey: 'LandId',
    as: 'land',
});

Land.hasMany(LandListing, {
    foreignKey: 'LandId',
    as: 'listings',
});

module.exports = LandListing;
