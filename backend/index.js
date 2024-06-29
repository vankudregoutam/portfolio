const connectToMongo = require('./db')
const express = require('express')
const cors = require('cors')
connectToMongo()

const app = express()
const port = 5000

app.use(cors())

app.use(express.json())

app.use('/api/message', require('./routes/message'))

app.listen(port, () => {
    console.log(`Listening to port ${port}`);
})
