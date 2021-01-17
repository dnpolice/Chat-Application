const mongoose = require('mongoose');
const user_schema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    friends_list: {
        type: [String],
        default: []
    },
    created_date: {
        type: Date,
        default: Date.now,
    }
});

module.exports = mongoose.model('User', user_schema);