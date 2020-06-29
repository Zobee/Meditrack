const router = require('express').Router()

router.route('/').get((req,res) => {
    console.log("Get all Users");
    res.json({users: ["Ass","Brass","Crass"]})
})

router.route('/').post((req,res) => {
    console.log("Create a new user");
})

router.route('/:id').get((req,res) => {
    console.log("Get a particular user");
})

module.exports = router