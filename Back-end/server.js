const express = require('express');
const cors = require('cors');
const authRoutes = require('./routes/auth');
require('dotenv').config();
const sequelize = require("./config/db.config");

const app = express();

//Middleware to set headers for all responses
app.use((req, res, next) => {
    res.setHeader('Cross-Origin-Opener-Policy', 'same-origin-allow-popups');
    res.setHeader('Cross-Origin-Embedder-Policy', 'require-corp');
    next();
  });
  

app.use(cors());
app.use(express.json());
app.use('/api/auth', authRoutes);



  

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
    