// Req's and setups
const router = require('express').Router();
const val = require('../../middle/validationMiddle')
const controller = require('../controller/businesses');

// formulas

router.get('/', controller.getDb);

router.post('/', val.valContact, controller.postBus);

router.put('/:id', val.valContact, controller.putBus);

router.delete('/:id', controller.delBus);


// exports

module.exports = router;