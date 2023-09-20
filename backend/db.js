const mongoose = require('mongoose');

const mongoURI = "mongodb+srv://userdb123:userdb123@clusterdb.ubzqlp7.mongodb.net/"

const coonectToMongo = () =>{
    mongoose.connect(mongoURI)
    mongoose.connection.on('connected', function () {//connected
        console.log("Mongoose is connected");
    });
    
    mongoose.connection.on('disconnected', function () {//disconnected
        console.log("Mongoose is disconnected");
        process.exit(1);
    });
    mongoose.connection.on('error', function (err) {//any error
        console.log('Mongoose connection error: ', err);
        process.exit(1);
    });
}

module.exports = coonectToMongo;