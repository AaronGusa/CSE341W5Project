// Req's and setups
const router = require('express').Router();
const val = require('../../middle/validationMiddle')
const controller = require('../controller/businesses');
const { requiresAuth } = require('express-openid-connect');


// formulas

router.get('/', requiresAuth(), controller.getDb);

router.post('/', requiresAuth(), val.valContact, controller.postBus);

router.put('/:id', requiresAuth(), val.valContact, controller.putBus);

router.delete('/:id', requiresAuth(), controller.delBus);


// exports

module.exports = router;