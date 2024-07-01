const connectToMongo = require('./db')
const express = require('express')
const cors = require('cors')
connectToMongo()

const app = express()

app.use(cors({
    origin: 'https://goutam-vankudre-portfolio.vercel.app',
    methods: ['GET', 'POST', 'OPTIONS'], // Specify the allowed methods
    allowedHeaders: ['Content-Type', 'Authorization'], // Specify the allowed headers
}))

app.use(express.json())

app.use('/api/message', require('./routes/message'))

module.exports = app
