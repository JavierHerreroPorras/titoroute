import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

import config from './database.config.js';

mongoose.connect(config.dbConnectionURL.LOCALURL, config.options);
const db = mongoose.connection;

// If the connection is stablish
mongoose.connection.on('connected', function () {  
    console.log('Mongoose default connection open to ' + config.dbConnectionURL.LOCALURL);
  }); 
  
// If the connection throws an error
  mongoose.connection.on('error',function (err) {  
    console.log('Mongoose default connection error: ' + err);
  }); 
  
// If the connection is disconnected
  mongoose.connection.on('disconnected', function () {  
    console.log('Mongoose default connection disconnected'); 
  });
