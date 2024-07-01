const connectToMongo = require('./db')
const express = require('express')
const cors = require('cors')
connectToMongo()

const app = express()
const port = 5000

app.use(cors({
    origin: 'https://goutam-vankudre-portfolio.vercel.app', // Specify the allowed origin
    methods: ['GET', 'POST'], // Specify the allowed methods
    allowedHeaders: ['Content-Type', 'Authorization'], // Specify the allowed headers
}))

app.use(express.json())

app.use('/api/message', require('./routes/message'))

app.listen(port, () => {
    console.log(`Listening to port ${port}`);
})
