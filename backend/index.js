const connectToMongo = require('./db')
const express = require('express')
const cors = require('cors')
const path = require('path')

connectToMongo()

const app = express()
const port = 5000

const _dirname = path.dirname("")
const buildpath = path.join(_dirname, "../client/build")
app.use(express.static(buildpath))

app.use(cors({ origin: '*' }))

app.use(express.json())

app.use('/api/message', require('./routes/message'))

app.listen(port, () => {
    console.log(`Listening to port ${port}`);
})
