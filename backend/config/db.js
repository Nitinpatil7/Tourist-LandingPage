const mongoose = require('mongoose');

const connectdb = async()=>{
    try {
        const conn = await mongoose.connect(process.env.MONGO_URI, {});
        return conn;

    } catch (error) {
        console.error(`Error connecting to MongoDB: ${error.message}`);
        process.exit(1);
    }
}

module.exports = connectdb;