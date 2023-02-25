// Req's and setups
const router = require('express').Router();
const { requiresAuth } = require('express-openid-connect');

// formulas
router.get('/', requiresAuth(), 
(req, res) => {
  console.log(JSON.stringify(req.oidc.user))
  res.send(JSON.stringify(req.oidc.user));
});

// exports

module.exports = router;