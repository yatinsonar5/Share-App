//Create Database using Mongoose module in MongoDB.

require("dotenv").config();

const mongoose = require("mongoose");
const URI = process.env.MONGO_CONNECTION_URL;

function connectDB() {
    mongoose.connect(URI, { useNewUrlParser: true, useUnifiedTopology: true })
        mongoose.connection.once('open', (err) => {
            if(err){
              console.log('Database connection failure');
            }else{
              console.log('Database Connected Successfully');
            }
        }
    );
}

module.exports = connectDB;
