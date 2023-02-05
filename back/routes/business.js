// Req's and setups
const router = require('express').Router();

const controller = require('../controller/businesses');

// formulas

router.get('/', controller.getDb);

router.post('/', controller.postBus);


// exports

module.exports = router;