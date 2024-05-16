const express = require('express');
const app = express()
const cors = require('cors')
const db = require("./database/db")
require('dotenv').config()

//rutas
const general = require('./routes/general.routing');
const andamios = require('./routes/andamios.routing');
const admin = require('./routes/admin.routing');
const api = require('./routes/api.routing');

db.checkDatabaseConnection().then(() => {
    app.use(cors({
        methods: ['GET', 'POST', 'PUT', 'DELETE'],
        credentials: true
    }))

    app.use('/general', general);
    app.use('/andamios', andamios);
    app.use('/admin', admin);
    app.use('/api', api);


    /* INICIA EL SERVIDOR CON HTTP POR EL SOCKET*/
    app.listen(process.env.PORT_SYS, function () {
        console.log("Server On "+process.env.PORT_SYS);
    })
}).catch(error => {
    console.log("DB error- " + error)
})

