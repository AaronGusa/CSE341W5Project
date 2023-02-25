const r = require('express').Router();
//const Auth = require('../../middle/auth');

// r.get('/', (req, res, next) => {
//     res.send("We are routered!");
// })

r.use('/', require('./swagger'))

r.use('/bus', require('./business'))

r.use('/user', require('./user'))

r.use('/', 
  // require('../../front/new.html')
  (docData = (req, res) => {
    
  let docData = {
    APIs: 'https://ag341w05.onrender.com/api-docs/',
    Contact_JSON: 'https://ag341w05.onrender.com/contacts',
  };
  res.send(docData);
})
  
)


module.exports = r;