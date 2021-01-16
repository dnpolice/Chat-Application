const express = require('express');
const router = express.Router();
const {body, validationResult} = require('express-validator');
const bcrypt = require('bcryptjs');
const User = require('../models/User');
const jwt = require('jsonwebtoken');

// @route POST api/users
// @access Public
router.post('/', [
    body('name', 'Please incude a valid name').not().isEmpty(),
    body('email', 'Please incude a valid email').isEmail(),
    body('password', 'Please incude a valid name').not().isEmpty(),
], async (req,res) => {
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        return res.status(400).json({msg: 'Bad credentials'});
    }

    let {name, email, password} = req.body;

    try {
        let user = await User.findOne({email});
        if(user) return res.status(400).json({msg: 'User already exists'});
        
        const salt = await bcrypt.genSalt(10);

        password = await bcrypt.hash(password, salt);

        user = new User({
            name,
            email,
            password
        })

        await user.save();

        jwt.sign({user: {
            id: user._id
        }}, process.env.privateKey, { expiresIn: 100000}, (err, token) => {
            if (err) throw err;
            res.status(200).json({token});
          });

    } catch (error) {
        console.log(error.message);
    }
});

module.exports = router;