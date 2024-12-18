const bcrypt = require("bcrypt");
const { DataTypes } = require("sequelize");
const sequelize = require("../config/db.config");

const User = sequelize.define(
  "User",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    username: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        isEmail: true, // Validates email format
      },
    },
    password: {
      type: DataTypes.STRING,
      allowNull: true, // Allow null for Google-authenticated users
    },
    role: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: "user", // Default to 'user'
      validate: {
        isIn: [["user", "admin"]], // Limit roles to specific values
      },
    },
  },
  {
    tableName: "users",
    timestamps: true, // Automatically adds createdAt & updatedAt
    underscored: true,
    hooks: {
      beforeCreate: async (user) => {
        // Automatically hash password before saving
        if (user.password) {
          user.password = await bcrypt.hash(user.password, 10);
        }
      },
      beforeUpdate: async (user) => {
        // Rehash password if it is modified
        if (user.changed("password")) {
          user.password = await bcrypt.hash(user.password, 10);
        }
      },
    },
  }
);

module.exports = User;
