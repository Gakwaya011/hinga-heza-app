const express = require('express');
const cors = require('cors');
require('dotenv').config({ path: './config/.env' });

const sequelize = require("./config/db.config");





const app = express();

app.use(cors());
app.use(express.json());


app.get('/', (req,res)=>{
    res.send('backend is running');
})

const PORT = process.env.PORT || 5000;

app.listen(PORT,async()=>{
    console.log(`app is running on ${PORT}` )
    try{
        await sequelize.authenticate();
        console.log('backend connected to database')
    }catch(e){
        console.error('failed to connect to database',error);

    }
})