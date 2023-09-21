const express = require('express')
const router = express.Router()
const User = require('./../models/Users')
const { body, validationResult } = require('express-validator')


router.post('/', [
    body('name').isLength({ min: 3 }),
    body('email').isEmail(),
    body('password').isLength({ min: 5 })
], (req, res) => {
const errors = validationResult(req);
if(!errors.isEmpty()){
    return res.status(400).json({errors: errors.array() });
}  
User.create({
    name: req.body.name,
    email: req.body.email,
    password: req.body.password
  }).then(user => res.json(user));
})

module.exports = router