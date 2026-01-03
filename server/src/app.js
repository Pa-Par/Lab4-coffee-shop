const express = require('express')
const app = express()

const { sequelize } = require('./models') 
const config = require('./config/config')

// Middleware
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// เรียกใช้ Routes
require('./routes')(app)

sequelize.sync({ force: false }).then(() => {
    app.listen(config.port, function () {
        console.log('Server started on port ' + config.port)
    })
}).catch((err) => {
    console.error('Unable to connect to the database:', err)
})