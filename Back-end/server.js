// app.js

const express = require('express');
const cors = require('cors');
const authRoutes = require('./routes/auth');
require('dotenv').config();
const sequelize = require("./config/db.config");
const landRoutes = require('./routes/landRoutes');
const bodyParser = require('body-parser');


const app = express();

app.use(cors());
app.use(express.json());
app.use(bodyParser.json());

// Use routes
app.use('/api/auth', authRoutes);
app.use('/api/lands', landRoutes); // Make sure the land routes are used


app.get('/', (req, res) => {
    res.send('Backend is running');
});

const PORT = process.env.PORT || 5000;

sequelize.sync({ alter: true })
    .then(() => {
        console.log('Database & tables created!');
    })
    .catch(err => {
        console.error('Error syncing the database:', err);
    });

app.listen(PORT, async () => {
    console.log(`App is running on port ${PORT}`);
    try {
        await sequelize.authenticate();
        console.log('Backend connected to database');
    } catch (e) {
        console.error('Failed to connect to database:', e);
    }
});
