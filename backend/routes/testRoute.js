const router = require('express').Router()
const start = new Date("2019/02/20")
let currDate;
//Set a number
router.route('/setTime').post((req,res) => {
    currDate = req.body.time
})
//Toggle countdown

//get current value
router.route("/time").get((req,res) => {
    res.json(currDate || new Date())
})

module.exports = router