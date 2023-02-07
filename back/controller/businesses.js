const e = require('express');
const { response } = require('express');
const mongodb = require('../db/dbConnect');
const ObjectId = require('mongodb').ObjectId;

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
        website: req.body.website,
        email: req.body.email
    };
    console.log(newBus);
    const result = await mongodb.getDb().db('stellavi').collection('business_profile').insertOne(newBus);

    if (result.acknowledged) {
        res.status(201).json(result);
    } else {
        res.status(400).json(response.error || 'We seem to have a problem with your submission.')
    };
}

const putBus = async (req, res, next) => {
    const id = new ObjectId(req.params.id);
    const upContact = {
        name: req.body.name,
        motto: req.body.motto,
        logo: req.body.logo,
        street: req.body.street,
        city: req.body.city,
        state: req.body.state,
        zipcode: req.body.zipcode,
        rating: req.body.rating,
        website: req.body.website,
        email: req.body.email
    };
    const result = await mongodb.getDb().db('stellavi').collection('business_profile').replaceOne({_id: id}, upContact);
    if (result.modifiedCount > 0) {
        res.status(204).send();
    } else {
        res.status(500).json*(result.error || 'We seem to have a problem with the update.')
    };
}

const delBus = async (req, res, next) => {
    const id = new ObjectId(req.params.id);
    const result = await mongodb.getDb().db('stellavi').collection('business_profile').remove({_id: id}, true);
    if (result.deletedCount > 0) {
        res.status(204).send();
    } else {
        res.status(500).json(result.error || 'Oh no! We were not able to delete the entry!');
    }

}

module.exports = {
    getDb,
    postBus,
    putBus,
    delBus
}