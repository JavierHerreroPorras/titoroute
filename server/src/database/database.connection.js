import mongoose from 'mongoose';

import {options, dbConnectionURL} from './database.config.js';

mongoose.connect(dbConnectionURL.LOCALURL, options);
const db = mongoose.connection;

// If the connection is stablish
mongoose.connection.on('connected', function () {  
    console.log('Mongoose default connection open to ' + dbConnectionURL.LOCALURL);
  }); 
  
// If the connection throws an error
  mongoose.connection.on('error',function (err) {  
    console.log('Mongoose default connection error: ' + err);
  }); 
  
// If the connection is disconnected
  mongoose.connection.on('disconnected', function () {  
    console.log('Mongoose default connection disconnected'); 
  });
