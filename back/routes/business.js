// Req's and setups
const router = require('express').Router();

const controller = require('../controller/businesses');

// formulas

router.get('/', controller.getDb);


// exports

module.exports = router;