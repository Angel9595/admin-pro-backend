require('dotenv').config();
const express = require('express');
const {dbconnection}= require('./database/config')
const cors = require('cors');

//crear el servidor de express
const app = express();

//Base de datos
dbconnection();

//configurar cors
app.use(cors());

//rutas
app.get( '/', (req,res)=>{
    res.json({
        ok:true,
        msg:'Hola mundo'
    });
});


app.listen(process.env.PORT, ()=>{
  console.log('servidor corriendo en el puerto '+ process.env.PORT)
});