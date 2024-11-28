const { Sequelize } = require("sequelize");
require("dotenv").config()

const sequelize = new Sequelize(process.env.DATABASE_URL, {
  dialect: "postgres",
  protocol: "postgres",
  logging: false, // Optional: Disable logging
  dialectOptions: {
    ssl: {
      require: true, // Render uses SSL connections
      rejectUnauthorized: false, // Allows self-signed certificates
    },
  },
});

module.exports = sequelize;
