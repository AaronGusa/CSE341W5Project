const mongodb = require('../db/dbConnect');

const getDb = async (req, res, next) => {
    const result = await mongodb.getDb().db('stellavi').collection('business_profile').find();
    result.toArray().then((businesses) => {
        res.setHeader('Content-Type', 'application/json');
        res.status(200).json(businesses);
    });
}

const postBus = async (req, res, next) => {
    const newBus = {
        name: req.body.name,
        motto: req.body.motto,
        logo: req.body.logo,
        street: req.body.street,
        city: req.body.city,
        state: req.body.state,
        zipcode: req.body.zipcode,
        rating: req.body.rating,
        website: req.body.website
    };
    const result = await mongodb.getDb().db('stellavi').collection('business_profile').insertOne(newBus);

    if (result.acknowledged) {
        res.status(201).json(result);
    };
}

module.exports = {
    getDb,
    postBus
}