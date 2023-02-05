const swagGen = require('swagger-autogen');

const swagDoc = {
    info: {
        title: "Aaron Gusa's W05-08 Personal Assignment",
        description: "W05-08 CSE341 Personal Assignment",
    },
    host: 'localhost:3030',
    schemes: ['http'],
};

const outputFile = './swagger.json';
const routerFile = ['./back/routes/router.js']

swagGen(outputFile, routerFile, swagDoc);