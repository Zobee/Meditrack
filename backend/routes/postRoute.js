const router = require('express').Router()
const auth = require('./validateToken')
const User = require('../models/User.Model')

//Get user info
router.route('/').get(auth, (req,res) => {
    User.findById(req.user._id)
    .then(user => {
        res.json({user})
    })
    .catch(err => {
        res.status(400).json(`Error ${err}`)
    })
})

//Add meditation to user's meditation history
router.route('/addMeditation').post(auth, (req,res) => {
    User.findById(req.user._id)
    .then(user => {
        user.character.status.meditationHistory.push(
            {
                Date: Date.now(),
                duration: req.body.duration
            }
        )
        user.save()
        .then(() => res.json("Meditation Added"))
        .catch(err => res.status(400).json(`Error ${err}`))
    })
    .catch(err => res.status(400).json(`Error ${err}`))
})

//Update character info
router.route('/update').post(auth, (req,res) => {
    User.findById(req.user._id)
    .then(user => {
        req.body.name ? user.character.name = req.body.name : user.character.name
        user.save()
        .then(() => res.json("Character Updated"))
        .catch(err => res.status(400).json(`Error ${err}`))
    })
    .catch(err => res.status(400).json(`Error ${err}`))
})

//delete account
router.route('/delete').delete(auth, (req,res) => {
    User.findByIdAndDelete(req.user._id)
    .then(res.json("User Deleted!"))
    .catch(err => {
        res.status(400).json(`Error ${err}`)
    })
})

module.exports = router