const express = require('express')
const moment = require('moment')

const app = express()

const logger = (req,res,next) => {
    let log = `LOG : ${req.protocol}://${req.get('host')}${req.originalUrl}: ${moment().format().substring(0,10)}`;
    console.log(log);
    next()
}

//app.use(express.json())
//app.use(logger)


app.get('/', (req,res) => {
    res.send("Hello")
})



const PORT = process.env.PORT || 5000
app.listen(PORT, () => {
    console.log(`Server running on port: ${PORT}`);
})