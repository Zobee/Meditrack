const express = require('express')
const moment = require('moment')
const mongoose = require('mongoose')
const dotenv = require('dotenv')
const cors = require('cors')

dotenv.config()

const app = express()


const logger = (req,res,next) => {
    let log = `LOG : ${req.protocol}://${req.get('host')}${req.originalUrl}: ${moment().format().substring(0,10)}`;
    console.log(log);
    next()
}

//app.use(logger)
app.use(cors())
app.use(express.json())


const authRoute = require('./routes/authRoute')
const postRoute = require('./routes/postRoute')
const test = require('./routes/testRoute')

mongoose.connect(
    process.env.DB_URI, 
    {useUnifiedTopology: true, useNewUrlParser: true}, 
    ()=>console.log("Connected to DB."))

app.use('/api/users', authRoute)
app.use('/posts', postRoute)
app.use('/test', test)

const PORT = process.env.PORT || 5000
app.listen(PORT, () => {
    console.log(`Server running on port: ${PORT}`);
})