const swagGen = require('swagger-autogen');

const swagDoc = {
    info: {
        title: "Aaron Gusa's W05-08 Personal Assignment",
        description: "W05-08 CSE341 Personal Assignment",
    },
    host: 'ag341W05.onrender.com',
    schemes: ['https'],
    // host: 'localhost:3030',
    // schemes: ['http'],
    //# Step 1 - define the security scheme
    securityDefinitions: {
        oAuthSample: {
          type: 'oauth2',
          authorizationUrl: 'https://dev-yiwo0izzbi3gaip8.us.auth0.com',
          flow: 'implicit',
          scopes: {}
        }
      }
};


const outputFile = './swagger.json';
const routerFile = ['./back/routes/router.js']

swagGen(outputFile, routerFile, swagDoc);