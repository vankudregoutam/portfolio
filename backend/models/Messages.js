const mongoose = require('mongoose')

const addMessageSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Name is required']
    },
    email: {
        type: String,
        required: [true, 'Email is required']
    },
    subject: {
        type: String,
        required: [true, 'Subject is required']
    },
    message: {
        type: String,
        required: [true, 'Message is required']
    },
    date: {
        type: Date,
        default: Date.now
    }
},
    {
        collation: 'MessageInfo'
    }
);

const Message = mongoose.model('MessageInfo', addMessageSchema)
module.exports = Message
