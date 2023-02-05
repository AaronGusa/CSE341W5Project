// Import dotenv to import from .env file
const dotenv = require('dotenv');
dotenv.config();

// Import MongoClient
const MongoClient = require('mongodb').MongoClient;


// Set db variable
let db;

// Function for initiating db connection
const initDb = (callback) => {
    if (db) {
        console.log('Sorry, we already have a connection in this journey');
        return callback(null, db);
    }
    console.log('Getting db...');
    MongoClient.connect(process.env.DB_URL)
        .then((client) => {
            db = client;
            //console.log(db);
            callback(null, db);
        })
        .catch((err) => {
            callback(err);
        })
};

// Function to return db
const getDb = () => {
    if (!db) {
        throw Error('Sorry, the database is not initialized. (Run initDb function first)');
    }
    return db;
};

// Export module and functions
module.exports = {
    initDb,
    getDb
};