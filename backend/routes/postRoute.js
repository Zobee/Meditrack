const router = require('express').Router()
const auth = require('./validateToken')
const User = require('../models/User.Model')

router.route('/').get(auth, (req,res) => {
    User.findById(req.user._id)
    .then(user => {
        res.json({user})
    })
})

module.exports = router