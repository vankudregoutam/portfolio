require('dotenv').config({ path: '.env.local' });
const mongoose = require('mongoose')
const mongoURI = process.env.MONGOURL
// const mongoURI = 'mongodb://localhost:27017'
// console.log(mongoURI);

const connectToMongo = async () => {
    await mongoose.connect(mongoURI)
    const db = mongoose.connection;
    db.on('error', (error) => {
        console.error('Mongo connection error: ', error);
    });
    db.once('open', () => {
        console.log('Connected to Mongo');
    })
}

module.exports = connectToMongo;
