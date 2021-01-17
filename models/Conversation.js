const mongoose = require('mongoose');
const convo_schema = new mongoose.Schema({
    members: {
        type: [String],
        required: true
    },
    messages: {
        type: [mongoose.Schema.Types.ObjectId],
        default: []
    }
});

module.exports = mongoose.model('Conversation', convo_schema);