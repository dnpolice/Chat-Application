const express = require('express');
const router = express.Router();
const {body, validationResult} = require('express-validator');
const User = require('../models/User');
const Conversation = require('../models/Conversation');
const Message = require('../models/Message');
const auth = require('../middleware/auth');

// @route POST api/messages
// @access Private
// @desc Send a Message
router.post('/', [auth, [
    body('friend', 'Please include a valid email').isEmail(),
    body('message_body', 'Please include a valid message body').not().isEmpty()
]], async (req, res) => {
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        return res.status(400).json({msg: 'Invalid Message'});
    }
    try {
        let user = await User.findById(req.user.id);
        const friend = await User.findOne({email: req.body.friend});
        if (!friend) return res.status(400).json({msg: 'Invalid Friend'});
        let convo = await Conversation.findOne({members: {$all: [req.body.friend, user.email]}});
        if (!convo) {
            convo = new Conversation({
                members: [req.body.friend, user.email]
            });
            await convo.save();
        }

        const message = new Message({
            from: user.email,
            body: req.body.message_body
        });
        await message.save();

        const updated_message_list = convo.messages;
        updated_message_list.push(message._id);

        convo = await Conversation.findByIdAndUpdate(convo._id,
            { $set: {messages: updated_message_list} },
            { new: true });
        
        const message_list_obj = [];
        for (const message_id of convo.messages) {
            const message_val = await Message.findById(message_id);
            message_list_obj.push({
                from: message_val.from,
                body: message_val.body
            });
        }
        return res.status(200).json({messages: message_list_obj});
    } catch (error) {
        console.log(error.message);
        return res.status(500).json({msg: "Server error"});
    }
})

// @route POST api/messages/all
// @access Private
// @desc Return friends list
// @return Get Messages with a Specific Friend
router.post('/all', [auth, [
    body('friend', 'Please include a valid email').isEmail()
]], async (req, res) => {
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        return res.status(400).json({msg: 'Invalid Message'});
    }

    try {
        const user = await User.findById(req.user.id);
        const friend = await User.findOne({email: req.body.friend});
        if (!friend) return res.status(400).json({msg: 'Invalid Friend'});

        const convo = await Conversation.findOne({members: {$all: [req.body.friend, user.email]}});
        if (!convo) {
            return res.status(200).json({messages: []});
        }

        const message_list_obj = [];
        for (const message_id of convo.messages) {
            const message_val = await Message.findById(message_id);
            message_list_obj.push({
                from: message_val.from,
                body: message_val.body
            });
        }
        return res.status(200).json({messages: message_list_obj});
    } catch (error) {
        console.log(error.message);
    }
});

module.exports = router;