const mongoose = require('mongoose');
const MONGO_DB_URL = process.env.MONGO_DB_URL;

const mongoConnect = () => {
    
    mongoose.connect(MONGO_DB_URL)

    mongoose.connection.on('connected', () => {
        console.log('Connected to MongoDB');
    })

    mongoose.connection.on('error', (err) => {
        console.log('Error while connecting to MongoDB:', err);
    })

    mongoose.connection.on('disconnected', () => {
        console.log('Disconnected from MongoDB');
    })

}

module.exports = mongoConnect;