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
const { auth, requiresAuth } = require('express-openid-connect');

const authConfig = {
  authRequired: false,
  auth0Logout: true,
  secret: process.env.SECRET,
  baseURL: process.env.BASE_URL,
  clientID: process.env.CLIENT_ID,
  issuerBaseURL: process.env.ISSUER_BASE_URL
};

app.use(auth(authConfig));

app.get('/', (req, res) => {
  res.send(req.oidc.isAuthenticated() ? 'Logged in' : 'Logged out');
})
app.get('/profile', requiresAuth(), 
  (req, res) => {
    console.log(JSON.stringify(req.oidc.user))
    res.send(JSON.stringify(req.oidc.user));
  })


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

