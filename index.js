const express = require('express');
const cors = require('cors');
const { dbConnection } = require('./db/config');
require('dotenv').config();

const app = express();

//Cors
app.use(cors());

//conversion de datos a json
app.use( express.json() );

//Rutas
app.use('/list', require('./routes/lista.routes'));


//Conexion a base de datos
dbConnection();

//Asignando puerto a servidor
app.listen(process.env.PORT,()=>{
    console.log(`Servidor corriendo en el puerto ${process.env.PORT}`)
})

