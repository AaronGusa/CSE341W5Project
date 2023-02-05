const router = require('express').Router();
const swaggerUi = require('swagger-ui-express');
const swagDoc = require('../../swagger.json');

router.use('/api-docs', swaggerUi.serve);
router.get('/api-docs', swaggerUi.setup(swagDoc));

module.exports = router;