const express = require('express');
const app = express();
const route = require('./routes/atelier/atelier.route');
const cors = require('cors');
const mongoose = require('mongoose');

mongoose
    .connect(`mongodb://127.0.0.1:27017/ateliers`,{
        useNewUrlParser:true,
        useUnifiedTopology:true,
    })
    .then(init);

async function init()
{
    app.use(cors());
    app.use('/',route);
    
    app.listen(5000,()=>{console.log("Le serveur est sur le port 5000")})
}





