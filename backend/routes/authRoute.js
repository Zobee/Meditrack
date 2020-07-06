const User = require('../models/User.Model')
const validation = require('../validation')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

const router = require('express').Router()

//Test Route
router.route('/').get((req,res) => {
    res.json({data: "Dummy"})
})

//New User Route
router.route('/signup').post(async (req,res) => {
    //Make sure the inputs are valid
    let {error} = validation.validateSignup(req.body)
    if(error) return res.status(400).json(error.details[0].message)

    //Make sure the email isn't already in use
    const userExists = await User.findOne({email: req.body.email})
    if(userExists) return res.status(400).json("Email is already in use!")
    //Hash pw
    const salt = await bcrypt.genSalt(10)
    const hashPass = await bcrypt.hash(req.body.password, salt)

    const newUser = new User({
        username: req.body.username,
        email: req.body.email,
        password: hashPass
    })
    try{
        await newUser.save()
        res.json("New user added!")
    }catch{
        res.status(400).json("Error creating new user")
    }
    
})

//Log in route
router.route('/login').post(async (req,res) => {
    //Make sure the inputs are valid
    let {error} = validation.validateLogin(req.body)
    if(error) return res.status(400).json(error.details[0].message)
    
    //Ensure email is in db
    const user = await User.findOne({email: req.body.email})
    if(!user) return res.status(400).json({error : "Email does not exist!"})

    //Checks password
    const validPw = await bcrypt.compare(req.body.password, user.password)
    if(!validPw) return res.status(400).json("Password is invalid")

    //Create jwt
    const token = jwt.sign({_id: user._id}, process.env.SECRET_TOKEN)
    res.header('auth-token',token).send(token)

    //res.json(`Welcome, ${user.username}. Your token ${token}`)
})


module.exports = router