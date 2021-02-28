// Mongoose options
const options = {
  //Use the new tool to parse MongoDB connection strings (dbConnectionURL)
  useNewUrlParser: true,
  // We force Mongoose to use the function findOneAndUpdate
  useFindAndModify: false,
  // Make Mongoose use createIndex() function if there are indexes in the Mongoose schema
  useCreateIndex: true,
  // Make Mongoose use a new topology engine (remove some connection options)
  useUnifiedTopology: true,
  // Manage indexes in production
  autoIndex: false,
  //Maximum number of sockets that MongoDB driver will keep open for the connection (more sockets --> faster queries)
  poolSize: 10,
  // Database operations fail if the driver is not connected
  bufferMaxEntries: 0
};

// mongodb environment variables
const {
    MONGO_HOSTNAME,
    MONGO_DB,
    MONGO_PORT
} = process.env;

const dbConnectionURL = {
    'LOCALURL': `mongodb://${MONGO_HOSTNAME}:${MONGO_PORT}/${MONGO_DB}`
};

export default {options, dbConnectionURL};
