const mongoose = require('mongoose')
const mongoURI = 'mongodb+srv://vankudregoutam15:TdyRJgPiVCeUz271@cluster0.3yp5gis.mongodb.net/Portfolio?retryWrites=true&w=majority&appName=Cluster0'
// const mongoURI = 'mongodb://localhost:27017'

const connectToMongo =  () => {
    mongoose.connect(mongoURI)
    const db = mongoose.connection;
    db.on('error', (error) => {
        console.error('Mongo connection error: ', error);
    });
    db.once('open', () => {
        console.log('Connected to Mongo');
    })
}

module.exports = connectToMongo;
