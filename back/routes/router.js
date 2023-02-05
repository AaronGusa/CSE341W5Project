const r = require('express').Router();

r.get('/', (req, res, next) => {
    res.send("We are routered!");
})

r.use('/bus', require('./business'))


module.exports = r;