const express = require('express');
const router = express.Router();
const {body, validationResult} = require('express-validator');
const bcrypt = require('bcryptjs');
const User = require('../models/User');
const jwt = require('jsonwebtoken');
const auth = require('../middleware/auth');

// @route POST api/auth
// @access Private
router.get('/', auth, async (req, res) => {
    try {
        const user = await User.findById(req.user.id).select("-password");
        return res.status(200).json(user);
    } catch (error) {
        console.log(error.message);
        return res.status(500).json({msg: "Server error"});
    }
})

// @route POST api/auth
// @access Public
router.post('/', [
    body('email', 'Please incude a valid email').isEmail(),
    body('password', 'Please incude a valid name').not().isEmpty(),
], async (req, res) => {
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        return res.status(400).json({msg: 'Bad credentials'});
    }

    let {email, password} = req.body;

    try {
        const user = await User.findOne({email});
        if (!user) return res.status(403).json({msg: 'Bad credentials'});
        const valid_password = await bcrypt.compare(password, user.password);

        if(!valid_password) return res.status(403).json({msg: 'Bad credential'});

        jwt.sign({user: {
            id: user._id
        }}, process.env.privateKey, {expiresIn: 100000}, function(err, token) {
            if (err) throw err;
            res.status(200).json({token});
          });

    } catch (error) {
        console.log(error.message);
    }
});

module.exports = router;