const express = require('express');
const cors = require('cors');
const authRoutes = require('./routes/auth');
require('dotenv').config();
const sequelize = require("./config/db.config");
const landRoutes = require('./routes/landRoutes');
const bodyParser = require('body-parser');

const app = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use(bodyParser.json());

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/lands', landRoutes);

app.get('/', (req, res) => {
    res.send('Backend is running');
});

const PORT = process.env.PORT || 5000;

// Sync database and start server
(async () => {
    try {
        // Sync the database (consider { force: true } for development resets)
        await sequelize.sync({ alter: true });
        console.log('Database & tables created!');

        // Authenticate the database connection
        await sequelize.authenticate();
        console.log('Backend connected to database');

        // Start server
        app.listen(PORT, () => {
            console.log(`App is running on port ${PORT}`);
        });
    } catch (error) {
        console.error('Error starting the server:', error);
        process.exit(1); // Exit the process if there's a critical error
    }
})();
sequelize.sync({ alter: true })
  .then(() => {
    console.log("User table synced successfully!");
  })
  .catch((err) => {
    console.error("Error syncing User table:", err);
  });
