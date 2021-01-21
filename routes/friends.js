const express = require('express');
const router = express.Router();
const {body, validationResult} = require('express-validator');
const User = require('../models/User');
const auth = require('../middleware/auth');

// @route POST api/friends
//Should be PUT
// @access Private
// @desc Add a friend
router.post('/', [auth, [
    body('friend', 'Please include a valid email').isEmail(),
]], async (req, res) => {
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        return res.status(400).json({msg: 'Invalid Friend'});
    }

    try {
        let user = await User.findById(req.user.id);
        if (user.email === req.body.friend) return res.status(400).json({msg: 'Invalid Friend'});
        const friend = await User.findOne({email: req.body.friend});
        if (!friend) return res.status(400).json({msg: 'Invalid Friend'});
        
        const updated_friends_list = user.friends_list;
        if(updated_friends_list.includes(req.body.friend)) return res.status(400).json({msg: 'Already Friends'});
        updated_friends_list.push(req.body.friend);

        user = await User.findByIdAndUpdate(req.user.id,
            { $set: {friends_list: updated_friends_list} },
            { new: true });

        let friends_obj_list = [];
        for (const email of user.friends_list){
            const friend_obj = await User.findOne({email});
            if(!friend_obj) continue;
            friends_obj_list.push({
                name: friend_obj.name,
                email: friend_obj.email
            });
        }
        return res.status(200).json({friends_list: friends_obj_list});
    } catch (error) {
        console.log(error.message);
        return res.status(500).json({msg: "Server error"});
    }
})

// @route GET api/friends
// @access Private
// @desc Return friends list
// @return friends_list
router.get('/', auth, async (req, res) => {
    try {
        const user = await User.findById(req.user.id);

        let friends_obj_list = [];
        for (const email of user.friends_list){
            const friend_obj = await User.findOne({email});
            if(!friend_obj) continue;
            friends_obj_list.push({
                name: friend_obj.name,
                email: friend_obj.email
            });
        }
        return res.status(200).json({friends_list: friends_obj_list});
    } catch (error) {
        console.log(error.message);
    }
});

module.exports = router;