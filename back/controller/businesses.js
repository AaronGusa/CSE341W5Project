const mongodb = require('../db/dbConnect');
const ObjectId = require('mongoDb').ObjectId;

const getDb = async (req, res, next) => {
    const result = await mongodb.getDb().db('stellavi').collection('business_profile').find();
    result.toArray().then((businesses) => {
        res.setHeader('Content-Type', 'application/json');
        res.status(200).json(businesses);
    });
}

const postBus = async (req, res, next) => {
    const newBus = {
        restaurant
    }
}

module.exports = {
    getDb
}