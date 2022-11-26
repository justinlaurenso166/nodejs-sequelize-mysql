const express = require("express") //import express
const cors = require("cors") // import cors
const app = express()
const port = 8080 // make port 8080

const db = require("./config/database") // import database config
const MahasiswasRoutes = require('./routes/MahasiswaRoute.js') // import MahasiswaRoute

app.use(cors())

app.use(express.json())

app.use(express.urlencoded({ extended: true }))

app.use('/Mahasiswa', MahasiswasRoutes)

db.authenticate().then(() => {
    console.log('Connection has been established successfully.');
}).catch((error) => {
    console.error('Unable to connect to the database: ', error);
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`)
})