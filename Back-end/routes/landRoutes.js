const express = require('express');
const router = express.Router();
const Land = require("../models/land"); // Assuming you have a Land model defined with Sequelize
const User = require("../models/user"); // Assuming you have a User model defined with Sequelize

// GET all lands
router.get("/", async (req, res) => {
  try {
    const lands = await Land.findAll(); // Sequelize query to find all lands
    res.json(lands);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// DELETE a land by ID
router.delete("/:id", async (req, res) => {
  try {
    const land = await Land.findByPk(req.params.id); // Sequelize query to find land by ID
    if (!land) return res.status(404).send("Land not found");

    await land.destroy(); // Sequelize method to delete the land
    res.json({ message: "Land deleted successfully" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// GET all users
router.get("/users", async (req, res) => {
  try {
    const users = await User.findAll(); // Sequelize query to find all users
    res.json(users);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
