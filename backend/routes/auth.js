const express = require('express')
const router = express.Router()
const User = require('./../models/Users')
const { body, validationResult } = require('express-validator')
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken')

const JWT_SECRET = "thisismyCode";

router.post('/createuser', [
    body('name').isLength({ min: 3 }),
    body('email').isEmail(),
    body('password').isLength({ min: 5 })
], async (req, res) => {
    const errors = validationResult(req);
    // if there are errors return bad request
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    try {
        //check weather user with this email exits
        let user = await User.findOne({ email: req.body.email })
        if (user) {
            return res.status(400).json({ error: "sorry user exsit with this email" })
        }
        const salt = await bcrypt.genSalt(10);
        const secPass = await bcrypt.hash(req.body.password,salt)
        user = await User.create({
            name: req.body.name,
            email: req.body.email,
            password: secPass
        })
        const data ={
            user:{
                id : user.id
            }
        }
        const authToken = jwt.sign(data, JWT_SECRET)
        // res.json(user)
        res.json({authToken})
    }
    catch (error) { 
        // console.log(err);
        res.json({ error: "please ", message: error.message })
    }
})

module.exports = router