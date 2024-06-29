const express = require('express')
const router= express.Router()
const Message = require('../models/Messages')

// Route 1: Adding the Message using: POST '/api/message/addMessage'
router.post('/addMessage', async (req, res) => {
    console.log(req.body);
    try {
        const { name, email, subject, message } = req.body
        console.log(name, email, subject, message);
        const messages = new Message({
            name, email, subject, message
        })
        const savedMessage = await messages.save()
        res.json(savedMessage)
    } catch (error) {
        console.error(error.message);
        res.status(500).send('Internal Server Error')
    }
})

module.exports = router
