const { Sequelize } = require('sequelize');
require('dotenv').config();

const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASS, {
  host: process.env.DB_HOST,
  dialect: 'mysql',
});
console.log(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASS, process.env.DB_HOST);


module.exports = sequelize;
