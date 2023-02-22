const path = require('path')



const bodyParser = require('body-parser');
const express = require('express');
const cors = require('cors')

const app = express();

app.use(cors())

app.use(bodyParser.json({ extended: false }));

const sequelize = require('./utility/database')



const adminRoutes = require('./routes/admin')

app.use(adminRoutes)


sequelize.sync()
.then(result =>{
    // console.log(result)
    app.listen(3000)
}).catch(err =>console.log(err))