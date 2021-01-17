const mongoose = require('mongoose');
const message_schema = new mongoose.Schema({
    from: {
        type: String,
        required: true
    },
    body: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('Message', message_schema);