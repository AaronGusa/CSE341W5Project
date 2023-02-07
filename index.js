const express = require('express');
const app = express();
const bodyParse = require('body-parser');
// const MongoClient = require('mongodb').MongoClient;
const mongodb = require('./back/db/dbConnect');
const routesHub = require('./back/routes/router');
const port = process.env.PORT || 3030;
const swaggerUi = require('swagger-ui-express');
const swagDoc = require('./swagger.json');
const cors = require('cors');

app
  .use('/routes', swaggerUi.serve, swaggerUi.setup(swagDoc))
  .use(cors())
  .use(bodyParse.json())
  .use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', "*");
    res.setHeader(
      'Access-Control-Allow-Headers',
      'Origin, X-Requested-With, Content-Type, Accept, Z-Key'
    );
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
    next();
  })
  .use('/', routesHub);

//LISTEN WILL WHAT IS OBSERVING FOR PORT INTERACTION

mongodb.initDb( (err, mongodb) => {
  if (err) {
    console.log(err);
  } else {  
    app.listen(port, () => {
      console.log(`Running on port ${port}`)
  })
}});

//NOTES
// SERVER.JS IS VERY LEAN